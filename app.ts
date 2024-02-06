import express from 'express';
import cors from 'cors';
//import { validator } from './middlewares/validator';

import userController from './controllers/userController';
import boatController from './controllers/boatController';
import reservationController from './controllers/reservationController';
import reservationHistoryController from './controllers/reservationHistoryController';
import commentController from './controllers/commentController';

const app = express();

app.use(cors());

app.use(express.json());
// app.use(validator);

app.use('/users', userController);
app.use('/boats', boatController);
app.use('/reservations', reservationController);
app.use('/reservationsHistory', reservationHistoryController);
app.use('/comments', commentController);

export default app;
