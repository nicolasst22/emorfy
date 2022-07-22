const mongoose = require('mongoose');
const config = require("../config/index");
const connectionString = config.MONGO_URI
const connector = mongoose.connect(connectionString, {})
const db = mongoose.connection;
const logger = require("../config/logger")
db.on("error", console.error.bind(console, "MongoDB connection error"));

class MongoDAO {

    constructor(Model) {
        this.model = Model
    }

    save = async (objeto) => {
        const Model = this.model;
        console.log("model", Model)
        const obj = await this.getById(objeto._id || objeto.id);
        if (obj) {
            return await Model.updateOne({ "_id": (objeto._id || objeto.id) }, objeto)
        } else {
            return await Model.create(objeto);
        }
    }

    async getById(id) {
        const Model = this.model;
        const p = await Model.findById(mongoose.Types.ObjectId(id))
        return p;
    }

    async getAll() {
        const Model = this.model;
        return await Model.find({});
    }

    async deleteById(id) {
        const Model = this.model;
        return await Model.findByIdAndDelete({ "_id": id });
    }

    async deleteAll() {
        const Model = this.model;
        await Model.deleteMany({});
    }

    async getBy(campo, valor){
        const Model = this.model;
        return await Model.find({[campo]: {$eq: valor}})
    }
    // async getBy(campo, valor)  {
    // return (async () => {
    //     let products;
    //     if (campo && valor) {
    //         products = await this.dao.getBy(campo, valor);

    //     } else {
    //         products = await getAll();
    //     }
    //     return products.map(product => new ProductoDTO(product));
    // })();
// }

}

module.exports = MongoDAO;
