module.exports = async (sequelize, Sequelize) => {
    const Children = sequelize.define("childrens", {
        name: {
            type: Sequelize.STRING
        },
        parent_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'parents',
                key: 'id'
            }
        }
    });

    await Children.sync();

    Children.associate = models => {
        Children.belongsTo(models.Parent, {
            foreignKey: 'parent_id',
            onDelete: 'CASCADE'
        });
    };

    return Children;
};
