const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },  
    city : {
        type : String,
        required : true
    },
    
}) 

const sendDB = new mongoose.model('crudapps',userSchema)

module.exports = sendDB