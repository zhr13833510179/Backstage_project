module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Success = app.model.define('success', {
        everyExam: STRING,
        achievement: STRING,
    })
    
    return Success ;
}