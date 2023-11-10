import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import User from './user';
import Boat from './boat';

interface ReservationAttributes {
    id: number;
    startingDate: Date;
    duration: number;
    ppn: number;
    note: number;
    idClient: number;
    idBoat: number;
}

class Reservation extends Model<ReservationAttributes> implements ReservationAttributes {
    public id: number;
    public startingDate: Date;
    public duration: number;
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
        type: DataTypes.DATE
    },
    duration: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: {
                msg: 'You must specify the duration'
            }
        }
    },
    ppn: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: {
                msg: 'You must specifiy the price per night'
            }
        }
    },
    note: {
        type: DataTypes.INTEGER
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