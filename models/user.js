const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('user', {
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
                    msg: 'You have to give your name'
                }
            }
        },
        firstName: {
            field: 'firstName',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give your name'
                }
            }
        },
        age: {
            field: 'age',
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to specify your age'
                }
            }
        },
        emailAddress: {
            field: 'emailAddress',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give an email address'
                }
            }
        },
        phoneNumber: {
            field: 'phoneNumber',
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give a phone number'
                }
            }
        },
        password: {
            field: 'password',
            // à peut-être changer pour stocker les paswd chiffrés
            type: DataTypes.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Password is empty'
                }
            }
        },
        note: {
            field: 'note',
            type: DataTypes.INTEGER
        },
        creationDate: {
            field: 'creationDate',
            type: DataTypes.DATETIME,
            allowNull: false
        },
        // professionnel ou particulier
        status: {
            field: 'status',
            type: DataTypes.STRING
        },
        isOwner: {
            field: 'isOwner',
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    });
}