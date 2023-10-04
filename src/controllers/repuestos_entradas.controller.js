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

//Retorna las entradas actuales
const getEntradas = async (req,res) => {
    try{
        const response = await pool.query('select * from entradas');
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        res.json(e);
    }

};

//Retorna entrada por ID

const getEntradaById = async (req,res) => {
    try{
//res.send('Entrada ID '+ req.params.id);
const id = req.params.id;
const response = await pool.query('SELECT * FROM entradas WHERE id =$1', [id])
console.log(response);
res.json(response.rows);}
    catch(e){
        console.log(e);
        res.json(e);    
    }
}


//Inserta una entrada
const createEntrada = async (req,res) => {
    try{
    const { codigorepuesto, codigocompania, preciocompra} =req.body;

    const response = await pool.query('INSERT INTO entradas (codigorepuesto,codigocompania,fechacompra,preciocompra) VALUES ($1,$2,CURRENT_TIMESTAMP,$3)',[codigorepuesto, codigocompania,preciocompra]);
    console.log(response);
    res.json({
        message: 'Entrada Creada',
        body: {
            entrada: {codigorepuesto, codigocompania,preciocompra}
        }
    });
    } catch(e){
        console.log(e);
        res.json(e);       
    }

};

//Actualizar una entrada
const updateEntrada = async (req,res) =>{
    try {
    const id = req.params.id;
    const {codigorepuesto, codigocompania, preciocompra } = req.body;
    const response = await pool.query('UPDATE entradas SET codigorepuesto =$1, codigocompania = $2, preciocompra = $3 WHERE id =$4',[
        codigorepuesto,
        codigocompania,
        preciocompra,
        id
    ]);
    
    console.log(response);
    res.json ('Entrada actualizada exitosamente');
}
catch (e){
    console.log(e);
    res.json(e); 
}
}


//Borra una entrada

const deleteEntrada = async(req,res) => {
    try {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM entradas WHERE id =$1', [id]);
    console.log(response);
    res.json(`Entrada numero ${id} borrada exitosamente`);
    } catch(e){
        console.log(e);
        res.json(e);
    }
};


module.exports = {
    getEntradas,
    getEntradaById,
    createEntrada,
    deleteEntrada,
    updateEntrada
}