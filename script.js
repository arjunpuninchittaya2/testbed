const button = document.getElementById('action-btn');
const message = document.getElementById('message');
const targetUrl = 'https://fault.arjun-puninchittaya.workers.dev/';
const proxyUrl = `https://cors-anywhere.herokuapp.com/http://${new URL(targetUrl).hostname}/`;

message.style.whiteSpace = 'pre-wrap';

async function loadRemotePage() {
  message.textContent = 'Loading remote page...';

  try {
    const response = await fetch(proxyUrl);
    const result = await response.text();
    message.textContent = result;

    if (!response.ok) {
      console.warn(`Proxy returned status ${response.status}, but the body was still loaded.`);
    } else {
      console.log('Remote page loaded');
    }
  } catch (error) {
    message.textContent = `Unable to load remote page: ${error.message}`;
    console.error('Remote page request failed', error);
  }
}

button.addEventListener('click', loadRemotePage);

loadRemotePage();

if (window.eruda) {
  window.eruda.init({
    tool: ['console', 'elements', 'network', 'resources', 'info'],
  });
  window.eruda.show();
  console.log('Embedded console initialized');
}
