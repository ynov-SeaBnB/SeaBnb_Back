import express, { Request, Response } from 'express';
import Reservation from '../models/reservation';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
    try {
        const reservations = await Reservation.findAll();
        response.json(reservations);
    } catch (error) {
        response.status(404).send();
    }
});

router.get('/:id', async (request: Request, response: Response) => {
const reservationId = parseInt(request.params.id, 10);

try {
    const reservation = await Reservation.findByPk(reservationId);
    if (reservation) {
        response.json(reservation);
    } else {
        response.status(404).json({ error: 'Boat not found' });
    } 
} catch (error) {
    console.error(error);
}
});

router.post('/', async (request: Request, response: Response) => {
    const reservationData = request.body;
    
    try {
        const reservation = await Reservation.create({
            startingDate: reservationData.startingDate,
            endDate: reservationData.endDate,
            ppn: reservationData.ppn,
            note: reservationData.note,
            idClient: reservationData.idClient,
            idBoat: reservationData.idBoat
        });
        response.status(201).json(reservation);
    } catch (error) {
        console.error(error);
    }
});

router.patch('/:id', async (request: Request, response: Response) => {
    const reservationId = parseInt(request.params.id, 10);
    const updatedData = request.body;

    try {
        const reservation = await Reservation.findByPk(reservationId);

        if (reservation) {
            await reservation.update(updatedData);
            response.status(200).json(reservation);
        } else {
            response.status(404).json({ error: 'Reservation not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async  (request, response) => {
    const reservationId = parseInt(request.params.id, 10);

    try {
        const reservation = await Reservation.findByPk(reservationId);

        if (reservation) {
            await reservation.destroy();
            response.status(204).end();
        } else {
            response.status(404).json({ error: 'User not found' });
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