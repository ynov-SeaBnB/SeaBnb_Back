const { Sequelize } = require('sequelize');
//const sequelize = require('../server');
const dbConfig = require('./config.json')['development'];

export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: any) => {
    console.error('Unable to connect to the database: ', error);
});

module.exports = {
    sequelize,
    User: require('./user')(sequelize),
    Boat: require('./boat')(sequelize),
    Reservation: require('./reservation')(sequelize),
    Comment: require('./comment')(sequelize)
};