const logger = require("../../config/logger");
const config = require("../../config/index");
const ClienteMongoDAO = require("./dao/ClienteMongoDAO");
const ClienteDTO = require('../../models/DTO/ClienteDTO');
class Clientes {

    constructor() {
        this.dao = this.getDao();
    }

    getDao = () => {
        return new ClienteMongoDAO();
    }

    getBy = (campo, valor) => {
        return (async () => {
            let products;
            if (campo && valor) {
                products = await this.dao.getBy(campo, valor);

            } else {
                products = await this.dao.getAll();
            }
            return products.map(product => new ClienteDTO(product));
        })();
    }

    getAll = () => {
        return (async () => {
            const products = await this.dao.getAll();
            return products.map(product => new ClienteDTO(product));
        })();
    }

    deleteById = async (id) => {
       const a = await this.dao.deleteById(id);
       return a;
    }

    deleteAll = async () => {
        await this.dao.deleteAll();
    }

    getById = async (id) => {
        return (async () => {
            const product = await this.dao.getById(id);
            return new ClienteDTO(product);
        })()
    }

    save = async (objeto) => {
        const dto = new ClienteDTO(objeto);
        const newProducto = await this.dao.save(dto.getCliente());
        return new ClienteDTO(newProducto);
    }
}

module.exports = new Clientes();


