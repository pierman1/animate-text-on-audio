alert('initiated');

function getParameterByName(name, url) {
  console.log('gettingparams', name, url)
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
  scripts.forEach((script) => {
    console.log('script', script)
  })
}

setInterval(function () {
  myFunction()
}, 2000)
