const mongoose = require('mongoose')
const sendDB = require('../Models/UserModel.js')
const getUser = async (req, res) => {
    try {
        const datas = await sendDB.find()
        res.status(200).json({ sucess: "true", msg: "Data fetching sucessfull",data:datas })
    } catch (error) {
        res.status(500).json({ error: error, msg: "Something went wrong" })
    }
}

module.exports = getUser