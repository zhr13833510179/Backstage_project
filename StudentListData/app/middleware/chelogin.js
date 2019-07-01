module.exports = () => {
    return async function (ctx, next) {
        if (ctx.session.register) {
            await next();
        } else {
            await ctx.redirect("/")
        }
    }
}