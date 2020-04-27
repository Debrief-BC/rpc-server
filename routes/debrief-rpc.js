const express = require('express');
const router = express.Router();
var { getDebriefProvider } = require('../services/debrief.service');

// Get Homepage
router.post('/rpc', async function (req, res, next) {

  const debriefProvider = await getDebriefProvider();
  debriefProvider.sendAsync(req.body, (err, result) => {
    res.json(result)
  });

});

module.exports = router;
