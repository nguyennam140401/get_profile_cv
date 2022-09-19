const { getDB } = require('../config/mongodb')
const Joi = require('joi')
const { ObjectId } = require('mongodb')

const projectCollectionName = 'Project'

const projectCollectionSchema = Joi.object({
    userId: Joi.string().required(),
    title: Joi.string().min(5).required(),
    img: Joi.string(),
    description: Joi.string().min(20).required(),
    link: Joi.string().default(''),
    tech: Joi.array().items(Joi.string()).default([]),
    textTech: Joi.string().default(''),
})
const validateSchema = async (data) => {
    return await projectCollectionSchema.validateAsync(data, {
        abortEarly: false,
    })
}
const createMany = async (data) => {
    try {
        const result = await getDB()
            .collection(projectCollectionName)
            .insertMany(data)
        return result
    } catch (error) {
        throw new Error(error)
    }
}
const findById = async (id) => {
    try {
        const result = await getDB()
            .collection(projectCollectionName)
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
            .collection(projectCollectionName)
            .updateOne({ id: data.id }, { $set: { ...data } }, { upsert: true })
        return result
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}
module.exports = { changeOne, createMany, findById }
