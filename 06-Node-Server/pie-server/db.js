const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.NAME, 'postgres', process.env.PASS, {
    host: 'localhost',
    dialect: 'postgres'
})  // Prototype inheritance // - Do some research //

sequelize.authenticate()
.then(() => console.log('postgres db is connected'))
.catch(err => console.log(err));

module.exports = sequelize;