-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Cze 04, 2024 at 11:09 AM
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
(1, 1, 1, 1, 2019, 'Blue', 'https://buildfoc.ford.com/dig//Ford/Mustang/2023/HD-FULL/Vin[1FA6P8CF7P5303039]/EXT/1/vehicle.png', '2023-12-17 14:15:19', '2024-03-13 16:50:00'),
(2, 2, 2, 2, 2022, 'Silver', 'https://imgd.aeplcdn.com/1920x1080/n/cw/ec/110233/camry-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80&q=80', '2023-12-17 14:15:19', '2023-12-17 19:14:10'),
(4, 2, 3, 3, 2020, 'White', 'https://crm.fct24.pl/grafiki/oferta/5a9ec9161a0fc.jpg', '2023-12-18 11:17:08', '2023-12-18 11:17:08'),
(5, 2, 3, 3, 2016, 'Purple', 'https://www.whatcar.com/car-leasing/images/imagery/original/10582.jpg', '2023-12-18 11:17:08', '2024-03-10 12:19:56'),
(6, 4, 5, 5, 2022, 'Blue', 'https://sexycars.pl/wp-content/uploads/2023/11/Tesla-Model-S-Plaid.png', '2023-12-18 11:21:16', '2023-12-18 11:21:16'),
(7, 4, 6, 6, 2020, 'White', 'https://www.tesla.com/ownersmanual/images/GUID-A016FC6C-5896-4495-9DD8-2B074869A838-online-en-US.png', '2023-12-18 11:21:16', '2023-12-18 11:21:16'),
(8, 3, 4, 4, 2021, 'White', 'https://www.premiumfelgi.pl/userdata/gfx/63699.jpg', '2023-12-18 11:31:20', '2024-03-11 17:01:19');

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
(8, 120.00);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `user_id` int(64) NOT NULL,
  `car_id` int(64) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reservations`
--

INSERT INTO `reservations` (`id`, `user_id`, `car_id`, `date`, `created_at`, `updated_at`) VALUES
(1, 11, 1, '2024-04-17', '2024-04-16 17:08:48', '2024-04-16 17:08:48'),
(3, 11, 1, '2024-04-18', '2024-04-16 17:47:47', '2024-04-16 17:47:47'),
(4, 1, 1, '2024-03-31', '2024-04-18 15:31:28', '2024-04-18 15:31:28'),
(5, 1, 1, '2024-04-01', '2024-04-18 15:31:28', '2024-04-18 15:31:28'),
(6, 1, 1, '2024-04-02', '2024-04-18 15:31:41', '2024-04-18 15:31:41'),
(7, 1, 1, '2024-04-03', '2024-04-18 15:31:54', '2024-04-18 15:31:54'),
(8, 1, 1, '2024-04-04', '2024-04-18 15:32:15', '2024-04-18 15:32:15'),
(9, 1, 1, '2024-04-05', '2024-04-18 15:37:25', '2024-04-18 15:37:25'),
(10, 1, 1, '2024-04-06', '2024-04-18 15:38:44', '2024-04-18 15:38:44'),
(11, 1, 1, '2024-04-22', '2024-04-18 15:41:28', '2024-04-18 15:41:28'),
(13, 1, 1, '2024-04-23', '2024-04-18 15:46:02', '2024-04-18 15:46:02'),
(14, 1, 1, '2024-04-25', '2024-04-18 16:02:08', '2024-04-18 16:02:08'),
(15, 1, 1, '2024-04-27', '2024-04-18 16:03:03', '2024-04-18 16:03:03'),
(16, 1, 1, '2024-04-09', '2024-04-18 16:38:14', '2024-04-18 16:38:14'),
(17, 1, 1, '2024-04-10', '2024-04-18 16:38:14', '2024-04-18 16:38:14'),
(18, 1, 1, '2024-04-11', '2024-04-18 16:40:07', '2024-04-18 16:40:07'),
(19, 1, 1, '2024-05-09', '2024-05-09 19:30:30', '2024-05-09 19:30:30'),
(20, 1, 1, '2024-05-10', '2024-05-09 19:30:30', '2024-05-09 19:30:30'),
(21, 1, 1, '2024-05-11', '2024-05-09 19:30:30', '2024-05-09 19:30:30'),
(22, 1, 1, '2024-05-18', '2024-05-09 19:30:30', '2024-05-09 19:30:30'),
(23, 1, 1, '2024-05-16', '2024-05-09 19:30:30', '2024-05-09 19:30:30'),
(24, 1, 1, '2024-05-22', '2024-05-09 19:30:35', '2024-05-09 19:30:35'),
(25, 1, 1, '2024-05-29', '2024-05-09 19:30:35', '2024-05-09 19:30:35'),
(26, 1, 1, '2024-05-28', '2024-05-09 19:30:35', '2024-05-09 19:30:35'),
(27, 1, 1, '2024-06-19', '2024-06-03 16:22:43', '2024-06-03 16:22:43'),
(28, 1, 1, '2024-06-12', '2024-06-03 16:22:43', '2024-06-03 16:22:43'),
(29, 1, 1, '2024-06-11', '2024-06-03 16:22:43', '2024-06-03 16:22:43'),
(30, 1, 1, '2024-06-12', '2024-06-03 16:22:50', '2024-06-03 16:22:50'),
(31, 1, 1, '2024-06-11', '2024-06-03 16:22:50', '2024-06-03 16:22:50'),
(32, 1, 1, '2024-06-19', '2024-06-03 16:22:50', '2024-06-03 16:22:50'),
(33, 2, 1, '2024-06-04', '2024-06-03 16:23:37', '2024-06-03 16:23:37'),
(34, 2, 1, '2024-06-05', '2024-06-03 16:23:37', '2024-06-03 16:23:37'),
(35, 2, 1, '2024-06-03', '2024-06-03 16:23:37', '2024-06-03 16:23:37'),
(36, 2, 1, '2024-06-03', '2024-06-03 16:23:44', '2024-06-03 16:23:44'),
(37, 2, 1, '2024-06-04', '2024-06-03 16:23:44', '2024-06-03 16:23:44'),
(38, 2, 1, '2024-06-05', '2024-06-03 16:23:44', '2024-06-03 16:23:44'),
(39, 2, 1, '2024-06-06', '2024-06-03 16:24:10', '2024-06-03 16:24:10'),
(40, 2, 1, '2024-06-07', '2024-06-03 16:24:10', '2024-06-03 16:24:10'),
(41, 2, 1, '2024-06-08', '2024-06-03 16:24:10', '2024-06-03 16:24:10'),
(42, 2, 1, '2024-06-03', '2024-06-03 16:27:13', '2024-06-03 16:27:13'),
(43, 2, 1, '2024-06-05', '2024-06-03 16:27:13', '2024-06-03 16:27:13'),
(44, 2, 1, '2024-06-04', '2024-06-03 16:27:13', '2024-06-03 16:27:13'),
(45, 1, 1, '2024-06-25', '2024-06-03 16:28:10', '2024-06-03 16:28:10'),
(46, 1, 1, '2024-06-27', '2024-06-03 16:28:10', '2024-06-03 16:28:10'),
(47, 1, 1, '2024-06-26', '2024-06-03 16:28:10', '2024-06-03 16:28:10'),
(48, 6, 1, '2024-06-04', '2024-06-03 16:33:27', '2024-06-03 16:33:27'),
(49, 6, 1, '2024-06-05', '2024-06-03 16:33:27', '2024-06-03 16:33:27'),
(50, 1, 6, '2024-06-18', '2024-06-03 16:34:08', '2024-06-03 16:34:08'),
(51, 1, 6, '2024-06-19', '2024-06-03 16:34:08', '2024-06-03 16:34:08'),
(52, 1, 2, '2024-06-18', '2024-06-03 16:35:15', '2024-06-03 16:35:15'),
(53, 1, 2, '2024-06-19', '2024-06-03 16:35:15', '2024-06-03 16:35:15'),
(54, 1, 2, '2024-06-20', '2024-06-03 16:35:15', '2024-06-03 16:35:15'),
(55, 1, 2, '2024-06-18', '2024-06-03 18:37:25', '2024-06-03 18:37:25'),
(56, 1, 2, '2024-06-17', '2024-06-03 18:37:25', '2024-06-03 18:37:25'),
(57, 1, 4, '2024-06-18', '2024-06-03 18:39:01', '2024-06-03 18:39:01'),
(58, 1, 4, '2024-06-19', '2024-06-03 18:39:01', '2024-06-03 18:39:01'),
(59, 1, 4, '2024-06-27', '2024-06-03 18:41:48', '2024-06-03 18:41:48'),
(60, 1, 4, '2024-06-28', '2024-06-03 18:41:48', '2024-06-03 18:41:48'),
(61, 1, 6, '2024-06-17', '2024-06-03 18:58:35', '2024-06-03 18:58:35'),
(62, 1, 6, '2024-06-24', '2024-06-03 18:58:35', '2024-06-03 18:58:35'),
(63, 1, 7, '2024-06-26', '2024-06-03 19:21:59', '2024-06-03 19:21:59'),
(64, 1, 7, '2024-06-27', '2024-06-03 19:21:59', '2024-06-03 19:21:59'),
(65, 1, 7, '2024-06-26', '2024-06-03 19:25:15', '2024-06-03 19:25:15'),
(66, 1, 7, '2024-06-20', '2024-06-03 19:25:15', '2024-06-03 19:25:15'),
(67, 1, 7, '2024-06-27', '2024-06-03 19:25:15', '2024-06-03 19:25:15'),
(69, 45, 7, '2024-06-22', '2024-06-03 19:40:45', '2024-06-03 19:40:45'),
(70, 45, 7, '2024-06-28', '2024-06-04 07:56:01', '2024-06-04 07:56:01'),
(71, 45, 7, '2024-06-29', '2024-06-04 07:56:01', '2024-06-04 07:56:01'),
(72, 45, 6, '2024-06-13', '2024-06-04 08:26:33', '2024-06-04 08:26:33'),
(73, 45, 6, '2024-06-13', '2024-06-04 08:27:06', '2024-06-04 08:27:06'),
(74, 45, 6, '2024-06-21', '2024-06-04 08:27:06', '2024-06-04 08:27:06');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(40) NOT NULL,
  `surname` varchar(64) NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `name`, `surname`, `admin`) VALUES
(40, 'fddf', 'sddsds@sdd', '$2a$08$8Rk4AXRSQaPLhVhfeZ0u3uRer/ouVraG.BL8SUgo.5jOZ9mwhJy0O', '', '', 0),
(41, 'Beraalende', '123@123e', '$2a$08$bsckDv1AX/L/T58eMbLaEOZqJ1Q5THGXsb1NjeYhLitdtTFBqa9Wu', '', '', 0),
(42, 'ukyfgdjhghj', 'adam@spadam.pl12', '$2a$08$UCrz466xsnrVpgW688CcX.UyWbtcQ4oT5cRdMP/PQIEadPCuE0z4i', '', '', 0),
(43, 'test0', 'test0@email', '$2a$08$tk4FVzinGu71ikaWMDy4m.FtdGIlIF57L2hzKWbqxQ5XVC9qGdYc6', '', '', 0),
(44, 'sddsvsdds', 'ddssdadws@fddsdsffsd', '$2a$08$kiq.HaegVJFwf1S2XoKkgeXF7I6y4yWq49K59VbANL86Xzj8Ywv6S', '', '', 0),
(45, 'Adam Nowak', '12345@12345', '$2a$08$EfbsWr/5pvRa3CgbV3NXT.icB35R0HGi4lMH490G74tGrwK.6EMke', 'Adam', 'Nowak', 1),
(46, 'adam dzbanek', '1234@1234', '$2a$08$ojUI.9tE71nMMHyIKJdoQehNjKQdxlDZiQWwYywF8fTwq9Plqe1em', '', '', 0);

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
-- Indeksy dla tabeli `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_resevations_car_id` (`car_id`),
  ADD KEY `fk_resevations_user_id` (`user_id`);

--
-- Indeksy dla tabeli `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `car`
--
ALTER TABLE `car`
  MODIFY `Car_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

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

--
-- Constraints for table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `fk_resevations_car_id` FOREIGN KEY (`car_id`) REFERENCES `car` (`Car_id`),
  ADD CONSTRAINT `fk_resevations_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
