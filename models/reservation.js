const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('reservation', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        startingDate: {
            field: 'startingDate',
            type: DataTypes.DATETIME
        },
        duration: {
            field: 'duration',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the duration'
                }
            }
        },
        ppn: {
            field: 'ppn',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the price per night'
                }
            }
        },
        note: {
            field: 'note',
            type: DataTypes.INTEGER
        },
        idClient: {
            field: 'idClient',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        },
        idBoat: {
            field: 'idBoat',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Boat,
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });
}