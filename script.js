document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for contacting me, ' + document.getElementById('name').value + '!');
  this.reset();
});
