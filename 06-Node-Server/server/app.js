require('dotenv').config();

var express = require('express');
var app = express();
var test = require('./controllers/testcontroller');
var authTest = require('./controllers/authtestcontroller');
var user = require('./controllers/usercontroller');
var sequelize = require('./db');
var bodyParser = require('body-parser');

sequelize.sync();

app.use(bodyParser.json());
// app.use(bodyParser.json()) tells the application that we want json to be used as we process this request.
app.use(require('./middleware/headers'));

/******************
 * EXPOSED ROUTES
*******************/
app.use('/test', test);
app.use('/api/user', user);

/******************
 * PROTECTED ROUTES
*******************/
app.use(require('./middleware/validate-session')); //2
app.use('/authtest', authTest);

app.listen(3000, function(){
    console.log('Yo!');
});
