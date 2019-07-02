'use strict';

const Controller = require('egg').Controller;

// 成绩列表
class SuccessController extends Controller {
  async get() {
    const successList = await this.ctx.service.successList.getsuccesslist();
    this.ctx.body = successList;
  }
  async create() {
    const successList = await this.ctx.service.successList.insertsuccesslist();
    this.ctx.body = successList
  }
  async destroy() {
    const successList = await this.ctx.service.successList.deletesuccesslist();
    this.ctx.body = successList
  }
  async update() {
    const successList = await this.ctx.service.successList.putsuccesslist();
    this.ctx.body = successList
  }
}

module.exports = SuccessController;