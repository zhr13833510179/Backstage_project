module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Course = app.model.define('course', {
        major: STRING,
        curriculum: STRING,
    })
    return Course ;
}