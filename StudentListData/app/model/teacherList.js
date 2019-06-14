module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const TeacherList = app.model.define('teacherList', {
        job: STRING,
        teacherlnformation: STRING,
    })
    return TeacherList ;
}