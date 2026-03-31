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
    date_vente TIMESTAMP DEFAULT  CURRENT_TIMESTAMP,
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
JOIN livres l ON g.id = l.genre_id
JOIN ventes v on l.id = v.livre_id
GROUP BY g.id;

-- 4

SELECT e.* FROM editeurs e
LEFT JOIN livres l on e.id = l.editeur_id
LEFT JOIN ventes v on l.id = v.livre_id
WHERE v.id IS NULL;

-- 5

SELECT l.id, l.nom,g.nom , SUM(v.quantite) AS total FROM genres g
JOIN livres l ON g.id = l.genre_id
JOIN ventes v on l.id = v.livre_id
GROUP BY l.id
HAVING total = (
    SELECT MAX(total_ventes)
    FROM (
             SELECT SUM(v2.quantite) AS total_ventes
             FROM livres l2
                      JOIN ventes v2 ON l2.id = v2.livre_id
             WHERE l2.genre_id = l.genre_id
             GROUP BY l2.id
         ) AS t
);

-- 6
SELECT v.client FROM ventes v
JOIN livres l ON v.livre_id = l.id
GROUP BY v.client
HAVING COUNT(DISTINCT  l.genre_id) > 3

-- 7
    SELECT MONTH(v.date_vente) AS mois, SUM(l.prix * v.quantite) AS CA
    FROM ventes v
    JOIN livres l ON v.livre_id = l.id
    GROUP BY MONTH(v.date_vente);

-- 8

SELECT l.* FROM livres l
WHERE l.annee_publication > 2020
AND l.prix > (
    SELECT AVG(prix) FROM livres WHERE genre_id = l.genre_id
    );



-- R-Challenge 7 — L'hôpital

-- 1

SELECT c.*, m.nom AS medecin, p.nom AS patient FROM medecins m
JOIN consultations c ON m.id = c.medecin_id
JOIN patients p ON c.patient_id = p.id;

-- 2
SELECT m.nom, COUNT(c.id) FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
WHERE MONTH(c.date_consultation) = Month(CURRENT_DATE)
GROUP BY m.id;

-- 3
SELECT p.nom, SUM(c.cout) AS total FROM patients p
JOIN consultations c ON p.id = c.patient_id
GROUP BY p.id;

-- 4

SELECT p.* FROM patients p
LEFT JOIN consultations c ON c.patient_id = p.id
WHERE c.id IS NULL;

-- 5

SELECT m.nom, COUNT(DISTINCT c.patient_id) AS nb_patients FROM medecins m
JOIN consultations c ON c.medecin_id = m.id
GROUP BY m.id
ORDER BY nb_patients DESC
LIMIT 1;

-- 6
SELECT pre.* , p.nom as patient, m.nom as medecin FROM patients p
JOIN consultations c ON c.patient_id = p.id
JOIN prescriptions pre ON pre.consultation_id = c.id
JOIN medecins m ON c.medecin_id = m.id
WHERE p.nom = "preee";

-- 7
SELECT m.specialite, COUNT(c.id) AS nb_const FROM medecins m
JOIN consultations c ON m.id = c.medecin_id
GROUP BY m.specialite
ORDER BY nb_const DESC
LIMIT 1;



