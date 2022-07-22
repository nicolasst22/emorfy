const mongoose = require('mongoose');
const config = require("../../../config/index")
const connectionString = config.MONGO_URI
const connector = mongoose.connect(connectionString, {})
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));
const MongoDAO = require('../../../dao/MongoDao');
const {Cliente}  = require('../../../models/Cliente');

class ClientesMongoDAO extends MongoDAO {
    constructor() {
        super(Cliente)
    }
    
}

module.exports = ClientesMongoDAO;