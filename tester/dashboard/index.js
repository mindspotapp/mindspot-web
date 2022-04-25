const mainSection = document.querySelector('.main');
const error = document.querySelector('.error');

const unregisterButton = document.querySelector('.unregister');

unregisterButton.onclick = () => {
  localStorage.clear();
  location = '/tester';
};

const agent = navigator.userAgent || navigator.vendor || window.opera;
console.log(agent);

// if (/ipad|iphone|ipod|mac/gim.test(agent) || /android/gim.test(agent)) {
//   mainSection.style.display = 'none';
//   error.innerText = 'Please visit this page on a desktop device.';
//   error.style.display = 'block';

//   setTimeout(() => {
//     location = '/about';
//   }, 5000);
// }

const params = new URLSearchParams(location.search);
const code = params.get('r');

if (code && code !== localStorage.getItem('verified')) {
  localStorage.clear();
  window.location = '/tester';
}

if (
  !localStorage.getItem('tester') ||
  localStorage.getItem('tester') == 'false'
) {
  window.location = '/tester';
}
