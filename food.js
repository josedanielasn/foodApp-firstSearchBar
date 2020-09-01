const search1 = document.querySelector('.search_field');
const button1 = document.querySelector('#icon');

search1.addEventListener('keypress', function (e) {
  if (e.keyCode === 13) {
    location.replace('food2.html');
  }
});

button1.addEventListener('click', function () {
  location.replace('food2.html');
});
