import bcrypt from 'bcrypt';

import User from './user';
import Boat from './boat';
import Reservation from './reservation';
import Comment from './comment';

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
});

User.hasMany(Boat);
User.hasMany(Reservation);
Boat.hasMany(Reservation);
Reservation.hasMany(Comment);

Boat.belongsTo(User, { foreignKey: 'idOwner' });
Reservation.belongsTo(Boat, { foreignKey: 'idBoat' });
Reservation.belongsTo(User, { foreignKey: 'idClient' });
Comment.belongsTo(Reservation, { foreignKey: 'idReservation' });

export { User, Boat, Reservation, Comment };