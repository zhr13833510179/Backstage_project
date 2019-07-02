module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const TeacherList = app.model.define('teacherList', {
        job: STRING,
    })
    TeacherList.associate = function () {
        app.model.TeacherList.belongsTo(app.model.ClazzsList, {  //设置外键
            foreignKey: 'clazzsList_id',
            as: 'clazzsList'
        })
    }
    return TeacherList ;
}