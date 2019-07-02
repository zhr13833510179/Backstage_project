module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Personaldata = app.model.define('personaldata', {
        mailbox: STRING,
        address: STRING,
        accountPassword: STRING,
        personallnformation: STRING,

    })
    
    return Personaldata ;
}