const form = document.querySelector('.form');
const input = document.getElementById('code');
const error = document.querySelector('.error');
const countdown = document.querySelector('.timeRemaining');

if (localStorage.getItem('tester') == 'true') {
  window.location = '/tester/dashboard';
}

input.value = '';

const params = new URLSearchParams(location.search);
const code = params.get('code');

if (code) {
  input.value = code;
}

// const agent = navigator.userAgent || navigator.vendor || window.opera;
// console.log(agent);

// if (/ipad|iphone|ipod|mac/gim.test(agent) || /android/gim.test(agent)) {
//   form.style.display = 'none';
//   error.innerText = 'Please visit this page on a desktop device.';
//   error.style.display = 'block';

//   setTimeout(() => {
//     location = '/about';
//   }, 5000);
// }

input.addEventListener('input', e => {
  let value = input.value.toLowerCase();
  if (!value || value === '') return;
  if (value.length === 5) {
    if (value === 'f0214') {
      input.style.color = 'var(--success)';
      error.style.display = 'block';
      error.style.color = 'var(--success)';

      error.innerHTML = "Success! You're on your way to your dashboard!";

      localStorage.setItem('tester', true);

      const randomCode = Math.random().toString(36).substring(2, 12);

      localStorage.setItem('verified', randomCode);

      setTimeout(() => {
        location = `/tester/dashboard/index.html?r=${randomCode}`;
      }, 3 * 1000);
      setInterval(() => {
        countdown.innerHTML = parseInt(countdown.innerHTML) - 1;
      }, 1000);
    } else {
      input.value = input.value;
      input.style.color = 'var(--error)';
      input.disabled = true;

      error.style.display = 'block';

      setInterval(() => {
        countdown.innerHTML = parseInt(countdown.innerHTML) - 1;
      }, 1000);

      setTimeout(() => {
        location = '/tester/landing';
      }, 10 * 1000);
    }
  } else return;
});
