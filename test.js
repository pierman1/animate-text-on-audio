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

function myFunction() {
  var scripts = document.getElementsByTagName("script")

  Array.from(scripts).forEach(function(script) {
     if (tagInit('text', script.src)) {
       bannerObject.text = parseQuery('text', script.src)
       bannerObject.position = parseQuery('position', script.src)
       console.log('bannerObject', bannerObject)
     } 
  });
}

setTimeout(function () {
  myFunction()
}, 2000)
