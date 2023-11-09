import * as express from 'express';
const app = express();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Ceci est un certified banger');
});


app.listen(3306, () => {
  console.log(`C'est parti`);
});