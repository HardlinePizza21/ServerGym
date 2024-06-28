const {response, request} = require('express');

const almacenarRutina = (req = request, res = response) => {

    const contrasena = req.header('contrasena');

    const rutina = req.header('rutina')

    console.log(contrasena)
    console.log(rutina)

    res.json({
        contrasena,
        rutina
    })

}

module.exports = {
    almacenarRutina
}
