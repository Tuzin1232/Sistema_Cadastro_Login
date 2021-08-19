-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 16-Ago-2021 às 13:51
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sistema_cadastro_login`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

DROP TABLE IF EXISTS `clientes`;
CREATE TABLE IF NOT EXISTS `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `avaliacao` tinyint(1) NOT NULL,
  `tipo` varchar(100) NOT NULL,
  `pend_financeira` tinyint(1) NOT NULL,
  `mes_atraso` int NOT NULL,
  `contrato_ativo` tinyint(1) NOT NULL,
  `nome` varchar(150) NOT NULL,
  `cnpj` varchar(14) NOT NULL,
  `cpf` varchar(11) NOT NULL,
  `telefone` varchar(10) NOT NULL,
  `celular` varchar(11) NOT NULL,
  `contato` varchar(100) NOT NULL,
  `ramo_atividade` varchar(150) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `rua` varchar(255) NOT NULL,
  `bairro` varchar(255) NOT NULL,
  `numero` int NOT NULL,
  `UF` varchar(2) NOT NULL,
  `cep` int NOT NULL,
  `complemento` varchar(50) NOT NULL,
  `ip_acesso` varchar(255) NOT NULL,
  `obv` varchar(255) NOT NULL,
  `ativo` tinyint(1) NOT NULL,
  `codigo_cliente` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientesistemas`
--

DROP TABLE IF EXISTS `clientesistemas`;
CREATE TABLE IF NOT EXISTS `clientesistemas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cliente_id` int NOT NULL,
  `sistema_id` int NOT NULL,
  `ativo` tinyint(1) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_termino` date NOT NULL,
  `valor` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sistemas`
--

DROP TABLE IF EXISTS `sistemas`;
CREATE TABLE IF NOT EXISTS `sistemas` (
  `nome` varchar(255) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `sistemas`
--

INSERT INTO `sistemas` (`nome`, `id`) VALUES
('Assistência Social', 1),
('CRM', 2),
('Educação', 3),
('Portal Cidadão', 4),
('S-Commerce', 5),
('SADM', 6),
('SAS', 7),
('Saúde', 8),
('SCA', 9),
('SCA/SAS', 10),
('SE', 11);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
