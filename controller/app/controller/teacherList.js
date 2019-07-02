'use strict';

const Controller = require('egg').Controller;

// 教师列表
class TeacherListController extends Controller {
  async get() {
    const teacherList = await this.ctx.service.teacherList.getteacherlist();
    this.ctx.body = teacherList;
  }
  async create() {
    const teacherList = await this.ctx.service.teacherList.insertteacherlist();
    this.ctx.body = teacherList
  }
  async destroy() {
    const teacherList = await this.ctx.service.teacherList.deleteteacherlist();
    this.ctx.body = teacherList

  }
  async update() {
    const teacherList = await this.ctx.service.teacherList.putteacherlist();
    this.ctx.body = teacherList
  }
}

module.exports = TeacherListController;