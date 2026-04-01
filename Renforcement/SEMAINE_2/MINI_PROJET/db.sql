-- Partie 1
CREATE DATABASE res_hotel;
USE res_hotel;
CREATE TABLE roles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom ENUM('client', 'receptionist', 'admin')
)ENGINE=INNODB;

CREATE TABLE users (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    name VARCHAR(50),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES  roles(id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE hotels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) UNIQUE,
    adresse VARCHAR(50)
)ENGINE=INNODB;

CREATE TABLE type_chambres (
    id INT PRIMARY KEY  AUTO_increment,
    nom VARCHAR(50),
    description VARCHAR(100) DEFAULT  NULL,
    capacite INT DEFAULT 0
)ENGINE=INNODB;

CREATE TABLE chambres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    numero INT UNIQUE,
    prix FLOAT,
    status ENUM('libre', 'occupée'),
    hotel_id INT,
    type_chambre_id INT,
    FOREIGN KEY  (hotel_id) REFERENCES  hotels (id)ON DELETE  CASCADE,
    FOREIGN KEY  (type_chambre_id) REFERENCES  type_chambres (id)ON DELETE  CASCADE
)ENGINE=INNODB;

CREATE TABLE factures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    total DECIMAL(10,2),
    date TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
)ENGINE=INNODB;

CREATE TABLE services (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nom VARCHAR(50),
    prix FLOAT
)ENGINE=INNODB;

CREATE TABLE reservations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    check_in TIMESTAMP,
    check_out TIMESTAMP,
    status ENUM('pending', 'accepted', 'rejected', 'cancelled'),
    facture_id INT,
    chambre_id INT,
    user_id INT,
    FOREIGN KEY (facture_id) REFERENCES factures (id) ON DELETE  CASCADE,
    FOREIGN KEY (chambre_id) REFERENCES chambres (id) ON DELETE  CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE  CASCADE
)ENGINE=INNODB;

CREATE  TABLE service_reservation (
    service_id INT,
    reservation_id INT,
    PRIMARY KEY (service_id, reservation_id),
    FOREIGN KEY (service_id) REFERENCES services (id) ON DELETE CASCADE,
    FOREIGN KEY (reservation_id) REFERENCES reservations (id) ON DELETE CASCADE
)ENGINE=INNODB;

CREATE TABLE avis (
    id INT PRIMARY KEY  AUTO_increment,
    comment VARCHAR(50),
    note INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES  users (id) ON DELETE  CASCADE,
)



-- partie 2

INSERT INTO roles (nom) VALUES
('client'),
('receptionist'),
('admin');


INSERT INTO users (name, email, password, role_id) VALUES
                    ('Ali Ben', 'ali@mail.com', 'pass1', 1),
                    ('Sara Lh', 'sara@mail.com', 'pass2', 1),
                    ('Mohamed K', 'mohamed@mail.com', 'pass3', 1),
                    ('Nadia R', 'nadia@mail.com', 'pass4', 1),
                    ('Youssef A', 'youssef@mail.com', 'pass5', 1),
                    ('Salma T', 'salma@mail.com', 'pass6', 1),
                    ('Karim H', 'karim@mail.com', 'pass7', 1),
                    ('Lina M', 'lina@mail.com', 'pass8', 1),
                    ('Rachid B', 'rachid@mail.com', 'pass9', 1),
                    ('Imane S', 'imane@mail.com', 'pass10', 1),
                    ('Reception1', 'recep1@mail.com', 'pass11', 2),
                    ('Reception2', 'recep2@mail.com', 'pass12', 2),
                    ('Admin', 'admin@mail.com', 'pass13', 3);

INSERT INTO hotels (nom, adresse) VALUES
    ('Hotel Atlas', 'Casablanca'),
    ('Hotel Ocean', 'Agadir'),
    ('Hotel Sahara', 'Marrakech');

INSERT INTO type_chambres (nom, description, capacite) VALUES
    ('Simple', 'Chambre simple pour 1 personne', 1),
    ('Double', 'Chambre pour 2 personnes', 2),
    ('Suite', 'Suite spacieuse', 4),
    ('Deluxe', 'Suite deluxe avec balcon', 3);


INSERT INTO chambres (numero, prix, status, hotel_id, type_chambre_id) VALUES
                                                                           (101, 50, 'libre', 1, 1),
                                                                           (102, 60, 'libre', 1, 1),
                                                                           (103, 80, 'libre', 1, 2),
                                                                           (104, 90, 'libre', 1, 2),
                                                                           (105, 150, 'libre', 1, 3),
                                                                           (106, 200, 'libre', 1, 4),
                                                                           (201, 50, 'libre', 2, 1),
                                                                           (202, 60, 'libre', 2, 1),
                                                                           (203, 80, 'libre', 2, 2),
                                                                           (204, 90, 'libre', 2, 2),
                                                                           (205, 150, 'libre', 2, 3),
                                                                           (206, 200, 'libre', 2, 4),
                                                                           (301, 50, 'libre', 3, 1),
                                                                           (302, 60, 'libre', 3, 1),
                                                                           (303, 80, 'libre', 3, 2),
                                                                           (304, 90, 'libre', 3, 2),
                                                                           (305, 150, 'libre', 3, 3),
                                                                           (306, 200, 'libre', 3, 4),
                                                                           (307, 250, 'libre', 3, 4),
                                                                           (308, 300, 'libre', 3, 4);

