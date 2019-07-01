'use strict';

const Controller = require('egg').Controller;

class ClazzlistController extends Controller {
    async get() {
        const clazzList = await this.ctx.service.clazz.getclazzlist();
        this.ctx.body = clazzList
    }
    async create() {
        const clazzList = await this.ctx.service.clazz.insertclazz();
        this.ctx.body = clazzList
    }
    async destroy() {
        const clazzList = await this.ctx.service.clazz.deleteclazz();
        this.ctx.body = clazzList
    }
    async post() {
        const clazzList = await this.ctx.service.clazz.putclazz();
        this.ctx.body = clazzList
    } 
}

module.exports = ClazzlistController;
