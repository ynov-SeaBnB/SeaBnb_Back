import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

interface UserAttributes {
    id: number;
    name: string;
    firstName: string;
    birthDate: Date;
    emailAddress: string;
    phoneNumber: string;
    password: string;
    salt: string;
    note: number;
    creationDate: Date;
    profilePicture: string;
    spokenLanguages: JSON;
    status: string;
    isOwner: boolean;
}

export default class User extends Model<UserAttributes> implements UserAttributes {
    declare id: number;
    declare name: string;
    declare firstName: string;
    declare birthDate: Date;
    declare emailAddress: string;
    declare phoneNumber: string;
    declare password: string;
    declare salt: string;
    declare note: number;
    declare creationDate: Date;
    declare profilePicture: string;
    declare spokenLanguages: JSON;
    declare status: string;
    declare isOwner: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You have to give your name'
            }
        }
    },
    firstName: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You have to give your first name'
            }
        }
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        validate: {
            notEmpty: {
                msg: 'You have to specify your birth date'
            }
        }
    },
    emailAddress: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You have to give an email address'
            }
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'Password is empty'
            }
        }
    },
    salt: {
        type: DataTypes.STRING
    },
    note: {
        type: DataTypes.FLOAT
    },
    creationDate: {
        type:  DataTypes.DATEONLY,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING
    },
    spokenLanguages: {
        type: DataTypes.JSON
    },
    status: {
        type: DataTypes.STRING
    },
    isOwner: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'User',
    modelName: 'User',
    timestamps: false
  }
);