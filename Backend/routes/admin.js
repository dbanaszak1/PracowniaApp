const express = require('express');
const router = express.Router();
const { getCars, createCar, updateCar, deleteCar } = require('../controllers/carController');

// Endpointy
router.get('/cars', getCars);
router.post('/cars', createCar);
router.put('/cars/:carId', updateCar);
router.delete('/cars/:carId', deleteCar);

module.exports = router;
