'use strict';

const Controller = require('egg').Controller;

class SuccessController extends Controller {
    async index() {
        const successList = await this.ctx.service.success.getsuccess();
        this.ctx.body = successList
      }
    async post() {
        const successList = await this.ctx.service.success.postsuccess();
        this.ctx.body = successList
    }
    async delete(){
        const successList = await this.ctx.service.success.deletesuccess();
        this.ctx.body = successList
    }
    async put(){
        const successList = await this.ctx.service.success.putsuccess();
        this.ctx.body = successList
    }
}

module.exports = SuccessController;