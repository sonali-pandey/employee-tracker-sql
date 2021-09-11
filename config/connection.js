const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root', // MySQL username 
        password: '', // MySQL password
        database: 'company'
    },
    console.log('connected to company database')
);

module.exports = db;