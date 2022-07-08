const express = require('express')
const { Router } = express

const routerProducts = Router()
routerProducts.get('/',(req, res) => res.sendFile(__dirname + "/hello/formProductos.html") )
routerProducts.post('/subirProducto', upload.single("mijson") ,(req, res, next) => {
    const file = req.file
    if(!file) {
        const error = new Error('please upload file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
})


routerProducts.put('/',(req, res) => res.send('product update') )
routerProducts.delete('/',(req, res) => res.send('product Delete') )

module.exports = routerProducts