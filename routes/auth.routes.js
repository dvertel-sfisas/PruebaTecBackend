const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");
module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-app-token, Origin, Content-Type, Accept");
        next();
    });
    app.post("/register",
        [
            verifySignUp.checkParams,
            verifySignUp.checkDuplicateEmail,
            verifySignUp.checkPasswordMatching
        ],
        controller.signup);
    app.post("/login",
        [
            verifySignUp.checkParams,
        ]
        , controller.signin);
};