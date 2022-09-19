// import fs from 'fs'
const fs = require('fs')
const generateID = function () {
    return Math.random().toString(36).substr(2, 9)
}
const convert = (str) => {
    const folder = 'uploads'
    const typeFile = str.slice(str.indexOf('/') + 1, str.indexOf(';'))
    const data = str.split(';base64,').pop()
    const name = generateID()
    fs.writeFile(
        `${folder}/${name}.${typeFile}`,
        data,
        { encoding: 'base64' },
        function (err) {
            console.log('File created')
        }
    )
    return `${name}.${typeFile}`
}
module.exports = { convert }
