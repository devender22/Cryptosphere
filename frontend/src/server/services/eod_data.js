const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple() {
  const rows = await db.query(
    `SELECT Date, Coin, Open, Close, High, Low, Volume 
    FROM eod_data`
  );

  const data = helper.emptyOrRows(rows);

  return {
    data
  }
}

module.exports = {
  getMultiple
}