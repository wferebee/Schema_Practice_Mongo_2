var express = require('express');
var router = express.Router();
var employeeController = require('../controller/index.js')

router.get('/employees', employeeController.list);

router.get('/employees/:firstname', employeeController.show);
    
router.post('/', employeeController.create);

module.exports = router;