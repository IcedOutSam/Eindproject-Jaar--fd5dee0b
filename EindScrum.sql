DROP TABLE info;
CREATE TABLE info(
naam varchar(30) NOT NULL,
issue varchar(500) NOT NULL,
ArrivalDate datetime NOT NULL,
lokaal varchar(20) NULL,
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL
);
INSERT INTO info(naam, issue, lokaal, ArrivalDate) value
('sam', 'probleem 1', 'aarde',  curdate()),
('Izdine', 'probleem 2', 'mars', curdate()),
('Laurens', 'probleem 3', 'Jupiter', curdate()),
('Kenza', 'probleem 4', 'Maan', curdate());
