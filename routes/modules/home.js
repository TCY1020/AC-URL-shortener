const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const getShortUrl = require('../../tools/shortenURL')




router.get('/', (req, res) =>{
  res.render('index')
})

router.get('/:path', (req, res) =>{
  const path = req.params.path
  const shortUrl = `http://localhost:3000/${path}`
  URL.findOne({shortUrl})
    .lean()
    .then(Url => res.redirect(Url.originalUrl))
    .catch((error) => console.log(error))
})
router.post('/create', (req, res) => {
  const originalUrl =req.body.url.trim()
  URL.findOne({ originalUrl: originalUrl })
    .lean()
    .then(inputUrl =>{
      if (inputUrl){
        res.render('index', { inputUrl })
      
        console.log(inputUrl)
      }else{
        URL.create({
          originalUrl: originalUrl,
          shortUrl: getShortUrl()
        })
          .then(inputUrl =>{
            //用解構賦值將特殊物件轉成一般物件
            const { originalUrl, shortUrl } = inputUrl
            const object = { shortUrl, originalUrl }
            res.render('index', { inputUrl: object })
          })
      }
    })
})

module.exports = router