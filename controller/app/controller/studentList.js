'use strict';

const Controller = require('egg').Controller;

// 学生列表
class StudentListController extends Controller {
  async get() {
    const studentList = await this.ctx.service.studentList.getstudentlist();
    this.ctx.body = studentList;
  }
  async create() {
    const studentList = await this.ctx.service.studentList.insertstudentlist();
    this.ctx.body = studentList
  }
  async destroy() {
    const studentList = await this.ctx.service.studentList.deletestudentlist();
    this.ctx.body = studentList
  }
  async update() {
    const studentList = await this.ctx.service.studentList.putstudentlist();
    this.ctx.body = studentList
  }

}

module.exports = StudentListController;