const unregisterButton = document.querySelector('.unregister');

unregisterButton.onclick = () => {
  localStorage.clear();
  location = '/tester';
};

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
