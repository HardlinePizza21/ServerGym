const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos,validarContraseña } = require('../middleware/validar-campos');
const { almacenarRutina } = require('../controller/backUps');

const router = Router();

router.get('/', [
    validarContraseña,
    validarCampos
],almacenarRutina)


module.exports = router;