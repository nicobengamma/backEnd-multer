const express = require('express')
const { Router } = express

const routerUser = Router()
routerUser.get('/',(req, res) => res.send('user List') )
routerUser.post('/',(req, res) => res.send('user create') )
routerUser.put('/',(req, res) => res.send('user update') )
routerUser.delete('/',(req, res) => res.send('user Delete') )

module.exports = routerUser