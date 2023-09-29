const {Router} = require('express');
const router=Router();

//importar controller

const {getEntradas, createEntrada, getEntradaById, deleteEntrada, updateEntrada} = require('../controllers/index.controller') 
router.get('/entradas', getEntradas);
router.get('/entradas/:id', getEntradaById);
router.post('/entradas', createEntrada);
router.delete('/entradas/:id', deleteEntrada);
router.put('/entradas/:id', updateEntrada);
module.exports = router;