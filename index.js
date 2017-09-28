const debounce = require('debounce')
const urlUtils = require ('url')

//
// setup DOM
//

const input = document.createElement('input')
input.value = 'https://github.com'
document.body.appendChild(input)

const image = document.createElement('img')
document.body.appendChild(image)


//
// Listen for url
//

input.addEventListener('input', debounce(urlDidChange, 300))
urlDidChange()


function urlDidChange() {
  const value = input.value
  console.log('urlDidChange', value)
  image.src = getFaviconUrl(value)
}

function getFaviconUrl(url) {
  const urlData = urlUtils.parse(url)
  return `${urlData.protocol}//${urlData.host}/favicon.ico`
}
