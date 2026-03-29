-- S-Challenge 3 — SQL : Le registre des employés
SELECT * FROM employers;
SELECT * FROM employes WHERE departement LIKE "Marketing";
SELECT * FROM employes WHERE  salaire >= 3000;
SELECT * FROM employes
ORDER BY salaire DESC ;
SELECT * FROM employes
ORDER BY salaire DESC LIMIT 5;
SELECT count(employes.id)   AS " nombre d'pemloyes" FROM employes


-- S-Challenge 4 — SQL : Le magasin en ligne
CREATE TABLE articles (
    id : INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50),
    prix DECIMAL  DEFAULT 0,
    categorie VARCHAR(100) ,
    stock INT DEFAULT 0,
    note_moyenne FLOAT DEFAULT 0.0
) ENGINE=INNODB;


INSERT INTO articles ('nom', 'prix', 'categorie', 'stock', 'note_moyenne') VALUES (
    {'article 1', 70, 'Informatique', 0, 5},
    {'article 2', 50, 'Informatique', 0, 5},
    {'article 3', 70, 'Informatique', 10, 4},
    {'article 4', 70, 'Informatique', 5, 5},
    {'article 5', 70, 'Informatique', 100, 5},
    {'article 6', 70, 'Informatique', 30, 9},
    {'article 7', 70, 'Informatique', 20, 2.5},
    {'article 8', 70, 'Informatique', 0, 0},
)
SELECT * FROM articles WHERE prix BETWEEN 20 and 80;
SELECT * FROM articlesz WHERE nom like "%Pro%";
SELECT * FROM articles WHERE stock = 0;
SELECT * FROM articles WHERE categorie LIKE "Informatique" OR categorie LIKE "Télephonie";
Select * FROM articles WHERE prix >=  50 AND note_moyenne >= 4;


-- S-Challenge 5 — SQL : Modifier les données

UPDATE  employes SET salaire =salaire + salaire * (10/ 100) WHERE departement LIKE "Développement"

UPDATE employes SET departement ="Direction" WHERE id= 5

DELETE FROM employes WHERE date_embouche < 2015

SELECT avg(salaire) AS "SALAIRE MOYTENNE", COUNT(id) AS "NOMBRE D4EMPLOYES RESTANT" FROM employes
SELECT salaire FROM employes ORDER BY salaire DESC LIMIT 1;