
const express = require("express");
const productoController = require("../controllers/api/ProductoController")
const clienteController = require("../controllers/api/ClienteController")
const carritoController = require("../controllers/api/CarritoController")
const api = express.Router();

api.get("/productos", productoController.listaProductos);
api.get("/productos/menu/:categoria?", productoController.getProductosByCategoria);
//api.get("/productos/:id", productoController.getProducto);
api.post("/productos", productoController.newProducto);
api.put("/productos/:id",productoController.updateProducto);
api.delete("/productos/:id",productoController.deleteProducto);
// api.get("/add/:id",productoController.addItem);
// api.get("/del/:prodId",productoController.deleteItem);
// api.post("/terminar",productoController.guardar);

api.post("/clientes/login", clienteController.login);
api.post("/clientes/register", clienteController.register);
api.post("/pedidos", carritoController.save);


module.exports = api;