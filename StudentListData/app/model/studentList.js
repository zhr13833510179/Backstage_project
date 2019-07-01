module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const StudentList = app.model.define('studentList', {
        clazzs: STRING,
        students: STRING,
        studentlnformation: STRING,

    })
    StudentList.associate = function () {
        app.model.StudentList.belongsTo(app.model.ClazzsList, {  //设置外键
            foreignKey: 'clazz_id',
            as: 'clazz'
        })
    }
    return StudentList;
}