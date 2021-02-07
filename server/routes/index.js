const router = require('express').Router()
const Controller = require('../controllers')
const uploadFile = require('../middlewares/index.js')

router.get('/', (req, res) => {
  res.send('hello world')
})
router.get('/file', Controller.getFile)
router.post('/upload', uploadFile.single("file"), Controller.upload)

module.exports = router