-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 05, 2024 alle 19:48
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tps_scuola`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `classi`
--

CREATE TABLE `classi` (
  `idClasse` int(11) NOT NULL,
  `classe` int(11) DEFAULT NULL,
  `sezione` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `classi`
--

INSERT INTO `classi` (`idClasse`, `classe`, `sezione`) VALUES
(1, 7, 'BIF'),
(2, 2, 'B'),
(5, 1, 'C'),
(7, 1, 'A'),
(21, 2, 'd');

-- --------------------------------------------------------

--
-- Struttura della tabella `insegna`
--

CREATE TABLE `insegna` (
  `idInsegna` int(11) NOT NULL,
  `rifClasse` int(11) DEFAULT NULL,
  `rifProfessore` int(11) DEFAULT NULL,
  `materia` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `insegna`
--

INSERT INTO `insegna` (`idInsegna`, `rifClasse`, `rifProfessore`, `materia`) VALUES
(3, 1, 2, 'Matematica'),
(15, 1, 1, 'Storia'),
(18, 2, 1, 'France'),
(20, 5, 2, 'Matemaica'),
(21, 5, 1, 'Italiano'),
(22, 5, 1, 'Storia');

-- --------------------------------------------------------

--
-- Struttura della tabella `professori`
--

CREATE TABLE `professori` (
  `idProfessore` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `codFiscale` varchar(16) DEFAULT NULL,
  `luogoNascita` varchar(50) DEFAULT NULL,
  `dataNascita` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `numeroTelefono` varchar(20) DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cittadinanza` varchar(50) DEFAULT NULL,
  `CAP` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `professori`
--

INSERT INTO `professori` (`idProfessore`, `nome`, `cognome`, `codFiscale`, `luogoNascita`, `dataNascita`, `email`, `numeroTelefono`, `indirizzo`, `cittadinanza`, `CAP`) VALUES
(1, 'VALENTINO', 'CHINNI', 'CODICECHINNI', 'CALABRIA', '1987-02-04', 'chinni@email.com', '+43 543 345 3245', 'via delle scuola', 'Calabrese', 55100),
(2, 'Alessandro', 'Terni', 'Malessere', 'Italiana', '1990-03-21', 'terni@gmial.com', '+32 543 324 6534', 'dove vuole', 'Italiana', 55100);

-- --------------------------------------------------------

--
-- Struttura della tabella `studenti`
--

CREATE TABLE `studenti` (
  `idStudente` int(11) NOT NULL,
  `nome` varchar(50) DEFAULT NULL,
  `cognome` varchar(50) DEFAULT NULL,
  `codFiscale` varchar(16) DEFAULT NULL,
  `luogoNascita` varchar(50) DEFAULT NULL,
  `dataNascita` date DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `numeroTelefono` varchar(20) DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `cittadinanza` varchar(50) DEFAULT NULL,
  `CAP` int(11) DEFAULT NULL,
  `rifClasse` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `studenti`
--

INSERT INTO `studenti` (`idStudente`, `nome`, `cognome`, `codFiscale`, `luogoNascita`, `dataNascita`, `email`, `numeroTelefono`, `indirizzo`, `cittadinanza`, `CAP`, `rifClasse`) VALUES
(2, 'Ionut Petrisor', 'Dascalu', 'DSCNPT05R30Z345K', 'Romania', '2005-06-30', 'dascalui.p.301@gmail.com', '333 191 6848', 'Via Bordo, 6', 'Rumena', 55011, NULL),
(3, 'Nicolas', 'Rizzo', 'AAAAAA11A22A333C', 'Bozzano', '2005-12-12', 'rizzo@gmail.com', '333 324 5432', 'Via vittorio veneto ', 'Italina', 55011, 1),
(7, 'Alice', 'Degl\'innocenti', 'DGLLCA45A63H123H', 'lucca', '2005-03-10', 's.alice.degli@gmail.com', '213 123 1231', 'villa', 'italiana', 55011, NULL);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `classi`
--
ALTER TABLE `classi`
  ADD PRIMARY KEY (`idClasse`);

--
-- Indici per le tabelle `insegna`
--
ALTER TABLE `insegna`
  ADD PRIMARY KEY (`idInsegna`),
  ADD KEY `fk_clas` (`rifClasse`),
  ADD KEY `fk_profes` (`rifProfessore`);

--
-- Indici per le tabelle `professori`
--
ALTER TABLE `professori`
  ADD PRIMARY KEY (`idProfessore`);

--
-- Indici per le tabelle `studenti`
--
ALTER TABLE `studenti`
  ADD PRIMARY KEY (`idStudente`),
  ADD KEY `rifClasse` (`rifClasse`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `classi`
--
ALTER TABLE `classi`
  MODIFY `idClasse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT per la tabella `insegna`
--
ALTER TABLE `insegna`
  MODIFY `idInsegna` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT per la tabella `professori`
--
ALTER TABLE `professori`
  MODIFY `idProfessore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT per la tabella `studenti`
--
ALTER TABLE `studenti`
  MODIFY `idStudente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `insegna`
--
ALTER TABLE `insegna`
  ADD CONSTRAINT `fk_clas` FOREIGN KEY (`rifClasse`) REFERENCES `classi` (`idClasse`),
  ADD CONSTRAINT `fk_profes` FOREIGN KEY (`rifProfessore`) REFERENCES `professori` (`idProfessore`);

--
-- Limiti per la tabella `studenti`
--
ALTER TABLE `studenti`
  ADD CONSTRAINT `studenti_ibfk_1` FOREIGN KEY (`rifClasse`) REFERENCES `classi` (`idClasse`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
