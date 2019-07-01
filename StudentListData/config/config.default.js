/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1560388661296_5514';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.sequelize = {
    dialect: 'mysql',
    database: 'egg_mysql',  //数据库名
    host: 'localhost',
    port: '3306',
    username: 'root',  //用户名
    password: '123456',      //密码
    // operatorsAliases: false,
  }

 //跨域配置
 config.security = {
  csrf: {
    enable: false,
    ignoreJSON: true
  },
  domainWhiteList: ['http://www.baidu.com', 'http://localhost:8080','http://127.0.0.1:8080'], //配置白名单
};

config.cors = {
  // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
  return {
    ...config,
    ...userConfig,
  };
};
