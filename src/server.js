const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
const { seederUser } = require('../seeders');
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require("../models");
db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Db');
    seederUser();
});
app.get("/", (req, res) => {
    res.json({ message: "API REST - PRUEBA TECNICA" });
});

require('../routes/auth.routes')(app);
require('../routes/parent.routes')(app);
require('../routes/children.routes')(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor en linea en el puerto:  ${PORT}.`);
});
