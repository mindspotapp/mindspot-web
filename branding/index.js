const colors = document.querySelectorAll('.color');

function getContrastYIQ(hexcolor) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === '#') {
    hexcolor = hexcolor.slice(1);
  }
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? 'var(--background)' : 'var(--text)';
}

colors.forEach(child => {
  console.log(getContrastYIQ(child.innerText));
  child.style.color = getContrastYIQ(child.innerText);
  child.style.backgroundColor = child.innerText;
});
