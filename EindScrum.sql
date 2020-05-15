USE scrum;
DROP TABLE info;
USE scrum;
CREATE TABLE info(
naam varchar(30) NOT NULL,
issue varchar(500) NOT NULL,
lokaal varchar(20) NULL,
ArrivalDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL
);
INSERT INTO info(naam, issue, lokaal) value
('sam', 'probleem 1', 'aarde'),
('Izdine', 'probleem 2', 'mars'),
('Laurens', 'probleem 3', 'Jupiter'),
('Kenza', 'probleem 4', 'Maan');

