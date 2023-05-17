const {URL} = require('url')

function checkURL(originalUrl){
  //若try 區塊中的程式碼無任何錯誤，則忽略 catch 區塊中的程式碼
  try{
    new URL(originalUrl)
    return true
  }catch{
    return false
  }
}


module.exports = checkURL