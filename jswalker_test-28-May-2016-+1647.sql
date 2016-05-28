-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.6.17 - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping database structure for jswalker_test
CREATE DATABASE IF NOT EXISTS `jswalker_test` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `jswalker_test`;


-- Dumping structure for table jswalker_test.test
CREATE TABLE IF NOT EXISTS `test` (
  `test_id` int(11) DEFAULT NULL,
  `test_value` varchar(50) DEFAULT NULL,
  `test_string` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table jswalker_test.test: ~0 rows (approximately)
DELETE FROM `test`;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` (`test_id`, `test_value`, `test_string`) VALUES
	(1, '1', 'test-1');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;


-- Dumping structure for table jswalker_test.memory_trace
CREATE TABLE `memory_trace` (
	`memory_trace_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`rss` VARCHAR(50) NULL DEFAULT '0',
	`heapTotal` VARCHAR(50) NULL DEFAULT '0',
	`heapUsed` VARCHAR(50) NULL DEFAULT '0',
	`memory_timestamp` VARCHAR(50) NULL DEFAULT '0',
	PRIMARY KEY (`memory_trace_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=247324
;



-- Dumping structure for table jswalker_test.error
CREATE TABLE `error` (
	`error_id` BIGINT(20) NOT NULL AUTO_INCREMENT,
	`error_text` VARCHAR(50) NULL DEFAULT NULL,
	`error_stack` MEDIUMTEXT NULL,
	`controller_name` VARCHAR(50) NULL DEFAULT NULL,
	`controller_line_number` INT(11) NULL DEFAULT NULL,
	`model_name` VARCHAR(50) NULL DEFAULT NULL,
	`model_line_number` INT(11) NULL DEFAULT NULL,
	`occurrence` SMALLINT(6) NULL DEFAULT '1',
	`status` TINYINT(4) NULL DEFAULT NULL,
	`developer_id` BIGINT(20) NULL DEFAULT NULL,
	`user_id` BIGINT(20) NULL DEFAULT NULL,
	PRIMARY KEY (`error_id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=11
;

