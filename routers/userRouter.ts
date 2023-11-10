import { Request, Response } from 'express';
import express = require('express');
import User from '../models/user';

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

router.post('/', async (request: Request, response: Response) => {
    const userData = request.body;
    
    try {
        const user = await User.create(userData);
        // {
        // name: request.body.name,
        // firstName: request.body.firstName,
        // age: request.body.age,
        // emailAddress: request.body.emailAddress,
        // phoneNumber: request.body.phoneNumber,
        // password: request.body.password,
        // note: request.body.note,
        // creationDate: request.body.creationDate,
        // status: request.body.status,
        // isOwner: request.body.isOwner
        // });
        response.status(201).json(user);
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
            response.status(404).json({ error: 'Boat not found' });
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

module.exports = router;