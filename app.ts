import express from 'express';
//import { validator } from './middlewares/validator';

import userRouter from './routers/userRouter';
import boatRouter from './routers/boatRouter';
import reservationRouter from './routers/reservationRouter';
import commentRouter from './routers/commentRouter';
//import authRouter from './routers/authRouter';

const app = express();

app.use(express.json());
//app.use(validator);

//app.use('/auth', authRouter);
app.use('/users', userRouter);
app.use('/boats', boatRouter);
app.use('/reservations', reservationRouter);
app.use('/comments', commentRouter);

export default app ;