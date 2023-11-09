const sequelize = require('../server');

module.exports = {
    sequelize,
    User: require('./user')(sequelize),
    Boat: require('./boat')(sequelize),
    Reservation: require('./reservation')(sequelize),
    Comment: require('./comment')(sequelize)
};