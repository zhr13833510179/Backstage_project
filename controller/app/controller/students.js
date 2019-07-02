'use strict';

const Controller = require('egg').Controller;

class StudentsController extends Controller {
  async index() {
    const studentsList = await this.ctx.service.studentsList.getstudentsList();
    this.ctx.body = studentsList; 
  }
}

module.exports = StudentsController;
