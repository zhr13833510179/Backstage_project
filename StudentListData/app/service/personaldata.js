const Service = require('egg').Service;

class PersonaldataService extends Service {
    async getPersonaldata() {
        const personaldata = await this.app.model.Personaldata.findAll();
        return personaldata
    }
    async insertpersonaldata() {
        let mailboxs = this.ctx.request.body
        let address = this.ctx.request.body
        let accountPassword = this.ctx.request.body
        console.log(mailboxs)
        console.log(7777777)
        const personaldata = {
            mailbox: mailboxs.mailbox,
            address: address.address,
            accountPassword: accountPassword.accountPassword,
        }
        console.log("!!!!!!!!!!!!")
        await this.app.model.Personaldata.create(personaldata);

    }

    // async deletepersonaldata() {
    //     let id = this.ctx.params.id
    //     const personaldata = await this.app.model.Personaldata.findOne({
    //         where: {
    //             id: id
    //         }
    //     });
    //     const personaldata = await this.app.model.Personaldata.findAll({
    //         include: [{  //联查班级的数据
    //             model: this.app.model.personaldata,
    //             as: 'mailbox'
    //         }],
    //         where: {
    //             personaldata_id: id
    //         }
    //     });     
    //         clazz.destroy();
    //         return personaldata
        
    // }

    async putPersonaldata() {
        let id = this.ctx.params.id
        let mailboxs = this.ctx.request.body.mailboxs
        // let address = this.ctx.request.body.address
        // let accountPassword = this.ctx.request.body.accountPassword
        let row = {
            mailbox: mailboxs
            // address: address.address,
            // accountPassword: accountPassword.accountPassword,
        },
            options = {
                where: {
                    id: id
                }
            }
        await this.app.model.Personaldata.update(row, options);
        const personaldata = await this.app.model.Personaldata.findAll();
        return personaldata
    }
    //  async putclazz() {
    //     let id = this.ctx.params.id
    //     let putclazzname = this.ctx.request.body.putclazzname
    //     let row = {
    //         name: putclazzname
    //     },
    //         options = {
    //             where: {
    //                 id: id
    //             }
    //         }
    //     await this.app.model.Clazz.update(row, options);
    //     const clazzList = await this.app.model.Clazz.findAll();
    //     return clazzList
    // }
    
}

module.exports = PersonaldataService;