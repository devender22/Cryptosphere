const express = require('express');
const router = express.Router();
const intraday_prices = require('../services/intraday_prices');

/* GET intraday prices */
router.get('/', async function (req, res, next) {
  try {
    res.json(await intraday_prices.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while fetching intraday prices `, err.message);
    next(err);
  }
});

module.exports = router;