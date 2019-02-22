var express = require('express'); 
var router = express.Router();  
var sequelize = require('./db');
var TestModel = sequelize.import('../models/test');

router.get('/one', function (req, res) {
    res.send('Hey!!! This is a test route!');
});

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; 
  
TestModel 
    .create({ 
        
    testdata: testData 
    }).then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});


module.exports = router;