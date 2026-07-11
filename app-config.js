/**
 * GitHub Pages前端設定。
 * 完成Apps Script部署後，把mode改成bridge，並將bridgeUrl替換為：
 * https://script.google.com/macros/s/DEPLOYMENT_ID/exec?mode=bridge
 */
window.AMAH_CONFIG = Object.freeze({
  mode: 'demo',
  bridgeUrl: '',
  requestTimeoutMs: 45000
});
