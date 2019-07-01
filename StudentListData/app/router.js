'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/getregister', controller.register.get); 
  router.get('/course',controller.course.create)
  
};
