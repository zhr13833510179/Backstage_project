'use strict';

const Controller = require('egg').Controller;

class StudentListController extends Controller {
  async index() {
    const studentList = await this.ctx.service.studentlist.getstudent();
    this.ctx.body = studentList
  }
  async post() {
    const studentList = await this.ctx.service.studentlist.poststudent();
    this.ctx.body = studentList
  }
  async delete(){
    const studentList = await this.ctx.service.studentlist.deletestudent();
    this.ctx.body = studentList
  }
  async put(){
    const studentList = await this.ctx.service.studentlist.putstudent();
    this.ctx.body = studentList
  }
}

module.exports = StudentListController;