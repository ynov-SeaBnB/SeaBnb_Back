const express = require('express');
const app = express();

app.get('/', (res) => {
  res.send('Ceci est un certified banger');
});


app.listen(3307, () => {
  console.log(`C'est parti`);
});