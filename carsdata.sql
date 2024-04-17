-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 17, 2024 at 12:39 PM
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
(2, 12, 6, '2024-04-17', '2024-04-16 17:46:37', '2024-04-16 17:46:37'),
(3, 11, 1, '2024-04-18', '2024-04-16 17:47:47', '2024-04-16 17:47:47');

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
(1, 'fdbbdfzdbfgz', 'bdfsdggdf@fdssfd', '$2a$08$bLZ6xk3UHvyqD1P77X0LveGoLLvy.J3LZef4YSH1KuF1lpv0lWmCe', '', '', 0),
(2, 'fdbbdfzdbfgz', 'bdfsdggdf@fdssfd2', '$2a$08$sBlS0UzcLPIUhHR1oVV/ZOy0XYNZCbC7Y7AXEvdy9SodXZIRxgG02', '', '', 0),
(3, 'fdbbdfzdbfgz', 'bdfsdggdf@fdssfd2324324', '$2a$08$PaVyCNkuwWMEI7Pw48Hfz.ckByJzzpBE0ji6BL.mL.7gz0QnWUlNO', '', '', 0),
(4, 'fdbbdfzdbfgz', 'bdfsdggdf@fdssfd232432443', '$2a$08$lFt7MJGrgViAajJ0aCDzouNU//FTRCaRz/BPv2d2o8xessrvF8PVq', '', '', 0),
(5, 'fdbbdfzdbfgz3234', 'bdfsdggdf@fdssfd232432443324', '$2a$08$uAZwa0cuVwx7enHIHyZUJuLHskFUV3YK10IV4CiF4UlKp4bTGA/Va', '', '', 0),
(6, 'fdbbdfzdbfgz323433', 'bdfsdggdf@fdssfd2324324433243', '$2a$08$VTVW3v4YlKyPMxut0OeF9eaMhRPPym/AE7Skg8KvcDKIUMNZ4VRnC', '', '', 0),
(7, 'fdb', 'bdfsdggdf@fds', '$2a$08$K7tq5SgEeNH0sDF55pfy7ucN0SuP3MEmYVnOIPSy8jm8W..6njre6', '', '', 0),
(8, 'fdb1', 'bdfsdggdf@fds1', '$2a$08$gmbwD6QkGtJTaxmSKxBgMOdOx4t8FY70oRtQppc2mWLy3g93aECIO', '', '', 0),
(9, 'fdb1', 'bdfsdggdf@fds12', '$2a$08$mLuKzKhhZo5qm8iOO5V2XegduVzKBiFfbp6jid4LY6lf4LftWLZUm', '', '', 0),
(10, 'fdb1', 'bdfsdggdf@fds12', '$2a$08$r1HL9jgCmhEP/91nm.9Vw.hTqA6I/li3ssNmgcGJ1LzoehOfYHmY6', '', '', 0),
(11, 'adam', 'adam123@123', '$2a$08$KBfEbZ72tWUfTCDFIMc0zudvb1D/VSZYxB.SHCqLTuBtryJai05ie', '', '', 0),
(12, 'adam', 'adam123@1234', '$2a$08$jd5Xn/0vmj10LSHjayxGf.OOzHtZcHsWPxii7GgzU4mxmAn4/.13W', '', '', 0),
(13, 'adam1234', 'adam@spadam.pl', '$2a$08$YfTXldCGTWntrte2t4Q2A.yrLS2NqTsWQAG3u/g9n4Gd42EfN0jo2', '', '', 0),
(14, 'chuj', 'chuj@chuj', '$2a$08$XCrNwiRjuhLo3/192qAuD.1kXnF/oPOjABVeOrVthmCkOLJrN9ZrG', '', '', 0),
(15, 'andrzej1', 'andrzej@email.com', '$2a$08$8HFdq4ClWAUGttR05S6onO0sT.wU1ObWHP8SP2J70muC30RLbJnQS', '', '', 0),
(16, 'dddffwd', 'wewewew@sdd', '$2a$08$P9KC.7tSy2wQPOnl5Mp03eWDbQ2PTz8vNGfTFBkvNwxyjSDRG/VjW', '', '', 0),
(17, 'wevgrG', 'DFDS@dsfad', '$2a$08$1Otqllb6xSs1hGAum5fjAOBIEeHMb.KZNpzMG1HTrRo3qQH3ztW3q', '', '', 0),
(18, 'wevgrGfgfg', 'DFDS@dsfadd', '$2a$08$oTa9i3fRILiMuRnHimsHM.9IDXvjYNvVZnyYZCf8R5VDV3cx1RSzy', '', '', 0),
(19, 'wevgrGfgfg', 'DFDS@dsfaddd', '$2a$08$yB5nvyVPLdHi3wKViLvlder4pXkUEsLFYnLWE.srpRTYBrYiAxl9e', '', '', 0),
(20, 'wevgrGfgfg', 'DFDS@dsfadddd', '$2a$08$Jt8VrW/HlbEQmV4MWyK2g.Y9GBap58Anpb7nC9LjVga1sLbzEIC..', '', '', 0),
(21, 'wevgrGfgfg', 'DFDS@dsfaddddd', '$2a$08$tWJgySiWOGAZEhlz.B1HoOcOWgMqhTp2yOOQifBpApcT1KMf2haMC', '', '', 0),
(23, 'tytytyt', 'httyu@dsf', '$2a$08$UAS5rI9sRTW0hMz5aCsPvegB7Dqrd6CxJqcvA7vLRKjkbP4AkDdBG', '', '', 0),
(24, 'tytytyt', 'httyu@dsfd', '$2a$08$XzfOXF1WGUnO066gNLALxuetwzB/LOAGZ.PRhVoXFd3F3I8vceMH6', '', '', 0),
(26, 'tytytyt', 'httyu@dsfdsd', '$2a$08$EIne27TOiUGrN8SP7yh10eW/KfyIyX4B7e7p/1a0LbgTAqpEZ78R.', '', '', 0),
(27, 'tytytyt', 'httyu@dsfdsdk', '$2a$08$rHdUzEm/fxDZFhGn51rEFudoOejgmxJEufyJzoSPRRWOeqYeALXVK', '', '', 0),
(28, 'tytytyt', 'adam@spadam13', '$2a$08$pZxHxxWS9XgyK0p1K2ltouQlzq3hEQbIYfsTFQnSHyrDuwdgajoGC', '', '', 0),
(29, 'tytytyt', 'adam@spadam134', '$2a$08$ytvjBwdkCCi.FenRtw3Z6uco.kb5nACgyS7ZXRYX9JTm7I2Hobt2q', '', '', 0),
(30, 'gfhgfh', 'fghfg@ddd', '$2a$08$hAP/Kk203ppOQZTy8lRUtur2mgXcE46iwTEH4NfBV.tZfWlUR7LKi', '', '', 0),
(31, 'dfg', 'dfgdfgfd@dsf', '$2a$08$34WfW8Lmk97e14shDvrcGedP6qzgaekiMVeLOB8HiG5zto/gsWrp.', '', '', 0),
(32, 'dfg', 'dfgdfgfd@dsfds', '$2a$08$e74ACywz3Cbvv1UkQDYGRO7aZ8OJfSjrnEhGhHwFDn1guaFzfPa2C', '', '', 0),
(33, 'dfg', 'dfgdfgfd@dsfdsd', '$2a$08$2mAIsXKW4jAiAg/AxVjHJeVyGaGU4Q1pG6yMaCGA0KlwZMYkdXvIu', '', '', 0),
(34, 'dfg', 'dfgdfgfd@dsfdsdc', '$2a$08$ERQqhMpnD2d/eH6/ruNI7uMQPfT3Slznx/GLu0N6wFyiUZAicc1OK', '', '', 0),
(35, 'dfg', 'dfgdfgfd@dsfdsdch', '$2a$08$/jz.alJQcXh1wopOjdkeCO58OIHRoc.fu1Fvx2NCQY/VGf6NFyOD.', '', '', 0),
(36, 'dfg', 'dfgdfgfd@dsfdsdchf', '$2a$08$rwq/21sYpF65kDBcafwRHut860BVJr7oPiEAojxxSW.ztprigmwGm', '', '', 0),
(37, 'dfg', 'dfgdfgfd@dsfdsdchfd', '$2a$08$kU0CEUypXdUN3.zsV0qsbOrspJIbdQjGuZ4x8P1FrYX6zGGH4sXIq', '', '', 0),
(38, 'dfg', 'dfgdfgfd@dsfdsdchfdd', '$2a$08$cOVu84J0/gkUSnMaOFnKI.CBfS.gZuZwm0UZO65fdI0Fdf54VsHgO', '', '', 0),
(39, 'dfg', 'dfgdfgfd@dsfdsdchfddd', '$2a$08$cUYRRu4noApPb21OfdYM5.zl2JFvLRNyjI8Y8lscNeUXn/A./FQIy', '', '', 0),
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
