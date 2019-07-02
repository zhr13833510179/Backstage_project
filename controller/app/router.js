'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/', controller.home.index);
  router.get('/register', controller.register.index);                   // 登录
  router.get('/Account_Password', controller.Account_Password.index)    
  router.get('/Interception', controller.Interception.index)

  // 学生列表
  router.get('/studentList', controller.studentList.get)
  router.post('/insertstudent', controller.student.create);
  router.delete('/deletestudent:id', controller.student.destroy);
  router.put('/putstudent:id', controller.student.update);

  // 成绩表
  router.get('/success', controller.success.get)
  router.post('/insertsuccess', controller.student.create);
  router.delete('/deletesuccess:id', controller.student.destroy);
  router.put('/putsuccess:id', controller.student.update);

  // 教师表
  router.get('/teacherList', controller.teacherList.get)
  router.post('/insertteacher', controller.student.create);
  router.delete('/deleteteacher:id', controller.student.destroy);
  router.put('/putteacher:id', controller.student.update);

  router.get('./clazzsList', controller.clazzsList.index)
  router.get('/studentsList', controller.studentsList.index)
  router.get('/studentInformationList', controller.studentInformationList.index)

};
