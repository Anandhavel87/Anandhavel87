-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 26, 2022 at 12:18 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crypto`
--

-- --------------------------------------------------------

--
-- Table structure for table `coincategory`
--

CREATE TABLE `coincategory` (
  `categoryId` int(11) NOT NULL,
  `categoryName` varchar(100) NOT NULL,
  `categoryAbb` varchar(30) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `createdOn` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coincategory`
--

INSERT INTO `coincategory` (`categoryId`, `categoryName`, `categoryAbb`, `isActive`, `createdOn`) VALUES
(1, 'Bitcoin', 'BTC', 0, '2022-02-24 22:58:20'),
(2, 'Ethereum', 'ETH', 0, '2022-02-24 23:00:34'),
(3, 'Tethers', 'USDT', 0, '2022-02-24 23:01:21'),
(4, 'Binance Coins', 'BNB', 0, '2022-02-26 16:17:27');

-- --------------------------------------------------------

--
-- Table structure for table `coindetails`
--

CREATE TABLE `coindetails` (
  `id` int(11) NOT NULL,
  `coinCategoryId` int(11) NOT NULL,
  `coinRate` varchar(100) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `createdOn` datetime NOT NULL DEFAULT current_timestamp(),
  `modifiedOn` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `coindetails`
--

INSERT INTO `coindetails` (`id`, `coinCategoryId`, `coinRate`, `isActive`, `createdOn`, `modifiedOn`) VALUES
(1, 1, '47,340', 0, '2022-02-24 23:27:32', '2022-02-24 23:27:32'),
(2, 2, '3,224', 0, '2022-02-24 23:28:05', '2022-02-24 23:28:05'),
(3, 3, '4,340', 0, '2022-02-26 15:50:36', '2022-02-26 15:50:36'),
(4, 4, '2,000', 0, '2022-02-26 16:24:01', '2022-02-26 16:24:01');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `roleId` int(11) NOT NULL,
  `roleName` varchar(100) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`roleId`, `roleName`, `isActive`) VALUES
(1, 'superadmin', 0),
(2, 'admin', 0),
(3, 'users', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `userName` varchar(500) NOT NULL,
  `firstName` varchar(300) NOT NULL,
  `lastName` varchar(300) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `dateofBirth` varchar(50) NOT NULL,
  `mobileNumber` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `roleId` int(11) NOT NULL,
  `sourceOfLanding` varchar(100) NOT NULL,
  `isActive` int(11) NOT NULL DEFAULT 0,
  `isVerified` tinyint(1) NOT NULL DEFAULT 1,
  `createdOn` date NOT NULL DEFAULT current_timestamp(),
  `modifiedOn` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `userName`, `firstName`, `lastName`, `gender`, `dateofBirth`, `mobileNumber`, `email`, `password`, `roleId`, `sourceOfLanding`, `isActive`, `isVerified`, `createdOn`, `modifiedOn`) VALUES
(1, 'Shiva_9899648598', 'Shiva', 'sivasankar', 'Male', '12/03/2001', '9899648598', '1shiva@gmail.com', '$2b$10$xBf7xWyAinyEjv7i2VSUdOGCBsgPcVGosZ68cQcC1n0JZhk.lv5ei', 1, 'superadmin', 0, 0, '2022-02-22', '2022-02-22'),
(2, 'Anand_9969988898', 'Anand', 'vel', 'Male', '12/03/1990', '9969988898', 'anandvel@gmail.com', '$2b$10$dFxEV9NOunn4w9K.pW8zGuvgg7d1tEn4vGVtBXEjzgrr5rW5yEP02', 2, 'admin', 0, 0, '2022-02-22', '2022-02-22'),
(3, 'Thanu_9847483687', 'Thanu', 'krish', 'Male', '03/03/1993', '9847483687', 'rtk@gmail.com', '$2b$10$uSkG9IEQ2m7rZoASbYViZu39hnEXg.Qa0p/3l/yELEndlzvjBaTU2', 2, 'admin', 0, 0, '2022-02-22', '2022-02-22'),
(4, 'Gopal_9799978898', 'Gopal', 'lakvas', 'Male', '03/03/1998', '9799978898', 'lakvas@gmail.com', '$2b$10$WNOApRGqFCptGKlBrUG2q.Og82/6VHR0HljHy0ikBlXUGrXq2GBNm', 3, 'user', 0, 1, '2022-02-22', '2022-02-22'),
(5, 'Ram_9999948798', 'Ram', 'lal', 'Male', '03/03/1998', '9999948798', 'ram@gmail.com', '$2b$10$OklR.AhUp5QImynTsUYTJOUEH0h6wNd8LMcaOUOmKuv8j/8s3yUae', 3, 'user', 0, 1, '2022-02-22', '2022-02-22'),
(6, 'Vim_9999948898', 'Vim', 'Raj', 'Male', '03/03/1998', '9999948898', 'vimal@gmail.com', '$2b$10$4GIZdB9MYN6t6k7nutmn4uCiHJ2MdNY8HyBhj27A2vU5CkYsDR8EC', 3, 'user', 0, 1, '2022-02-22', '2022-02-22'),
(7, 'Mohammed_9889978898', 'Mohammed', 'shaiks', 'Male', '12/03/1990', '9889978898', 'mohammed@gmail.com', '$2b$10$tYwxXeDLQC0GWkvErUnGn.h/3D9OMWbnNiHRc5MFM2T2irGG7ebcC', 2, 'user', 0, 1, '2022-02-26', '2022-02-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `coincategory`
--
ALTER TABLE `coincategory`
  ADD PRIMARY KEY (`categoryId`);

--
-- Indexes for table `coindetails`
--
ALTER TABLE `coindetails`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `mobileNumber` (`mobileNumber`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `coincategory`
--
ALTER TABLE `coincategory`
  MODIFY `categoryId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `coindetails`
--
ALTER TABLE `coindetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
