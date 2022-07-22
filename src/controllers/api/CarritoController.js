const clientes = require("../../servicios/clientes");
const pedidos = require("../../servicios/carrito");

exports.save = async (req, res) => {
    const { items, buyer } = req.body;
    console.log(buyer)
    if (!items || !buyer || !buyer.email) {
        res.status(400).json({ message: 'Bad Request' })
    } else {
        const cliente = await clientes.getBy("email", buyer.email);
        console.log(cliente)
        if (!cliente[0]) {
            res.status(400).json({ message: 'User not exists' })
        }else{
            const nuevo = await pedidos.save(req.body)
            //const nuevo = {email, password, nombre, direccion};
            res.json(nuevo);
        }
    }
}