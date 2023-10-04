//config settings
module.exports = {
    //Data base configuration
    HOST: process.env.HOST || '192.168.5.142', //Host IP 
    USER: process.env.USER || 'rep', //db user
    PASSWORD: process.env.PASSWORD || '', //db password
    DATABASE_NAME: process.env.DATABASE_NAME || 'repuestos' //database name
}