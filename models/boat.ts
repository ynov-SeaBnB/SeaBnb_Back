const { DataTypes } = require('sequelize');
const sequelize = require('../server');
const User = require('../user');

const Boat = sequelize.define("boat", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            get() {
              return this.getDataValue('id');
            }
        },
        name: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('name');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must give a name to your boat'
                },
            }
        },
        surface: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('surface');
            }
        },
        volume: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('volume');
            }
        },
        length: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('length');
            }
        },
        motorized: {
            type: DataTypes.JSON,
            get() {
              return this.getDataValue('motorized');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify'
                }
            }
        },
        cabin: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('cabin');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the number of bedrooms'
                }
            }
        },
        bedroom: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('bedroom');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the number of bedrooms'
                }
            }
        },
        port: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('port');
            },
            set(port: string) {
              this.setDataValue('port', port);
            }
        },
        country: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('country');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the country where the boat is'
                }
            }
        },
        type: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('type');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the type of your boat'
                }
            }
        },
        skipper: {
            type: DataTypes.STRING,
            get() {
              return this.getDataValue('skipper');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify if a skipper is needed'
                }
            }
        },
        pictures: {
            type: DataTypes.JSON,
            get() {
              return this.getDataValue('pictures');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must provide some pictures'
                }
            }
        },
        equipments: {
            type: DataTypes.JSON,
            get() {
              return this.getDataValue('equipments');
            }
        },
        specifications: {
            type: DataTypes.JSON,
            get() {
              return this.getDataValue('specifications');
            },
        },
        availability: {
            type: DataTypes.DATETIME,
            get() {
              return this.getDataValue('availability');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must give the availability of your boat'
                }
            }
        },
        deposit: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('deposit');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the deposit amount'
                }
            }
        },
        note: {
            type: DataTypes.INTEGER,
            get() {
              return this.getDataValue('note');
            }
        },
        propertyPapers: {
            type: DataTypes.JSON,
            get() {
              return this.getDataValue('propertyPapers');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must give the property papers'
                }
            }
        },
        idOwner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            get() {
              return this.getDataValue('idOwner');
            },
            references: {
                model: User,
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