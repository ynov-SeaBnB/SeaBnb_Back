import { Sequelize } from 'sequelize';
import dbConfig from './config.json';

export const sequelize = new Sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: 'mysql'
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