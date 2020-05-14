CREATE DATABASE scrum;
use scrum;
CREATE TABLE info(
naam varchar(30) NOT NULL,
issue varchar(30) NOT NULL,
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL
);
INSERT INTO info(`naam`, `issue`) value
('sam', 'probleem 1'),
('Izdine', 'probleem 2'),
('Laurens', 'probleem 3'),
('Kenza', 'probleem 4');
