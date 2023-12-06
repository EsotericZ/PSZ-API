const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME || 'ben',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || 'password',
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequelize;