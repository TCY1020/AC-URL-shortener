# URL shortener 
**這是使用 Node.js + Express + MongoDB + Mongoose。**
## 專案畫面
![MyImage](https://github.com/TCY1020/AC-progect-Restaurant-list/blob/main/public/img/%E9%A4%90%E5%BB%B3%E9%A6%96%E9%A0%81%E6%8E%92%E5%BA%8F%E5%8A%9F%E8%83%BD.png?raw=true)
## Features - 產品功能
+ 可以將原本較長的網址縮短
+ 可以驗證原網址是否無效
+ 可以一鍵複製短網址
+ 可以在伺服器運行時用短網址連到原網站

## Environment SetUp - 環境建置
+ Node.js v14.16.0
+ Express 4.18.2
+ Express-Handlebars 7.0.7
+ Bootstrap 5.1.3
+ Font-awesome 6.4.0
+ dotenv: 16.0.3
+ mongoose: 7.1.1
+ body-parser": 1.20.2
+ 
## Installing - 專案安裝流程
1. 請先確認有安裝 node.js 與 npm
2. 創造一個專案資料夾，打開您的 terminal，使用`cd`指令進入您剛創建的資料夾
3. Clone 此專案至本機電腦將專案 clone 到本地
```
https://github.com/TCY1020/URL-shortener.git
```
4. 在本地開啟之後，透過終端機進入資料夾，輸入：
```
npm install
```
5. 安裝nodemon
```
npm install nodemon
```
6. 在專案資料夾內新增一個.env檔案，並輸入 MongoDB 你的連線字串
```
MONGODB_URI = "<你的連線字串>"
```
7. 製作種子資料:
```
npm run seed
```
8. 啟動伺服器
```
npm run dev 
```
9. 出現以下字樣表示伺服器連線成功
```
Restaurant-list is running on http://localhost:3000
mongodb connected!
```
10. 開啟瀏覽器，輸入以下網址，使用本專案
```
http://localhost:3000 
```
## Contributor - 專案開發人員
[TCY](http://dev.nodeca.com)