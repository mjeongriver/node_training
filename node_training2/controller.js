
import sql from './sql.js';
import { sendResponse, sendError } from './util.js';

import { database } from './/database.js';


export const personIndexController = async (req, res) => {
    console.log(`/index 요청 경로로 요청됨`);

    try {

        const data = {
            username: '홍길동1'
        }

        req.app.render('ex02_01', data, (err, html) => {  //확장자 제외 -> 데이터 병합 후 함수 호출
            if (err) {
                console.error(`뷰 처리 중 에러입니다. : ${err}`);
                sendError(res, err);
            }

            console.log(`렌더링 결과 : ${html}`);
            sendResponse(res, html);
        })

    } catch (err) {
        sendError(res, err);
    }
}

export const personListController = async (req, res) => {
    console.log(`/list 요청 경로로 요청됨`);

    try {
        const rows = await database.execute(sql.personList, []);
        sendResponse(res, JSON.stringify(rows));
    } catch (err) {
        sendError(res, err);
    }
}

export const personAddController = async (req, res) => {
    console.log(`/add 요청 경로로 요청됨`);

    console.log(`req.query : ${JSON.stringify(req.query)}`);
    console.log(`req.body : ${JSON.stringify(req.body)}`);
    
    let params = req.body;
 
    try {
        const rows = await database.execute(sql.personInsert, [`'${params.name}'`, `${params.age}`, `'${params.mobile}'`]);
        sendResponse(res, JSON.stringify(rows));
    } catch (err) {
        sendError(res, err);
    }
}


export const personUpdateController = async (req, res) => {
    console.log(`/update 요청 경로로 요청됨`);

    const params = req.query;

    try {
        const rows = await database.execute(sql.personUpdate, [`'${params.name}'`, `${params.age}`, `'${params.mobile}'`, `${params.id}`]);
        sendResponse(res, JSON.stringify(rows));
    } catch (err) {
        sendError(res, err);
    }
}

export const personDeleteController = async (req, res) => {
    console.log(`/delete 요청 경로로 요청됨`);

    const params = req.query;

    try {
        const rows = await database.execute(sql.personDelete, [`${params.id}`]);
        sendResponse(res, JSON.stringify(rows));
    } catch (err) {
        sendError(res, err);
    }
}

