const db = require('../config/connection');
const mysql = require('mysql2');
const cTable = require ('console.table');
const inquirer = require ('inquirer');
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

async function newEmployee(){
        
    // getting list of all the roles
    const query1 = `SELECT * FROM roles`;
    let rolesArray = [];
    let rolesName = [];

    db.query(query1 , (err, rows) => {
        if (err) throw err;
        // pushing the list of roles to an array
        rows.forEach(({id, title}) => rolesArray.push({id, title}));
        rows.forEach(roles => rolesName.push(roles.title));
    });

    // getting list of all the employees
    const query2 = `SELECT employees.id, CONCAT(employees.first_name, ' ', employees.last_name) AS name FROM employees`;
    let employeesArray = [];
    let employeesName = [];

    db.query(query2 , (err, rows) => {
        if (err) throw err;
        // pushing the list of employees to an array
        rows.forEach(({id,name}) => employeesArray.push({id, name}));
        rows.forEach(employee => employeesName.push(employee.name));
        employeesName.push('Null');
    });

    return inquirer
        .prompt([
            {
                type:'input',
                name: 'first_name',
                message: 'New Employee First Name:'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'New Employee Last Name:'
            },
            {
                type: 'list',
                name: 'role',
                message: 'Select Role:',
                choices: rolesName
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Assign a Manager:',
                choices: employeesName
            }
        ]).then(answer => {

            rolesArray.forEach(({id, title}) => {
                if(answer.role === title){
                    role_id = id;
                }
            });

            employeesArray.forEach(({id, name}) => {
                if(answer.manager === 'Null')
                {
                    managerId = null ;
                }
                else if(answer.manager === name){
                    managerId = id;
                }
            });

            const sql = `INSERT INTO employees (employees.first_name, employees.last_name, employees.role_id, employees.manager_id)
            VALUE(?,?,?,?)`;
            const params =[answer.first_name, answer.last_name, role_id, managerId]

            db.query(sql, params, (err, rows) => {
                if(err) throw err;
                console.log(`

            NEW EMPLOYEE ADDED!

            `)
        });
    });
};


module.exports = {
    displayEmployees,
    newEmployee
}