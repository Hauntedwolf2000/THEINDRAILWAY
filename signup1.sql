-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 05:46 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `signup1`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `source` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `train_id` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `seat_count` int(11) DEFAULT 1,
  `total_sum` decimal(10,2) DEFAULT 0.00,
  `booking_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `source`, `destination`, `train_id`, `booking_date`, `seat_count`, `total_sum`, `booking_id`) VALUES
(4, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 837504),
(5, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 275810),
(6, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 948568),
(7, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 455432),
(8, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 301665),
(9, 'chennai', 'vellore', 4, '2023-10-25', 1, 60.00, 914110),
(10, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 339729),
(11, 'chennai', 'bangalore', 7, '2023-10-25', 1, 40.00, 305464),
(12, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 914183),
(13, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 969474),
(14, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 989197),
(15, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 844552),
(16, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 245691),
(17, 'Bangalore', 'Chennai', 3, '2023-10-26', 1, 40.00, 270146),
(18, 'Bangalore', 'Chennai', 3, '2023-10-26', 1, 40.00, 535318),
(19, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 210170),
(20, 'Vellore', 'Bangalore', 6, '2023-10-26', 1, 40.00, 481297),
(21, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 306295),
(22, 'Chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 438806),
(23, 'Chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 531869),
(24, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 247426),
(25, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 60.00, 306790),
(26, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 846303),
(27, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 330162),
(28, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 958487),
(29, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 641657),
(30, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 774941),
(31, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 250409),
(32, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 591606),
(33, 'Bangalore', 'Chennai', 3, '2023-10-26', 1, 40.00, 541610),
(34, 'Vellore', 'Bangalore', 6, '2023-10-26', 2, 80.00, 189909),
(35, 'Vellore', 'Bangalore', 6, '2023-10-26', 2, 80.00, 189909),
(36, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 60.00, 559806),
(37, 'chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 149641),
(38, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 753927),
(39, 'chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 946703),
(40, 'Chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 802788),
(41, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 371998),
(42, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 682639),
(43, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 562499),
(44, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 571759),
(45, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 609870),
(46, 'Chennai', 'Bangalore', 7, '2023-10-26', 1, 40.00, 716512),
(47, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 450270),
(48, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 272375),
(49, 'Bangalore', 'Vellore', 1, '2023-10-26', 1, 40.00, 702790),
(50, 'chennai', 'bangalore', 7, '2023-10-27', 1, 40.00, 510592),
(53, 'Bangalore', 'Vellore', 1, '2023-10-28', 1, 60.00, 971586),
(55, 'Bangalore', 'Chennai', 3, '2023-11-01', 1, 60.00, 747571);

-- --------------------------------------------------------

--
-- Table structure for table `booking_status`
--

CREATE TABLE `booking_status` (
  `booking_id` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `booking_status`
--

INSERT INTO `booking_status` (`booking_id`, `status`) VALUES
(111766, 'cancelled'),
(177509, 'cancelled'),
(181251, 'cancelled'),
(203906, 'cancelled'),
(310180, 'cancelled'),
(439874, 'cancelled'),
(560031, 'cancelled'),
(829364, 'cancelled'),
(862990, 'cancelled'),
(984619, 'cancelled');

-- --------------------------------------------------------

--
-- Table structure for table `intermediate_stops`
--

CREATE TABLE `intermediate_stops` (
  `id` int(11) NOT NULL,
  `train_number` varchar(20) NOT NULL,
  `stop_id` int(11) NOT NULL,
  `station_name` varchar(100) NOT NULL,
  `arrival_time` time NOT NULL,
  `departure_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `intermediate_stops`
--

