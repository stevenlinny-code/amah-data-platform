# 正式部署步驟

## 1.GitHub Pages

本儲存庫已包含`.github/workflows/pages.yml`。在Repository的`Settings → Pages`，將Source設為`GitHub Actions`。之後每次推送至`main`都會自動發布。

預期網址：

`https://stevenlinny-code.github.io/amah-data-platform/`

## 2.Google Apps Script後端

1.建立新的Apps Script專案。
2.把`backend/AppsScript/`內檔案逐一建立到專案中。
3.確認`Config.gs`內的`ROOT_FOLDER_ID`為：
   `19Mq_FqPnrUPvKXYwaq0wV_wnlJe2rfJ7`
4.在Apps Script編輯器執行`initializeSystem()`並完成Google授權。
5.使用`upsertUser(email,name,role,accessCode)`建立學生、教師及管理者帳號。
6.選擇`部署 → 新增部署 → 網頁應用程式`：
   - 執行身分：我
   - 存取權：任何人（或依校務網域政策設定）
7.取得`/exec`網址，後面加上`?mode=bridge`。

## 3.連接GitHub Pages與後端

編輯根目錄`app-config.js`：

```js
window.AMAH_CONFIG = Object.freeze({
  mode: 'bridge',
  bridgeUrl: '你的Apps Script /exec網址?mode=bridge',
  requestTimeoutMs: 45000
});
```

提交後，GitHub Actions會自動重新發布。

## 4.安全注意

- GitHub Pages只存放前端程式，不存放受訪者資料、Google憑證或密鑰。
- 正式資料由Google Sheets與指定Google Drive資料夾保存。
- Apps Script後端以登入碼、使用者角色及個案權限進行驗證。
- 正式啟用前，請以2名學生及2筆測試個案完成驗收。
