module.exports = app => {
    const {
        STRING
    } = app.Sequelize;

    const Reg = app.model.define('reg', {  //sequelize会自动创建主键
        name: STRING,
        pass: STRING,
    })

    return Reg;
}