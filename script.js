'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const config = window.PORTFOLIO || {};
if (config.github) {
  try {
    const url = new URL(config.github);
    if (url.protocol === 'https:') {
      const a = document.createElement('a'); a.href = url.href; a.textContent = 'GitHub ↗'; a.target = '_blank'; a.rel = 'noopener noreferrer'; document.getElementById('contact-links').append(a);
    }
  } catch {}
}
