import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

interface ReservationHistoryAttributes {
    id: number;
    idUser: number;
    idReservation: number;
}

export default class ReservationHistory extends Model<ReservationHistoryAttributes> implements ReservationHistoryAttributes {
    declare id: number;
    declare idUser: number;
    declare idReservation: number;
}

ReservationHistory.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    idReservation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Reservation',
            key: 'id'
        }
    }
}, {
    sequelize,
    tableName: 'reservationhistory',
    modelName: 'ReservationHistory',
    timestamps: false
  }
);