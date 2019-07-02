'use strict';

const Controller = require('egg').Controller;

class SchoolDataController extends Controller {
    async get() {
        const schoolData = await this.ctx.service.schoolData.getschoolData();
        this.ctx.body = schoolData
    }
    async create() {
        const schoolData = await this.ctx.service.schoolData.insertschoolData();
        this.ctx.body = schoolData
    }
    async destroy() {
        const schoolData = await this.ctx.service.schoolData.deleteschoolData();
        this.ctx.body = schoolData
    }
    async post() {
        const schoolData = await this.ctx.service.schoolData.putschoolData();
        this.ctx.body = schoolData
    }
}


module.exports = SchoolDataController;
