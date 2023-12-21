import { Sequelize } from 'sequelize';
import dbConfig from './config.json';

const sequelize = new Sequelize(
    dbConfig.development.database,
    dbConfig.development.username,
    dbConfig.development.password,
    {
        host: dbConfig.development.host,
        dialect: 'mysql'
    }
);

export { sequelize };