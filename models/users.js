const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('users', {
        id: {
            field: 'usersId',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'name cannot be empty'
                }
            }
        }
    }, {
        timestamps: false
    });
}