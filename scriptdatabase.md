## script de la création de la base de donnée

### création de la database :

 CREATE DATABASE ama_test;

### création de l'utilisateur et assignation du password

 CREATE USER 'test'@'%' IDENTIFIED BY 'test12345';

### assignation des privilèges à l'utilisateur 

 GRANT ALL ON ama_test.* TO 'test'@'%';

### création de la table "tasks"

CREATE TABLE tasks( 
    id INT AUTO_INCREMENT PRIMARY KEY, 
    task VARCHAR(255) NOT NULL, 
    completed BOOLEAN DEFAULT FALSE, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
