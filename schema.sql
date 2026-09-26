-- MySQL Schema for Raja Kra Pao Restaurant Web App

CREATE DATABASE IF NOT EXISTS `raja_krapao` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `raja_krapao`;

-- 1. Table for Menu Items
CREATE TABLE IF NOT EXISTS `menu_items` (
  `id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `price` INT NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  `image` TEXT NOT NULL,
  `rating` DECIMAL(2,1) NOT NULL DEFAULT 4.5,
  `badge` VARCHAR(50) DEFAULT NULL,
  `description` TEXT NOT NULL,
  `is_available` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Table for Menu Toppings (Optional Toppings linked to Menu Items)
CREATE TABLE IF NOT EXISTS `menu_toppings` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `menu_item_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`menu_item_id`) REFERENCES `menu_items` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Table for Orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` VARCHAR(50) NOT NULL,
  `table_number` INT NOT NULL,
  `total_price` INT NOT NULL,
  `order_time` VARCHAR(50) NOT NULL,
  `order_date` DATE NOT NULL,
  `status` VARCHAR(50) NOT NULL DEFAULT 'pending',
  `payment_method` VARCHAR(50) DEFAULT NULL,
  `staff_name` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Table for Order Items (Individual items ordered in each checkout)
CREATE TABLE IF NOT EXISTS `order_items` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `order_id` VARCHAR(50) NOT NULL,
  `menu_item_id` VARCHAR(50) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `quantity` INT NOT NULL DEFAULT 1,
  `price` INT NOT NULL,
  `toppings` TEXT DEFAULT NULL, -- Serialized JSON array of toppings ordered
  `remarks` TEXT DEFAULT NULL, -- Customer special remarks for this item
  PRIMARY KEY (`id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Default Menu Items
