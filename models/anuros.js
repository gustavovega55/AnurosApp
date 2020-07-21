const mongoose = require('mongoose')
const Schema = mongoose.Schema

let anurosSchema = Schema({

    id: Number,
    nombre: String,
    especie: String,
    sexo: String,
    ubicacion: String,
    imagen: String,
    canto: String
});

module.exports = mongoose.model("Anuros", anurosSchema);
