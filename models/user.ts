import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import bcrypt = require('bcrypt');

interface UserAttributes {
    id: number;
    name: string;
    firstName: string;
    age: number;
    emailAddress: string;
    phoneNumber: string;
    password: string;
    salt: string;
    note: number;
    creationDate: Date;
    profilePicture: string;
    // professionnel ou particulier
    status: string;
    isOwner: boolean;
}

class User extends Model<UserAttributes> implements UserAttributes {
    public id: number;
    public name: string;
    public firstName: string;
    public age: number;
    public emailAddress: string;
    public phoneNumber: string;
    public password: string;
    public salt: string;
    public note: number;
    public creationDate!: Date;
    public profilePicture: string;
    public status: string;
    public isOwner: boolean;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        // get() {
        //   return this.getDataValue('name');
        // },
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
                msg: 'You have to give your name'
            }
        }
    },
    age: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: {
                msg: 'You have to specify your age'
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
        validate: {
            notEmpty: {
                msg: 'You have to give a phone number'
            }
        }
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
        type: DataTypes.INTEGER
    },
    creationDate: {
        type:  DataTypes.DATE,
        allowNull: false
    },
    profilePicture: {
        type: DataTypes.STRING
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
    modelName: 'User',
    timestamps: false,
  }
);

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

export default User;

(async () => {
    await sequelize.sync({ force: true });
})();
