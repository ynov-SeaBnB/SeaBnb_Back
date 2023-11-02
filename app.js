const express = require('express');

// Modèles
const Marques = require('./routers/Marques');
const Choix = require('./routers/Choix');
const Modeles = require('./routers/Modeles');

// Middlewares
const validator = require('./middlewares/validator');

// Init app
const app = express();

// Middleware pré-requêtes
app.use(express.json());
app.use(validator);

// Routes
app.use('/Marques', Marques);
app.use('/Modeles', Modeles);
app.use('/', Choix);

// Middleware d'erreur


module.exports = app;