const button = document.getElementById('action-btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Thanks for clicking the button!';
});
