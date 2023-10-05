const {Pool } = require('pg');

//requerir archivos de configuracion
 const configuration = require('../config/config.js');

const config = {
    user: configuration.DATA_BASE_USER,
    host: configuration.DATABASE_HOST,
    password: configuration.DATA_BASE_PASSWORD,
    database: configuration.DATA_BASE_NAME
};
const pool = new Pool(config);


//Retorna todo el stock
const getStock = async (req,res) => {
    try{
        const response = await pool.query('select * from stock');
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        res.json(e);
    }
};

//Retorna stock por ID

const getStockById = async (req,res) => {
    try{
const id = req.params.id;
const response = await pool.query('SELECT * FROM stock WHERE id =$1', [id])
console.log(response);
res.json(response.rows);}
    catch(e){
        console.log(e);
        res.json(e);    
    }
}
 
// Insertar un repuesto en Stock
const createSrtock = async (req,res) =>{
    try{
        const {codigo, grupo, marca, nombre, costo, utilidad, precioventa,cantidad, ubicacionfisica} =req.body;
        const response= await pool.query('INSERT INTO stock (codigo, grupo, marca, ultimavezcomprado, nombre, costo, utilidad, precioventa, cantidad, ubicacionfisica) VALUES ($1,$2,$3,CURRENT_TIMESTAMP,$4,$5,$6,$7,$8,$9)',
        [codigo, grupo, marca, nombre, costo, utilidad, precioventa, cantidad, ubicacionfisica]);
        console.log(response);
        res.json({
            message: 'Repuesto Creado',
            body: {
                repuesto: {codigo, grupo, marca, nombre, costo, utilidad, precioventa, cantidad, ubicacionfisica}
            }
        });
    } catch(e){
        console.log(e);
        res.json(e);
    }        
    
};

//Actualizar un repuesto en Stock
const updateStock = async (req,res) =>{
    try {
    const id = req.params.id;
    const {codigo, grupo, marca, nombre, costo, utilidad, precioventa,cantidad, ubicacionfisica} =req.body;
    const response = await pool.query('UPDATE stock SET codigo=$1, grupo=$2, marca=$3, nombre=$4, costo=$5, utilidad=$6, precioventa=$7,cantidad=$8, ubicacionfisica=$9 WHERE id =$10',[
        codigo,
        grupo,
        marca,
        nombre,
        costo,
        utilidad,
        precioventa,
        cantidad,
        ubicacionfisica,
        id
    ]);
    console.log(response);
    res.json ('Stock actualizada exitosamente');
}
catch (e){
    console.log(e);
    res.json(e); 
}
}

//Incrementar la cantidad de un repuesto en Stock

const incrementarStock = async(req,res) =>{
    try {
        const id = req.params.id;
        const incremento = req.params.incremento;
        const response = await pool.query('UPDATE stock SET cantidad = cantidad+$2 WHERE id=$1', [id, incremento]);
        console.log(response);
        res.json(`cantidad incrementada en ${incremento}`);
    } catch(e){
        console.log(e);
        res.json(e);
    }
    
};

//Borra una repuesto de Stock

const deleteStock = async(req,res) => {
    try {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM stock WHERE id =$1', [id]);
    console.log(response);
    res.json(`Entrada repuesto con id: ${id} fue borrado exitosamente`);
    } catch(e){
        console.log(e);
        res.json(e);
    }
};

//EXPORTS//////////////////////
module.exports = {
    getStock,
    getStockById,
    createSrtock,
    updateStock,
    incrementarStock,
    deleteStock
}