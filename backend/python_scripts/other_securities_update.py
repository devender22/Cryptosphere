from cryptosphere import db_util as db
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
             'apikey=2365947efa8348889a29ae366d2c4bd2') % (str(start_date))

    # Fetch data from above URLs
    gold_data = requests.get(url_1).json()
    spx_index_data = requests.get(url_2).json()
    idx1 = 0
    idx2 = 0
    while (idx1 < len(gold_data['values']) and
           idx2 < len(spx_index_data['values'])):
        date = gold_data['values'][idx1]['datetime']
        # If data is not available for SPX_Index, insert previous price
        if date != spx_index_data['values'][idx2]['datetime']:
            sql = ("INSERT INTO other_securities (Date, Gold, SPX_Index)"
                   "VALUES (%s,%s,%s);")
            db.cursor_object.execute("SELECT SPX_Index FROM other_securities"
                                     " ORDER BY Date DESC LIMIT 1")
            res = db.cursor_object.fetchall()
            val = (date,
                   gold_data['values'][idx1]['close'],
                   res[0][0])
            idx1 += 1
        else:
            sql = ("INSERT INTO other_securities (Date, Gold, SPX_Index)"
                   "VALUES (%s,%s,%s);")
            val = (date,
                   gold_data['values'][idx1]['close'],
                   spx_index_data['values'][idx2]['close'])
            idx1 += 1
            idx2 += 1
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

