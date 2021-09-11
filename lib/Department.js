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

async function newDepartment() {

    return inquirer
     .prompt([
     {
         type: 'input',
         name: 'newDepartment',
         message: 'Please Enter New Department Name:'
     }
     ]).then((answer) => {
     const sql = `INSERT INTO departments (departments.name)
                 VALUE(?)`;
     db.query(sql, answer.newDepartment, (err, row) => {
         if (err) throw err;
         console.log(`

         NEW DEPARTMENT ADDED!

         `)
        });
    });
};

module.exports = {
    displayDepartments,
    newDepartment
};