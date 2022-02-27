const http = require("http");
const url = require("url");
const path = require("path");
const readStaticFile = require("./modules/readStaticFile");

http
  .createServer(function (request, response) {
    var urlObj = url.parse(request.url);
    var urlPathname = urlObj.pathname;
    var filePathname = path.join(__dirname, "/public", urlPathname);

    // 读取静态文件
    readStaticFile(response, filePathname);
  })
  .listen(8883);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8883/");
