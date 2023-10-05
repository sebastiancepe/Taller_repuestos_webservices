const {Router} = require('express');
const router=Router();

//importar controller

const { getProveedores} = require('../controllers/repuestos_proveedores.controller') 
router.get('/proveedores', getProveedores);

module.exports = router;