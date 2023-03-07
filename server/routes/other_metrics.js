const express = require('express');
const router = express.Router();
const other_metrics = require('../services/other_metrics');

/* GET other metrics */
router.get('/', async function (req, res, next) {
  try {
    res.json(await other_metrics.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while fetching other metrics `, err.message);
    next(err);
  }
});

module.exports = router;