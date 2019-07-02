const Service = require('egg').Service;

class SuccessService extends Service {
  async getsuccess() {
    const successList = await this.app.model.Success.findAll();
    return  successList;
  }
  async postsuccess(){
    let name = this.ctx.request.body;
    const sudent = {
        everyExam:name.name,
        achievement:name.names
    }
    await this.app.model.Success.create(sudent);
  }
  async deletesuccess(){
    let id = this.ctx.params.id;
    const deletesuccessList = await this.app.model.Success.findOne({
      where:{
        id:id
      }
    })
    deletesuccessList.destroy();
    const successList = await this.app.model.Success.findAll();
    return  successList;
  }
  async putsuccess(){
    let id = this.ctx.params.id;
    let putsuccessname = this.ctx.request.putsuccessname;
    let row = {
      name:putsuccessname
    },  
        options={
          where:{
            id:id
          }
        }
        await this.app.model.Success.update(row,options);
        const successList = await this.app.model.Success.findAll();
        return  successList;
  }
}
module.exports = SuccessService;