const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('comment', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            field: 'content',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Give your opinion on the trip'
                }
            }
        },
        date: {
            field: 'date',
            type: DataTypes.DATETIME
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
        idReservation: {
            field: 'idReservation',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Reservation,
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });
}