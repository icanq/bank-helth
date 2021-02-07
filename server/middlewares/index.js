const multer = require('multer')

const filterXlsx = (req, file, cb) => {
  if (
    file.mimetype.includes("excel") || file.mimetype.includes("spreadsheetml")
  ) {
    cb (null, true)
  } else cb("We can only read excel files", false)
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/resources/static/assets/uploads/")
  },
  filename: (req, file, cb) => {
    console.log(file.originalname)
    cb(null, `${Date.now()}-uploaded-${file.originalname}`)
  }
})
// console.log(storage)

const uploadFile = multer({ storage: storage, fileFilter: filterXlsx })

module.exports = uploadFile