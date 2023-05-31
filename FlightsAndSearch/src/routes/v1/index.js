const express = require('express');
const { CityController, AirportController, FlightController } = require('../../controllers/index')
const { FlightMiddlewares } = require('../../middlewares/index');

const router = express.Router();

router.post('/city', CityController.createAll);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);

router.post('/airports', AirportController.createAll)
router.delete('/airports/:id', AirportController.destroy);
router.patch('/airports/:id', AirportController.update);
router.get('/airports/:id', AirportController.get);
router.get('/airports', AirportController.getAll);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight,
    FlightController.create
);
router.get('/flights', FlightController.getAll);
router.get('/flights/:id', FlightController.get);
router.patch('/flights/:id', FlightController.update);

module.exports = router;