INSERT INTO factures (total) VALUES
                                 (100), (200), (150), (300), (250);

INSERT INTO reservations (check_in, check_out, status, facture_id, chambre_id, user_id) VALUES
        ('2026-04-01 14:00:00', '2026-04-05 12:00:00', 'accepted', 1, 101, 1),
        ('2026-04-02 14:00:00', '2026-04-04 12:00:00', 'accepted', 2, 102, 2),
        ('2026-04-03 14:00:00', '2026-04-07 12:00:00', 'pending', 3, 103, 3),
        ('2026-04-05 14:00:00', '2026-04-10 12:00:00', 'accepted', 4, 104, 4),
        ('2026-04-06 14:00:00', '2026-04-08 12:00:00', 'accepted', 5, 105, 5),
        ('2026-04-02 14:00:00', '2026-04-06 12:00:00', 'accepted', 1, 106, 6),
        ('2026-04-01 14:00:00', '2026-04-05 12:00:00', 'pending', 2, 201, 7),
        ('2026-04-03 14:00:00', '2026-04-07 12:00:00', 'accepted', 3, 202, 8),
        ('2026-04-04 14:00:00', '2026-04-06 12:00:00', 'accepted', 4, 203, 9),
        ('2026-04-05 14:00:00', '2026-04-08 12:00:00', 'accepted', 5, 204, 10),
        ('2026-04-01 14:00:00', '2026-04-03 12:00:00', 'accepted', 1, 205, 1),
        ('2026-04-02 14:00:00', '2026-04-04 12:00:00', 'accepted', 2, 206, 2),
        ('2026-04-03 14:00:00', '2026-04-05 12:00:00', 'accepted', 3, 301, 3),
        ('2026-04-04 14:00:00', '2026-04-06 12:00:00', 'accepted', 4, 302, 4),
                                                                                            ('2026-04-05 14:00:00', '2026-04-07 12:00:00', 'accepted', 5, 303, 5);
INSERT INTO factures (total) VALUES
    (100), (200), (150), (300), (250);

INSERT INTO reservations (check_in, check_out, status, facture_id, chambre_id, user_id) VALUES
    ('2026-04-01 14:00:00', '2026-04-05 12:00:00', 'accepted', 1, 101, 1),
    ('2026-04-02 14:00:00', '2026-04-04 12:00:00', 'accepted', 2, 102, 2),
    ('2026-04-03 14:00:00', '2026-04-07 12:00:00', 'pending', 3, 103, 3),
    ('2026-04-05 14:00:00', '2026-04-10 12:00:00', 'accepted', 4, 104, 4),
    ('2026-04-06 14:00:00', '2026-04-08 12:00:00', 'accepted', 5, 105, 5),
    ('2026-04-02 14:00:00', '2026-04-06 12:00:00', 'accepted', 1, 106, 6),
    ('2026-04-01 14:00:00', '2026-04-05 12:00:00', 'pending', 2, 201, 7),
    ('2026-04-03 14:00:00', '2026-04-07 12:00:00', 'accepted', 3, 202, 8),
    ('2026-04-04 14:00:00', '2026-04-06 12:00:00', 'accepted', 4, 203, 9),
    ('2026-04-05 14:00:00', '2026-04-08 12:00:00', 'accepted', 5, 204, 10),
    ('2026-04-01 14:00:00', '2026-04-03 12:00:00', 'accepted', 1, 205, 1),
    ('2026-04-02 14:00:00', '2026-04-04 12:00:00', 'accepted', 2, 206, 2),
    ('2026-04-03 14:00:00', '2026-04-05 12:00:00', 'accepted', 3, 301, 3),
    ('2026-04-04 14:00:00', '2026-04-06 12:00:00', 'accepted', 4, 302, 4),
    ('2026-04-05 14:00:00', '2026-04-07 12:00:00', 'accepted', 5, 303, 5);


-- partie 3

SELECT MONTH(r.check_in) AS mois, SUM(ch.prix) AS CA FROM chambres ch
JOIN reservations r ON r.chambre_id = ch.id
GROUP BY mois;

SELECT COUNT(r.id) AS count , u.name, FROM users u
JOIN reservations r ON u.id = r.user_id
GROUP BY u.id
HAVING count > 3;

SELECT ch.* , r.status FROM chambres ch
WHERE ch.id NOT IN (
    SELECT r.chambre_id FROM reservations r
    WHERE r.status = 'accepted'
    AND NOT (r.check_out <= "2026-04-03 12:00:00" OR r.check_in >= '2026-04-05 14:00:00')
);

SELECT AVG(f.total) AS RM, u.name FROM users u
JOIN reservations r on u.id = r.user_id
JOIN factures f on f.id = r.facture_id
GROUP BY u.id;

SELECT SUM(f.total) AS montant , u.name FROM users u
JOIN reservations r on u.id = r.user_id
JOIN factures f on f.id = r.facture_id
GROUP BY u.id
ORDER BY montant DESC
LIMIT 5;

