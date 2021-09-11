INSERT INTO departments (name)
VALUE
('Marketting'),
('Finance'),
('Legal'),
('Engineering'),
('IT'),
('Customer service');

INSERT INTO roles (title, salary, department_id)
VALUE
('Sales Lead', '100000', '1'),
('Salesperson', '80000', '1'),
('Accountant', '125000', '2'),
('Lead Engineer', '150000', '4'),
('Software Engineer', '120000', '4'),
('Lawyer', '190000', '3'),
('Legal Team Lead', '250000', '3'),
('System Engineer', '119000', '5');

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUE
('Jane', 'Doe', '1', null),
('John', 'Doe', '2', '1'),
('Ashley', 'Sentil', '3', null),
('Anne', 'Cuthbert', '4', null),
('Alana', 'Cary', '5', '4'),
('Ben', 'Tupik', '5', '4'),
('Shirley', 'Brown', '6', '7'),
('Susan', 'Potter', '7', null),
('James', 'Allen', '8', null);