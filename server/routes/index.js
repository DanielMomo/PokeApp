const express = require('express');
const router = express.Router();
const database = require('../models')

const controllers = require("../controllers");

router.get('/all', (req, res) => {
    database.User.findAll().then(users => res.send(users))
})

router.post("/user", controllers.user.create);

module.exports = router;