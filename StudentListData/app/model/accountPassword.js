module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const AccountPassword = app.model.define('accountPassword', {
        usename: STRING,
        password: STRING,
    })
    AccountPassword.associate = function () {
        app.model.AccountPassword.belongsTo(app.model.Personaldata, {  //设置外键
            foreignKey: 'Personaldata_id',
            as: 'Personaldata'
        })
    }
    return AccountPassword ;
}