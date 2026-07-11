(function () {
  'use strict';
  const cfg = window.AMAH_CONFIG || {};
  const pending = new Map();
  let iframe = null;
  let readyPromise = null;

  function isConfigured() {
    return cfg.mode === 'bridge' && typeof cfg.bridgeUrl === 'string' && cfg.bridgeUrl.trim() !== '';
  }

  function targetOrigin() {
    try { return new URL(cfg.bridgeUrl).origin; }
    catch (_) { return '*'; }
  }

  function ensureBridge() {
    if (!isConfigured()) return Promise.reject(new Error('Apps Script Bridge尚未設定'));
    if (readyPromise) return readyPromise;
    readyPromise = new Promise((resolve, reject) => {
      iframe = document.createElement('iframe');
      iframe.src = cfg.bridgeUrl;
      iframe.title = '阿嬤還記得後端橋接器';
      iframe.setAttribute('aria-hidden', 'true');
      iframe.style.cssText = 'position:fixed;width:1px;height:1px;opacity:0;pointer-events:none;border:0;left:-10000px;top:-10000px';
      iframe.onload = () => resolve(true);
      iframe.onerror = () => reject(new Error('無法載入Apps Script Bridge'));
      document.body.appendChild(iframe);
    });
    return readyPromise;
  }

  window.addEventListener('message', event => {
    if (!isConfigured()) return;
    const expected = targetOrigin();
    if (expected !== '*' && event.origin !== expected) return;
    const msg = event.data || {};
    if (msg.type !== 'amah-rpc-result' || !msg.requestId) return;
    const item = pending.get(msg.requestId);
    if (!item) return;
    pending.delete(msg.requestId);
    clearTimeout(item.timer);
    if (msg.ok) item.resolve(msg.result);
    else item.reject(new Error(msg.error || '後端呼叫失敗'));
  });

  async function invoke(method, ...args) {
    await ensureBridge();
    const requestId = 'rpc-' + Date.now() + '-' + Math.random().toString(36).slice(2);
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error('後端回應逾時'));
      }, Number(cfg.requestTimeoutMs || 45000));
      pending.set(requestId, { resolve, reject, timer });
      iframe.contentWindow.postMessage({ type: 'amah-rpc', requestId, method, args }, targetOrigin());
    });
  }

  window.AmahBridgeApi = { isConfigured, invoke };
})();
