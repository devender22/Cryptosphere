const express = require('express');
const router = express.Router();
const eod_data = require('../services/eod_data');

/* GET eod data */
router.get('/', async function (req, res, next) {
  try {
    res.json(await eod_data.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while fetching end of the day data `, err.message);
    next(err);
  }
});

module.exports = router;