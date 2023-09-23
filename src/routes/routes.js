
const express = require('express');
const router = express.Router();

// Requerir el método controller
const controller = require('../controllers/controller')

//router.get('/', controller.index);

// Rutas
router.get('/', controller.index);
router.post('/', controller.index);
router.get('/pedidos_chef', controller.pedidos_chef);
router.post('/pedidos_chef', controller.pedidos_chef);
router.get('/entregas_mesero', controller.entregas_mesero);
router.post('/entregas_mesero', controller.entregas_mesero);



module.exports = router;