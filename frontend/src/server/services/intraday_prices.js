const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple() {
    const rows = await db.query(
        `SELECT DateTime, Coin, Open, Close, High, Low, Volume, VWAP
    FROM intraday_prices`
    );

    const data = helper.emptyOrRows(rows);

    return {
        data
    }
}

module.exports = {
    getMultiple
}