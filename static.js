const express = require('express')

const app = express()

app.use('/static', express.static(__dirname  + 'hello'))
app.get('/', (req, res) => res.send (__dirname))

app.listen(8080)