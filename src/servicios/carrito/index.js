const logger = require("../../config/logger");
const config = require("../../config/index");
const mailer = require("../../config/mailer");
const CarritoMongoDAO = require("../carrito/dao/CarritoMongoDAO");
//const ClienteDTO = require('../../models/DTO/ClienteDTO');
class Carritos {

    constructor() {
        this.dao = this.getDao();
    }

    getDao = () => {
        return new CarritoMongoDAO();
    }

    getById = async (id) => {
        return (async () => {
            const pedido = await this.dao.getById(id);
            return pedido;
        })()
    }

    save = async (objeto) => {
        // const dto = new ClienteDTO(objeto);
        const newPedido = await this.dao.save(objeto);
        await this.enviarEmailPedido(newPedido);
        //return new ClienteDTO(newProducto);
        return newPedido
    }

    enviarEmailPedido = async (newPedido) => {
        const {items, buyer} = newPedido
        let msg = `<div><h2>Felicidades! ${buyer.nombre} Compraste:</h2><ul>`;
        msg = msg + items.map(x => {
            return `<li>${x.producto}: ${x.cantidad} = $${x.cantidad * x.precio}</li>`
        });
        msg = msg + "</ul></div>";
        const mailOptions = {
            from: 'no-reply@emorfy.com',
            to: 'domenica.walker25@ethereal.email',
            subject: `E-Morfy: Hemos recibido su pedido!! `,
            html: msg
        };
        const responseMailer = await mailer.sendMail(mailOptions);
        logger.info("mailer", responseMailer);
    }
}

module.exports = new Carritos();


