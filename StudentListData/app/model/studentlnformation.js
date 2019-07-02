module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Studentlnformation = app.model.define('studentlnformation', {
        name: STRING,

    })
    Studentlnformation.associate = function () {
        app.model.Studentlnformation.belongsTo(app.model.StudentList, {  //设置外键
            foreignKey: 'studentList_id',
            as: 'studentList'
        })
    }
    return Studentlnformation;
}