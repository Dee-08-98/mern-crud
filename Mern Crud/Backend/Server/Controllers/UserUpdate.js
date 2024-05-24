const sendDB = require('../Models/UserModel.js')


const updateUser = async (req, res) => {

    console.log(req.body);
    try {
        const ID = req.params.id
        const userExist = await sendDB.findById(ID)

        if (!userExist) {
            res.status(404).json({ sucess: false, msg: "User Not Found" })
        }
        const updateData = await sendDB.findByIdAndUpdate(ID, req.body, { new: true })
        res.status(200).json({ sucess: true, msg: "User Updation Sucessfull", user: updateData })
    } catch (error) {

    }

}

module.exports = updateUser