'use strict';

const Controller = require('egg').Controller;

class SchoolDataController extends Controller {
    // async index() {
    //     const schoolData = await this.ctx.service.schoolData.getschoolData();
    //     this.ctx.body = schoolData
    // }
    // async inde() {
    //     const briefintroduction = await this.ctx.service.briefintroduction.getbriefintroduction();
    //     this.ctx.body = briefintroduction
    // }
    // async ind() {
    //     const address = await this.ctx.service.address.getaddress();
    //     this.ctx.body = address
    // }
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
