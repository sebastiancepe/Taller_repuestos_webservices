const {Router} = require('express');
const router=Router();

//importar controller

const {getStock, getStockById, createSrtock, updateStock, deleteStock, incrementarStock, decrementarStock} = require('../controllers/repuestos_stock.controller.js');
router.get('/stock' , getStock);
router.get('/stock/id/:id' , getStockById);
router.post('/stock' , createSrtock);
router.put('/stock/id/:id', updateStock);
router.delete('/stock/id/:id', deleteStock);
router.put('/stock/id/:id/incremento/:incremento', incrementarStock);
router.put('/stock/id/:id/decremento/:decremento', decrementarStock);
module.exports = router;

