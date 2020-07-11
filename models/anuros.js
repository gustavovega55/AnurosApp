const mongoose = require('mongoose')
const Schema = mongoose.Schema

let anurosSchema = Schema({

    id: Number,
    nombre: String,
    especie: String,
    region: String,
    imagen: String
});

module.exports = mongoose.model("Anuros", anurosSchema);
