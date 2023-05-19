const MAX_DEFAULT = 5

function getShortUrl(){
  const lowCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '1234567890'

  let collection = lowCaseLetters + lowCaseLetters.toUpperCase() + numbers
  
  
  let randomCode = ''
  for (let i = 0; i < MAX_DEFAULT; i++){
    const item = Math.floor(Math.random() * collection.length)
    randomCode += collection.charAt(item)
  }
  return randomCode
}



module.exports = getShortUrl