var express = require('express');
var router = express.Router();
const googleTrends = require('google-trends-api');
const cors = require('cors');

router.use(cors());

/* Submit form */
router.post('/new', (req, res, next) => {
  var date = new Date(Date.now());
  date.setMonth(date.getMonth() - 12);
  googleTrends
    .interestOverTime({
      keyword: req.body.keyword,
      startTime: date,
    })
    .then(function (results) {
      res.json(results);
    })
    .catch(function (err) {
      console.error('Oh no there was an error', err);
    });
});

module.exports = router;
