import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

interface EquipmentsAttributes {
    id: number;
    element: string;
    type: string;
}

export default class Equipments extends Model<EquipmentsAttributes> implements EquipmentsAttributes {
    declare id: number;
    declare element: string;
    declare type: string;
}

Equipments.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    element: {
        type: DataTypes.STRING
    },
    type: {
        type: DataTypes.STRING
    },
}, {
    sequelize,
    tableName: 'equipment',
    modelName: 'Equipment',
    timestamps: false
  }
);