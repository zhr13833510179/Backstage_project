'use strict';

const Controller = require('egg').Controller;

class CourseController extends Controller {

    async get() {
        const course = await this.ctx.service.course.getcourse();
        this.ctx.body = course
    }
    async create() {
        const course = await this.ctx.service.course.insertcourse();
        this.ctx.body = course
    }
    async destroy() {
        const course = await this.ctx.service.course.deletecourse();
        this.ctx.body = course
    }
    async post() {
        const course = await this.ctx.service.course.putcourse();
        this.ctx.body = course
    }  
}

module.exports = CourseController;
