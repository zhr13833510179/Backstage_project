'use strict';

const Controller = require('egg').Controller;

class ClazzlistController extends Controller {
  async index() {
    const clazzList = await this.app.model.ClazzsList.findAll();
    console.log(clazzList)
    this.ctx.body = clazzList
  }
  async post() {
    let name = this.ctx.request.body;
    const sudent = {
        name:name.name
    }
    await this.app.model.ClazzsList.create(sudent);
    this.ctx.body = clazzList

  }
}

module.exports = ClazzlistController;
