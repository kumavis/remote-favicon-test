const debounce = require('debounce')
const urlUtils = require ('url')


const input = document.createElement('input')
input.value = 'https://github.com'
document.body.appendChild(input)
input.addEventListener('input', debounce(urlDidChange, 300))

const image = document.createElement('img')
document.body.appendChild(image)


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
