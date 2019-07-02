'use strict';

const Controller = require('egg').Controller;

// 登录
class RegisterController extends Controller {
  async index() {
    const registerList = await this.ctx.service.registerlist.getregister();
    this.ctx.body = registerList;    
  }
}

module.exports = RegisterController;
