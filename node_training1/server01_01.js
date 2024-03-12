// 웹서버 만들기

const http = require('http');
const express = require('express');

const app = express();

// 미들웨어 추가
app.use((req, res, next) => {
    console.log(`첫번째 미들웨어 호출됨`);

    req.user = 'john';
    next();
})

app.use((req, res, next) => {
    console.log(`두번째 미들웨어 호출됨 : ${req.user}`);

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    //res.end(`<p>웹서버로부터의 응답</p>`);

    res.end(`<!DOCTYPE html>
     <html>
       <head>
       </head>
       <body>
         <p>웹서버로부터의 응답</p>
       </body>
     </html>`);

})


http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨.`);
})

console.log(`웹서버 실행 요청됨.`);
