module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const SchoolData = app.model.define('schoolData', {
        brieflntroduction: STRING,
        address: STRING,
    })
    return SchoolData ;
}