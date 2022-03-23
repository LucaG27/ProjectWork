CREATE TABLE IF NOT EXISTS `veicolo` (
`veicolo_id` int NOT NULL AUTO_INCREMENT,
`categoria` enum ('BICICLETTA', 'MONOPATTINO', 'AUTO', 'MOTO', 'FURGONI') NOT NULL,
`descrizione` varchar(75) DEFAULT NULL,
`alimentazione` enum ('BENZINA', 'ELETTRICA', 'GPL', 'DIESEL', 'IBRIDA') DEFAULT NULL,
`disponibilità` enum ('DISPONIBILE','NOLEGGIATO') NOT NULL,
`indirizzo` varchar(50) NOT NULL,
`coordinateGps` varchar(50) NOT NULL,
`immagine` varchar(75) NOT NULL,
PRIMARY KEY (`veicolo_id`)
);


INSERT INTO `veicolo`(categoria,descrizione,alimentazione,disponibilità,indirizzo,coordinateGps,immagine)
VALUES ('Auto','AVENTADOR LP 780-4 ULTIMAE ROADSTER','benzina','DISPONIBILE','Via Carlo Alberto 22,Torino','45.22325425,7.2342555',''),
('Auto','AVENTADOR LP 780-4 ULTIMAE ROADSTER','benzina','DISPONIBILE','Via Carlo Alberto 22,Torino','45.22325425,7.2342555',''),
('Carlo','Verdi','2001-03-19','utente@email.com','utente','RUOLO_UTENTE');