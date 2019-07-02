'use strict';

const Controller = require('egg').Controller;

// 班级
class ClazzsController extends Controller {
  async index() {
    const clazzsList = await this.ctx.service.clazzsList.getclazzsList();
    this.ctx.body = clazzsList;  
  }
}

module.exports = ClazzsController;
