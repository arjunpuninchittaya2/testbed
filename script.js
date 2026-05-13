const button = document.getElementById('action-btn');
const message = document.getElementById('message');

button.addEventListener('click', () => {
  message.textContent = 'Thanks for clicking the button!';
  console.log('Button clicked');
});

if (window.eruda) {
  window.eruda.init({
    tool: ['console', 'elements', 'network', 'resources', 'info'],
  });
  window.eruda.show();
  console.log('Embedded console initialized');
}
