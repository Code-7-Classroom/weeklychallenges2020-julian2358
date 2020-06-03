DROP DATABASE IF EXISTS lumi_db;
CREATE DATABASE lumi_db;
USE lumi_db;

CREATE TABLE Car (car_make VARCHAR(255), car_model VARCHAR(255),
       car_year VARCHAR(255));
    
      INSERT INTO Car(car_make, car_model, car_year)
VALUES("Toyota", "Corolla", 2004),
("Honda", "Civic", 2013),
("Audi", "RS6", 2020),
("Tesla", "Model 3", 2018),
("Subaru", "WRX", 2020);

SELECT * FROM Car;