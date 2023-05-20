const db = require("../models");
const User = db.user;
const Parent = db.parent;
const Children = db.children;

exports.childrens = async (req, res) => {
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
            })
            .catch(error => {
                console.error("Error al obtener los padres:", error);
            });
        let pId = req.params.parentId
        let searchParent = parents.find(p => {
            return p.id == pId
        })

        let prnt = await Parent.findByPk(searchParent.id)
        let childrens = await Children.findAll({
            where: {
                parent_id: prnt.id
            }
        });
        console.log('childrens', childrens)

        return res.status(200).send({ childrens });
    }
    catch (err) {
        return res.status(401).send({ error: err });
    }

};