const router = require('express').Router()
const Controller = require('../controllers')
const uploadFile = require('../middlewares/index.js')

router.get('/', (req, res) => { 
  console.log("__basedir" + __basedir)
  res.send('hello world')
})
router.get('/file', Controller.getFile)
router.post('/upload', uploadFile.single("file"), Controller.upload)

module.exports = router