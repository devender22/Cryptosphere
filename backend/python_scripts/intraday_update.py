from cryptosphere import db_util as db
import requests
from datetime import timedelta
from datetime import datetime
from datetime import timezone


# Update table intraday_data
def update(start_time):

    # Coinmetrics API endpoint for Open, Close, High, Low, Volume, VWAP
    url = ('https://community-api.coinmetrics.io/v4/timeseries/market-candles?'
           'start_time=%s&paging_from=start&markets=coinbase-eth-usd-spot&'
           'frequency=1m&page_size=10000') % (start_time)
    # Fetch data from above URL
    intraday_data = requests.get(url).json()

    for idx in range(len(intraday_data['data'])):
        # Insert row into table intraday_data
        sql = ("INSERT INTO intraday_prices "
               "(DateTime,Coin,Open,Close,High,Low,Volume,VWAP) "
               "VALUES(%s,%s,%s,%s,%s,%s,%s,%s) "
               "ON DUPLICATE KEY UPDATE Coin=Coin, DateTime=DateTime")
        val = (intraday_data['data'][idx]['time'][0: 10] + ' ' +
               intraday_data['data'][idx]['time'][11: 19],
               "ETH", intraday_data['data'][idx]['price_open'],
               intraday_data['data'][idx]['price_close'],
               intraday_data['data'][idx]['price_high'],
               intraday_data['data'][idx]['price_low'],
               intraday_data['data'][idx]['volume'],
               intraday_data['data'][idx]['vwap'])
        db.cursor_object.execute(sql, val)
        db.data_base.commit()


def main():

    db.get_db_connection()
    # Get last date from table eod_data
    db.cursor_object.execute(
        "SELECT DateTime FROM intraday_prices ORDER BY DateTime DESC LIMIT 1")
    res = db.cursor_object.fetchall()
    # If intraday_data is empty set start_time to current date (00:00:00)
    # Else set start_time to last datetime in table + 1 minute
    if (len(res) == 0):
        start_time = str(datetime.now(timezone.utc).date())
    else:
        start_time = res[0][0].strftime("%Y-%m-%d")
        # If last date not equal to current date clear table
        if start_time != str(datetime.now(timezone.utc).date()):
            start_time = str(datetime.now(timezone.utc).date())
            db.cursor_object.execute("DELETE FROM intraday_prices")
        else:
            start_time += 'T'
            start_time += (
                datetime.strptime(
                    res[0][0].strftime("%H:%M:%S"),
                    "%H:%M:%S") + timedelta(
                    minutes=1)).strftime("%H:%M:%S")
            start_time += 'Z'

    update(start_time)

    db.data_base.close()


if __name__ == "__main__":
    main()

