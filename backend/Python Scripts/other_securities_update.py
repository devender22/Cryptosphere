import mysql.connector
from mysql.connector import errorcode
import requests
from datetime import datetime
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


# Update table eod_data
def update(start_date):

    sd_gold = str(datetime.strptime(start_date, '%Y-%m-%d')-timedelta(days=1))
    # Twelvedata API endpoint for gold
    url1 = ('https://api.twelvedata.com/time_series?symbol=XAU/USD&'
            'interval=1day&timezone=UTC&start_date=%s&order=ASC&apikey=236594'
            '7efa8348889a29ae366d2c4bd2') % (sd_gold)
    # Twelvedata API endpoint for SPX Index
    url2 = ('https://api.twelvedata.com/time_series?symbol=SPX&'
            'interval=1day&timezone=UTC&start_date=%s&order=ASC&'
            'apikey=2365947efa8348889a29ae366d2c4bd2') % (str(start_date))

    # Fetch data from above URLs
    gold_data = requests.get(url1).json()
    spx_index_data = requests.get(url2).json()
    i = 0
    j = 0
    while i < len(gold_data['values']) and j < len(spx_index_data['values']):
        date = gold_data['values'][i]['datetime']
        # If data is not available for SPI_Index, insert previous price
        if date != spx_index_data['values'][j]['datetime']:
            sql = ("INSERT INTO other_securities (Date, Gold, SPX_Index)"
                   "VALUES (%s,%s,%s);")
            cursorObject.execute("SELECT SPX_Index FROM other_securities "
                                 "ORDER BY Date DESC LIMIT 1")
            res = cursorObject.fetchall()
            val = (date,
                   gold_data['values'][i]['close'],
                   res[0][0])
            i += 1
        else:
            sql = ("INSERT INTO other_securities (Date, Gold, SPX_Index)"
                   "VALUES (%s,%s,%s);")
            val = (date,
                   gold_data['values'][i]['close'],
                   spx_index_data['values'][j]['close'])
            i += 1
            j += 1
        cursorObject.execute(sql, val)
        dataBase.commit()


# Get last date from table other_securities
cursorObject.execute("SELECT Date FROM other_securities "
                     "ORDER BY Date DESC LIMIT 1")
res = cursorObject.fetchall()
# If other_securities is empty set start_date to 2016-05-18
# Else set start_date to last date in table + 1 day
if (len(res) == 0):
    start_date = '2016-05-18'
else:
    start_date = str(res[0][0] + timedelta(days=1))

update(start_date)

dataBase.close()
