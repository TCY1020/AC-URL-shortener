const express = require('express')
const router = express.Router()
const URL = require('../../models/url')
const getShortUrl = require('../../tools/shortenURL')
const checkURL = require('../../tools/checkURL')




router.get('/', (req, res) =>{
  res.render('index')
})
// 在搜尋列上輸入短網址直接跳轉
router.get('/:path', (req, res) =>{
  const path = req.params.path
  const shortUrl = `http://localhost:3000/${path}`
  URL.findOne({shortUrl})
    .lean()
    .then(Url => res.redirect(Url.originalUrl))
    .catch((error) => console.log(error))
})

// 短網址存取與取出
router.post('/create', (req, res) => {
  const originalUrl =req.body.url.trim()
  //檢查輸入網址是否正確套件
  if (checkURL(originalUrl) === false) {
    return res.render('index', { error: 'URL error, please re-enter' })
  }
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
          .catch(error => console.error(error))
      }
    })
    .catch(error => console.error(error))
})

module.exports = router