const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../DB/config');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;

        //Conexion base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use('/api', require('../routes/backUps'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }


}

module.exports = Server


