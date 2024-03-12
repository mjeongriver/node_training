// DB 연결하기

import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { personListController, personAddController, personUpdateController, personDeleteController, personIndexController } from './controller.js'; // 함수 import

const app = express();

//CORS 설정
app.use(cors());

//public 폴더 오픈하기
app.use('/', express.static('./public'));

//뷰 설정(set은 속성 설정)
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const router = express.Router();
app.use('/', router);

// JSON.stringify에서 DB 결과를 처리할 수 있도록 설정 
BigInt.prototype.toJSON = () => {
    return this.toString();
}

// 컨트롤러 추가하고 싶을때는 여기에만 추가하면 됨!
router.route('/index').get(personIndexController);

router.route('/list').get(personListController);
router.route('/list').post(personListController);

router.route('/add').get(personAddController);
router.route('/add').post(personAddController);

router.route('/update').get(personUpdateController);
router.route('/update').post(personUpdateController);

router.route('/delete').get(personDeleteController);
router.route('/delete').post(personDeleteController);

http.createServer(app).listen(7001, () => {
    console.log(`웹서버 실행됨.`);
})

console.log(`웹서버 실행 요청됨.`);
