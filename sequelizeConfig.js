const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', 'pass', {
    host: 'localhost',
    dialect: 'postgres',
});


module.exports = sequelize;