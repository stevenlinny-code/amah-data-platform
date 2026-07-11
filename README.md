# 阿嬤還記得｜田野資料採集與成果管理平台

本儲存庫包含：

- GitHub Pages前端網站
- Demo資料模式
- Google Apps Script正式後端原始碼
- GitHub Actions自動發布流程
- Google Drive根資料夾設定：`19Mq_FqPnrUPvKXYwaq0wV_wnlJe2rfJ7`

## 線上模式

目前`app-config.js`預設為`demo`，可立即展示網站與操作流程。完成Apps Script部署後，將設定改為：

```js
window.AMAH_CONFIG = Object.freeze({
  mode: 'bridge',
  bridgeUrl: 'https://script.google.com/macros/s/DEPLOYMENT_ID/exec?mode=bridge',
  requestTimeoutMs: 45000
});
```

## Demo帳號

- 學生：`student@example.edu.tw`／`student123`
- 教師：`teacher@example.edu.tw`／`teacher123`

## 正式部署

請參閱[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)。
