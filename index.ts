import ws from 'ws';
import { Sequelize } from 'sequelize';
import dbConfig from './config.json';

const server = new ws.Server({ port: 3000});

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

server.on('connection', socket => {
    socket.on('message', message => {
        console.log(message);
        socket.send(`${message}`);
    })
})

module.exports = {
    sequelize,
    User: require('./user')(sequelize),
    Boat: require('./boat')(sequelize),
    Reservation: require('./reservation')(sequelize),
    Comment: require('./comment')(sequelize)
};