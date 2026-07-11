/**
 * GitHub Pages前端設定。
 * 正式模式：透過Apps Script Bridge連接Google Sheets與Google Drive後端。
 */
window.AMAH_CONFIG = Object.freeze({
  mode: 'bridge',
  bridgeUrl: 'https://script.google.com/macros/s/AKfycbyxXUIvnycEWl3yd49Bqqlv06cBSXXdJFoglyoGSdpbVGzz_Fy8JukXuc1rinyGpX7u/exec?mode=bridge',
  requestTimeoutMs: 45000
});
