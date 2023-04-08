
-- create
CREATE TABLE students( 
  Id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  adress TEXT NOT NULL
);

-- insert
INSERT INTO students (name, age, adress) VALUES ('Klark', '19', 'Moscow');
INSERT INTO students (name, age, adress) VALUES ('Ada', '30', 'Moscow');
INSERT INTO students (name, age, adress) VALUES ('Leon', '21', 'Hill');
INSERT INTO students (name, age, adress) VALUES ('Wong', '32', 'Moscow');
INSERT INTO students (name, age, adress) VALUES ('SKanadi', '53', 'Racoon');

-- fetch 
SELECT name 
FROM students 
WHERE adress = 'Moscow' AND age > "18" AND age < "31";