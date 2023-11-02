const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('cars', {
        id: {
            field: 'CarsId',
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