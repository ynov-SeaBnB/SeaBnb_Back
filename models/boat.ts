import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import User from './user';

interface BoatAttributes {
    id: number;
    name: string;
    width: number;
    length: number;
    motorized: JSON;
    port: JSON;
    country: string;
    type: string;
    skipper: string;
    pictures: JSON;
    equipments: JSON;
    specifications: JSON;
    availability: JSON;
    deposit: string;
    note: number;
    propertyPapers: JSON;
    idOwner: number;
}

class Boat extends Model<BoatAttributes> implements BoatAttributes {
    public id: number;  
    public name: string;
    public width: number;
    public length: number;
    public motorized: JSON;
    public port: JSON;
    public country: string;
    public type: string;
    public skipper: string;
    public pictures: JSON;
    public equipments: JSON;
    public specifications: JSON;
    public availability: JSON;
    public deposit: string;
    public note: number;
    public propertyPapers: JSON;
    public idOwner: number;
}

Boat.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        // get() {
        //   return this.getDataValue('name');
        // },
        validate: {
            notEmpty: {
                msg: 'You must give a name to your boat'
            }
        }
    },
    width: {
        type: DataTypes.INTEGER
    },
    length: {
        type: DataTypes.INTEGER
    },
    motorized: {
        type: DataTypes.JSON,
        validate: {
            notEmpty: {
              msg: 'You must specify'
            }
        }
    },
    port: {
        type: DataTypes.JSON
    },
    country: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You must specify the country where the boat is'
            }
        }
    },
    type: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You must specify the type of your boat'
            }
        }
    },
    skipper: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You must specify if a skipper is needed'
            }
        }
    },
    pictures: {
        type: DataTypes.JSON,
        validate: {
            notEmpty: {
                msg: 'You must provide some pictures'
            }
        }
    },
    equipments: {
        type: DataTypes.JSON
    },
    specifications: {
        type: DataTypes.JSON
    },
    availability: {
        type: DataTypes.JSON,
        validate: {
            notEmpty: {
                msg: 'You must give the availability of your boat'
            }
        }
    },
    deposit: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: {
                msg: 'You must specify the deposit amount'
            }
        }
    },
    note: {
        type: DataTypes.INTEGER
    },
    propertyPapers: {
        type: DataTypes.JSON,
        validate: {
            notEmpty: {
                msg: 'You must give the property papers'
            }
        }
    },
    idOwner: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Boat',
    timestamps: false,
    }
);

export default Boat;

(async () => {
  await sequelize.sync({ force: true });
})();