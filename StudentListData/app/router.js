'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/clazzList',controller.clazzlist.index);
  router.post('/clazzList',controller.clazzlist.post);
};
