alert('initiated');

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

function myFunction() {
  var scripts = document.getElementsByTagName("script")

  Array.from(scripts).forEach(function(script) {
     console.log('script!!', getParameterByName('piertsfreebanner', script.src));
     if (getParameterByName('piertsfreebanner', script.src)) {
       console.log('!! script detected !!')
     } 
  });
}

setTimeout(function () {
  myFunction()
}, 2000)
