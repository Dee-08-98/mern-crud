const senddb = require('../Models/UserModel.js')

const create = async (req, res) => {


    const { name, city } = req.body
    if (!name || !city) {
        res.status(400).json({ sucess: "false", msg: "ALL Field are Required" })
    }
    else {
        try {
            const userData = new senddb({
                name,
                city
            })

            const saveData = await userData.save()
            res.status(200).json({ sucess: "true", msg: "Registration sucesssfull", data: userData })
        } catch (error) {
            res.status(500).json({ error: error, msg: "Something went wrong" })

        }
    }
}

module.exports = create