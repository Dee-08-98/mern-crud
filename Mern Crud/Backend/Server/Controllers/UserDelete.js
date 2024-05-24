const sendDB = require('../Models/UserModel.js')


const deleteUser = async (req, res) => {
    try {
        const ID = req.params.id
        const userExist = await sendDB.findById(ID)

        if (!userExist) {
            res.status(404).json({ sucess: false, msg: "User Not Found" })
        }
        const updateDelete = await sendDB.findByIdAndDelete(ID)
        res.status(200).json({ sucess: true, msg: "User Deleted Sucessfull", user: updateDelete })
    } catch (error) {

    }
}

module.exports = deleteUser