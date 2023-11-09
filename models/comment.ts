const { DataTypes } = require('sequelize');
const sequelize = require('../server');
const User = require('../user');
const Reservation = require('../reservation');

const Comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            get() {
              return this.getDataValue('id');
            }
        },
        content: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('content');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Give your opinion on the trip'
                }
            }
        },
        date: {
            type: DataTypes.DATETIME,
            get() {
              return this.getDataValue('date');
            }
        },
        idClient: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get() {
              return this.getDataValue('idClient');
            },
            references: {
                model: User,
                key: 'id'
            }
        },
        idReservation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get() {
              return this.getDataValue('idReservation');
            },
            references: {
                model: Reservation,
                key: 'id'
            }
        }
    }, {
        timestamps: false
  }
);

(async () => {
  await sequelize.sync({ force: true });
  
})();