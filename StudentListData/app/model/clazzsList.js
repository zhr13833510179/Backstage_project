module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const ClazzsList = app.model.define('clazzsList', {
        name: STRING,
    })
    return ClazzsList ;
}