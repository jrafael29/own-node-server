const nodemailer = require('nodemailer');

class Mailer{
    #transport;

    constructor() {
        this.#transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            service: "gmail",
            auth: {
                user: "jrafael5758@gmail.com",
                pass: "kfssveubzifnzdpd"
            }
        })
    }

    async sendEmail(message){
        return await this.#transport.sendMail({
            from: "Jose Rafael <jafael5758@gmail.com>",
            to: "beatriz-felete@tuamaeaquelaursa.com",
            subject: message,
            text: "testando",
            html: `<h1>${message}</h1>`
        })
    }

}

module.exports = Mailer;