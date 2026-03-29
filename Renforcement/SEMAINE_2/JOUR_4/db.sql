CREATE TABLE genres (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50) UNIQUE
)ENGINE=INNODB;

CREATE TABLE editeurs (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50) UNIQUE NOT NULL ,
    pays VARCHAR(50)
)ENGINE=INNODB

CREATE TABLE livres (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    title VARCHAR(50),
    prix FLOAT DEFAULT 0,
    annee_publication TIMESTAMP DEFAUlt CURRENT_TIMESTAMP,
    editeur_id INT,
    genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE  CASCADE ,
    FOREIGN KEY (editeur_id) REFERENCES editeurs(id) ON DELETE  CASCADE
)ENGINE=INNODB;
CREATE TABLE ventes(
    id INT PRIMARY KEY  AUTO_INCREMENT,
    livre_id INT,
    client VARCHAR(50),
    quantite INT DEFAULT 0,
    date_vente TIMETAMP DEFAULT  CURRENT_TIMESTAMP,
    FOREIGN KEY (livre_id) REFERENCES livres(id) ON DELETE  CASCADE
)ENGINE=INNODB;

-- 1
SELECT l.*, e.nom AS editeur, g.nom AS genre FROM editeurs e
JOIN livres l ON e.id = l.editeur_id
JOIN genres g ON g.id = l.genre_id;

-- 2
SELECT e.nom, COUNT(l.id) AS "nbrLivres" FROM editeurs e
JOIN livres l ON e.id = l.editeur_id
GROUP BY e.id
ORDER BY nbrLivres DESC;

-- 3
SELECT g.nom , SUM(l.prix * v.quantite) AS "CHIFFRE D'AFFAIRE" FROM genres g
JOIN livres l ON g.id = l.id
JOIN ventes v on l.id = v.livre_id
GROUP BY g.id;

-- 4

SELECT e.* FROM editeurs e
LEFT JOIN livres l on e.id = l.editeur_id
LEFT JOIN ventes v on l.id = v.livre_id
WHERE v.id IS NULL;

-- 5

SELECT l.id, l.nom,g.nom , COUNT(v.livre_id) AS "NOMBRE DE LIVRES VENDU" FROM genres g
JOIN livres l ON g.nom = l.id
JOIN ventes v on l.id = v.livre_id
GROUP BY l.id;

-- 6



