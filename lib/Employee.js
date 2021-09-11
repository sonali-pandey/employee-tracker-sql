const db = require('../config/connection');
const mysql = require('mysql2');
const cTable = require ('console.table');
const figlet = require('figlet');

function displayEmployees (){

    // Selecting all rows from departments table
    const sql = `SELECT emp1.id , emp1.first_name, emp1.last_name,
    roles.title AS title,
    departments.name AS department,
    roles.salary AS salary,
    CONCAT(emp2.first_name, ' ', emp2.last_name) as manager_name
    FROM employees emp1
    LEFT JOIN roles
    ON emp1.role_id = roles.id
    LEFT JOIN departments
    ON roles.department_id = departments.id
    LEFT JOIN employees emp2
    ON emp2.id = emp1.manager_id`;

    // SQL query
    db.query (sql, (err,rows) => {
        if (err) throw err;
        console.log(figlet.textSync('EMPLOYEES'));
        console.table(rows);
    });    
};

module.exports = {
    displayEmployees
}