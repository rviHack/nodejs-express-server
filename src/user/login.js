const router = require('express').Router();
const statusCode = require('../config').statusCodes
const data = require("../config").data;

router.post( "/", (req, res) => {
    const userId = req.body.id;
    if(!data[userId]) {
        res.status(statusCode.BadRequest).send(`Invalid user ID`);
    } else {
        res.send('Logged in successfully!')
    }
});

module.exports = router;