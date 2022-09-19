const nodeMailer = require('nodemailer')
const sendMail = (to, subject, message) => {
    const transporter = nodeMailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: false,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    })
    const options = {
        from: process.env.EMAIL,
        to: to,
        subject: subject,
        html: message,
    }
    return transporter.sendMail(options)
}
module.exports = { sendMail }
