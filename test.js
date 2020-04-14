alert('initiated');

var ctaText = ''

function tagInit(name, url) {
  console.log('-->', name, url)
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  ctaText = results[2].replace(/\+/g, ' ')
  return true
}

function myFunction() {
  var scripts = document.getElementsByTagName("script")

  Array.from(scripts).forEach(function(script) {
     console.log('script!!', tagInit('text', script.src));
     if (getTagInfo('text', script.src)) {
       console.log('!! script detected !!')
     } 
  });
}

setTimeout(function () {
  myFunction()
}, 2000)
