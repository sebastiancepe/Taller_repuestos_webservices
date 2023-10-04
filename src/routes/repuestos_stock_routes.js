const {Router} = require('express');
const router=Router();

//importar controller

const {getStock, getStockById, createSrtock} = require('../controllers/repuestos_stock.controller.js');
router.get('/stock' , getStock);
router.get('/stock/id/:id' , getStockById);
router.post('/stock' , createSrtock);
module.exports = router;

/*const {getEntradas, createEntrada, getEntradaById, deleteEntrada, updateEntrada} = require('../controllers/repuestos_entradas.controller') 
router.get('/entradas', getEntradas);
router.get('/entradas/:id', getEntradaById);
router.post('/entradas', createEntrada);
router.delete('/entradas/:id', deleteEntrada);
router.put('/entradas/:id', updateEntrada);
module.exports = router;*/
