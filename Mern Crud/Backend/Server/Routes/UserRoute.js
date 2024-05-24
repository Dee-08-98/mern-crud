const express = require('express')
const create = require('../Controllers/UserController')
const getUser = require('../Controllers/UserGet')
const updateUser = require('../Controllers/UserUpdate')
const deleteUser = require('../Controllers/UserDelete')

const route = express.Router()

route.post('/createUser',create)
route.get('/getUser',getUser)
route.put('/updateUser/:id',updateUser)
route.delete('/deleteUser/:id',deleteUser)


module.exports = route