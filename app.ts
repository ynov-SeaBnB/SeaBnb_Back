import express = require('express');
//import { validator } from './middlewares/validator';

import boatRouter from './routers/boatRouter';
import userRouter from './routers/userRouter';
import reservationRouter from './routers/reservationRouter';
import commentRouter from './routers/commentRouter';
import authRouter from './routers/authRouter';
//import apiRouter from './routers/apiRouter';

const app = express();
const socket = new WebSocket('ws://localhost:3000');

app.use(express.json());
//app.use(validator);

app.use('/', authRouter);
app.use('/boats', boatRouter);
app.use('/users', userRouter);
app.use('/reservations', reservationRouter);
app.use('/comments', commentRouter);

function sendMessage(e: { preventDefault: () => void; }){
    e.preventDefault()
    const input = document.querySelector('input');
    if (input.value){
        socket.send(input.value);
        input.value = "";
    }
    input.focus()
}

document.querySelector('form')
    .addEventListener('submit', sendMessage);


socket.addEventListener("message", ({ data }) => {
    const list = document.createElement('list');
    list.textContent = data;
    document.querySelector('ul').appendChild(list);
})
//export default app;

module.exports = app;