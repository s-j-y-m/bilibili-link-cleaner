const DEFAULTS = { enabled: true, showNotification: true, useShortLink: false };

chrome.storage.local.get(DEFAULTS, (settings) => {
  if (!settings.enabled) return;
  init(settings);
});

function init(settings) {
  const observer = new MutationObserver((_, obs) => {
    const btn = document.getElementById('share-btn-outer');
    if (!btn) return;
    obs.disconnect();
    btn.addEventListener('click', () => {
      const bv = window.location.pathname.match(/BV\w+/)?.[0] || '';
      const url = settings.useShortLink ? `https://b23.tv/${bv}` : window.location.href.split('?')[0];
      const title = document.querySelector('h1.video-title').getAttribute('data-title');
      const text = `[${title}] ${url}`;
      navigator.clipboard.writeText(text).then(() => {
        if (settings.showNotification) notify(btn);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        if (settings.showNotification) notify(btn);
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
}

function notify(btn) {
  const rect = btn.getBoundingClientRect();
  const el = document.createElement('div');
  el.textContent = '已复制纯净链接';
  el.style.cssText = `position:fixed;left:${rect.left + rect.width / 2}px;top:${rect.top - 40}px;transform:translateX(-50%);background:#00a1d6;color:#fff;padding:6px 14px;border-radius:4px;z-index:9999;font-size:13px;white-space:nowrap;box-shadow:0 2px 8px rgba(0,0,0,.2);transition:opacity .3s`;
  document.body.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 2000);
}