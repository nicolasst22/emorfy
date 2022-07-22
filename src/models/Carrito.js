const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarritoSchema = new Schema(
    {
        items: [],
        buyer: {},
        timestamp: Date
    }
)

const Carrito = mongoose.model("compras", CarritoSchema);
module.exports = {
    Carrito
}