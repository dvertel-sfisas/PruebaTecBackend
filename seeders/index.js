const db = require("../models");
const bcrypt = require("bcryptjs");

async function seederUser() {
    try {
        const User = db.user;
        const Parent = db.parent;
        const Children = db.children;
        let usr = await User.create({
            email: "admin@correo.com",
            password: bcrypt.hashSync("123456", 8)
        });
        let p1 = await Parent.create({
            description: "parent admin",
            user_id: usr.id
        });
        let p2 = await Parent.create({
            description: "parent admin 2",
            user_id: usr.id
        });
        let ch1 = await Children.create({
            name: "children admin 1",
            parent_id: p1.dataValues.id
        });
        let ch2 = await Children.create({
            name: "children admin 2",
            parent_id: p1.dataValues.id
        });
        console.log("Insertado usuario inicial")
        return "Insertado usuario inicial"
    } catch (error) {
        console.log("error", error)
        return error
    }
}

module.exports = {
    seederUser: seederUser
};



