import express, { Request, Response } from 'express';
import User from '../models/user';
import ReservationHistory from '../models/reservationHistory';
import * as repository from '../repositories/userRepository';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
    try {
        const users = await User.findAll();
        response.json(users);
    } catch (error) {
        response.status(404).send();
    }
});

router.get('/:id', async (request: Request, response: Response) => {
    const userId = parseInt(request.params.id, 10);

    try {
        const user = await User.findByPk(userId);
        if (user) {
            response.json(user);
        } else {
            response.status(404).json({ error: 'User not found' });
        } 
    } catch (error) {
        console.error(error);
    }
});

router.get('/history/:id', async (request: Request, response: Response) => {
    const userId = parseInt(request.params.id, 10);

    try {
        const user = await User.findByPk(userId);
        const reservationsHistory = await ReservationHistory.findAll({ where: { idUser: userId } });

        if (user) {
            response.json(reservationsHistory);
        } else {
            response.status(404).json({ error: 'User not found' });
        } 
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (request: Request, response: Response) => {
    const userData = request.body;
    
    try {
        const user = await repository.createUser(userData);
        response.status(201).json(user);
    } catch (error) {
        console.error(error);
    }
});

router.post('/register', async (request: Request, response: Response) => {
    const userData = request.body;
    
    try {
        const user = await repository.register(userData);
        response.status(201).json(user);
    } catch (error) {
        console.error(error);
    }
});

router.post('/login', async (request: Request, response: Response) => {
    const userData = request.body;
    
    try {
        const user = await User.findOne({ where: { emailAddress: userData.emailAddress } });
        if (user.password == userData.password){
            response.status(201).json(user);
        }
    } catch (error) {
        console.error(error);
    }
});

router.patch('/:id', async (request: Request, response: Response) => {
    const userId = parseInt(request.params.id, 10);
    const updatedData = request.body;

    try {
        const user = await User.findByPk(userId);

        if (user) {
            await user.update(updatedData);
            response.status(200).json(user);
        } else {
            response.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async  (request, response) => {
    const userId = parseInt(request.params.id, 10);

    try {
        const user = await User.findByPk(userId);

        if (user) {
            await user.destroy();
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