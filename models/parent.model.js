const { User } = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Parent = sequelize.define("parents", {
        description: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    });

    Parent.associate = models => {
        Parent.belongsTo(models.User, {
            foreignKey: 'user_id',
            onDelete: 'CASCADE'
        });
    };

    return Parent;
};
