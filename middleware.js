const express = require ('express')
const router = express.Router()
const app = express()

// funciones Middleware //

const validarUsuario = (req, res, next) => {
    if ('admin' in req.headers){
        next()
    } else {
        res.status(400)
        res.send('debe ser admin')
    }
}

// Link Middleware // 

app.use ((req, res, next) => { console.log('Time ', new Date().toLocaleTimeString());
next()})

router.use(validarUsuario)

// Main route // 

app.get('/ok', (req, res) => {
    throw 'salto un error'
    res.send('okey, lets go')})

router.get('/ok', (req, res) => {res.send('No te hagas el choro')})
router.get('/super', (req, res) => {res.send('Vos si sos el admin prro')})


app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).send('algo salio mal')
})
app.use('/admin', router)
app.listen(8080)

