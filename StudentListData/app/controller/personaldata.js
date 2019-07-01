'use strict';

const Controller = require('egg').Controller;

class PersonaldataController extends Controller {
    async get() {
        const Personaldata = await this.ctx.service.Personaldata.getPersonaldata();
        this.ctx.body = Personaldata
    }
    async create() {
        const Personaldata = await this.ctx.service.Personaldata.insertPersonaldata();
        this.ctx.body = Personaldata
    }
    async destroy() {
        const Personaldata = await this.ctx.service.Personaldata.deletePersonaldata();
        this.ctx.body = Personaldata
    }
    async post() {
        const Personaldata = await this.ctx.service.Personaldata.putPersonaldata();
        this.ctx.body = Personaldata
    } 
}

module.exports = PersonaldataController;
