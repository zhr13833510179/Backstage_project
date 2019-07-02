'use strict';

const Controller = require('egg').Controller;

// 账号密码
class Account_PasswordController extends Controller {
  async index() {
    const Account_Password = await this.ctx.service.Account_Passwordlist.getAccount_Passwordlist
    this.ctx.body = Account_Password
  }
}

module.exports = Account_PasswordController;
