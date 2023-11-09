const { DataTypes } = require('sequelize');
const sequelize = require('../server');
const User = require('../user');
const Boat = require('../boat');

const Reservation = sequelize.define("reservation", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            get() {
              return this.getDataValue('id');
            }
        },
        startingDate: {
            type: DataTypes.DATETIME,
            get() {
              return this.getDataValue('startingDate');
            }
        },
        duration: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('duration');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the duration'
                }
            }
        },
        ppn: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('ppn');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the price per night'
                }
            }
        },
        note: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('note');
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
        idBoat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get() {
              return this.getDataValue('idBoat');
            },
            references: {
                model: Boat,
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