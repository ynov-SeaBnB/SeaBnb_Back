import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../index';
import User from './user';
import Reservation from './reservation';

interface CommentAttributes {
    id: number;
    content: string;
    idReservation: number;
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
    public id: number;
    public content: string;
    public idReservation: number;
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
            model: Reservation,
            key: 'id'
          }
    }
}, {
    sequelize,
    modelName: 'Comment',
    timestamps: false
  }
);

export default Comment;

(async () => {
  await sequelize.sync({ force: true });
})();