import express, { Request, Response } from 'express';
import Comment from '../models/comment';

const router = express.Router();

router.get('/', async (request: Request, response: Response) => {
    try {
        const comments = await Comment.findAll();
        response.json(comments);
    } catch (error) {
        response.status(404).send();
    }
});

router.get('/:id', async (request: Request, response: Response) => {
const commentId = parseInt(request.params.id, 10);

try {
    const comment = await Comment.findByPk(commentId);
    if (comment) {
        response.json(comment);
    } else {
        response.status(404).json({ error: 'Comment not found' });
    } 
} catch (error) {
    console.error(error);
}
});

router.post('/', async (request: Request, response: Response) => {
    const commentData = request.body;
    
    try {
        const comment = await Comment.create({
            content: commentData.content,
            idReservation: commentData.idReservation
        });
        response.status(201).json(comment);
    } catch (error) {
        console.error(error);
    }
});

router.patch('/:id', async (request: Request, response: Response) => {
    const commentId = parseInt(request.params.id, 10);
    const updatedData = request.body;

    try {
        const comment = await Comment.findByPk(commentId);

        if (comment) {
            await comment.update(updatedData);
            response.status(200).json(comment);
        } else {
            response.status(404).json({ error: 'Comment not found' });
        }
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:id', async  (request, response) => {
    const commentId = parseInt(request.params.id, 10);

    try {
        const comment = await Comment.findByPk(commentId);

        if (comment) {
            await comment.destroy();
            response.status(204).end();
        } else {
            response.status(404).json({ error: 'Comment not found' });
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