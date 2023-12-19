import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

interface ReservationAttributes {
    id: number;
    startingDate: Date;
    endDate: Date;
    ppn: number;
    note: number;
    idClient: number;
    idBoat: number;
}

export default class Reservation extends Model<ReservationAttributes> implements ReservationAttributes {
    declare id: number;
    declare startingDate: Date;
    declare endDate: Date;
    declare ppn: number;
    declare note: number;
    declare idClient: number;
    declare idBoat: number;
}

Reservation.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    startingDate: {
        type: DataTypes.DATEONLY
    },
    endDate: {
        type: DataTypes.DATEONLY,
    },
    ppn: {
        type: DataTypes.FLOAT,
        validate: {
            notEmpty: {
                msg: 'You must specifiy the price per night'
            }
        }
    },
    note: {
        type: DataTypes.FLOAT
    },
    idClient: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    idBoat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Boat',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'Reservation',
    modelName: 'Reservation',
    timestamps: false
  }
);