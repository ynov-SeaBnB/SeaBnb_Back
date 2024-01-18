import express, { Request, Response } from 'express';
import ReservationHistory from '../models/reservationHistory';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
    try {
        const reservationHistories = await ReservationHistory.findAll();
        response.json(reservationHistories);
    } catch (error) {
        response.status(404).send();
    }
});

router.get('/:id', async (request: Request, response: Response) => {
    const reservationHistoryId = parseInt(request.params.id, 10);

    try {
        const reservationHistory = await ReservationHistory.findByPk(reservationHistoryId);
        if (reservationHistory) {
            response.json(reservationHistory);
        } else {
            response.status(404).json({ error: 'History not found' });
        } 
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (request: Request, response: Response) => {
    const reservationHistoryData = request.body;
    
    try {
        const reservationHistory = await ReservationHistory.create({
            idUser: reservationHistoryData.idReservation,
            idReservation: reservationHistoryData.idReservation
        });
        response.status(201).json(reservationHistory);
    } catch (error) {
        console.error(error);
    }
});

router.patch('/:id', async (request: Request, response: Response) => {
    const reservationHistoryId = parseInt(request.params.id, 10);
    const updatedData = request.body;

    try {
        const reservationHistory = await ReservationHistory.findByPk(reservationHistoryId);

        if (reservationHistory) {
            await reservationHistory.update(updatedData);
            response.status(200).json(reservationHistory);
        } else {
            response.status(404).json({ error: 'History not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async  (request, response) => {
    const reservationHistoryId = parseInt(request.params.id, 10);

    try {
        const reservationHistory = await ReservationHistory.findByPk(reservationHistoryId);

        if (reservationHistory) {
            await reservationHistory.destroy();
            response.status(204).end();
        } else {
            response.status(404).json({ error: 'History not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

// gestion d'erreurs --------------------------------------------------

router.get('*', function (request, response) {
    response.status(404).send();
});

router.post('*', function (request, response) {
    response.status(404).send();
});

router.patch('*', function (request, response) {
    response.status(404).send();
});

router.delete('*', function (request, response) {
    response.status(404).send();
});

export default router;