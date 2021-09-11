const cTable = require ('console.table');
const mysql = require('mysql2');
const db = require('../config/connection');
const inquirer = require ('inquirer');
const figlet = require('figlet');


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
        console.log(figlet.textSync('ROLES'));
        console.table(rows);
    });    
};

async function newRole() {

    // getting the departments list to display it in the question choice
    const query1 = `SELECT * FROM departments`;
    let departmentArray = [];
    let departmentNames = [];
    db.query(query1 , (err, rows) => {
        if (err) throw err;
        // pushing the list of departs to an array
        rows.forEach(({id, name}) => departmentArray.push({id, name}));
        rows.forEach(departments => departmentNames.push(departments.name));
    });

    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'Please Enter New Role:',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please add the salary for the new role:'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which department will this role be in?',
            choices: departmentNames,
        }
        ]).then((answer) => {
        // gettting the id of the selected department
        departmentArray.forEach(({id, name}) => {if(name === answer.department) depId = id;})
        const query2 = `INSERT INTO roles (roles.title, roles.salary, roles.department_id)
        VALUE(?,?,?)`;
        const params = [answer.newRole, answer.salary, depId];

            db.query(query2, params, (err, row) => {
                if (err) throw err;
                console.log(`

            NEW ROLE ADDED!

            `)
    });
    });
};

module.exports = {
    displayRoles,
    newRole
}