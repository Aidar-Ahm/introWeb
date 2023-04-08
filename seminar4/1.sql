
-- create
CREATE TABLE EMPLOYEE( 
  empId INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  dept TEXT NOT NULL
);

-- insert
INSERT INTO EMPLOYEE (name, dept) VALUES ('Klark', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Dave', 'Accounting');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Ava', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Jhon', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Jack', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Pika', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Wong', 'Sales');
INSERT INTO EMPLOYEE (name, dept) VALUES ('Ada', 'Sales');
-- fetch 
SELECT empId, name 
FROM EMPLOYEE 
WHERE dept = 'Sales' AND empId > 2 AND name LIKE '%a%' OR name = 'Dave'
ORDER BY name DESC;