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

//Retorna las entradas actuales
const getProveedores  = async (req,res) => {
    try{
        const response = await pool.query('select * from proveedores');
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        res.json(e);
    }

};



/////EXPORTS/////////////

module.exports = {
    getProveedores
}