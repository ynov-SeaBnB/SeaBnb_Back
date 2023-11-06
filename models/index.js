const { Sequelize } = require('sequelize');
const dbConfig = require('../config.json');

const instance = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
);

module.exports = {
    instance,
    User: require('./user')(instance),
    Boat: require('./boat')(instance),
    Reservation: require('./reservation')(instance),
    Comment: require('./comment')(instance)
};