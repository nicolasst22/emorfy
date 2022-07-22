const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductoSchema = new Schema(
    {
        nombre: {
            type: String,
            trim: true,
            required: [true, "El nombre es requerido"]
        },
        descripcion: String,
        imagen: String,
        precio: {
            type: Number,
            required: [true, "El precio es requerido"]
        },
        categoria: String,
    }
)

const Producto = mongoose.model("productos", ProductoSchema);
module.exports = {
    Producto
}