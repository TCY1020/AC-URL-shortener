const express = require('express')
const router = express.Router()
const URL = require('../../models/url')





//TODO:印出req.body.url然後搜尋創造短網址存入collections
router.get('/', (req, res) =>{
  res.render('index')
})
router.post('/', (req, res) => {
  const originalUrl =req.body.url.trim()
  URL.findOne({ originalUrl: originalUrl })
    .lean()
    .then(inputUrl =>{
      if (inputUrl){
        res.render('index', { inputUrl })
        
       // console.log(inputUrl)
      }else{
        res.render('index')
        URL.create({originalUrl: originalUrl })
        //console.log('undifine')
      }
    })

  

})

module.exports = router