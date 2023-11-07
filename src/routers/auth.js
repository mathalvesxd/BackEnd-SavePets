const express = require('express');
const router = express.Router();
const AuthenticationController = require('../controllers/AuthenticationController.js');
router.get('/test',AuthenticationController.test)





module.exports = router 



 