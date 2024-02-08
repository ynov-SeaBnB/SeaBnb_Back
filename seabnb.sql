-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mar. 19 déc. 2023 à 15:31
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `seabnb`
--

-- --------------------------------------------------------

--
-- Structure de la table `boat`
--

CREATE TABLE `boat` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `width` float DEFAULT NULL,
  `length` float DEFAULT NULL,
  `motorized` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`motorized`)),
  `port` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`port`)),
  `country` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `skipper` varchar(255) NOT NULL,
  `pictures` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`pictures`)),
  `equipments` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`equipments`)),
  `specifications` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`specifications`)),
  `availability` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`availability`)),
  `deposit` float NOT NULL,
  `note` float DEFAULT NULL,
  `propertyPapers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`propertyPapers`)),
  `idOwner` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `boat`
--

INSERT INTO `boat` (`id`, `name`, `width`, `length`, `motorized`, `port`, `country`, `type`, `skipper`, `pictures`, `equipments`, `specifications`, `availability`, `deposit`, `note`, `propertyPapers`, `idOwner`) VALUES
(1, 'Amadeus', 44.7, 8.8, '[\"Yes\", \"Caterpillar 3412 Е x 2\"]', '[\"Port de Palamos\", \"Palamos\"]', 'Spain', 'Yacht', 'Yes', '[\"/src/assets/images/idUser/nameBateau/img1\", \"/src/assets/images/idUser/nameBateau/img2\",\"/src/assets/images/idUser/nameBateau/img3\"]', '[\"Kitchen\", \"Bedroom\"]', '{\"AvgSpeed\": 10.3, \"MaxSpeed\": 13.8, \"Constructor\": \"Timmerman Yachts\", \"ConstructionYear\": 2014}', '{\"2023-10-12\": \"2023-10-15\", \"2023-10-18\": \"2023-10-23\"}', 5000, 4.8, '[\"/src/assets/documents/idUser/nameBateau/carteIdentite\", \"/src/assets/documents/idUser/nameBateau/certificatEnregistrement\", \"/src/assets/documents/idUser/nameBateau/portEnregistrement\", \"/src/assets/documents/idUser/nameBateau/taxeAnnuelle\"]', 1);

-- --------------------------------------------------------

--
-- Structure de la table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `idReservation` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `comment`
--

INSERT INTO `comment` (`id`, `content`, `idReservation`) VALUES
(1, 'Séjour banger, ekip.', 1);

-- --------------------------------------------------------

--
-- Structure de la table `reservation`
--

CREATE TABLE `reservation` (
  `id` int(11) NOT NULL,
  `startingDate` date DEFAULT NULL,
  `endDate` date DEFAULT NULL,
  `ppn` float NOT NULL,
  `note` float DEFAULT NULL,
  `idClient` int(11) NOT NULL,
  `idBoat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reservation`
--

INSERT INTO `reservation` (`id`, `startingDate`, `endDate`, `ppn`, `note`, `idClient`, `idBoat`) VALUES
(1, '2023-10-12', '2023-10-15', 279.9, 4.8, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `birthDate` date NOT NULL,
  `emailAddress` varchar(255) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `note` float DEFAULT NULL,
  `creationDate` date NOT NULL,
  `profilePicture` varchar(255) DEFAULT NULL,
  `spokenLanguages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`spokenLanguages`)),
  `status` varchar(50) DEFAULT NULL,
  `isOwner` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `firstName`, `birthDate`, `emailAddress`, `phoneNumber`, `password`, `salt`, `note`, `creationDate`, `profilePicture`, `spokenLanguages`, `status`, `isOwner`) VALUES
(1, 'Jackson', 'Bashar', '1999-07-20', 'popsmoke@gmail.com', '+33 7 77 77 77', '*00A51F3F48415C7D4E8908980D443C29C69B60C9', NULL, NULL, '2023-11-28', NULL, NULL, NULL, 1),
(2, 'Diakate', 'Issa', '1992-06-06', 'chen@gmail.com', '+33 6 67 77 77', '*00A51F3F48415C7D4E8908980D443C29C69B60C9', NULL, NULL, '2023-11-28', NULL, '[\"French\", \"English\"]', NULL, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `boat`
--
ALTER TABLE `boat`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_BoatOwner` (`idOwner`);

--
-- Index pour la table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ReservationComment` (`idReservation`);

--
-- Index pour la table `reservation`
--
ALTER TABLE `reservation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_ClientReservation` (`idClient`),
  ADD KEY `FK_BoatReservation` (`idBoat`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `boat`
--
ALTER TABLE `boat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `reservation`
--
ALTER TABLE `reservation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
