'use strict';

const Controller = require('egg').Controller;

class TeacherListController extends Controller {
    async index() {
        const teacherlist = await this.ctx.service.teacherlist.getteacherlist();
        this.ctx.body = teacherlist
      }
    async post() {
        const teacherlist = await this.ctx.service.teacherlist.postteacherlist();
        this.ctx.body = teacherlist
    }
    async delete(){
        const teacherlist = await this.ctx.service.teacherlist.deleteteacherlist();
        this.ctx.body = teacherlist
    }
    async put(){
        const teacherlist = await this.ctx.service.teacherlist.putteacherlist();
        this.ctx.body = teacherlist
    }
}

module.exports = TeacherListController;