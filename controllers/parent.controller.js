const db = require("../models");
const User = db.user;

exports.parents = async (req, res) => {
    try {
        let usr = await User.findByPk(req.userId)
        let parents = []
        await usr.getParents()
            .then(parentsIndex => {
                parentsIndex.forEach(parent => {
                    parents.push({
                        "id": parent.dataValues.id,
                        "description": parent.dataValues.description,
                    })
                });
                //arrayParents = parents
            })
            .catch(error => {
                console.error("Error al obtener los padres:", error);
            });

        return res.status(200).send({ parents });
    }
    catch (err) {
        return res.status(401).send({ error: "OK..." });
    }

};

