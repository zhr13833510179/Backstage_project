module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const ClazzsList = app.model.define('clazzsList', {
        classes: STRING,
        teacher: STRING
    })
    return ClazzsList;
}