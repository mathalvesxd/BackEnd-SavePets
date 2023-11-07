const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController.js');

router.post("/confirm", AuthenticationController.confirmAccount)
router.post("/login", AuthenticationController.login)



module.exports = router 



 