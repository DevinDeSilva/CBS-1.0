const mysql = require('mysql');
const fs = require('fs');


module.exports = mysql.createPool({
    user: 'dev',
    host: '34.101.117.36',
    database: 'cbs-1-db',
    port: 3306,
    password: 'NDUCI@cse3042',
})





