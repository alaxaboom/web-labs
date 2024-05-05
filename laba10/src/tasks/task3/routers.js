const express = require('express');
const router = express.Router();
// Define routes and their corresponding controller methods
router.post('/registration', controller.registration);
router.post('/login', controller.login);
router.get('/users', controller.getusers);
module.exports = router;