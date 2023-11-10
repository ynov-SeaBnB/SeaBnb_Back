import { Request, Response } from 'express';
import express = require('express');
import Boat from '../models/boat';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
        try {
            const boats = await Boat.findAll();
            response.json(boats);
        } catch (error) {
            response.status(404).send();
        }
});

router.get('/:id', async (request: Request, response: Response) => {
    const boatId = parseInt(request.params.id, 10);

    try {
        const boat = await Boat.findByPk(boatId);
        if (boat) {
            response.json(boat);
        } else {
            response.status(404).json({ error: 'Boat not found' });
        } 
    } catch (error) {
        console.error(error);
    }
});

router.post('/', async (request: Request, response: Response) => {
    const boatData = request.body;
    
    try {
        const boat = await Boat.create(boatData);
        //{
        // name: request.body.name,
        // width: request.body.volume,
        // length: request.body.length,
        // motorized: request.body.motorized,
        // port: request.body.port,
        // country: request.body.country,
        // type: request.body.type,
        // skipper: request.body.skipper,
        // pictures: request.body.pictures,
        // equipments: request.body.equipments,
        // specifications: request.body.specifications,
        // availability: request.body.availability,
        // deposit: request.body.deposit,
        // note: request.body.note,
        // propertyPapers: request.body.propertyPapers,
        // idOwner: request.body.idOwner
        //});
        response.status(201).json(boat);
    } catch (error) {
        console.error(error);
    }
});

router.patch('/boats/:id', async (request: Request, response: Response) => {
    const boatId = parseInt(request.params.id, 10);
    const updatedData = request.body;

    try {
        const boat = await Boat.findByPk(boatId);

        if (boat) {
            await boat.update(updatedData);
            response.status(200).json(boat);
        } else {
            response.status(404).json({ error: 'Boat not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async  (request, response) => {
    const boatId = parseInt(request.params.id, 10);

    try {
        const boat = await Boat.findByPk(boatId);

        if (boat) {
            await boat.destroy();
            response.status(204).end();
        } else {
            response.status(404).json({ error: 'Boat not found' });
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