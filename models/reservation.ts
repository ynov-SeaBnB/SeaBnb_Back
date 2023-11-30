import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import User from './user';
import Boat from './boat';

interface ReservationAttributes {
    id: number;
    startingDate: Date;
    endDate: Date;
    ppn: number;
    note: number;
    idClient: number;
    idBoat: number;
}

class Reservation extends Model<ReservationAttributes> implements ReservationAttributes {
    public id: number;
    public startingDate: Date;
    public endDate: Date;
    public ppn: number;
    public note: number;
    public idClient: number;
    public idBoat: number;
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
            model: User,
            key: 'id'
        }
    },
    idBoat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Boat,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Reservation',
    timestamps: false
  }
);

export default Reservation;

(async () => {
  await sequelize.sync({ force: true });
})();