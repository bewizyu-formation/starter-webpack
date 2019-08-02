if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () {
      console.log('Service Worker Registered');
    });
}

console.log('Open documentation index');
window.location = 'doc/index.html';
