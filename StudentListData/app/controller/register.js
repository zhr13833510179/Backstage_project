'use strict';

const Controller = require('egg').Controller;

class RegisterController extends Controller {
    async get() {
        const list = await this.ctx.service.regter.getregister();
        this.ctx.body = list;
    }
}

module.exports = RegisterController;
