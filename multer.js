const express = require ('express')
const multer = require ('multer')
const app = express ()

app.use(express.urlencoded({extended: true}))
app.use('/uploads', express.static('uploads'))

let storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, 'uploads')},
    filename: (req, file, cb) => {cb(null, file.originalname)}
    
})
const upload = multer({ storage })

app.get('/', ( req, res) => {
    res.sendFile(__dirname + '/hello/form.html')
})
app.post('/uploadFile', upload.single('miArchivo'), (req, res, next) => {
    const file = req.file
    if(!file) {
        const error = new Error('please upload file')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file)
}) 

app.listen(8080)