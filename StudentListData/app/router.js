'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/personaldata',controller.personaldata.get);
  router.post('/personaldata',controller.personaldata.create);
  // router.delete('/deletepersonaldata:id', controller.personaldata.destroy);
  router.put('/personaldata:id', controller.personaldata.update);
};
