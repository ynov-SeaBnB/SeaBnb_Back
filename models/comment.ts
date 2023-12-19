import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';

interface CommentAttributes {
    id: number;
    content: string;
    idReservation: number;
}

export default class Comment extends Model<CommentAttributes> implements CommentAttributes {
    declare id: number;
    declare content: string;
    declare idReservation: number;
}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    content: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: {
                msg: 'Give your opinion on the trip'
            }
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
    tableName: 'Comment',
    modelName: 'Comment',
    timestamps: false
  }
);