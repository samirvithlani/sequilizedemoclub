const dbConfig = require('../util/dbconfig')

const Sequelize = require('sequelize')
const { dialect } = require('../util/dbconfig');
const { Model } = require('sequelize');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool:{

        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idel

    }
});

const db ={}
db.Sequelize = Sequelize;
db.sequelize =sequelize;

db.employee =require('./employeeModel')(sequelize,Sequelize);
module.exports = db

