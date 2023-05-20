const db = require("../models");
const ROLES = db.ROLES;
const User = db.user;
checkDuplicateEmail = (req, res, next) => {
    // Username
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(401).send({
                message: "El email ya se encuentra en uso"
            });
            return;
        }
        next()
    });
};
checkPasswordMatching = (req, res, next) => {
    if (req.body.password != req.body.cpassword) {
        res.status(401).send({
            error: "Contraseña no coincide con verificación"
        });
        return;
    }
    next()
};
checkParams = (req, res, next) => {
    if (req.url.includes("login")) {
        if (req.body.password == null || req.body.email == null) {
            res.status(401).send({
                error: "Parametros incompletos para la operación"
            });
            return;
        }
        next()
    }
    else {
        if (req.body.password == null || req.body.cpassword == null || req.body.email == null) {
            res.status(401).send({
                error: "Parametros incompletos para la operación"
            });
            return;
        }
        next()
    }
};

const verifySignUp = {
    checkDuplicateEmail,
    checkPasswordMatching,
    checkParams
};
module.exports = verifySignUp;