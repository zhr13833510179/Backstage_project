'use strict';

const Controller = require('egg').Controller;

// 账号密码错误拦截
class InterceptionController extends Controller {
  async index() {
    const InterceptionList = await this.ctx.service.Interceptionlist.getInterceptionList
    this.ctx.body = InterceptionList
  }
}

module.exports = InterceptionController;
