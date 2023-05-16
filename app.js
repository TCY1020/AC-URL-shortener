const express = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')


const routers = require('./routes')
const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine({defaultLAyout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routers)

app.listen(port, ()=>{
  console.log(`URL-shortener is running on http://localhost:${port}`)
})
