alert('initiated');

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
  banner.classList.style.position = 'fixed'
  banner.classList.style.top = 0'
  banner.classList.style.left = 0
  banner.classList.style.backgroundColor = 'green'
  
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
