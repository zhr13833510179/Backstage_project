'use strict';

const Controller = require('egg').Controller;

class ClazzlistController extends Controller {
    async get() {
        const clazzList = await this.ctx.service.clazzlist.getclazz();
        this.ctx.body = clazzList
    }
    async post() {
        const clazzList = await this.ctx.service.clazzlist.postclazz();
        this.ctx.body = clazzList
    }
    async delete() {
        const clazzList = await this.ctx.service.clazzlist.deleteclazz();
        this.ctx.body = clazzList
    }
    async put() {
        const clazzList = await this.ctx.service.clazzlist.putclazz();
        this.ctx.body = clazzList
    } 
}

module.exports = ClazzlistController;
