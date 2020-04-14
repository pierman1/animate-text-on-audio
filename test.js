
var bannerObject = {
  text: '',
  position: ''
}

function parseQuery(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return results[2].replace(/\+/g, ' ')
}

function tagInit(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return true
}

function createBanner({ text, position }) {
  console.log('starting creating banner', { text, position })

  var banner = document.createElement('div')
  banner.style.position = 'fixed'
  banner.style.top = '10px'
  banner.style.left = '10px'
  banner.style.zIndex = 999
  banner.style.backgroundColor = 'white'
  banner.style.borderRadius = '5px'
  banner.style.padding = '15px'
  banner.style.boxShadow = '0px 10px 18px 0px rgba(0,0,0,0.75)'

  banner.innerText = text
  document.body.appendChild(banner)
}

function startUp() {
  var scripts = document.getElementsByTagName("script")

  Array.from(scripts).forEach(function(script) {
     if (tagInit('text', script.src)) {
       bannerObject.text = parseQuery('text', script.src)
       bannerObject.position = parseQuery('position', script.src)
       createBanner(bannerObject)
     } 
  });
}

setTimeout(function () {
  startUp()
}, 2000)
