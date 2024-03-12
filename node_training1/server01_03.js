// DB 연결하기

const http = require('http');
const express = require('express');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const pool = mariadb.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'test',
    connectionLimit: 10,
    debug: false
});

const app = express();
 
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const router = express.Router();
app.use('/', router);

router.route('/list').get(async (req, res) => {
    console.log(`/list 요청 경로로 요청됨`);

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`select id, name, age, mobile from test.person`);
 
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(JSON.stringify(rows));
    } catch(err) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`웹서버에서 DB처리 시 에러 : ${err}`);
    } finally {
        if (conn) conn.release();
    }

    /*
    let conn = await pool.getConnection();
    const rows = await conn.query(`select id, name, age, mobile from test.person`);

    if (conn) {
        conn.release();
    }

    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.end(JSON.stringify(rows));
    */
})

router.route('/list').post(async (req, res) => {
    console.log(`/list 요청 경로로 요청됨`);

    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query(`select id, name, age, mobile from test.person`);
 
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(JSON.stringify(rows));
    } catch(err) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`웹서버에서 DB처리 시 에러 : ${err}`);
    } finally {
        if (conn) conn.release();
    }
 
})

router.route('/add').get(async (req, res) => {
    console.log(`/add 요청 경로로 요청됨`);

    const params = req.query;

    let conn;
    try {
        conn = await pool.getConnection();
        //const output = await conn.query(`insert into test.person(name, age, mobile) values ('${params.name}', ${params.age}, '${params.mobile}')`);
        const output = await conn.query(`insert into test.person(name, age, mobile) values (?, ?, ?)`, [`'${params.name}'`, `${params.age}`, `'${params.mobile}'`]);
        console.log(`DB 응답 : ${output.affectedRows}`);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`추가 결과 : ${output.affectedRows}`);
    } catch(err) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`웹서버에서 DB처리 시 에러 : ${err}`);
    } finally {
        if (conn) conn.release();
    }

})

router.route('/add').post(async (req, res) => {
    console.log(`/add 요청 경로로 요청됨`);

    const params = req.body;

    let conn;
    try {
        conn = await pool.getConnection();
        //const output = await conn.query(`insert into test.person(name, age, mobile) values ('${params.name}', ${params.age}, '${params.mobile}')`);
        const output = await conn.query(`insert into test.person(name, age, mobile) values (?, ?, ?)`, [`'${params.name}'`, `${params.age}`, `'${params.mobile}'`]);
        console.log(`DB 응답 : ${output.affectedRows}`);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`추가 결과 : ${output.affectedRows}`);
    } catch(err) {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.end(`웹서버에서 DB처리 시 에러 : ${err}`);
    } finally {
        if (conn) conn.release();
    }

})


http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨.`);
})

console.log(`웹서버 실행 요청됨.`);
