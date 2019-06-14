module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const StudentList = app.model.define('studentList', {
        clazzs: STRING,
        students: STRING,
        studentlnformation: STRING,

    })
    return StudentList;
}