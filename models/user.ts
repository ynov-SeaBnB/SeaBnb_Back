import {DataTypes} from 'sequelize';
import {sequelize} from "../index";
import bcrypt = require("bcrypt");

const User = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

        },
        name: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('name');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give your name'
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('firstName');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give your name'
                }
            }
        },
        age: {
            type: DataTypes.INTEGER,
            get() {
                return this.getDataValue('age');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to specify your age'
                }
            }
        },
        emailAddress: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('emailAdress');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give an email address'
                }
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('phoneNumber');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'You have to give a phone number'
                }
            }
        },
        password: {
            // à peut-être changer pour stocker les paswd chiffrés
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('password');
            },
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'Password is empty'
                }
            }
        },
        note: {
            type: DataTypes.INTEGER,
            get() {
                return this.getDataValue('note');
            },
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
            get() {
                return this.getDataValue('creationDate');
            }
        },
        // professionnel ou particulier
        status: {
            type: DataTypes.STRING,
            get() {
                return this.getDataValue('status');
            }
        },
        isOwner: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            get() {
                return this.getDataValue('isOwner');
            }
        }
    }, {
        timestamps: false
    }
);

User.beforeCreate(async (user: { password: string | Buffer; }) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

(async () => {
    await sequelize.sync({ force: true });

})();
