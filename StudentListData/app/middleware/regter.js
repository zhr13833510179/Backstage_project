module.exports = () => {
    return async function init(ctx, next) {

        //判断前台用户是否登录   如果登录可以进入 （ 去结算  用户中心）    如果没有登录直接跳转到登录

        var egg_mysql = ctx.service.cookies.get('egg_mysql');

        if (egg_mysql && egg_mysql.name && egg_mysql.pass) {
            //判断数据库里面有没有当前用户                
            var userResutl = await ctx.model.User.find({ "name": egg_mysql.name, "pass": egg_mysql.pass });

            if (userResutl && userResutl.length > 0) {
                //注意
                await next();

            } else {
                ctx.redirect('/login');
            }
        } else {

            ctx.redirect('/login');
        }


    };
};