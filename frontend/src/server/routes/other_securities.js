const express = require('express');
const router = express.Router();
const other_securities = require('../services/other_securities');

/* GET other securities */
router.get('/', async function (req, res, next) {
  try {
    res.json(await other_securities.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while fetching other securities `, err.message);
    next(err);
  }
});

module.exports = router;