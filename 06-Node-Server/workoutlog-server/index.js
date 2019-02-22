require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./db');
// const bodyParser = require('body-parser');

sequelize.sync();


app.listen(process.env.PORT, () => console.log('App is listening on 3000'));
