const router = require("express").Router();
const data = require("../config").data;
const statusCode = require('../config').statusCodes

router.post("/", (req, res) => {
  const requestBody = req.body;
  const userId = req.body?.id;
  if (!userId) {
    res.status(statusCode.BadRequest).send(`User ID is required!`);
  } else {
    data[userId] = requestBody;
    res.send(JSON.stringify(data));
  }
});

module.exports = router;
