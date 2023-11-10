const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.send('Ceci est un certified banger');
});


app.listen(3306, () => {
  console.log(`C'est parti`);
});