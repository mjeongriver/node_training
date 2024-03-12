export default {
    personList: `select id, name, age, mobile from test.person`, // 속성 추가 
    personInsert: `insert into test.person(name, age, mobile) values (?, ?, ?)`,
    personUpdate: `update test.person set name = ?, age = ?, mobile = ? where id = ?,`,
    personDelete: `delete from test.person where id = ?`
}