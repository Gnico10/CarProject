-- Creation DB.
CREATE DATABASE car_project;
USE car_project;

-- Creation of the table car
CREATE TABLE cars (
	id smallint NOT NULL auto_increment,
  	car_name varchar(30) NOT NULL,
  	car_plate varchar(10) NOT NULL,
  	PRIMARY KEY(id),
  	UNIQUE KEY (car_plate)
);

-- Case for testing purposes
INSERT INTO cars (
	SELECT 1, 'FIAT UNO', 'ABC123' UNION ALL
  	SELECT 2, 'CITROEN AMI', 'QWE456' UNION ALL
  	SELECT 3, 'FIAT PANDA', 'CVB789' UNION ALL
  	SELECT 4, 'KIA PICANTO', 'AB123CD' UNION ALL
  	SELECT 5, 'MITSUBISHI SPACE START', 'QW654AS' UNION ALL
  	SELECT 6, 'FIAT 500', 'IO123KL'
);

