import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

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

export default class Boat extends Model<BoatAttributes> implements BoatAttributes {
    declare id: number;  
    declare name: string;
    declare width: number;
    declare length: number;
    declare motorized: JSON;
    declare port: JSON;
    declare country: string;
    declare type: string;
    declare skipper: string;
    declare pictures: JSON;
    declare equipments: JSON;
    declare specifications: JSON;
    declare availability: JSON;
    declare deposit: string;
    declare note: number;
    declare propertyPapers: JSON;
    declare idOwner: number;
}

Boat.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'You must give a name to your boat'
            }
        }
    },
    width: {
        type: DataTypes.FLOAT
    },
    length: {
        type: DataTypes.FLOAT
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
        type: DataTypes.FLOAT,
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
            model: 'User',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'boat',
    modelName: 'Boat',
    timestamps: false,
    }
);