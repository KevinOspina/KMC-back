-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bdkmc
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema bdkmc
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bdkmc` DEFAULT CHARACTER SET utf8 ;
USE `bdkmc` ;


CREATE TABLE IF NOT EXISTS `bdkmc`.`users` (
  `id_user` INT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  PRIMARY KEY (`idusers`))
ENGINE = InnoDB

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessionhandler`
--

CREATE TABLE IF NOT EXISTS `bdkmc`.`sessionhandler` (
  `IdSession` varchar(100) NOT NULL,
  `id_user` int(11) NOT NULL,
  `SessionData` varchar(2000) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `timeLastAccess` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sessionhandler`
--

INSERT INTO `sessionhandler` (`IdSession`, `Id_Usuario`, `SessionData`, `timeStamp`, `timeLastAccess`) VALUES
('session_id_ajak0eku3', 1, 'eyJJZF9Vc3VhcmlvIjoxfQ==', '2020-01-07 22:25:59', '2020-01-07 17:25:59');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `sessionhandler`
--
ALTER TABLE `sessionhandler`
  ADD PRIMARY KEY (`IdSession`),
  ADD UNIQUE KEY `Id_Usuario` (`Id_Usuario`);
COMMIT;

