const express = require('express')
const { Router } = express

const routerProducts = Router()
routerProducts.get('/',(req, res) => res.send('product List') )
routerProducts.post('/',(req, res) => res.send('product create') )
routerProducts.put('/',(req, res) => res.send('product update') )
routerProducts.delete('/',(req, res) => res.send('product Delete') )

module.exports = routerProducts