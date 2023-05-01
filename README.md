# Restaurant-List

使用 Node.js 以及 Express 所建立的美食餐廳列表，提供各種餐廳資訊及查詢功能。

## Features - 功能描述

1. 提供餐廳名單，點擊可查看詳細資訊(地址、電話、描述)
2. 提供查詢功能，可以藉由餐廳名稱或是餐廳類別查詢餐廳
3. 登入系統，user需登入才能使用，並且記錄個人喜愛餐廳資訊
4. user可以新增、瀏覽、修改、刪除餐廳資訊

## Environment SetUp - 環境建置

- Node.js
- express@4.16.4
- express-handlebars@3.0.0
- bcryptjs: "^2.4.3",
- "body-parser": "^1.20.2",
- "connect-flash": "^0.1.1",
- "express-session": "^1.17.1",
- "method-override": "^3.0.0",
- "mongoose": "^5.13.17",
- "passport": "^0.4.1",
- "passport-facebook": "^3.0.0",
- "passport-local": "^1.0.0"

## Installation And Execution - 安裝與執行步驟

`npm run dev` 用此指令來執行程式
`npm run seed` 執行種子程式生成種子資料
.env.example 提供環境變數參考
