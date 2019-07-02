const Service = require('egg').Service;

class StudentlistService extends Service {
  async getstudent() {
    const studentList = await this.app.model.StudentList.findAll({
      include: [{
        model: this.app.model.ClazzsList,
        as: 'clazzsList',
      }]
    });
    return studentList;
  }
  async poststudent() {
    let name = this.ctx.request.body;
    const sudent = {
      students: name.name,
      clazzsList_id: name.names
    }
    await this.app.model.StudentList.create(sudent);
  }
  async deletestudent() {
    let id = this.ctx.params.id
    const deletestudentList = await this.app.model.StudentList.findOne({
      where: {
        id: id
      }
    });
    deletestudentList.destroy();
    studentList = await this.app.model.StudentList.findAll()
    return studentList
   }
   async putstudent(){
     let id = this.ctx.params.id
     let putstudentname = this.ctx.request.putstudentname
     let row = {
       name:putstudentname
     }, 
        options = {
          where:{
            id:id
          }
        }
    await this.app.model.StudentList.uptdate(row,options)
    const studentList = await this.app.model.StudentList.findAll()
    return studentList
   }
}


module.exports = StudentlistService;