const {Modeles} = require("../models/index")
const express = require('express'),
router = express.Router()

router.delete('/:id', function (request, response) {
    let { id } = request.params;

    Modeles.findByPk(id).then((modeles) => {
        modeles.destroy().then(() => {
            response.status(204).send();
        });
    });
});

router.delete('*', function (request, response) {
    response.status(404).send();
});

router.post('/', function (request, response) {
    Modeles.create({
        name: request.body.name,
        marques: request.body.marques
    }).then((modeles) => {
        response.json(modeles);
    }, (validation) => {
        response.status(400).json({
            errors: validation.errors.map((error) => {
                return {
                    attribute: error.path,
                    message: error.message
                };
            })
        });
    });
});

router.post('*', function (request, response) {
    response.status(404).send();
});

router.get('/', function (request, response) {
    console.log("GET /Modeles/ endpoint");
    Modeles.findAll().then((modeles) => {
        response.json(modeles);
    });
});

router.get('/:id', function (request, response) {
    console.log("GET /Modeles/:id endpoint");
    let { id } = request.params;

    Modeles.findByPk(id).then((modeles) => {
        if (modeles) {
            response.json(modeles);
        } else {
            response.status(404).send();
        }
    });
});

router.get('*', function (request, response) {
    console.log("GET /Modeles/* endpoint");
    response.status(404).send();
});

module.exports = router;