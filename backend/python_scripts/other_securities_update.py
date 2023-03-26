from crypto import db_util as db
import requests
from datetime import datetime
from datetime import timedelta


# Update table eod_data
def update(start_date):
    sd_gold = str(datetime.strptime(start_date, '%Y-%m-%d')-timedelta(days=1))
    # Twelvedata API endpoint for gold
    url_1 = ('https://api.twelvedata.com/time_series?symbol=XAU/USD&'
             'interval=1day&timezone=UTC&start_date=%s&order=ASC&apikey=236594'
             '7efa8348889a29ae366d2c4bd2') % (sd_gold)
    # Twelvedata API endpoint for SPX Index
    url_2 = ('https://api.twelvedata.com/time_series?symbol=SPX&'
             'interval=1day&timezone=UTC&start_date=%s&order=ASC&'
             'apikey=2365947efa8348889a29ae366d2c4bd2') % (start_date)
    # Coinmetrics API endpoint for BTC
    url_3 = ('https://community-api.coinmetrics.io/v4/timeseries/market-candle'
             's?start_time=%s&paging_from=start&markets=coinbase-btc-usd-spot&'
             'frequency=1d&page_size=10000') % (start_date)
    # Fetch data from above URLs
    gold_data = requests.get(url_1).json()
    spx_index_data = requests.get(url_2).json()
    btc_data = requests.get(url_3).json()
    idx_1 = 0
    idx_2 = 0
    idx_3 = 0
    while (idx_3 < len(btc_data['data'])):
        # Insert available data into other_securities
        date = btc_data['data'][idx_3]['time'][0: 10]
        if (not ('values' in gold_data.keys()) or
                date != gold_data['values'][idx_1]['datetime']):
            sql = ("INSERT INTO other_securities (Date, BTC)"
                   "VALUES (%s,%s);")
            val = (date, btc_data['data'][idx_3]['price_close'])
            idx_3 += 1
        elif (not ('values' in spx_index_data.keys()) or
                date != spx_index_data['values'][idx_2]['datetime']):
            sql = ("INSERT INTO other_securities (Date, Gold, BTC)"
                   "VALUES (%s,%s,%s);")
            val = (date,
                   gold_data['values'][idx_1]['close'],
                   btc_data['data'][idx_3]['price_close'])
            idx_1 += 1
            idx_3 += 1
        else:
            sql = ("INSERT INTO other_securities (Date, Gold, SPX_Index, BTC)"
                   "VALUES (%s,%s,%s,%s);")
            val = (date,
                   gold_data['values'][idx_1]['close'],
                   spx_index_data['values'][idx_2]['close'],
                   btc_data['data'][idx_3]['price_close'])
            idx_1 += 1
            idx_2 += 1
            idx_3 += 1
        db.cursor_object.execute(sql, val)
        db.data_base.commit()


def main():
    db.get_db_connection()
    # Get last date from table other_securities
    db.cursor_object.execute("SELECT Date FROM other_securities "
                             "ORDER BY Date DESC LIMIT 1")
    res = db.cursor_object.fetchall()
    # If other_securities is empty set start_date to 2016-05-18
    # Else set start_date to last date in table + 1 day
    if (len(res) == 0):
        start_date = '2016-05-18'
    else:
        start_date = str(res[0][0] + timedelta(days=1))

    update(start_date)

    db.data_base.close()


if __name__ == "__main__":
    main()

