const {Router} = require('express');
const router=Router();

//importar controller

const { getReservas, getReservaById, createReserva, deleteReserva } = require('../controllers/repuestos_reservas.controller.js');
router.get('/reservas' , getReservas);
router.get('/reservas/id/:id' , getReservaById);
router.post('/reservas', createReserva);
router.delete('/reservas/id/:id', deleteReserva);
module.exports = router;