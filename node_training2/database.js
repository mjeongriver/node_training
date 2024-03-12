import mariadb from 'mariadb';
import { databaseConfig } from './setting.js';

const pool = mariadb.createPool(databaseConfig);

const database = {};

database.execute = (sql, params) => {
    return new Promise(async (resolve, reject) => {
        let conn;
        let rows;
        try {
            conn = await pool.getConnection();
            rows = await conn.query(sql, params);
        } catch (err) {
            reject(err);
        } finally {
            if (conn) conn.release();
        }
        resolve(rows);
    });
}

export { database };