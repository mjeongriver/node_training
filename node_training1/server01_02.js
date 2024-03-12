// 라우터

const http = require('http');
const express = require('express');

const app = express();
 

const router = express.Router();
app.use('/', router);

router.route('/list').get((req, res) => {
    console.log(`/list 요청 경로로 요청됨`);

    const person1 = {
        name: '홍길동1',
        age: 21
    }

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end(JSON.stringify(person1));

})

router.route('/add').get((req, res) => {
    console.log(`/add 요청 경로로 요청됨`);

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end('OK');
})


http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨.`);
})

console.log(`웹서버 실행 요청됨.`);
