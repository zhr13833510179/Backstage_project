const Service = require('egg').Service;

class ClazzlistService extends Service {
  async getclazz() {
    const clazzList = await this.app.model.ClazzsList.findAll();
    return clazzList;
  }
  async postclazz(){
    let name = this.ctx.request.body;
    const sudent = {
      classes:name.name,
      teacher:name.names
    }
    await this.app.model.ClazzsList.create(sudent);
  }
  async deleteclazz(){
    let id = this.ctx.params.id
    const clazz = await this.app.model.ClazzsList.findOne({
      where:{
        id:id
      }
    });
    const student = await this.app.model.StudentList.findAll({
      include:[{
        model:this.app.model.ClazzsList,
        as:'clazzsList'
      }],
      where:{
        clazzsList_id: id
      }
    });
    const clazzsList = await this.app.model.ClazzsList.findAll();
    if(student[0]){
      let tips = "班级中存在学生，不可删除班级"
      return tips
    } else{
      clazz.destroy();
      return clazzsList
    }
  }
  async putclazz() {
    let id = this.ctx.params.id
    let putclazzname = this.ctx.request.body
    let row = {
      classes:putclazzname.classes,
      teacher:putclazzname.teacher
    },
        options = {
          where:{
            id:id
          }
        }
      await this.app.model.ClazzsList.update(row,options);
      const clazzList = await this.app.model.ClazzsList.findAll();
      return clazzList
  }
}

module.exports = ClazzlistService;