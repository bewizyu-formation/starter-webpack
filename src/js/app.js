import {dummy} from './services/sample.service'

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () {
      console.log('Service Worker Registered');
    });
}

const app = {
  init () {
    const button = document.getElementById('button-test');
    button.addEventListener('click', () => {
      dummy().then(mock => {

        const label = document.createElement('p');
        label.innerHTML = mock.test;
        document.body.appendChild(label);

      })
    });
  },
}

app.init();
