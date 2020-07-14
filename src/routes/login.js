const router = require('express').Router({ mergeParams: true });
const loginController = require('../controllers/login.controller.js');


router.route('/').post(loginController.login);


module.exports = router;