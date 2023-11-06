const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('boat', {
        id: {
            field: 'id',
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
                    msg: 'You must give a name to your boat'
                }
            }
        },
        surface: {
            field: 'surface',
            type: DataTypes.INTEGER
        },
        volume: {
            field: 'volume',
            type: DataTypes.INTEGER
        },
        length: {
            field: 'length',
            type: DataTypes.INTEGER
        },
        motorized: {
            field: 'motorized',
            type: DataTypes.JSON,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify'
                }
            }
        },
        cabin: {
            field: 'cabin',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the number of bedrooms'
                }
            }
        },
        bedroom: {
            field: 'bedroom',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specifiy the number of bedrooms'
                }
            }
        },
        port: {
            field: 'port',
            type: DataTypes.STRING
        },
        country: {
            field: 'country',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the country where the boat is'
                }
            }
        },
        type: {
            field: 'type',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the type of your boat'
                }
            }
        },
        skipper: {
            field: 'skipper',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify if a skipper is needed'
                }
            }
        },
        pictures: {
            field: 'pictures',
            type: DataTypes.JSON,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must provide some pictures'
                }
            }
        },
        equipments: {
            field: 'equipments',
            type: DataTypes.JSON
        },
        specifications: {
            field: 'specifications',
            type: DataTypes.JSON
        },
        availability: {
            field: 'availability',
            type: DataTypes.DATETIME,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must give the availability of your boat'
                }
            }
        },
        deposit: {
            field: 'deposit',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must specify the deposit amount'
                }
            }
        },
        note: {
            field: 'note',
            type: DataTypes.INTEGER
        },
        propertyPapers: {
            field: 'propertyPapers',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You must give the property papers'
                }
            }
        },
        idOwner: {
            field: 'idOwner',
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: 'id'
            }
        }
    }, {
        timestamps: false
    });
}