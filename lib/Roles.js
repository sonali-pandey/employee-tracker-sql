const cTable = require ('console.table');
const mysql = require('mysql2');
const db = require('../config/connection');


function displayRoles (){
    // Selecting all rows from departments table
    const sql = `SELECT roles.id, roles.title, roles.salary, departments.name
    AS department_name
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`;

    // SQL query
    db.query (sql, (err,rows) => {
        if (err) throw err;
        console.log(`
        ====== ALL ROLES LIST ======
        `);
        console.table(rows);
    });    
};

module.exports = {
    displayRoles
}