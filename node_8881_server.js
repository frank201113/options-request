const http = require("http");
const url = require("url");
const path = require("path");
const readStaticFile = require("./modules/readStaticFile");

http
  .createServer(function (request, response) {
    var urlObj = url.parse(request.url);
    var urlPathname = urlObj.pathname;
    if (urlPathname === "/") {
      console.log("已发起请求，请求方法 ", request.method);
      // 处理 8883 发送过来的请求

      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write("I get");
      response.end();
    }
    var filePathname = path.join(__dirname, "/public", urlPathname);

    // 读取静态文件
    readStaticFile(response, filePathname);
  })
  .listen(8881);

// 终端打印如下信息
console.log("Server running at http://127.0.0.1:8881/");
