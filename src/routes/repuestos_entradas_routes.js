const {Router} = require('express');
const router=Router();

//importar controller

const {getEntradas, createEntrada, getEntradaById, deleteEntrada, updateEntrada} = require('../controllers/repuestos_entradas.controller') 
router.get('/entradas', getEntradas);
router.get('/entradas/id/:id', getEntradaById);
router.post('/entradas', createEntrada);
router.delete('/entradas/id/:id', deleteEntrada);
router.put('/entradas/id/:id', updateEntrada);
module.exports = router;