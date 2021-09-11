const inquirer = require('inquirer');
const db = require('../config/connection');
const cTable = require ('console.table');

function displayDepartments (){
    // Selecting all rows from departments table
    const sql = `SELECT * FROM departments`;

    // SQL query
    db.query (sql, (err,rows) => {
        if (err) throw err;
        console.log(`
        ====== ALL DEPARTMENT LIST ======
        `);
        console.table(rows);
    });
};

module.exports = {
    displayDepartments
}