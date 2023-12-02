import express from 'express';
import path from 'path';

const app = express();

app.get('/', (request, response) => {
  response.send('Ceci est un certified banger');
});

// io.on('connection', socket => {
//     console.log('Un gars est connecté');
//     socket.emit('message', 'Vous pouvez discuter avec le propriétaire')
// }); 


app.listen(3307, () => {
  console.log(`C'est parti`);
});