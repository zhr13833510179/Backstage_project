'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hello,欢迎来到我们的学生管理系统 ';
  }
}

module.exports = HomeController;
