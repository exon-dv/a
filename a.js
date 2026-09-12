if (!document.querySelector('script[class="Impostale"]')) {
  window.document.documentElement.innerHTML = 'xss';
  document.body.appendChild(Object.assign(document.createElement('script'), {
    className: 'Impostale',
    src: ''
  }));
} else {
  window.opener.postMessage("loaded", "*");
};
