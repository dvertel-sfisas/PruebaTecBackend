const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.parent = require("../models/parent.model.js")(sequelize, Sequelize);
db.children = require("../models/children.model.js")(sequelize, Sequelize);

// Establece la relación entre los modelos
db.user.hasMany(db.parent, { foreignKey: 'user_id', as: 'parents' });
db.parent.belongsTo(db.user, { foreignKey: 'user_id', as: 'user' });

// Establece la relación entre los modelos
db.parent.hasMany(db.children, { foreignKey: 'parent_id', as: 'parents' });
db.children.belongsTo(db.parent, { foreignKey: 'parent_id', as: 'parent' });

module.exports = db;
