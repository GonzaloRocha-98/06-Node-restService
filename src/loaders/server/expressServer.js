//configuracion de como levantar express

const express = require('express')
const config = require('../../config');
const morgan = require('morgan');


class ExpressServer{

    constructor(){
        this.app = express();
        this.port = config.port;
        this.basePath = ${config.api.prefix};
        this._middlewares();
        this._routes();
    }

    _middlewares(){
        this.app.use(morgan('tiny')); //loguea por consola las entradas que va teniendo la api
        this.app.use(express.json());
    }

    _routes(){  //todo lo que va a entrar por el /users

        this.app.head("/status", (req,res) => {
            res.status(200).end();
        })    //ruta para verificar que la app esta viva 

        this.app.use(`${this.basePath}/users`, require('../../routes/users'));
    }

    async start(){
        this.app.listen(this.port, (error)=>{
            if(error){
                console.log(error);
                process.exit(1);
                return;
            }
        })
    }
}

module.exports = ExpressServer