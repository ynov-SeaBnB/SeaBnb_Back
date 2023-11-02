const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('Modeles', {
        id: {
            field: 'modelesId',
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
        },
        marques: {
            field: 'marques',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'marques cannot be empty'
                }
            }
        },
    }, {
        timestamps: false
    });
}