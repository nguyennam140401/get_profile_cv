const mongo = require('mongodb')
require('dotenv').config()
const uri = process.env.MONGO_URI
var dbInstance = null
const connectDB = async () => {
    const client = new mongo.MongoClient(uri, {
        useNewUrlParser: true, //đọc docs
        useUnifiedTopology: true, //đọc docs
    })

    await client.connect()
    return (dbInstance = client.db('Profile'))
}
const getDB = () => {
    if (!dbInstance) {
        throw new Error('Can not connect to database')
    }
    return dbInstance
}
module.exports = { connectDB, getDB }
