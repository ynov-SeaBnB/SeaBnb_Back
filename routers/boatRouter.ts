const { Boat } = require("../index")
const express = require('express'),
router = express.Router()

router.get('/:boats', function (request, response) {
    let { marques } = request.params;

    Modeles.findAll({
        where: {
            marques:marques
        }
      }).then((cars) => {
        if (cars) {
            response.json(cars);
        } else {
            response.status(404).send();
        }
    });
});

module.exports = router;