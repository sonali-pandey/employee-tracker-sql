const inquirer = require ('inquirer');
const db = require ('../config/connection');
const cTable = require('console.table');
const { displayDepartments} = require ('./Department');

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
                'View Employees By Department',
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
};

module.exports = {promptUser};