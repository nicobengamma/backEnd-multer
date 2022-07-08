const express = require('express')
const routerUser = require('./user.Router')
const routerProducts = require ('./products.router')


const app = express()

app.use('/user',routerUser)
app.use('/prod',routerProducts)

app.listen(8080)