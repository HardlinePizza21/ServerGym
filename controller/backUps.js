const {response, request} = require('express');
const Rutina = require('../Models/rutina')


const almacenarRutina = async(req = request, res = response) => {

    const contrasena = req.header('contrasena');

    const rutina = req.header('rutina');

    const nombre = req.header('nombre');

    const data = {
        nombre,
        rutina,
    }

    const rutinaBackUp = await new Rutina(data);

    await rutinaBackUp.save();

    const rutinas = await Rutina.find();

    res.json({

        rutinas

    })

}

module.exports = {
    almacenarRutina
}
