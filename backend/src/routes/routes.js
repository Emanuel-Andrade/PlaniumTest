const express = require('express');
const Home = require('../controllers/homeController');
const PlansController = require('../controllers/plansController');
const PriceController = require('../controllers/pricecontroller');

const routes = express.Router();
// Home
routes.get('/', Home.index);

// Plans
routes.post('/plan', PlansController.create);
routes.get('/plan/:id', PlansController.getPlan);
routes.get('/plans', PlansController.getPlans);

// Price
routes.get('/prices', PriceController.getAll);

module.exports = routes;
