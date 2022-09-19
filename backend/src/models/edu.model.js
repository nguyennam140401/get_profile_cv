const { getDB } = require('../config/mongodb')
const Joi = require('joi')
const { ObjectId } = require('mongodb')
const eduCollectionName = 'Edu'
const eduCollectionSchema = Joi.object({
    title: Joi.string(),
    timeStart: Joi.string().default(null),
    timeEnd: Joi.string().default(null),
    createdAt: Joi.date().timestamp().default(Date.now()),
})

const validateSchema = async (data) => {
    return await eduCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)
        const result = await getDB()
            .collection(eduCollectionName)
            .insertOne(value)
        const response = await getDB()
            .collection(eduCollectionName)
            .findOne({ _id: result._id })
        return response
    } catch (error) {
        throw new Error(error)
    }
}
const createMany = async (data) => {
    try {
        const result = await getDB()
            .collection(eduCollectionName)
            .insertMany(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findById = async (id) => {
    try {
        const result = await getDB()
            .collection(eduCollectionName)
            .findOne({ _id: id })
        // console.log(result)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const changeOne = async (data) => {
    try {
        const result = await getDB()
            .collection(eduCollectionName)
            .updateOne({ id: data.id }, { $set: { ...data } }, { upsert: true })
        // console.log(result)
        return result
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}
module.exports = { changeOne, createNew, createMany, findById }