INSERT INTO `menu_items` (`id`, `name`, `price`, `category`, `image`, `rating`, `badge`, `description`) VALUES
('krapao-01', 'กะเพราหมูสับ', 50, 'basil-pork-chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_CV7t2UlnuHtcrqkeqK_ykdln_Snm1iHz_C3lU0Xg&s=10?w=500&auto=format&fit=crop&q=60.jpg', 4.9, 'ยอดฮิต', 'กะเพราหมูสับสูตรโบราณผัดแห้งๆ ใช้พริกแห้งและพริกขี้หนูสวนหอมกลุ่น เสิร์ฟคู่ข้าวสวยร้อนๆ'),
('krapao-02', 'กะเพราเครื่องในไก่', 50, 'basil-pork-chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7_zs3OE_kPaeVTlIIogDBK1oVrwVPeFeIGVnPij19FCCb0lZBqCpW3g&s=10?w=500&auto=format&fit=crop&q=60', 4.8, 'ยอดฮิต', 'เครื่องในไก่สดใหม่ (ตับ กึ๋น หัวใจ) ผัดเน้นๆ กับพริกขี้หนูสวนและกระเทียมไทยรสจัดจ้าน ผัดแห้งกำลังดี หอมกลิ่นใบกะเพราแท้ รสชาติเข้มข้นถึงใจ'),
('krapao-03', 'กะเพราหมูกรอบ', 60, 'basil-pork-chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMMXOibFx9GFBHu2sIEK2SKKnrpk0hPrA1UKjwyLdgQ&s=10?w=500&auto=formt&fit=crop&q=60', 4.9, 'หมูกรอบคัดพิเศษ', 'หมูกรอบสูตรเด็ดของร้าน หนังกรอบสนั่น เนื้อนุ่มฉ่ำ ผัดคลุกเคล้ากับพริกกระเทียมและซอสกะเพราเข้มข้น รสชาติจัดจ้าน หอมกลิ่นกะเพราแท้ ผัดแห้ง ไม่แฉะ'),
('krapao-04', 'กะเพราทะเลรวมมิตร', 60, 'basil-seafood', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRGpj1t8JnmuuvwZWgb1Y4NYpwiinPAKSeAuLanKIKw&s?w=500&auto=format&fit=crop&q=60', 4.7, 'ยอดฮิต', 'จัดเต็มซีฟู้ดสดๆ (กุ้งแกะเปลือก หมึกชิ้นโต และหอยแมลงภู่) ผัดเข้มข้นด้วยพริกกระเทียมและซอสกะเพราสูตรเด็ด รสจัดจ้าน เผ็ดร้อน หอมกลิ่นกะเพราแท้โชยเตะจมูก'),
('krapao-05', 'ต้มยำน้ำข้นทะเล', 90, 'basil-seafood', 'https://s359.kapook.com/pagebuilder/d23c7c93-9b7b-45a4-b7e5-e508722d8369.jpg?w=500&auto=format&fit=crop&q=60', 4.9, 'เมนูแนะนำ', 'ซีฟู้ดจัดเต็ม (กุ้ง หมึก หอย) ในน้ำซุปต้มยำรสเข้มข้น หอมละมุนด้วยนมสดและพริกเผา จัดจ้านครบเครื่องต้มยำไทยแท้ เปรี้ยว เผ็ด เค็ม ลงตัว'),
('krapao-06', 'ข้าวผัดหมู', 50, 'others', 'https://img.wongnai.com/p/1920x0/2020/05/19/5fd0de43e8ec43ef8838c6502c0bb70c.jpg?w=500&auto=format&fit=crop&q=60', 4.6, 'ยอดฮิต', 'ข้าวสวยเม็ดร่วนผัดไฟแรง หอมกลิ่นกระทะโชย คลุกเคล้ากับเนื้อหมูนุ่มหมักเข้าเนื้อ ไข่ไก่สด และผักรวม รสชาติกลมกล่อม หวานเค็มกำลังดี ทานง่าย อร่อยถูกใจทุกคน'),
('krapao-07', 'ผัดมาม่าหมู', 60, 'others', 'https://s359.kapook.com/pagebuilder/cb2adb38-2575-40cb-9107-72e52737ee79.jpg?w=500&auto=format&fit=crop&q=60', 4.5, 'เมนูแนะนำ', 'เส้นมาม่าลวกสุกกำลังดี เหนียวนุ่ม ไม่เละ ผัดไฟแรงคั่วกระทะพร้อมไข่ไก่ เนื้อหมูหมักนุ่ม และผักคะน้าสดกรอบ ปรุงรสกลมกล่อม หอมอร่อยทานเพลิน'),
('krapao-08', 'ผัดซีอิ๊ว', 60, 'others', 'https://www.foodequipment.co.th/wp-content/uploads/2024/09/1-13.jpg?w=500&auto=format&fit=crop&q=60', 4.7, '', 'เส้นใหญ่ (หรือเส้นหมี่) เหนียวนุ่ม ผัดคั่วไฟแรงจนหอมกลิ่นกระทะ คลุกเคล้าซีอิ๊วดำหวานชั้นดี ไข่ไก่สด และผักคะน้าฮ่องกงกรอบอร่อย รสชาติกลมกล่อมลงตัว'),
('krapao-09', 'ผัดกระเพราเนื้อวัวสับ', 60, 'basil-pork-chicken', 'https://i.ytimg.com/vi/xbYGXTFr36E/mqdefault.jpg?w=500&auto=format&fit=crop&q=60', 4.8, 'เมนูแนะนำ', 'เนื้อวัวบดคัดเกรดอย่างดี ผัดแห้งไฟแรงกับพริกขี้หนูสวนและกระเทียมไทย รสชาติเผ็ดร้อนดุดัน เข้มข้นเข้าเนื้อ หอมกลิ่นใบกะเพราแท้ ไม่แฉะน้ำมัน'),
('krapao-10', 'กระเพราปลาหมึก', 50, 'basil-seafood', 'https://i.ytimg.com/vi/vgyTnh7ekMA/sddefault.jpg?w=500&auto=format&fit=crop&q=60', 4.8, '', 'ปลาหมึกกล้วยสดๆ ชิ้นโต เนื้อเด้งกรุบ ไม่เหนียว ผัดไฟแรงสะดุ้งกระทะกับพริกกระเทียมและซอสกะเพราสูตรเด็ด รสชาติจัดจ้าน เผ็ดร้อน หอมกลิ่นกะเพราแท้'),
('krapao-11', 'ผัดผงกะหรี่ทะเล', 60, 'basil-seafood', 'https://i.ytimg.com/vi/Jx-JNgO4c00/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60', 4.8, '', 'ยกกองทัพซีฟู้ดสดๆ (กุ้งเนื้อเด้ง หมึกชิ้นโต หอยแมลงภู่) ผัดคลุกเคล้ากับซอสผงกะหรี่สูตรเข้มข้น ไข่นุ่มละมุนลิ้น และนมสด หอมมัน กลมกล่อม เครื่องเทศแน่นๆ'),
('krapao-12', 'กะเพราตับหมู', 50, 'basil-pork-chicken', 'https://i.ytimg.com/vi/rm3wZ6lhD50/hq720.jpg?w=500&auto=format&fit=crop&q=60', 4.8, '', 'ตับหมูสดคัดเกรด หั่นชิ้นหนากำลังดี ผัดสะดุ้งไฟแรงจนเนื้อนุ่มเด้ง ไม่แข็งกระด้าง จัดจ้านด้วยพริกกระเทียมและซอสกะเพราสูตรเด็ด หอมกลิ่นใบกะเพราแท้'),
('krapao-13', 'ผัดพริกแกงปลาดุก', 60, 'others', 'https://i.ytimg.com/vi/Rhr8E9v0Ls8/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60', 4.8, '', 'ปลาดุกหั่นชิ้นทอดจนเหลืองกรอบนอกนุ่มใน ผัดเข้มข้นคลุกเคล้ากับพริกแกงเผ็ดใต้ตำมือ หอมกลิ่นกระชาย ซอยใบมะกรูดและพริกชี้ฟ้า รสจัดจ้าน เผ็ดร้อนถึงใจ'),
('krapao-14', 'ยำวุ้นเส้นหมูสับ', 80, 'others', 'https://i.ytimg.com/vi/m2dJQRDhz-o/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60', 4.8, '', 'วุ้นเส้นเหนียวนุ่ม ลวกสุกกำลังดี ยำคลุกเคล้ากับหมูสับล้วนเนื้อนุ่ม และผักสมุนไพรสด ปรุงรสน้ำยำมะนาวแท้รสจัดจ้าน ครบรสเปรี้ยว เค็ม เผ็ด แซ่บซี๊ดถึงใจ'),
('krapao-15', 'สุกี้', 50, 'others', 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0194_1200x630.jpg?w=500&auto=format&fit=crop&q=60', 4.8, 'รีเฟรชดับเผ็ด', 'วุ้นเส้นเหนียวนุ่ม ผัดแห้งหอมกลิ่นกระทะ หรือเลือกแบบน้ำซุปร้อนๆ กลมกล่อม จัดเต็มผักกาดขาว ผักบุ้งสดกรอบ และเนื้อสัตว์นุ่มๆ เสิร์ฟพร้อมน้ำจิ้มสุกี้สูตรเด็ด เข้มข้น ครบรส'),
('drink-05', 'น้ำเปล่าเย็น', 10, 'drinks', 'https://img.th.my-best.com/product_images/d68638208391099f2dc353bffc6ab717.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=7845671ef59dc1c5f371e538e82e78c3?w=500&auto=format&fit=crop&q=60', 4.9, 'ดับกระหาย', 'น้ำเปล่าขวดเย็นฉ่ำเสิร์ฟพร้อมแก้วน้ำแข็งสะอาดสดชื่น'),
('drink-04', 'โค้กกระป๋องเย็น', 15, 'drinks', 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60', 4.9, 'ซ่าเย็นสะใจ', 'เครื่องดื่มอัดลมโคคาโคล่ารสชาติต้นตำรับ เสิร์ฟเย็นพร้อมน้ำแข็งแก้วโต ดับเผ็ดลงตัว');

-- Seed Toppings
INSERT INTO `menu_toppings` (`menu_item_id`, `name`, `price`) VALUES
('krapao-01', 'ไข่ดาว', 10),
('krapao-01', 'ไข่เจียว', 10),
('krapao-01', 'พิเศษ', 10),

('krapao-02', 'ไข่ดาวเป็ดขอบกรอบ', 10),
('krapao-02', 'ไข่เจียวฟูนุ่ม', 10),
('krapao-02', 'พิเศษ', 10),

('krapao-03', 'ไข่ดาว', 10),
('krapao-03', 'ไข่เจียวฟูนุ่ม', 10),
('krapao-03', 'พิเศษ', 10),

('krapao-04', 'ไข่ดาว', 10),
('krapao-04', 'ไข่เจียวฟูนุ่ม', 10),
('krapao-04', 'พิเศษ', 10),

('krapao-05', 'พิเศษ', 20),

('krapao-06', 'พิเศษ', 10),

('krapao-07', 'พิเศษ', 10),

('krapao-08', 'ไข่ดาว', 15),
('krapao-08', 'พิเศษ', 10),

('krapao-09', 'ไข่ดาว', 15),
('krapao-09', 'พิเศษ', 10),

('krapao-10', 'ไข่ดาว', 15),
('krapao-10', 'พิเศษ', 10),

('krapao-11', 'พิเศษ', 10),

('krapao-12', 'ไข่ดาว', 15),
('krapao-12', 'พิเศษ', 10),

('krapao-13', 'ไข่ดาว', 15),
('krapao-13', 'พิเศษ', 10),

('krapao-14', 'พิเศษ', 20),

('krapao-15', 'หมูชิ้น', 10),
('krapao-15', 'ทะเล', 20),
('krapao-15', 'แห้ง', 10),
('krapao-15', 'น้ำ', 10),
('krapao-15', 'พิเศษ', 10);

-- 5. Table for Closed Tables (Admin toggled off tables)
CREATE TABLE IF NOT EXISTS `closed_tables` (
  `table_number` INT NOT NULL,
  PRIMARY KEY (`table_number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Table for Store Expenses
CREATE TABLE IF NOT EXISTS `expenses` (
  `id` VARCHAR(50) NOT NULL,
  `date` DATE NOT NULL,
  `category` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `amount` INT NOT NULL,
  `staff_name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Default Expenses
INSERT INTO `expenses` (`id`, `date`, `category`, `description`, `amount`, `staff_name`) VALUES
('EXP-001', '2026-08-29', 'วัตถุดิบอาหาร', 'ซื้อไข่เป็ดและใบกะเพราป่าล็อตเช้า', 1500, 'นางสาวศิริพร บริการดี'),
('EXP-002', '2026-08-30', 'สาธารณูปโภค', 'จ่ายค่าไฟฟ้าร้านรอบเดือน ก.ค.', 4800, 'นายสมเกียรติ ยอดฝีมือ')
ON DUPLICATE KEY UPDATE id=id;

-- 8. Table for Store Owner (ข้อมูลเจ้าของร้าน / ผู้บริหารสูงสุด)
CREATE TABLE IF NOT EXISTS `store_owner` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `role` VARCHAR(100) NOT NULL DEFAULT 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
  `passcode` VARCHAR(50) NOT NULL DEFAULT '1234',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Seed Default Store Owner
INSERT INTO `store_owner` (`id`, `name`, `username`, `phone`, `role`, `passcode`) VALUES
(1, 'คุณราชา เจ้าของร้าน', 'owner', '089-999-9999', 'เจ้าของร้าน (ผู้บริหารสูงสุด)', '1234')
ON DUPLICATE KEY UPDATE id=id;



