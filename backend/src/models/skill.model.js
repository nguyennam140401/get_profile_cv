const { getDB } = require('../config/mongodb')
const Joi = require('joi')
const { ObjectId } = require('mongodb')

const skillCollectionName = 'Skill'

const skillCollectionSchema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(5).required(),
    time: Joi.date().timestamp().default(null),
    detail: Joi.array().items(Joi.string()).default([]),
    textDetail: Joi.string().default(''),
})
const validateSchema = async (data) => {
    return await skillCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createMany = async (data) => {
    try {
        const result = await getDB()
            .collection(skillCollectionName)
            .insertMany(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findById = async (id) => {
    try {
        const result = await getDB()
            .collection(skillCollectionName)
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
            .collection(skillCollectionName)
            .updateOne({ id: data.id }, { $set: { ...data } }, { upsert: true })
        return result
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}
module.exports = {changeOne, createMany, findById }
