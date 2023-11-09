import * as express from 'express';

const Boats = require('/routers/boatRouter');
const Users = require('/routers/userRouter');
const Reservations = require('/routers/reservationRouter');
const Comments = require('/routers/commentRouter');
const API = require('/routers/apiRouter');
const Auth = require('/routers/authRouter');

const validator = require('./middlewares/validator');

const app = express();

app.use(express.json());
app.use(validator);

app.use('/', Auth);
app.use('/Boats', Boats);
app.use('/Users', Users);
app.use('/Reservation', Reservations);
app.use('/Comments', Comments);

module.exports = app;