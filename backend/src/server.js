const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dotenv = require('dotenv')
const { sendMail } = require('./utils/mailer')
const cors = require('cors')
const db = require('./config/mongodb')
const router = require('./routers')
const multer = require('multer')
dotenv.config()
db.connectDB()
    .then(() => console.log('connect successfuly to database'))
    .then(() => bootServer())
    .catch((err) => {
        console.error(err)
        process.exit(1)
    })

const bootServer = () => {
    app.use(cors())
    app.use(express.json({ limit: '50MB' }))
    app.use(express.static('uploads'))
    app.post('/sendmail', async (req, res) => {
        try {
            const { to, subject, message, emailUser } = req.body

            await sendMail(
                to,
                'Lời cảm ơn',
                'Cảm ơn bạn đã để lại liên hệ với chúng tôi'
            )
            await sendMail(emailUser, subject, message)
            return res.json({ success: true, message: 'Thành công' })
        } catch (error) {
            console.log(error)
            return res.json({ success: false, message: error.message })
        }
    })
    app.use('/', router)
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}
