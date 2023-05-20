module.exports = async (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });
    await User.sync();
    return User;
};