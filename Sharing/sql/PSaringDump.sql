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
  `immagine_id` int NOT NULL,
  `immagine1` varchar(45) DEFAULT NULL,
  `immagine2` varchar(45) DEFAULT NULL,
  `immagine3` varchar(45) DEFAULT NULL,
  `immagine4` varchar(45) DEFAULT NULL,
  `immagine5` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`immagine_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `immagine`
--

LOCK TABLES `immagine` WRITE;
/*!40000 ALTER TABLE `immagine` DISABLE KEYS */;
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
  `utente_id_fk` int NOT NULL,
  `veicolo_id_fk` int NOT NULL,
  PRIMARY KEY (`prenotazione_id`),
  KEY `utente_id_fk` (`utente_id_fk`),
  KEY `veicolo_id_fk` (`veicolo_id_fk`),
  CONSTRAINT `prenotazione_ibfk_1` FOREIGN KEY (`utente_id_fk`) REFERENCES `utente` (`utente_id`),
  CONSTRAINT `prenotazione_ibfk_2` FOREIGN KEY (`veicolo_id_fk`) REFERENCES `veicolo` (`veicolo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prenotazione`
--

LOCK TABLES `prenotazione` WRITE;
/*!40000 ALTER TABLE `prenotazione` DISABLE KEYS */;
INSERT INTO `prenotazione` VALUES (1,'2000-07-07','2000-12-12','scaduta',1,1),(2,'2001-08-08','2005-01-01','scaduta',2,2),(4,'2010-07-07','2020-12-12','in corso',1,1);
/*!40000 ALTER TABLE `prenotazione` ENABLE KEYS */;
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
  `descrizione` varchar(75) DEFAULT NULL,
  `alimentazione` enum('BENZINA','ELETTRICA','GPL','DIESEL','IBRIDA') DEFAULT NULL,
  `ruote` enum('DUE RUOTE','QUATTRO RUOTE') NOT NULL,
  `disponibilita` enum('DISPONIBILE','NOLEGGIATO') NOT NULL,
  `indirizzo` varchar(50) NOT NULL,
  `citta` varchar(45) NOT NULL,
  `coordinate` varchar(50) NOT NULL,
  `immagine_id_fk` int DEFAULT NULL,
  PRIMARY KEY (`veicolo_id`),
  KEY `immagine_id_fk` (`immagine_id_fk`),
  CONSTRAINT `veicolo_ibfk_1` FOREIGN KEY (`immagine_id_fk`) REFERENCES `immagine` (`immagine_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `veicolo`
--

LOCK TABLES `veicolo` WRITE;
/*!40000 ALTER TABLE `veicolo` DISABLE KEYS */;
INSERT INTO `veicolo` VALUES (1,'AUTO','fiat 500','BENZINA','QUATTRO RUOTE','DISPONIBILE','via carlo alberto,22','torino','123456',NULL),(2,'MOTO','tmax','BENZINA','DUE RUOTE','NOLEGGIATO','via antonio meucci','torino','123456',NULL),(3,'AUTO','ford Puma','IBRIDA','QUATTRO RUOTE','DISPONIBILE','via Mazzini, 25','torino','sdaasd',NULL),(4,'BICICLETTA','NCM Milano','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Sorbole, 147','torino','asdasdasd',NULL),(5,'AUTO','audi q5','IBRIDA','QUATTRO RUOTE','DISPONIBILE','Via Gerbole, 12','torino','sdaasd',NULL),(6,'BICICLETTA','Argento Omega','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Paolini,45','torino','asdasdasd',NULL),(7,'AUTO','Tesla Model 3','ELETTRICA','QUATTRO RUOTE','DISPONIBILE','Via Bisanzio,37','torino','sdaasd',NULL),(8,'MONOPATTINO','Xiaomi Electric Scooter 3','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Roma, 12','torino','asdasdasd',NULL),(9,'AUTO','Renault zoe','ELETTRICA','QUATTRO RUOTE','DISPONIBILE','Via Torino,20','torino','sdaasd',NULL),(10,'MONOPATTINO','I-Bike Mono Adventure','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Chieri,45','torino','asdasdasd',NULL),(11,'AUTO','Seat Leon','DIESEL','QUATTRO RUOTE','DISPONIBILE','Corso Potenza, 23','torino','sdaasd',NULL),(12,'MOTO','Yamaha YBR125','BENZINA','DUE RUOTE','NOLEGGIATO','Corso Marche, 45','torino','asdasdasd',NULL),(13,'AUTO','Mazda Mx 30','ELETTRICA','QUATTRO RUOTE','DISPONIBILE','Via Sant\'ottavio,19','torino','sdaasd',NULL),(14,'MOTO','Africa Twin','BENZINA','DUE RUOTE','NOLEGGIATO','Corso San Maurizio, 45','torino','asdasdasd',NULL),(15,'AUTO','Opel Grand Land','DIESEL','QUATTRO RUOTE','DISPONIBILE','Via Mattei, 78','torino','sdaasd',NULL),(16,'MOTO','Askoll es2','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Carlo Alberto,12','torino','asdasdasd',NULL),(17,'AUTO','Renault Clio','GPL','QUATTRO RUOTE','DISPONIBILE','Via Verdi, 90','torino','sdaasd',NULL),(18,'FURGONI','Renault kangoo','ELETTRICA','QUATTRO RUOTE','NOLEGGIATO','Via Filadelfia, 12','torino','asdasdasd',NULL),(19,'AUTO','Ford Fiesta','GPL','QUATTRO RUOTE','DISPONIBILE','Via Milano, 40','torino','sdaasd',NULL),(20,'MOTO','Zero s','ELETTRICA','DUE RUOTE','NOLEGGIATO','Via Ascanio Sobrero, 30','torino','asdasdasd',NULL);
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

-- Dump completed on 2022-03-24 16:39:51