INSERT INTO `intermediate_stops` (`id`, `train_number`, `stop_id`, `station_name`, `arrival_time`, `departure_time`) VALUES
(1, '123', 1, 'Bangalore', '08:00:00', '08:10:00'),
(2, '123', 2, 'Vellore', '08:30:00', '08:40:00'),
(3, '456', 1, 'Vellore', '09:30:00', '09:35:00'),
(4, '456', 2, 'Chennai', '10:15:00', '10:20:00'),
(5, '789', 1, 'Bangalore', '11:15:00', '11:20:00'),
(6, '789', 2, 'Vellore', '12:00:00', '12:05:00'),
(7, '789', 3, 'Chennai', '13:00:00', '13:05:00'),
(8, '101', 1, 'Chennai', '07:45:00', '07:50:00'),
(9, '101', 2, 'Vellore', '09:00:00', '09:05:00'),
(10, '202', 1, 'Bangalore', '12:30:00', '12:35:00'),
(11, '202', 2, 'Vellore', '13:45:00', '13:50:00'),
(12, '202', 3, 'Chennai', '14:30:00', '14:35:00'),
(13, '303', 1, 'Vellore', '15:00:00', '15:05:00'),
(14, '303', 2, 'Bangalore', '16:30:00', '16:35:00'),
(15, '404', 1, 'Chennai', '16:30:00', '16:35:00'),
(16, '404', 2, 'Bangalore', '18:00:00', '18:05:00');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `name`, `email`, `password`, `role`) VALUES
(1, 'celesta', 'gc@gmail.com', '$2b$10$fTCf9nqTrRIXb4.wUMKbE.73WYqQapTttI6kVupdTKUVkuLOqgnXy', NULL),
(2, 'dino', 'D@gmail.com', '$2b$10$sx/FXvBSmj92v96XrBs08uGe3eWCRmeo5uRFEM/r42oTE4nxrDoU2', NULL),
(3, 'dino', 'D@gmail.com', '$2b$10$0CGnya0PT/5Sp/H6nuIstOugmMRWm2bQprdpBKhMCrnbRLZAIPf2u', NULL),
(4, 'Dinesh KUMAR S M', 'Dino@gmail.com', '$2b$10$P.D6X6ATj7YFR5jV9jwx9ezbzblTnZUpuL.YLom.VSkNGPTXZFure', 'admin'),
(5, 'Payal', 'p@gmail.com', '$2b$10$N3Ir9aFCQuLCVEIkRDG4gOo0lE.MXdEVoBNgduG3s.3E2Rak2bD.q', 'vistor'),
(6, 'd', 'D@gmail.com', '$2b$10$GBUpPuxc0zqxOWXIbnq4/OeFosHTBU/mTKxqe3BKg6zhC7eqXsRJu', NULL),
(7, 'p', 'p@gmail.com', '$2b$10$voFJrSR92aq6GbRBOKJ51..8j.Oxd81/R2d.m.Uh/3AKj5OyGbpDK', NULL),
(8, 'y', 'y@gmail.com', '$2b$10$/PLixFEbbzbhBkoRA.fvAOB.MaFtebtIM1BKqkkO7R0lpybnny1Ce', NULL),
(9, 'dinesh', 'f@gmail.com', '$2b$10$0smz3mr6WjjLKCkn1Lh21e16qAteFIgBvvaRNjA4/40EJ1XmI/XO2', NULL),
(10, 'Dinesh Kumar S M', 'Dino@gmail.com', '$2b$10$afuCUPJ6iYTJTtLMa57va.DZJd7D4h62cFauWJCPPYgG3jwXRMdw6', NULL),
(11, 'alan', 'alan@gmail.com', '$2b$10$m/4CKblZ.YYDFwT.gf20veYgQhFycYg2e1bqkJMv2fwlIJ/omi.x6', NULL),
(12, 'dinesh', 'd@gmail.com', '$2b$10$OiQU2kTqkc39ADZNojuxUepevGrwn9xVgFnLM0KCZUdud5i9zBbPG', NULL),
(13, 'dinesh', 'd@gmail.com', '$2b$10$yIczWkAktqS7HUjMhlniSe3Z6aGWRdAFc1nrO6RYzEKh7BaJdwRjK', NULL),
(14, 'dinesh', 'd@gmail.com', '$2b$10$t8xu/AVneL6ZOvxE9sqTWOpwdC9fT4IwUm5xFECdM5vk9rK.DWeoO', NULL),
(15, 'dinesh', 'd@gmail.com', '$2b$10$RVnXtFI/oUZw2r4Vw7EFI..bswfoeUcjBmODQUeUpBMFT7v8f9L8a', NULL),
(16, 'dine', 'd@gmail.com', '$2b$10$Gqgcw2V5ePDiYkDr5vhl0OA1SlBBbZrRpuB570lUoCA7O.lYIkJZK', NULL),
(17, 'dine', 'd@gmail.com', '$2b$10$WLhcLQV4/VS9XVktHmBt1utDBiLS2aiA8xPD5WJZnTeXE3m2pQvY.', NULL),
(18, 'dinesh1', 'd@gmail.com', '$2b$10$OwWXBL1bVeG7KJ0rqnZ0uOPTRnkZJ9XeFmtvnck6S1oV6WxLnAU/q', NULL),
(19, 'alan', 'as@gmail.com', '$2b$10$rentA4IyvlJylZKxk9.L2eJMYzkT5ht9ZH/skEaZ4.Q2UqCP8uESK', NULL),
(20, 'a b 0', 'c@gmail.com', '$2b$10$0tSwUmrPBMBvrZmOJlGaSe3RtJrYuOL8GdCsj2nNdtA4GFNUGpp1G', NULL),
(21, 'payal', 'p@gmail.com', '$2b$10$CvsdEjEjh8Oy8zdMoOqZxu7fKy5jwu7GRp/5Vm.byF49o7R3hsx46', NULL),
(22, 'payal', 'pp@gmail.com', '$2b$10$4v2v30f1J/r6QUJyvM4xS.fdohYMiEpamLEAwK5Ou17FioBzQOuOW', NULL),
(23, 'Dino', 'D@gmail.com', '$2b$10$OwZ1M5MJHmEw00vlllLSFOZMDU8GWVETUZM9kjrZXR6DGtnFUfV.S', NULL),
(24, 'Dinesh', 'D@gmail.com', '$2b$10$YJEdDfQVzdstPEablrzk3ugnINZ27h7/7X1q9VY5.jIbDCJLBfvUO', NULL),
(25, 'A', 'f@gmail.com', '$2b$10$uqo0rIJy8ckRC.kMZWWHP.HBlrqTeao.gqOkKsg7dRDFXvXw.KedG', NULL),
(26, 'dineshkumar payal', 'dk@gmail.com', '$2b$10$XdoDrRPmn0pWCgKQniyGL.duUEp2kHbFoN772orHvMWDLaY.DmnQm', NULL),
(27, 'Dinoeshhhhhh', 'alam@gmail.com', '$2b$10$8aq.fJmMwDbYuXleuHexSuloFGEV9Z30PFGdPlIvT9vG2lsCqJ.Tq', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `passengers`
--

CREATE TABLE `passengers` (
  `id` int(11) NOT NULL,
  `booking_id` int(11) DEFAULT NULL,
  `train_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `seat_type` varchar(10) DEFAULT NULL,
  `seat_number` varchar(10) DEFAULT NULL,
  `seat_class` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `passengers`
--

INSERT INTO `passengers` (`id`, `booking_id`, `train_id`, `name`, `age`, `gender`, `address`, `seat_type`, `seat_number`, `seat_class`) VALUES
(4, 837504, NULL, 'asdfg', 23, 'female', 'wertghgfds', 'm', '30', 'sleeper'),
(5, 275810, NULL, 'asdfg', 23, 'male', 'asdfgfds', 'm', '30', 'sleeper'),
(6, 948568, NULL, 'asdfg', 21, 'male', 'asdfgfds', 'l', '35', 'sleeper'),
(7, 455432, NULL, 'asdfgfds', 21, 'other', 'asdfds', 'm', '30', 'sleeper'),
(8, 301665, NULL, 'import React, { useS', 21, 'female', 'asdfgtres', 'u', '35', 'sleeper'),
(9, 914110, NULL, 'asdfghj', 21, 'male', 'sderftyuio', 'm', '30', 'ac'),
(10, 339729, NULL, 'asdfg', 12, 'female', 'asdfgfds', 'm', '30', 'sleeper'),
(11, 305464, NULL, 'asdfg', 21, 'female', 'qwertew', 'm', '30', 'sleeper'),
(12, 914183, NULL, 'sadas', 10, 'male', 'sadasd', 'l', '35', 'sleeper'),
(13, 969474, NULL, 'sdasf', 23, 'male', 'hgjj', 'm', '30', 'sleeper'),
(14, 989197, NULL, 'sdasf', 23, 'male', 'hgjj', 'u', '35', 'sleeper'),
(15, 844552, NULL, 'safsf', 21, 'male', 'fsfsdf', 'u', '35', 'sleeper'),
(16, 245691, NULL, 'sadasd', 21, 'male', 'dsfweger', 'm', '30', 'sleeper'),
(17, 270146, NULL, 'adsf', 21, 'female', 'asdrty', 'u', '35', 'sleeper'),
(18, 535318, NULL, 'asdf', 21, 'male', 'asdfgr', 'm', '30', 'sleeper'),
(19, 210170, NULL, 'adsaDASD', 21, 'male', 'DCV DF', 'm', '30', 'sleeper'),
(20, 481297, NULL, 'SSDF', 21, 'male', 'XZCZXC', 'u', '35', 'sleeper'),
(21, 306295, NULL, 'sad', 75, 'male', 'asfdsdaf', 'u', '35', 'sleeper'),
(22, 438806, NULL, 'asdf', 21, 'female', 'asdfg', 'm', '30', 'sleeper'),
(23, 531869, NULL, 'asdfg', 21, 'female', 'asdfg', 'u', '35', 'sleeper'),
(24, 247426, NULL, 'asdfg', 11, 'male', 'asdfg', 'm', '30', 'sleeper'),
(25, 306790, NULL, 'alan', 22, 'male', 'asdfgh', 'l', '35', 'ac'),
(26, 846303, NULL, 'c', 5, 'male', 'sadfghfj', 'u', '35', 'sleeper'),
(27, 330162, NULL, 'arwer', 21, 'male', 'dsfsd', 'u', '35', 'sleeper'),
(28, 958487, NULL, 'sadas', 21, 'male', 'f222', 'l', '35', 'sleeper'),
(29, 641657, NULL, 'sadfasf', 21, 'male', 'sdfsd', 'm', '30', 'sleeper'),
(30, 774941, NULL, 'aefafs', 21, 'male', 'ewtwe', 'u', '35', 'sleeper'),
(31, 250409, NULL, 'sad', 5, 'male', 'dzfsdf', 'u', '35', 'sleeper'),
(32, 591606, NULL, 'asd', 21, 'female', 'ersfd', 'l', '35', 'sleeper'),
(33, 541610, NULL, 'dfcsdf', 21, 'male', 'sfd', 'u', '35', 'sleeper'),
(34, 189909, NULL, 'didiya', 23, 'female', 'akerela', 'u', '35', 'sleeper'),
(35, 189909, NULL, 'ninja', 21, 'male', 'kanya', 'u', '34', 'sleeper'),
(36, 559806, NULL, 'dinks', 32, 'male', 'dfgfeswsf', 'l', '35', 'ac'),
(37, 149641, NULL, 'asdff', 21, 'male', 'asdfgh', 'm', '30', 'sleeper'),
(38, 753927, NULL, 'chs', 32, 'male', 'asdfg', 'u', '35', 'sleeper'),
(39, 946703, NULL, 'asdfg', 32, 'male', 'wdfg', 'm', '30', 'sleeper'),
(40, 802788, NULL, 'asdfg', 32, 'male', 'asdfg', 'u', '35', 'sleeper'),
(41, 371998, NULL, 'asdf', 21, 'male', 'asdfg', 'u', '35', 'sleeper'),
(42, 682639, NULL, 'asdfgh', 32, 'male', 'asdfghjk', 'l', '35', 'sleeper'),
(43, 562499, NULL, 'asdf', 21, 'female', 'asdfgh', 'u', '35', 'sleeper'),
(44, 571759, NULL, 'asd', 21, 'male', 'asdfg', 'u', '35', 'sleeper'),
(45, 609870, NULL, 'asdf', 21, 'male', 'asdfg', 'u', '35', 'sleeper'),
(46, 716512, NULL, 'asd', 21, 'male', 'asdfg', 'l', '35', 'sleeper'),
(47, 450270, NULL, 'asd', 21, 'male', 'asrt', 'l', '35', 'sleeper'),
(48, 272375, NULL, 'asdf', 32, 'female', 'wertyu', 'm', '30', 'sleeper'),
(49, 702790, NULL, 'asd', 21, 'male', 'asdfg', 'm', '30', 'sleeper'),
(50, 510592, NULL, 'dinesh', 21, 'male', 'malleshwaram', 'u', '35', 'sleeper'),
(53, 971586, NULL, 'din', 12, 'male', 'assj', 'm', '30', 'ac'),
(55, 747571, NULL, 'alan derwin', 21, 'male', 'shivajinagar', 'm', '30', 'ac');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `id` int(11) NOT NULL,
  `pnr` varchar(10) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `payment_id` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `trains`
--

CREATE TABLE `trains` (
  `id` int(11) NOT NULL,
  `train_number` varchar(20) NOT NULL,
  `train_name` varchar(100) NOT NULL,
  `departure_station` varchar(100) NOT NULL,
  `arrival_station` varchar(100) NOT NULL,
  `departure_time` time NOT NULL,
  `arrival_time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trains`
--

INSERT INTO `trains` (`id`, `train_number`, `train_name`, `departure_station`, `arrival_station`, `departure_time`, `arrival_time`) VALUES
(1, '123', 'Express 123', 'Bangalore', 'Vellore', '08:00:00', '10:00:00'),
(2, '456', 'Metro X', 'Vellore', 'Chennai', '09:30:00', '11:30:00'),
(3, '789', 'Local Train', 'Bangalore', 'Chennai', '11:15:00', '13:15:00'),
(4, '101', 'Swift Express', 'Chennai', 'Vellore', '07:45:00', '09:45:00'),
(5, '202', 'City Connect', 'Bangalore', 'Chennai', '12:30:00', '14:30:00'),
(6, '303', 'Super Shuttle', 'Vellore', 'Bangalore', '15:00:00', '17:00:00'),
(7, '404', 'Express 404', 'Chennai', 'Bangalore', '16:30:00', '18:30:00');

-- --------------------------------------------------------

--
-- Table structure for table `trains1`
--

CREATE TABLE `trains1` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `source` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `departure_time` time NOT NULL,
  `arrival_time` time NOT NULL,
  `seats_sleeper` int(11) NOT NULL,
  `seats_ac` int(11) NOT NULL,
  `seats_general` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trains1`
--

INSERT INTO `trains1` (`id`, `name`, `source`, `destination`, `departure_time`, `arrival_time`, `seats_sleeper`, `seats_ac`, `seats_general`) VALUES
(1, 'Express Train 123', 'Bangalore', 'Vellore', '08:00:00', '10:00:00', 75, 96, 99),
(2, 'Metro X', 'Vellore', 'Chennai', '09:30:00', '11:30:00', 99, 100, 100),
(3, 'Local Train', 'Bangalore', 'Chennai', '11:15:00', '13:15:00', 60, 95, 100),
(4, 'Swift Express', 'Chennai', 'Vellore', '07:45:00', '09:45:00', 98, 99, 100),
(5, 'City Connect', 'Bangalore', 'Chennai', '12:30:00', '14:30:00', 92, 100, 100),
(6, 'Super Shuttle', 'Vellore', 'Bangalore', '15:00:00', '17:00:00', 97, 100, 100),
(7, 'Express 404', 'Chennai', 'Bangalore', '16:30:00', '18:30:00', 81, 99, 100);

-- --------------------------------------------------------

--
-- Table structure for table `waste`
--

CREATE TABLE `waste` (
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `waste`
--

INSERT INTO `waste` (`id`) VALUES
(1),
(2),
(3),
(4),
(5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `train_id` (`train_id`);

--
-- Indexes for table `booking_status`
--
ALTER TABLE `booking_status`
  ADD PRIMARY KEY (`booking_id`);

--
-- Indexes for table `intermediate_stops`
--
ALTER TABLE `intermediate_stops`
  ADD PRIMARY KEY (`id`),
  ADD KEY `train_number` (`train_number`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `passengers`
--
ALTER TABLE `passengers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `trains`
--
ALTER TABLE `trains`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_train_number` (`train_number`);

--
-- Indexes for table `trains1`
--
ALTER TABLE `trains1`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `waste`
--
ALTER TABLE `waste`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `intermediate_stops`
--
ALTER TABLE `intermediate_stops`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `passengers`
--
ALTER TABLE `passengers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `trains`
--
ALTER TABLE `trains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `trains1`
--
ALTER TABLE `trains1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `waste`
--
ALTER TABLE `waste`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`train_id`) REFERENCES `trains1` (`id`);

--
-- Constraints for table `intermediate_stops`
--
ALTER TABLE `intermediate_stops`
  ADD CONSTRAINT `intermediate_stops_ibfk_1` FOREIGN KEY (`train_number`) REFERENCES `trains` (`train_number`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
