const controller = require("../controllers/children.controller");
const auth = require('../middleware/authjwt')
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-app-token, Origin, Content-Type, Accept");
        next();
    });
    app.get("/children/:parentId", auth.verifyToken, controller.childrens);
};