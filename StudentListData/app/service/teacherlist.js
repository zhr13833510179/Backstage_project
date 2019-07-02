const Service = require('egg').Service;

class TeacherlistService extends Service {
  async getteacherlist() {
    const teacherlist = await this.app.model.TeacherList.findAll({
        include: [{
          model: this.app.model.ClazzsList,
          as: 'clazzsList',
        }]
      });
    return  teacherlist;
  }
  async postteacherlist(){
    let name = this.ctx.request.body;
    const sudent = {
        job:name.name,
        clazzsList_id:name.names
    }
    await this.app.model.TeacherList.create(sudent);
  }
  async deleteteacherlist(){
    let id = this.ctx.params.id
    const deleteteacherlist = await this.app.model.TeacherList.findOne({
      where:{
        id:id
      }
    });
    deleteteacherlist.destroy();
    const teacherlist = await this.app.model.TeacherList.findAll();
    return teacherlist
  }
  async putteacherlist(){
    let id = this.ctx.params.id
    let putteacherlistname = this.ctx.request.putteacherlistname
    let row = {
      name:putteacherlistname
    },  
        options = {
          where:{
            id:id
          }
        }
    await this.app.model.TeacherList.update(row,options)
    const teacherlist = await this.app.model.TeacherList.findAll();
    return teacherlist
  }
}

module.exports = TeacherlistService;