const {Pool } = require('pg');
//requerir archivos de configuracion
const configuration = require('../config/config.js');

const config = {
    user: configuration.USER,
    host: configuration.HOST,
    password: configuration.PASSWORD,
    database: configuration.DATABASE_NAME
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


//EXPORTS//////////////////////
module.exports = {
    getStock,
    getStockById,
    createSrtock
}