function getShortUrl(){
  const lowCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = [...lowCaseLetters, ...upperCaseLetters, ...numbers]
  

  let randomCode = ''
  for(let i = 0; i < 5; i++){
    const item = Math.floor(Math.random() * collection.length)
    randomCode += collection[item]
  }
  let shortUrl = `http://localhost:3000/${randomCode}`
  return shortUrl
}

module.exports = getShortUrl