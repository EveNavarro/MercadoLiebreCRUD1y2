//requerimos multer
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        //destination es el destino que va a tener el archivo dentro de la app
        cb(null, path.join(__dirname, '../../public/images/products'))
    },
    filename : (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})

const uploadFile = multer({storage});

module.exports = uploadFile;