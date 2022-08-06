-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 06, 2022 at 05:22 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kot`
--

-- --------------------------------------------------------

--
-- Table structure for table `avail_status`
--

CREATE TABLE `avail_status` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status_relation` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `avail_status`
--

INSERT INTO `avail_status` (`id`, `name`, `status_relation`) VALUES
(0, 'test2', 'BOT');

-- --------------------------------------------------------

--
-- Table structure for table `avail_table`
--

CREATE TABLE `avail_table` (
  `id` int(11) NOT NULL,
  `table_id` varchar(20) NOT NULL,
  `total_pax_capacity` int(11) NOT NULL,
  `current_pax_no` int(11) NOT NULL DEFAULT 0,
  `table_status` int(11) NOT NULL DEFAULT 5,
  `active_status` int(11) NOT NULL DEFAULT 1,
  `hall_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `avail_type`
--

CREATE TABLE `avail_type` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `type_relation` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `bill`
--

CREATE TABLE `bill` (
  `id` int(11) NOT NULL,
  `dine_group_id` int(11) NOT NULL,
  `payment_received_by` varchar(20) NOT NULL,
  `generated_by` varchar(20) NOT NULL,
  `generated_on` datetime NOT NULL DEFAULT current_timestamp(),
  `bill_discount` int(11) DEFAULT NULL,
  `service_tax` int(11) DEFAULT NULL,
  `service_charge` int(11) DEFAULT NULL,
  `promo_code` varchar(20) DEFAULT NULL,
  `grand_total` int(11) NOT NULL,
  `payment_status` varchar(5) NOT NULL,
  `payment_date` datetime DEFAULT NULL,
  `bill_no` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_id` varchar(20) NOT NULL,
  `category_name` varchar(100) NOT NULL,
  `active_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dine_group`
--

CREATE TABLE `dine_group` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `dine_group_status` int(11) NOT NULL DEFAULT 1,
  `group_created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `group_closed_on` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hall`
--

CREATE TABLE `hall` (
  `id` int(11) NOT NULL,
  `hall_id` varchar(20) NOT NULL,
  `hall_name` varchar(100) NOT NULL,
  `active_status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `items_inventory`
--

CREATE TABLE `items_inventory` (
  `id` int(11) NOT NULL,
  `items_id` varchar(50) NOT NULL,
  `items_name` varchar(100) NOT NULL,
  `vendor_name` varchar(100) NOT NULL,
  `added_by` varchar(20) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(20) NOT NULL,
  `updated_on` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kot`
--

CREATE TABLE `kot` (
  `id` int(11) NOT NULL,
  `table_id` varchar(20) NOT NULL,
  `kot_status_id` int(11) NOT NULL DEFAULT 0,
  `kot_type_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `staff_id` varchar(20) NOT NULL,
  `kot_id` int(11) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menu_items`
--

CREATE TABLE `menu_items` (
  `id` int(11) NOT NULL,
  `item_category` varchar(20) NOT NULL,
  `item_id` varchar(20) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `isbeverage` int(11) NOT NULL DEFAULT 0,
  `beverage_item_id` varchar(50) DEFAULT NULL,
  `active_status` int(11) NOT NULL DEFAULT 1,
  `price` int(11) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) NOT NULL,
  `updated_on` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `items_id` varchar(20) NOT NULL,
  `customer_id` varchar(20) DEFAULT NULL,
  `staff_id` varchar(20) NOT NULL,
  `status_id` int(11) NOT NULL DEFAULT 0,
  `table_id` varchar(20) NOT NULL,
  `quantity` varchar(10) NOT NULL,
  `placed_on` datetime DEFAULT current_timestamp(),
  `prepared_on` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone_number` varchar(15) NOT NULL,
  `position` varchar(20) NOT NULL,
  `isadmin` tinyint(1) NOT NULL,
  `issuperuser` tinyint(1) NOT NULL,
  `user_type` varchar(20) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_on` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` varchar(50) NOT NULL,
  `updated_on` date NOT NULL DEFAULT curdate(),
  `active_status` int(11) NOT NULL DEFAULT 1,
  `staff_id` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avail_status`
--
ALTER TABLE `avail_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `avail_table`
--
ALTER TABLE `avail_table`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_avail_table_unique_id` (`table_id`),
  ADD KEY `fk_avail_table_hall` (`hall_id`);

--
-- Indexes for table `avail_type`
--
ALTER TABLE `avail_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bill`
--
ALTER TABLE `bill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bill_staff` (`generated_by`),
  ADD KEY `fk_bill_dine_group` (`dine_group_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_category_category_id` (`category_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_customer_unique_id` (`customer_id`);

--
-- Indexes for table `dine_group`
--
ALTER TABLE `dine_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_dine_group_orders` (`order_id`);

--
-- Indexes for table `hall`
--
ALTER TABLE `hall`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_hall_hall_id` (`hall_id`);

--
-- Indexes for table `items_inventory`
--
ALTER TABLE `items_inventory`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_items_inventory_items_id` (`items_id`);

--
-- Indexes for table `kot`
--
ALTER TABLE `kot`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_kot_avail_status` (`kot_status_id`),
  ADD KEY `fk_kot_avail_type` (`kot_type_id`),
  ADD KEY `fk_kot_avail_table` (`table_id`),
  ADD KEY `fk_kot_orders` (`order_id`),
  ADD KEY `fk_kot_staff` (`staff_id`);

--
-- Indexes for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_menu_items_item_id` (`item_id`),
  ADD KEY `fk_menu_items_items_inventory` (`beverage_item_id`),
  ADD KEY `fk_menu_items_category` (`item_category`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_customer` (`customer_id`),
  ADD KEY `fk_orders_menu_items` (`items_id`),
  ADD KEY `fk_orders_staff` (`staff_id`),
  ADD KEY `fk_orders_avail_status` (`status_id`),
  ADD KEY `fk_orders_avail_table` (`table_id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unq_staff_staff_id` (`staff_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avail_table`
--
ALTER TABLE `avail_table`
  ADD CONSTRAINT `fk_avail_table_hall` FOREIGN KEY (`hall_id`) REFERENCES `hall` (`hall_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bill`
--
ALTER TABLE `bill`
  ADD CONSTRAINT `fk_bill_dine_group` FOREIGN KEY (`dine_group_id`) REFERENCES `dine_group` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_bill_staff` FOREIGN KEY (`generated_by`) REFERENCES `staff` (`staff_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `dine_group`
--
ALTER TABLE `dine_group`
  ADD CONSTRAINT `fk_dine_group_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `kot`
--
ALTER TABLE `kot`
  ADD CONSTRAINT `fk_kot_avail_status` FOREIGN KEY (`kot_status_id`) REFERENCES `avail_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_kot_avail_table` FOREIGN KEY (`table_id`) REFERENCES `avail_table` (`table_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_kot_avail_type` FOREIGN KEY (`kot_type_id`) REFERENCES `avail_type` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_kot_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_kot_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `menu_items`
--
ALTER TABLE `menu_items`
  ADD CONSTRAINT `fk_menu_items_category` FOREIGN KEY (`item_category`) REFERENCES `category` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_menu_items_items_inventory` FOREIGN KEY (`beverage_item_id`) REFERENCES `items_inventory` (`items_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `fk_orders_avail_status` FOREIGN KEY (`status_id`) REFERENCES `avail_status` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_avail_table` FOREIGN KEY (`table_id`) REFERENCES `avail_table` (`table_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_menu_items` FOREIGN KEY (`items_id`) REFERENCES `menu_items` (`item_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_orders_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff` (`staff_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
