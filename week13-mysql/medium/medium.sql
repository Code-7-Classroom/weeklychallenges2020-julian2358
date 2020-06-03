DROP DATABASE IF EXISTS	movie_db;
CREATE DATABASE movie_db;
USE movie_db;

CREATE TABLE Movie(movie_title VARCHAR(255),
       movie_date VARCHAR(255), movie_rating INT(10));
    
      INSERT INTO Movie(movie_title, movie_date, movie_rating)
VALUES("The Shawshank Redemption",'1994-06-26', 9),
("The Godfather ",'1972-09-14', 9),
("The Godfather: Part II ",'1974-06-16', 9),
("The Dark Knight",'2008-06-16', 9),
("12 Angry Men ",'1957-05-21', 8),
("Schindler's List ",'1993-09-14', 8),
("The Lord of the Rings: The Return of the King",'2003-06-16', 8),
("Pulp Fiction ", '1994-06-16', 8),
("The Good, the Bad and the Ugly", '1966-05-21', 8),
("Fight Club", '1999-05-21', 8)
;

SELECT * FROM movie_db where movie_db Like '_s';

