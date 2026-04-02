CREATE TABLE utilisateurs (
    id INT PRIMARY KEY  AUTo_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM("Apprenant", "Professeur")
)ENGINE=INNODB;

CREATE TABLE apprenants (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    CNE VARCHAR(50),
    filliere VARCHAR(50),
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES  utilisateurs (id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE professeurs (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    matricule VARCHAR(50),
    utilisateur_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES  utilisateurs (id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE cours (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50) UNIQUE,
    prix FLOAT CHECK ( prix>0 )
    professeur_id INT,
    FOREIGN KEY (professeur_id) REFERENCES  professeurs (id) ON DELETE  CASCADE
)engine=INNODB;

CREATE TABLE inscription (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    apprenant_id INT,
    cour_id INT,
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (apprenant_id) REFERENCES  apprenants(id) ON DELETE  CASCADE ,
    FOREIGN KEY (cour_id) REFERENCES  cours(id) ON DELETE  CASCADE ,
)ENGINE=INNODB;

CREATE TABLE modules (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50),
    cour_id INT,
    FOREIGN KEY (cour_id) REFERENCES  cours(id) ON DELETE  CASCADE
)ENGINE=INNODB;

CREATE TABLE lessons (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    titre VARCHAR(50),
    module_id INT,
    FOREIGN KEY (module_id) REFERENCES  modules(id) ON DELETE  CASCADE
)ENGINE=INNODB;


CREATE TABLE categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR5(50)
)ENGINE=INNODB;

CREATE TABLE avis (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    comment VARCHAR(50),
    note INT CHECK ( note >= 1 AND note <= 5 ),
)ENGINE=INNODB;