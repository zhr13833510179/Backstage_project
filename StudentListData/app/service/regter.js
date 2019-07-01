const Service = require('egg').Service;

class RegterService extends Service {
  async getregister() {
    const regter = {id:1,name:"123",pass:"456"};
    return { regter };
  }
  async reg() {
    var md5=require('md5-node');
    const body = this.ctx.request.body;
    const reg = {
        name:body.name,
        pass:md5(body.pass)
    }
    await this.app.model.Reg.create(reg);
    this.ctx.redirect("/")
}

}

module.exports = RegterService;

