const express = require("express");
const path = require("path")
const config = require("./src/config")
const expressSession = require("express-session")
const cookieParser = require("cookie-parser");
const { Server: HttpServer } = require("http");
const logger = require("./src/config/logger");
const args = require("./src/config/yargs")
const app = express();
const http = new HttpServer(app);
const MINUTOS = config.MINUTOS_SESSION;
const MongoStore = require("connect-mongo")
const routes = require("./src/router")
const cors = require('cors')

app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
const mongoStoreConfig = {
    mongoUrl: config.MONGO_URI
}
console.log(mongoStoreConfig)
app.use(cors())
app.use(expressSession({
    secret:  config.SECRET || "probando",
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create(mongoStoreConfig),
    cookie: {
        maxAge: 1000 * 60 * MINUTOS
    }
}))
app.use("/", express.static(path.join(__dirname, "public")))
app.use("/api", routes);

http.listen(args.port, err => {
    logger.info(`Server iniciado ${config.PORT} `)
})