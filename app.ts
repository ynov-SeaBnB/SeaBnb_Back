import express = require('express');
//import { validator } from './middlewares/validator';

import boatRouter from './routers/boatRouter';
import userRouter from './routers/userRouter';
import reservationRouter from './routers/reservationRouter';
import commentRouter from './routers/commentRouter';
import authRouter from './routers/authRouter';
//import apiRouter from './routers/apiRouter';

const app = express();

app.use(express.json());
//app.use(validator);

app.use('/', authRouter);
app.use('/boats', boatRouter);
app.use('/users', userRouter);
app.use('/reservations', reservationRouter);
app.use('/comments', commentRouter);

//export default app;

module.exports = app;