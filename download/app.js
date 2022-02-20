const googleButton = document.querySelector('#google');
const appleButton = document.querySelector('#apple');
const buttonContainer = document.querySelector('.content-buttons');
const visitLater = document.querySelector('.content-visit-later');
const formButton = document.querySelector('#send-email');
const reloadButton = document.querySelector('#reload');
const platform = document.querySelector('#os');
const email = document.querySelector('#email');

const agent = navigator.userAgent || navigator.vendor || window.opera;
console.log(agent);

if (/windows/gim.test(agent)) {
  buttonContainer.classList.add('hidden');
  console.log('windows');
} else if (/android/gim.test(agent)) {
  visitLater.style.display = 'none';
  appleButton.classList.add('hidden');
  console.log('android');
} else if (/ipad|iphone|ipod|mac/gim.test(agent)) {
  visitLater.style.display = 'none';
  googleButton.classList.add('hidden');
  console.log('ios');
}
