const url = require('../url.js')
const db = require('../../config/mongoose.js')

db.once('open', () =>{
  url.create({ 
    originalUrl: 'https://www.google.com/',
    shortUrl: 'http://localhost:3000/123'
})
  console.log('done')
})