const { Schema, model } = require('mongoose');

const rutinaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    rutina: {
        type: JSON,
        required: [true, 'Que vas a guardar entonces gil']
    }
    
});

rutinaSchema.methods.toJSON = function() {
    const { __v, _id, ...data } = this.toObject();
    return data;
}


module.exports = model( 'Rutina', rutinaSchema );