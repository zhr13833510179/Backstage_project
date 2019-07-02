module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const StudentList = app.model.define('studentList', {
        students: STRING,

    })
    StudentList.associate = function () {
        app.model.StudentList.belongsTo(app.model.ClazzsList, {  //设置外键
            foreignKey: 'clazzsList_id',
            as: 'clazzsList'
        })
    }
    return StudentList;
}