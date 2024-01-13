-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sty 13, 2024 at 04:17 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `carsdata`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `brands`
--

CREATE TABLE `brands` (
  `Brand_id` int(16) NOT NULL,
  `BrandName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `brands`
--

INSERT INTO `brands` (`Brand_id`, `BrandName`) VALUES
(1, 'Ford'),
(2, 'Toyota'),
(3, 'Lamborgini'),
(4, 'Tesla');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `car`
--

CREATE TABLE `car` (
  `Car_id` int(11) NOT NULL,
  `Brand_id` int(16) NOT NULL,
  `Engine_id` int(16) NOT NULL,
  `Model_id` int(16) NOT NULL,
  `Production_year` int(16) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `car`
--

INSERT INTO `car` (`Car_id`, `Brand_id`, `Engine_id`, `Model_id`, `Production_year`, `Color`, `url`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 2017, 'Blue', 'https://buildfoc.ford.com/dig//Ford/Mustang/2023/HD-FULL/Vin[1FA6P8CF7P5303039]/EXT/1/vehicle.png', '2023-12-17 14:15:19', '2023-12-18 14:49:18'),
(2, 2, 2, 2, 2022, 'Silver', 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', '2023-12-17 14:15:19', '2023-12-17 19:14:10'),
(4, 2, 3, 3, 2020, 'White', 'https://crm.fct24.pl/grafiki/oferta/5a9ec9161a0fc.jpg', '2023-12-18 11:17:08', '2023-12-18 11:17:08'),
(5, 2, 3, 3, 2016, 'Purple', 'https://www.whatcar.com/car-leasing/images/imagery/original/10582.jpg', '2023-12-18 11:17:08', '2023-12-18 11:23:43'),
(6, 4, 5, 5, 2022, 'Blue', 'https://sexycars.pl/wp-content/uploads/2023/11/Tesla-Model-S-Plaid.png', '2023-12-18 11:21:16', '2023-12-18 11:21:16'),
(7, 4, 6, 6, 2020, 'White', 'https://www.tesla.com/ownersmanual/images/GUID-A016FC6C-5896-4495-9DD8-2B074869A838-online-en-US.png', '2023-12-18 11:21:16', '2023-12-18 11:21:16'),
(8, 3, 4, 4, 2020, 'White', 'https://www.premiumfelgi.pl/userdata/gfx/63699.jpg', '2023-12-18 11:31:20', '2023-12-18 11:31:20'),
(23, 1, 1, 1, 2010, 'bLUE', 'G', '2023-12-17 19:15:10', '2023-12-18 16:12:00');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `engine`
--

CREATE TABLE `engine` (
  `Engine_id` int(16) NOT NULL,
  `Power` int(16) NOT NULL,
  `Fuel` varchar(255) NOT NULL,
  `Manofacturer` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `engine`
--

INSERT INTO `engine` (`Engine_id`, `Power`, `Fuel`, `Manofacturer`) VALUES
(1, 200, 'Gasoline', 'Toyota Engine Co.'),
(2, 160, 'Diesel', 'Ford Engine co.'),
(3, 69, 'Gasoline', 'Toyota Engine Co'),
(4, 610, 'Gasoline', 'Lamborgini'),
(5, 1020, 'Electric', 'Tesla'),
(6, 670, 'Electric', 'Tesla');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `models`
--

CREATE TABLE `models` (
  `Model_id` int(16) NOT NULL,
  `Brand_id` int(16) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Seats` int(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `models`
--

INSERT INTO `models` (`Model_id`, `Brand_id`, `Name`, `Seats`) VALUES
(1, 1, 'Mustang', 4),
(2, 2, 'Camry', 5),
(3, 2, 'Aygo', 5),
(4, 3, 'Huracan', 2),
(5, 4, 'S Plaid', 4),
(6, 4, 'X', 5);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `offer`
--

CREATE TABLE `offer` (
  `Car_id` int(16) NOT NULL,
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `offer`
--

INSERT INTO `offer` (`Car_id`, `Price`) VALUES
(1, 26.00),
(2, 30.00),
(4, 20.00),
(5, 21.00),
(6, 80.00),
(7, 55.00),
(8, 120.00),
(23, 30.00);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`Brand_id`);

--
-- Indeksy dla tabeli `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`Car_id`),
  ADD KEY `Brand_id` (`Brand_id`),
  ADD KEY `Engine_id` (`Engine_id`),
  ADD KEY `Model_id` (`Model_id`);

--
-- Indeksy dla tabeli `engine`
--
ALTER TABLE `engine`
  ADD PRIMARY KEY (`Engine_id`);

--
-- Indeksy dla tabeli `models`
--
ALTER TABLE `models`
  ADD PRIMARY KEY (`Model_id`),
  ADD KEY `Brand_id` (`Brand_id`);

--
-- Indeksy dla tabeli `offer`
--
ALTER TABLE `offer`
  ADD PRIMARY KEY (`Car_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `Car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `car`
--
ALTER TABLE `car`
  ADD CONSTRAINT `car_ibfk_1` FOREIGN KEY (`Brand_id`) REFERENCES `brands` (`Brand_id`),
  ADD CONSTRAINT `car_ibfk_2` FOREIGN KEY (`Engine_id`) REFERENCES `engine` (`Engine_id`),
  ADD CONSTRAINT `car_ibfk_3` FOREIGN KEY (`Model_id`) REFERENCES `models` (`Model_id`);

--
-- Constraints for table `models`
--
ALTER TABLE `models`
  ADD CONSTRAINT `models_ibfk_1` FOREIGN KEY (`Brand_id`) REFERENCES `brands` (`Brand_id`);

--
-- Constraints for table `offer`
--
ALTER TABLE `offer`
  ADD CONSTRAINT `offer_ibfk_1` FOREIGN KEY (`Car_id`) REFERENCES `car` (`Car_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
