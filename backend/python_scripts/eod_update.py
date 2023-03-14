from cryptosphere import db_util as db
import requests
from datetime import timedelta


# Update table eod_data
def update(start_date):

    # Coinmetrics API endpoint for Open, Close, High, Low, Volume, VWAP
    url_1 = ('https://community-api.coinmetrics.io/v4/timeseries/market-candle'
             's?start_time=%s&paging_from=start&markets=coinbase-eth-usd-spot&'
             'frequency=1d&page_size=10000') % (start_date)
    # Coinmetrics API endpoint for MktCap, NVTratio
    url_2 = ('https://community-api.coinmetrics.io/v4/timeseries/asset-metrics'
             '?assets=ETH&metrics=CapMrktCurUSD,NVTAdj&frequency=1d&'
             'start_time=%s&paging_from=start&page_size=10000') % (start_date)

    # Fetch data from above URLs
    eod_data_1 = requests.get(url_1).json()
    eod_data_2 = requests.get(url_2).json()

    # Get the last closing price from table eod_data
    db.cursor_object.execute(
        "SELECT Close FROM eod_data ORDER BY Date DESC LIMIT 1"
    )
    res = db.cursor_object.fetchall()

    # If table is empty set last_price to the first closing price (Coinmetrics)
    # Else set last_price to the last closing price in the table
    if (len(res) == 0):
        last_price = eod_data_1['data'][0]['price_close']
    else:
        last_price = res[0][0]

    for idx in range(len(eod_data_1['data'])):
        # Calculate the 24 hour percent change in price and update last_price
        percent_change = str(
            (float(eod_data_1['data'][idx]['price_close']) -
             float(last_price)) * 100 / float(last_price)) + ' %'
        last_price = eod_data_1['data'][idx]['price_close']
        # Insert row into table eod_data
        sql = ("INSERT INTO eod_data VALUES"
               "(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s);")
        val = (eod_data_1['data'][idx]['time'][0: 10],
               "ETH", eod_data_1['data'][idx]['price_open'],
               eod_data_1['data'][idx]['price_close'],
               eod_data_1['data'][idx]['price_high'],
               eod_data_1['data'][idx]['price_low'],
               eod_data_1['data'][idx]['volume'],
               eod_data_1['data'][idx]['vwap'],
               eod_data_2['data'][idx]['CapMrktCurUSD'],
               "-1", eod_data_2['data'][idx]['NVTAdj'],
               percent_change)
        db.cursor_object.execute(sql, val)
        db.data_base.commit()


def main():
    db.get_db_connection()
    # Get last date from table eod_data
    db.cursor_object.execute("SELECT Date FROM eod_data"
                             " ORDER BY Date DESC LIMIT 1")
    res = db.cursor_object.fetchall()
    # If eod_data is empty set start_date to 2016-05-18
    # Else set start_date to last date in table + 1 day
    if (len(res) == 0):
        start_date = '2016-05-18'
    else:
        start_date = str(res[0][0] + timedelta(days=1))

    update(start_date)

    db.data_base.close()


if __name__ == "__main__":
    main()

