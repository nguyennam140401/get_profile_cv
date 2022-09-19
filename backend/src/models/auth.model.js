const { getDB } = require('../config/mongodb')
const Joi = require('joi')
const { ObjectId } = require('mongodb')
const authCollectionName = 'User'
const authCollectionSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).required(),
    job: Joi.string().min(5).default(''),
    name: Joi.string().min(5).default(''),
    avatar: Joi.string().default(''),
    CV: Joi.string().default(''),
    description: Joi.string().min(20).default(''),
    linkFb: Joi.string().default(''),
    linkGithub: Joi.string().default(''),
    linkYoutube: Joi.string().default(''),
    linkTweet: Joi.string().default(''),
    birthday: Joi.string().default(''),
    phone: Joi.string().min(8).default(''),
    address: Joi.string().default(''),
    gmail: Joi.string().default(''),
    educations: Joi.array().items(Joi.string()).default([]),
    skills: Joi.array().items(Joi.string()).default([]),
    projects: Joi.array().items(Joi.string()).default([]),
    isNew: Joi.boolean().default(true),
    createdAt: Joi.date().timestamp().default(Date.now()),
})

const validateSchema = async (data) => {
    return await authCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createNew = async (data) => {
    try {
        const value = await validateSchema(data)

        const result = await getDB()
            .collection(authCollectionName)
            .insertOne(value)
        const response = await getDB().collection(authCollectionName).findOne({
            _id: result.insertedId,
        })
        return response
    } catch (error) {
        throw new Error(error)
    }
}
const updateOne = async (id, data) => {
    delete data['_id']
    try {
        const result = await getDB()
            .collection(authCollectionName)
            .findOneAndUpdate(
                { _id: ObjectId(id) },
                { $set: data },
                { returnOrginal: false }
            )
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findByName = async (name) => {
    try {
        const result = await getDB()
            .collection(authCollectionName)
            .findOne({ username: name })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findById = async (id) => {
    try {
        const result = await getDB()
            .collection(authCollectionName)
            .findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}
module.exports = { createNew, findByName, findById, updateOne }
