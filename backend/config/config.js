//database config file 
const mysql = require('mysql'); 
const connection = mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'', 
    database:'react_sql',
})

module.exports = connection; 