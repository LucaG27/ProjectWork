-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: projectwork
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `immagine`
--

DROP TABLE IF EXISTS `immagine`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `immagine` (
  `immagine_id` int NOT NULL AUTO_INCREMENT,
  `immagine` varchar(200) DEFAULT NULL,
  `veicolo_fk_id` int DEFAULT NULL,
  PRIMARY KEY (`immagine_id`),
  KEY `veicolo_fk_id` (`veicolo_fk_id`),
  CONSTRAINT `immagine_ibfk_1` FOREIGN KEY (`veicolo_fk_id`) REFERENCES `veicolo` (`veicolo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `immagine`
--

LOCK TABLES `immagine` WRITE;
/*!40000 ALTER TABLE `immagine` DISABLE KEYS */;
INSERT INTO `immagine` VALUES (1,'/img/veicoli/upload/citroenC1-a.png',28),(2,'/img/veicoli/upload/citroenC1-b.png',28),(3,'/img/veicoli/upload/citroenC1-c.png',28),(4,'/img/veicoli/upload/citroenC3-a.png',29),(5,'/img/veicoli/upload/citroenC3-b.png',29),(6,'/img/veicoli/upload/citroenC3-c.png',29),(7,'/img/veicoli/upload/fiat500C-a.png',30),(8,'/img/veicoli/upload/fiat500C-b.png',30),(9,'/img/veicoli/upload/fiat500C-c.png',30),(10,'/img/veicoli/upload/lanciaYpsilon-a.png',31),(11,'/img/veicoli/upload/lanciaYpsilon-b.png',31),(12,'/img/veicoli/upload/lanciaYpsilon-c.png',31),(13,'/img/veicoli/upload/nissanMicra-a.png',32),(14,'/img/veicoli/upload/nissanMicra-b.png',32),(15,'/img/veicoli/upload/nissanMicra-c.png',32),(16,'/img/veicoli/upload/renaultTwingo-a.png',33),(17,'/img/veicoli/upload/renaultTwingo-b.png',33),(18,'/img/veicoli/upload/renaultTwingo-c.png',33),(19,'/img/veicoli/upload/smartFor2-a.png',34),(20,'/img/veicoli/upload/smartFor2-b.png',34),(21,'/img/veicoli/upload/smartFor2-c.png',34),(22,'/img/veicoli/upload/toyotaYaris-a.png',35),(23,'/img/veicoli/upload/toyotaYaris-b.png',35),(24,'/img/veicoli/upload/toyotaYaris-c.png',35),(25,'/img/veicoli/upload/volkswagenUp-a.png',36),(26,'/img/veicoli/upload/volkswagenUp-b.png',36),(27,'/img/veicoli/upload/volkswagenUp-c.png',36),(28,'/img/veicoli/upload/bmw-s1000.png',1),(29,'/img/veicoli/upload/suzuki-gsx-1.png',2),(30,'/img/veicoli/upload/suzuki-gsx-2-c.png',2),(31,'/img/veicoli/upload/suzuki-gsx-3-c.png',2),(32,'/img/veicoli/upload/bmw-c-evolution-1.png',3),(33,'/img/veicoli/upload/bmw-c-evolution-2.png',3),(34,'/img/veicoli/upload/bmw-c-evolution-3.png',3),(36,'/img/veicoli/upload/piaggio-liberty-1.png',5),(37,'/img/veicoli/upload/piaggio-liberty-1.png',5),(38,'/img/veicoli/upload/piaggio-liberty-1.png',5),(39,'/img/veicoli/upload/piaggio-vespa-1.png',6),(40,'/img/veicoli/upload/piaggio-vespa-2.png',6),(41,'/img/veicoli/upload/piaggio-vespa-3.png',6),(42,'/img/veicoli/upload/piaggio-vespa-4.png',6),(43,'/img/veicoli/upload/yamaha-t-max-1.png',7),(44,'/img/veicoli/upload/yamaha-t-max-2.png',7),(45,'/img/veicoli/upload/yamaha-t-max-3.png',7),(46,'/img/veicoli/upload/yamaha-t-max-4.png',7),(47,'/img/veicoli/upload/quadro-qooder-1.png',8),(48,'/img/veicoli/upload/ducati-monster-1.png',9),(49,'/img/veicoli/upload/ducati-monster-2.png',9),(50,'/img/veicoli/upload/ducati-monster-3.png',9),(51,'/img/veicoli/upload/segway-ninebot-1.png',10),(52,'/img/veicoli/upload/segway-ninebot-2.png',10),(53,'/img/veicoli/upload/xiaomi-scooter-pro-2.png',11),(54,'/img/veicoli/upload/DUCATI-MP-SCRAMBLER-1.png',12),(55,'/img/veicoli/upload/DUCATI-MP-SCRAMBLER-2.png',12),(56,'/img/veicoli/upload/DUCATI-MP-SCRAMBLER-3.png',12),(60,'/img/veicoli/upload/LEXGO-LEX-ROBO-1.png',14),(61,'/img/veicoli/upload/vivobike-s4-sport-.png',15),(62,'/img/veicoli/upload/vivobike-s4-sport-2.png',15),(63,'/img/veicoli/upload/vivobike-s4-sport3.png',15),(64,'/img/veicoli/upload/Momodesign-Revo-11-1.png',16),(65,'/img/veicoli/upload/Momodesign-Revo-11-2.png',16),(66,'/img/veicoli/upload/Momodesign-Revo-11-3.png',16),(67,'/img/veicoli/upload/LAMBORGHINI-MP-AL1.png',17),(68,'/img/veicoli/upload/DUCATI-Pro-II-Evo-1.png',18),(69,'/img/veicoli/upload/DUCATI-Pro-II-Evo-2.png',18),(70,'/img/veicoli/upload/DUCATI-Pro-II-Evo-3.png',18),(74,'/img/veicoli/upload/Nilox-E-Bike-X6-1.png',20),(75,'/img/veicoli/upload/I-bike-MTB.png',21),(76,'/img/veicoli/upload/Vivobike-VF19-1.png',22),(77,'/img/veicoli/upload/Vivobike-VF19-2.png',22),(78,'/img/veicoli/upload/Lexgo-E-bike-ruff-1.png',23),(79,'/img/veicoli/upload/Lexgo-E-bike-ruff-2.png',23),(80,'/img/veicoli/upload/Lexgo-E-bike-ruff-3.png',23),(81,'/img/veicoli/upload/askoll-eb1.png',24),(82,'/img/veicoli/upload/VIVOBIKE-VIVO-FOLD-1.png',25),(83,'/img/veicoli/upload/nilox-e-bike-j1-1.png',26),(84,'/img/veicoli/upload/argento-piuma-1.png',27),(85,'/img/veicoli/upload/argento-piuma-2.png',27),(86,'/img/veicoli/upload/argento-piuma-3.png',27),(87,'/img/veicoli/upload/ducati-hypermotard-939-1.png',4),(88,'/img/veicoli/upload/Argento-Foldable-Mini-1.png',19),(89,'/img/veicoli/upload/Argento-Foldable-Mini-2.png',19),(90,'/img/veicoli/upload/Argento-Foldable-Mini-3.png',19),(91,'/img/veicoli/upload/I-Bike-Mono-Adventure-1.png',13),(92,'/img/veicoli/upload/I-Bike-Mono-Adventure-2.png',13),(93,'/img/veicoli/upload/I-Bike-Mono-Adventure-3.png',13);
/*!40000 ALTER TABLE `immagine` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prenotazione`
--

DROP TABLE IF EXISTS `prenotazione`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prenotazione` (
  `prenotazione_id` int NOT NULL AUTO_INCREMENT,
  `data_inizio` date DEFAULT NULL,
  `data_fine` date DEFAULT NULL,
  `stato` enum('in corso','scaduta') NOT NULL,
  `utente_id_fk` int DEFAULT NULL,
  `veicolo_id_fk` int DEFAULT NULL,
  PRIMARY KEY (`prenotazione_id`),
  KEY `utente_id_fk` (`utente_id_fk`),
  KEY `veicolo_id_fk` (`veicolo_id_fk`),
  CONSTRAINT `prenotazione_ibfk_1` FOREIGN KEY (`utente_id_fk`) REFERENCES `utente` (`utente_id`),
  CONSTRAINT `prenotazione_ibfk_2` FOREIGN KEY (`veicolo_id_fk`) REFERENCES `veicolo` (`veicolo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prenotazione`
--

LOCK TABLES `prenotazione` WRITE;
/*!40000 ALTER TABLE `prenotazione` DISABLE KEYS */;
INSERT INTO `prenotazione` VALUES (9,'2000-07-07','2000-12-12','in corso',1,1),(11,'2022-03-28','2022-03-31','scaduta',1,5),(12,'2022-03-28','2022-03-31','scaduta',1,5),(13,'2022-03-29',NULL,'in corso',1,1),(14,'2022-03-29',NULL,'in corso',2,5),(15,'2022-03-29',NULL,'in corso',2,5),(16,'2022-03-29',NULL,'in corso',2,5),(17,'2022-03-29',NULL,'in corso',2,5),(18,'2022-03-29',NULL,'in corso',2,5),(19,'2022-03-29',NULL,'in corso',1,1),(20,'2022-03-29',NULL,'in corso',1,1),(21,'2022-03-29',NULL,'in corso',1,1),(22,'2022-03-29',NULL,'in corso',1,1),(23,'2022-03-29',NULL,'in corso',1,1),(24,'2022-03-29',NULL,'in corso',1,1),(25,'2022-03-29',NULL,'in corso',1,1),(26,'2022-03-29',NULL,'in corso',1,1),(27,'2022-03-30',NULL,'in corso',1,1),(28,'2022-03-30','2022-03-31','scaduta',1,1),(29,'2022-03-30','2022-03-31','scaduta',1,1),(30,'2022-03-30','2022-03-31','scaduta',1,2),(31,'2022-03-30','2022-03-31','scaduta',1,3),(32,'2022-03-30','2022-03-31','scaduta',1,3),(33,'2022-03-30','2022-03-31','scaduta',1,3),(34,'2022-03-30','2022-03-31','scaduta',1,3),(35,'2022-03-30','2022-03-31','scaduta',1,3),(36,'2022-03-30','2022-03-31','scaduta',1,5),(37,'2022-03-30','2022-03-31','scaduta',1,5),(38,'2022-03-30','2022-03-31','scaduta',1,5),(39,'2022-03-30','2022-03-31','scaduta',1,5),(40,'2022-03-30','2022-03-31','scaduta',1,5),(41,'2000-07-07','2022-03-31','scaduta',1,1),(42,'2000-07-07','2022-03-31','scaduta',1,1),(43,'2022-03-31','2022-03-31','scaduta',1,5),(44,'2022-03-31','2022-03-31','scaduta',1,5),(45,'2022-03-31','2022-03-31','scaduta',1,5),(46,'2022-03-31','2022-03-31','scaduta',1,5),(47,'2022-03-31','2022-03-31','scaduta',1,2),(48,'2022-03-31','2022-03-31','scaduta',1,32),(49,'2022-03-31','2022-03-31','scaduta',1,28),(50,'2022-03-31',NULL,'in corso',1,2),(51,'2022-03-31',NULL,'in corso',1,5),(52,'2022-03-31',NULL,'in corso',1,3),(53,'2022-03-31','2022-03-31','scaduta',1,22),(54,'2022-04-01',NULL,'in corso',1,30),(55,'2022-04-01','2022-04-01','scaduta',1,1);
/*!40000 ALTER TABLE `prenotazione` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `specifiche`
--

DROP TABLE IF EXISTS `specifiche`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `specifiche` (
  `specifiche_id` int NOT NULL AUTO_INCREMENT,
  `velocita` varchar(45) DEFAULT NULL,
  `potenza_motore` varchar(45) DEFAULT NULL,
  `alimentazione` varchar(45) DEFAULT NULL,
  `tempo_ricarica` varchar(45) DEFAULT NULL,
  `tipo_ruota` varchar(45) DEFAULT NULL,
  `limitatore_velocita` varchar(45) DEFAULT NULL,
  `autonomia` varchar(45) DEFAULT NULL,
  `emissioni_co2` varchar(45) DEFAULT NULL,
  `cambio` varchar(45) DEFAULT NULL,
  `cavalli` varchar(45) DEFAULT NULL,
  `cilindrata_motore` varchar(45) DEFAULT NULL,
  `consumo_medio` varchar(45) DEFAULT NULL,
  `veicolo_id_fk` int DEFAULT NULL,
  PRIMARY KEY (`specifiche_id`),
  KEY `specifiche_ibkfk_1_idx` (`veicolo_id_fk`),
  CONSTRAINT `specifiche_ibkfk_1` FOREIGN KEY (`veicolo_id_fk`) REFERENCES `veicolo` (`veicolo_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `specifiche`
--

LOCK TABLES `specifiche` WRITE;
/*!40000 ALTER TABLE `specifiche` DISABLE KEYS */;
INSERT INTO `specifiche` VALUES (1,'299 km/h','152 Kw','Benzina','','','','','90 g/km','Meccanico','207 cv','999 cc','5L/100km',1),(2,'214 km/h','84 Kw','Benzina','','','','','85 g/km','Meccanico','115 cv','749 cc','4.9L/100km',2),(3,'129 km/h','19 Kw','Elettrico','3.5 ore','','','160 km','Zero Emissioni','Automatico','26 cv','','',3),(4,'220 km/h','83 Kw','Benzina','','','','','92 g/km','Meccanico','113 cv','937 cc','4.5L/100km',4),(5,'80 km/h','2.6 Kw','Benzina','','','','','80 g/km','Automatico','3.5 cv','50 cc','3L/100km',5),(6,'75 km/h','2.4 Kw','Benzina','','','','','80 g/km','Automatico','3.5 cv','50 cc','3L/100km',6),(7,'180 km/h','35 Kw','Benzina','','','','','78 g/km','Automatico','50 cv','560 cc','4L/100km',7),(8,'130 km/h','23.8 Kw','Benzina','','','','','80 g/km','Automatico','33 cv','398 cc','4L/100km',8),(9,'218 km/h','82 Kw','Benzina','','','','','92 g/km','Meccanico','111 cv','937 cc','4.5L/100km',9),(10,'25 km/h','350 w','Elettrico','6.5 ore','Pneumatici Tubeless','si','40 km','Zero Emissioni','','','','',10),(11,'24 km/h','300 w','Elettrico','6 ore','Pneumatici Gonfiabili','si','45 km','Zero Emissioni','','','','',11),(12,'27 km/h','500 w','Elettrico','6 ore','Pneumatici Tubeless','si','35 km','Zero Emissioni','','','','',12),(13,'24 km/h','500 w','Elettrico','6 ore','Pneumatici Solidi','si','25 km','Zero Emissioni','','','','',13),(14,'24 km/h','300 w','Elettrico','5.5 ore','Pneumatici Tubeless','si','30 km','Zero Emissioni','','','','',14),(15,'25 km/h','500 w','Elettrico','6 ore','Pneumatici Gonfiabili','si','50 km','Zero Emissioni','','','','',15),(16,'25 km/h','400 w','Elettrico','4 ore','Pneumatici Solidi','si','25 km','Zero Emissioni','','','','',16),(17,'23 km/h','350 w','Elettrico','5 ore','Pneumatici Solidi','si','30 km','Zero Emissioni','','','','',17),(18,'23 km/h','350 w','Elettrico','7 ore','Pneumatici Tubeless','si','25 km','Zero Emissioni','','','','',18),(19,'25 km/h','250 w','Elettrico','6.5 ore','Pneumatici Gonfiabili','si','70 km','Zero Emissioni','','','','',19),(20,'24 km/h','250 w','Elettrico','5 ore','Pneumatici Gonfiabili','si','80 km','Zero Emissioni','','','','',20),(21,'30 km/h','250 w','Elettrico','4 ore','Pneumatici Gonfiabili','si','65 km','Zero Emissioni','','','','',21),(22,'24 km/h','250 w','Elettrico','6 ore','Pneumatici Gonfiabili','si','70 km','Zero Emissioni','','','','',22),(23,'24 km/h','250 w','Elettrico','5.5 ore','Pneumatici Gonfiabili','si','85 km','Zero Emissioni','','','','',23),(24,'25 km/h','250 w','Elettrico','6.5 ore','Pneumatici Gonfiabili','si','65 km','Zero Emissioni','','','','',24),(25,'25 km/h','250 w','Elettrico','5 ore','Pneumatici Gonfiabili','si','70 km','Zero Emissioni','','','','',25),(26,'23 km/h','250 w','Elettrico','4 ore','Pneumatici Gonfiabili','si','70 km','Zero Emissioni','','','','',26),(27,'23 km/h','250 w','Elettrico','6 ore','Pneumatici Gonfiabili','si','65 km','Zero Emissioni','','','','',27),(28,'130 Km/h','68 kW','Ibrida','','','','80 Km','65 g/km','Automatico','72 cv','998 cc','0,6 l/100 km',28),(29,'140 Km/h','75 kW','Ibrida','','','','123 Km','72 g/km','Automatico','83 cv','1199 cc','0,9 l/100 km',29),(30,'110 Km/h','70 kW','Elettrica','2 ore','','','70 Km','Zero Emissioni','Automatico','70 cv','999 cc','12 kWh/100 km',30),(31,'119 Km/h','90 kW','Ibrida','','','','57 Km','69 g/km','Automatico','70 cv','883 cc','0,6 l/100 km',31),(32,'122 Km/h','72 kW','Ibrida','','','','111 Km','73 g/km','Automatico','92 cv','999 cc','0,6 l/100 km',32),(33,'125 Km/h','82 kW','Ibrida','','','','25 Km','72 g/km','Automatico','65 cv','998 cc','0,6 l/100 km',33),(34,'110 Km/h','84 kW','Elettrica','3 ore','','','105 Km','Zero Emissioni','Automatico','82 cv','883 cc','10,3 kWh/100 km',34),(35,'137 Km/h','75 kW','Ibrida','','','','96 Km','71 g/km','Automatico','100 cv','1197 cc','0,6 l/100 km',35),(36,'110 Km/h','96 kW','Elettrica','1.5 ore','','','67 Km','Zero Emissioni','Automatico','60 cv','798 cc','0,6 l/100 km',36);
/*!40000 ALTER TABLE `specifiche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utente`
--

DROP TABLE IF EXISTS `utente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `utente` (
  `utente_id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(75) DEFAULT NULL,
  `cognome` varchar(75) DEFAULT NULL,
  `data_nascita` date DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `ruolo` enum('RUOLO_ADMIN','RUOLO_UTENTE') NOT NULL,
  PRIMARY KEY (`utente_id`),
  KEY `k_email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utente`
--

LOCK TABLES `utente` WRITE;
/*!40000 ALTER TABLE `utente` DISABLE KEYS */;
INSERT INTO `utente` VALUES (1,'Paolo','Rossi','1994-06-07','admin@email.com','admin','RUOLO_ADMIN'),(2,'Carlo','Verdi','2001-03-19','utente@email.com','utente','RUOLO_UTENTE'),(3,'Oscar','Vecchione','1978-06-06','oscar@gmail.it','oscar','RUOLO_ADMIN'),(4,'Allen','Ingaramo','1984-07-07','allen@gmail.it','allen','RUOLO_ADMIN'),(5,'Milo','Spandre','1982-08-08','milo@gmail.it','milo','RUOLO_ADMIN'),(6,'Dino','Olivieri','1980-09-09','dino@gmail.it','dino','RUOLO_ADMIN'),(7,'Antony','Banche','1989-06-06','antony@gmail.it','antony','RUOLO_ADMIN'),(8,'Federico','Muscio','1997-10-10','federico@gmail.it','federico','RUOLO_ADMIN'),(9,'Mauro','Boiaccino','1965-11-11','mauro@gmail.it','mauro','RUOLO_ADMIN'),(10,'Davive','Ghione','1981-12-12','davide@gmail.it','davide','RUOLO_ADMIN'),(11,'Pippo','Franco','1940-01-01','pippo@gmail.it','pippo','RUOLO_ADMIN'),(12,'Povero','Gabbiano','1980-02-02','gabbiano@gmail.it','povero','RUOLO_UTENTE'),(13,'Manco','Morto','1999-03-03','manco@gmail.it','manco','RUOLO_UTENTE'),(14,'Giorgio','Vanni','1980-04-04','giorgio@gmail.it','giorgio','RUOLO_UTENTE'),(15,'Cristina','Davena','1975-05-05','cristina@gmail.it','cristina','RUOLO_UTENTE'),(16,'Maicol','Giecson','1978-06-06','maicol@gmail.it','maicol','RUOLO_UTENTE'),(17,'Umberto','Tozzi','1952-07-07','umberto@gmail.it','umberto','RUOLO_UTENTE'),(18,'Ivana','Spagna','1975-08-08','ivana@gmail.it','ivana','RUOLO_UTENTE'),(19,'Claudia','Speranza','1969-09-09','claudia@gmail.it','claudia','RUOLO_UTENTE'),(20,'Paola','Capra','1978-06-06','paola@gmail.it','paola','RUOLO_UTENTE');
/*!40000 ALTER TABLE `utente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `veicolo`
--

DROP TABLE IF EXISTS `veicolo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `veicolo` (
  `veicolo_id` int NOT NULL AUTO_INCREMENT,
  `categoria` enum('BICICLETTA','MONOPATTINO','AUTO','MOTO','FURGONI') NOT NULL,
  `descrizione` varchar(200) DEFAULT NULL,
  `alimentazione` enum('BENZINA','ELETTRICA','GPL','DIESEL','IBRIDA') DEFAULT NULL,
  `ruote` enum('DUE RUOTE','QUATTRO RUOTE') NOT NULL,
  `disponibilita` enum('DISPONIBILE','NOLEGGIATO') NOT NULL,
  `prezzo` double DEFAULT NULL,
  `indirizzo` varchar(200) NOT NULL,
  `citta` varchar(200) NOT NULL,
  `coordinate` varchar(200) NOT NULL,
  PRIMARY KEY (`veicolo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veicolo`
--

LOCK TABLES `veicolo` WRITE;
/*!40000 ALTER TABLE `veicolo` DISABLE KEYS */;
INSERT INTO `veicolo` VALUES (1,'MOTO','BMW S1000','BENZINA','DUE RUOTE','DISPONIBILE',0.31,'Via Senato 15','Milano','9.197586,45.470286'),(2,'MOTO','Suzuki GSX','BENZINA','DUE RUOTE','NOLEGGIATO',0.31,'Viale teodorico 11','Milano','9.134114,45.460691'),(3,'MOTO','BMW C Evolution','ELETTRICA','DUE RUOTE','NOLEGGIATO',0.28,'Via Lussino','Milano','9.1967147,45.5020702'),(4,'MOTO','Ducati Hypermotard','BENZINA','DUE RUOTE','DISPONIBILE',0.32,'Via Cesare Lombroso 12','Milano','9.225661,45.456172'),(5,'MOTO','Piaggio Liberty','BENZINA','DUE RUOTE','NOLEGGIATO',0.27,'Corso Monforte 61','Milano','9.205456,45.467747'),(6,'MOTO','Piaggio Vespa','BENZINA','DUE RUOTE','DISPONIBILE',0.26,'Via Luigi Pirandello 30','Milano','9.155048,45.463074'),(7,'MOTO','Yamaha T-Max','BENZINA','DUE RUOTE','DISPONIBILE',0.28,'Viale Ezio 12','Milano','9.152759,45.473811'),(8,'MOTO','Quadro Qooder','BENZINA','QUATTRO RUOTE','DISPONIBILE',0.28,'Viale Cassiodoro 31','Milano','9.160129,45.476279'),(9,'MOTO','Ducati Monster','BENZINA','DUE RUOTE','DISPONIBILE',0.29,'Via Pietro Rondoni 50','Milano','9.14096,45.454556'),(10,'MONOPATTINO','Segway Ninebot','ELETTRICA','DUE RUOTE','DISPONIBILE',0.19,'Via Caradosso 13','Milano','9.172769,45.467106'),(11,'MONOPATTINO','Xiaomi Scooter P2','ELETTRICA','DUE RUOTE','DISPONIBILE',0.21,'Via pallanza 45','Milano','9.204312,45.502327'),(12,'MONOPATTINO','Ducati MP Scambler','ELETTRICA','DUE RUOTE','DISPONIBILE',0.19,'Via Luigi Granelli 45','Milano','9.218797,45.530079'),(13,'MONOPATTINO','I-Bike Mono Adv','ELETTRICA','DUE RUOTE','DISPONIBILE',0.21,'Via Giuseppe Govone 88','Milano','9.162129,45.493502'),(14,'MONOPATTINO','Lexgo Lex Robo','ELETTRICA','DUE RUOTE','DISPONIBILE',0.22,'Via Enrico Cosenz 45','Milano','9.162226,45.508332'),(15,'MONOPATTINO','Vivobike S4 Sport','ELETTRICA','DUE RUOTE','DISPONIBILE',0.19,'Via Carlo Goldoni 15','Milano','9.211261,45.469228'),(16,'MONOPATTINO','Momodesign Revo','ELETTRICA','DUE RUOTE','DISPONIBILE',0.25,'Via Vivaio 90','Milano','9.203592,45.470517'),(17,'MONOPATTINO','Lamborghini MP 1','ELETTRICA','DUE RUOTE','DISPONIBILE',0.19,'Via Alberto Da Gandino 91','Milano','9.093758,45.457883'),(18,'MONOPATTINO','Ducati Pro II Evo','ELETTRICA','DUE RUOTE','DISPONIBILE',0.24,'Via Degli Ulivi 77','Milano','9.082394,45.454559'),(19,'BICICLETTA','Argento Foldable','ELETTRICA','DUE RUOTE','DISPONIBILE',0.25,'Via Mario Pagano','Milano','9.169394,45.473707'),(20,'BICICLETTA','Nilox E-Bike X6','ELETTRICA','DUE RUOTE','DISPONIBILE',0.24,'Via Pietro Borsieri 2','Milano','9.188891,45.485498'),(21,'BICICLETTA','I-Bike MTB','ELETTRICA','DUE RUOTE','DISPONIBILE',0.23,'Via Antonio Carnevali 45','Milano','9.172365,45.503498'),(22,'BICICLETTA','Vivobike VF19','ELETTRICA','DUE RUOTE','DISPONIBILE',0.24,'Via Archimede 15','Milano','9.209398,45.464707'),(23,'BICICLETTA','Lexgo E-Bike RUFF','ELETTRICA','DUE RUOTE','DISPONIBILE',0.24,'Via Matteo Bandello 23','Milano','9.164983,45.462742'),(24,'BICICLETTA','Askoll EB1','ELETTRICA','QUATTRO RUOTE','DISPONIBILE',0.19,'Via Vespri Siciliani 80','Milano','9.1441,45.451106'),(25,'BICICLETTA','Vivobike Vivo Fold','ELETTRICA','DUE RUOTE','DISPONIBILE',0.25,'Via Benozzo Gozzoli 2','Milano','9.09006,45.457825'),(26,'BICICLETTA','Nilox E-Bike J1','ELETTRICA','DUE RUOTE','DISPONIBILE',0.22,'Via Mozart 12','Milano','9.201655,45.468772'),(27,'BICICLETTA','Argento Piuma','ELETTRICA','DUE RUOTE','DISPONIBILE',0.21,'Via Alserio 50','Milano','9.188667,45.490376'),(28,'AUTO','Citroen C1','BENZINA','QUATTRO RUOTE','DISPONIBILE',0.31,'Viale Legioni Romane 12','Milano','9.134114,45.460691'),(29,'AUTO','Citroen C3','IBRIDA','QUATTRO RUOTE','DISPONIBILE',0.42,'Piazzale dello sport 39','Milano','9.127357,45.480182'),(30,'AUTO','Fiat 500C','ELETTRICA','QUATTRO RUOTE','NOLEGGIATO',0.32,'Via Carlo Dolci 61','Milano','9.144133,45.471544'),(31,'AUTO','Lancia Ypsilon','IBRIDA','QUATTRO RUOTE','DISPONIBILE',0.33,'Via Mario Negri','Milano','9.15709358474,45.5005956309'),(32,'AUTO','Nissan Micra','DIESEL','QUATTRO RUOTE','DISPONIBILE',0.42,'Via Farsaglia 33','Milano','9.21951,45.453761'),(33,'AUTO','Renault Twingo','BENZINA','QUATTRO RUOTE','DISPONIBILE',0.35,'Via Fratelli Bronzetti 41','Milano','9.214718,45.463998'),(34,'AUTO','Smart For2','ELETTRICA','QUATTRO RUOTE','DISPONIBILE',0.35,'Via Polibio 80','Milano','9.158955,45.464995'),(35,'AUTO','Toyota Yaris','DIESEL','QUATTRO RUOTE','DISPONIBILE',0.32,'Via Palestro 44','Milano','9.202364,45.471909'),(36,'AUTO','VolkswagenUp','ELETTRICA','QUATTRO RUOTE','DISPONIBILE',0.31,'Via Console Marcello 39','Milano','9.144219,45.501702');
/*!40000 ALTER TABLE `veicolo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-01 12:58:52
