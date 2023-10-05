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


//Retorna todas las reservas
const getReservas = async (req,res) => {
    try{
        const response = await pool.query('select * from reservas');
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        res.json(e);
    }
};

//Buscar reserca por id

const getReservaById = async (req,res) => {
    try{
const id = req.params.id;
const response = await pool.query('SELECT * FROM reservas WHERE id =$1', [id])
console.log(response);
res.json(response.rows);}
    catch(e){
        console.log(e);
        res.json(e);    
    }
};

//Crea una reserva

const createReserva = async (req,res) =>{
    try{
        const {ordenreparacion, codigo, cantidadexistente, numeroreservas} =req.body;
        const response= await pool.query('INSERT INTO reservas (ordenreparacion, fechareserva, codigo, cantidadexistente, numeroreservas) VALUES ($1,CURRENT_TIMESTAMP,$2,$3,$4)',
        [ordenreparacion, codigo, cantidadexistente, numeroreservas]);
        console.log(response);
        res.json({
            message: 'Reserva Creada',
            body: {
                reserva: {ordenreparacion, codigo, cantidadexistente, numeroreservas}
            }
        });
    } catch(e){
        console.log(e);
        res.json(e);
    }        
    
};

//Eliminar una reserva

const deleteReserva= async(req,res) => {
    try {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM reservas WHERE id =$1', [id]);
    console.log(response);
    res.json(`Entrada reserva con id: ${id} fue borrada exitosamente`);
    } catch(e){
        console.log(e);
        res.json(e);
    }
};

//EXPORTS//////////////////////
module.exports = {
    getReservas,
    getReservaById,
    createReserva,
    deleteReserva
}