const { request, response } = require('express');
const { validationResult } = require('express-validator');


const validarCampos = ( req, res, next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}

const validarContraseña = (req = request, res = response, next) => {

    const contrasena = req.header('contrasena');

    if( !contrasena ){
        return res.status(401).json({
            msg: 'No hay contrasena en la petición'
        });
    }

    if( contrasena !== process.env.contrasena){
        return res.status(401).json({
            msg: 'Contrasena Incorrecta'
        });
    }

    next()

}

const validarNombreRutina = (req = request, res = response, next) => {

    const nombre = req.header('nombre');

    if( !nombre ){
        return res.status(401).json({
            msg: 'No hay nombre en la petición'
        });
    }

    next()
}


module.exports = {
    validarCampos,
    validarContraseña,
    validarNombreRutina
}