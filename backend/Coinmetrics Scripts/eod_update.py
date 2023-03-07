import mysql.connector
from mysql.connector import errorcode
import requests
from datetime import timedelta

config = {
    'host': 'cryptosphere.mysql.database.azure.com',
    'user': 'abhirami',
    'password': 'Desisproject@1',
    'database': 'cryptodb',
    'client_flags': [mysql.connector.ClientFlag.SSL],
    'port': '3306',
    # Path to SSL certificate
    'ssl_ca': '/home/anushka/Downloads/DigiCertGlobalRootCA.crt.pem'
}

# Connect to MySQL database
try:
    dataBase = mysql.connector.connect(**config)
    print("Connection established")
except mysql.connector.Error as err:
    if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
        print("Something is wrong with the user name or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    cursorObject = dataBase.cursor()


# Update table eod_data
def update(start_date):

    # Coinmetrics API endpoint for Open, Close, High, Low, Volume, VWAP
    url1 = ('https://community-api.coinmetrics.io/v4/timeseries/market-candles'
            '?start_time=%s&paging_from=start&markets=coinbase-eth-usd-spot&'
            'frequency=1d&page_size=10000') % (start_date)
    # Coinmetrics API endpoint for MktCap, NVTratio
    url2 = ('https://community-api.coinmetrics.io/v4/timeseries/asset-metrics?'
            'assets=ETH&metrics=CapMrktCurUSD,NVTAdj&frequency=1d&'
            'start_time=%s&paging_from=start&page_size=10000') % (start_date)

    # Fetch data from above URLs
    eodData1 = requests.get(url1).json()
    eodData2 = requests.get(url2).json()

    # Get the last closing price from table eod_data
    cursorObject.execute(
        "SELECT Close FROM eod_data ORDER BY Date DESC LIMIT 1"
    )
    res = cursorObject.fetchall()

    # If table is empty set last_price to the first closing price (Coinmetrics)
    # Else set last_price to the last closing price in the table
    if (len(res) == 0):
        last_price = eodData1['data'][0]['price_close']
    else:
        last_price = res[0][0]

    for i in range(len(eodData1['data'])):
        # Calculate the 24 hour percent change in price and update last_price
        percent_change = str(
            (float(eodData1['data'][i]['price_close']) - float(last_price)) *
            100 / float(last_price)) + ' %'
        last_price = eodData1['data'][i]['price_close']
        # Insert row into table eod_data
        sql = ("INSERT INTO eod_data VALUES"
               "(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);")
        val = (eodData1['data'][i]['time'][0: 10],
               "ETH", eodData1['data'][i]['price_open'],
               eodData1['data'][i]['price_close'],
               eodData1['data'][i]['price_high'],
               eodData1['data'][i]['price_low'],
               eodData1['data'][i]['volume'],
               eodData1['data'][i]['vwap'],
               eodData2['data'][i]['CapMrktCurUSD'],
               "-1", eodData2['data'][i]['NVTAdj'],
               percent_change)
        cursorObject.execute(sql, val)
        dataBase.commit()


# Get last date from table eod_data
cursorObject.execute("SELECT Date FROM eod_data ORDER BY Date DESC LIMIT 1")
res = cursorObject.fetchall()
# If eod_data is empty set start_date to 2016-05-18
# Else set start_date to last date in table + 1 day
if (len(res) == 0):
    start_date = '2016-05-18'
else:
    start_date = str(res[0][0] + timedelta(days=1))

update(start_date)

dataBase.close()
