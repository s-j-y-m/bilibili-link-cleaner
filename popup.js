const DEFAULTS = { enabled: true, showNotification: true, useShortLink: false };
const keys = Object.keys(DEFAULTS);

chrome.storage.local.get(DEFAULTS, (settings) => {
  keys.forEach((key) => {
    const el = document.getElementById(key);
    el.checked = settings[key];
    el.addEventListener('change', () => {
      chrome.storage.local.set({ [key]: el.checked }, showHint);
    });
  });
});

function showHint() {
  const hint = document.getElementById('hint');
  hint.textContent = '设置已保存，刷新页面后生效';
  hint.classList.add('show');
}