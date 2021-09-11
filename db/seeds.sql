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