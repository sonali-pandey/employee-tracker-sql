const inquirer = require ('inquirer');
const db = require ('../config/connection');
const cTable = require('console.table');
const { displayDepartments, newDepartment } = require ('./Department');
const { displayRoles, newRole } = require ('./Roles');
const { displayEmployees, newEmployee } = require ('./Employee');


const promptUser = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices:[
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role',
                'Add An Employee',
                'Update An Employee Role',
                'Exit'
            ]
        }
    ]).then(({choice})=>{
        checkInput(choice);
    });
};

const checkInput= async (choice)=>{
    if(choice === 'Exit'){
        db.end(err => {
            if (err) throw err;
            console.log('Good Bye!')
            })
          return;
    }
    else if (choice === 'View All Departments'){
        displayDepartments();
        // // timer to not replace the output table by menu
        setTimeout(promptUser, 10);
    }
    else if (choice === 'Add A Department'){
        await newDepartment();
        // waiting for newDepartment function to complete execution before displaying the main menu
        setTimeout(promptUser, 10);
    }
    else if (choice === 'View All Roles'){
        displayRoles();
       // timer to not replace the output table by menu
       setTimeout(promptUser, 10);
    }
    else if (choice === 'Add A Role'){
        await newRole();
        // waiting for newDepartment function to complete execution before displaying the main menu
        setTimeout(promptUser, 10);
    }
    else if (choice === 'View All Employees'){
        displayEmployees();
       // timer to not replace the output table by menu
       setTimeout(promptUser, 10);        
    }
    else if (choice === 'Add An Employee'){
        await newEmployee();
        // waiting for newDepartment function to complete execution before displaying the main menu
        setTimeout(promptUser, 10);
    }
    else if (choice === 'Update An Employee Role'){
        updateEmployeeRole();
        // waiting for newDepartment function to complete execution before displaying the main menu
        setTimeout(promptUser, 10);
    }
};


module.exports = {promptUser};