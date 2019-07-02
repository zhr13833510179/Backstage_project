'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
//班级列表增删改查
  router.get('/clazzList',controller.clazzlist.get);
  router.post('/clazzList',controller.clazzlist.post);
  router.delete('/deleteclazzList:id',controller.clazzlist.delete);
  router.put('/putclazzList:id',controller.clazzlist.put);
//学生列表增删改查
  router.get('/studentList',controller.studentList.index);
  router.post('/studentList',controller.studentList.post);
  router.delete('/deletestudentList:id',controller.studentList.delete);
  router.put('/putstudentList:id',controller.studentList.put);
//成绩列表增删改查
  router.get('/success',controller.success.index);
  router.post('/success',controller.success.post);
  router.delete('/deletesuccess:id',controller.success.delete);
  router.put('/putsuccess:id',controller.success.put);
//教师列表增删改查
 router.get('/teacherList',controller.teacherList.index);
 router.post('/teacherList',controller.teacherList.post);
 router.delete('/deleteteacherList:id',controller.teacherList.delete);
 router.put('/putteacherList:id',controller.teacherList.put);
};
