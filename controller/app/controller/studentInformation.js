'use strict';

const Controller = require('egg').Controller;

class StudentInformationController extends Controller {
  async index() {
    const studentInformationList = await this.ctx.service.studentInformationList.getstudentInformationList();
    this.ctx.body = studentInformationList;   
  }
}

module.exports = StudentInformationController;
