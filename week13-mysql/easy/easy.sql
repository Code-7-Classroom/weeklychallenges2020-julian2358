DROP DATABASE IF EXISTS	book_db;
CREATE DATABASE book_db;
USE book_db;

CREATE TABLE Book (book_title VARCHAR(255),
       book_date DATE, author_first VARCHAR(255), author_last VARCHAR(255));
    
      INSERT INTO Book(car_make, car_model, car_year)
VALUES("Harry Potter", 1997-06-26, 'J.K', 'Rowling'),
("The Hunger Games", 2008-09-14, 'Suzanne', 'Collins'),
("The Catcher in the Rye", 1951-06-16, 'J. D.', 'Salinger'),
("The Catcher in the Rye", 1951-06-16, 'J. D.', 'Salinger'),
("Holy Bible", "0100-05-21", "King", "James");

SELECT * FROM Car;