export default {
    personList: `select id, name, age, mobile from test.person`, // 속성 추가 
    personInsert: `insert into test.person(name, age, mobile) values (?, ?, ?)`,
    personUpdate: `update test.person set name = ?, age = ?, mobile = ? where id = ?,`,
    personDelete: `delete from test.person where id = ?`,
    coffeeshopList: `SELECT id, NAME, tel, 
	                    ST_X(location) AS longitude,
	                    ST_Y(location) AS latitude,
	                    ST_DISTANCE(ST_GEOMFROMTEXT(?), location) * 111195 AS distance
                    FROM test.coffeeshop
                    WHERE  
                        ST_DISTANCE(ST_GEOMFROMTEXT(?), location) * 111195 < 1000
                    ORDER BY 
                        DISTANCE`,
    coffeeshopSearch: `SELECT id, NAME, tel, 
                            ST_X(location) AS longitude,
                            ST_Y(location) AS latitude,
                            ST_DISTANCE(ST_GEOMFROMTEXT(?), location) * 111195 AS distance
                        FROM test.coffeeshop
                        WHERE NAME like ?`
}