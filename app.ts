import express from 'express';
import cors from 'cors';
import swaggerJSDoc from 'swagger-jsdoc';
import * as swaggerUI from 'swagger-ui-express';
//import { validator } from './middlewares/validator';

import userController from './controllers/userController';
import boatController from './controllers/boatController';
import reservationController from './controllers/reservationController';
import reservationHistoryController from './controllers/reservationHistoryController';
import commentController from './controllers/commentController';

const app = express();

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Seabnb Management API',
          version: '1.0.0',
          description: 'API for managing the Seabnb web application.'
        },
        servers:[
            {
                url: 'http://localhost:3000/'
            }
        ]
    },
    apis: ['./openapi.yaml']
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use(cors());

app.use(express.json());
// app.use(validator);

app.use('/users', userController);
app.use('/boats', boatController);
app.use('/reservations', reservationController);
app.use('/reservationsHistory', reservationHistoryController);
app.use('/comments', commentController);

export default app;
