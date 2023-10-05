const express = require('express');
const app = express();

//midelwares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('./routes/repuestos_entradas_routes'));
app.use(require('./routes/repuestos_stock_routes'));
app.use(require('./routes/repuestos_reservas_routes'));
app.use(require('./routes/repuestos_proveedores_routes'));

app.listen(3000);
console.log('server on port 3000');