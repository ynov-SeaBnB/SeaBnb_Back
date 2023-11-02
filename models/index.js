const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    Users: require('./users')(instance),
    Cars: require('./cars')(instance),
    Modeles: require('./modeles')(instance)
};