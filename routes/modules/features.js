const express = require('express')
const router = express.Router()
const URL = require('../../models/url.js')

router.get('/:path', (req, res) =>{
  const path = req.params.path
  const shortUrl = `http://localhost:3000/${path}`
  URL.findOne({shortUrl})
    .lean()
    .then(Url =>{
      if (Url){
        return res.redirect(Url.originalUrl)
      }else{
        res.render('index', {error: 'Short url error'})
      }
    })
    .catch((error) => console.log(error))
})

module.exports = router