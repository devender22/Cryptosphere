import mysql.connector
from mysql.connector import errorcode
import requests
from datetime import datetime
from datetime import timezone
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
        print("Something is wrong with the username or password")
    elif err.errno == errorcode.ER_BAD_DB_ERROR:
        print("Database does not exist")
    else:
        print(err)
else:
    cursorObject = dataBase.cursor()


# Update table intraday_data
def update(start_time):

    # Coinmetrics API endpoint for Open, Close, High, Low, Volume, VWAP
    url = ('https://community-api.coinmetrics.io/v4/timeseries/market-candles?'
           'start_time=%s&paging_from=start&markets=coinbase-eth-usd-spot&'
           'frequency=1m&page_size=10000') % (start_time)
    # Fetch data from above URL
    intraday_data = requests.get(url).json()

    for i in range(len(intraday_data['data'])):
        # Insert row into table intraday_data
        sql = ("INSERT INTO intraday_prices "
               "(DateTime,Coin,Open,Close,High,Low,Volume,VWAP) "
               "VALUES(%s,%s,%s,%s,%s,%s,%s,%s) "
               "ON DUPLICATE KEY UPDATE Coin=Coin, DateTime=DateTime")
        val = (intraday_data['data'][i]['time'][0: 10] + ' ' +
               intraday_data['data'][i]['time'][11: 19],
               "ETH", intraday_data['data'][-1]['price_open'],
               intraday_data['data'][-1]['price_close'],
               intraday_data['data'][-1]['price_high'],
               intraday_data['data'][-1]['price_low'],
               intraday_data['data'][-1]['volume'],
               intraday_data['data'][-1]['vwap'])
        cursorObject.execute(sql, val)
        dataBase.commit()


# Get last date from table eod_data
cursorObject.execute(
    "SELECT DateTime FROM intraday_prices ORDER BY DateTime DESC LIMIT 1")
res = cursorObject.fetchall()
# If intraday_data is empty set start_time to current date (00:00:00)
# Else set start_time to last datetime in table + 1 minute
if (len(res) == 0):
    start_time = str(datetime.now(timezone.utc).date())
else:
    start_time = res[0][0].strftime("%Y-%m-%d")
    start_time += 'T'
    start_time += (
        datetime.strptime(
            res[0][0].strftime("%H:%M:%S"),
            "%H:%M:%S") + timedelta(
            minutes=1)).strftime("%H:%M:%S")
    start_time += 'Z'

update(start_time)

dataBase.close()
