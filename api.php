<?php
/**
 * Raja Kra Pao Restaurant - Native PHP API backend for Apache/XAMPP
 * Connects directly to MySQL database 'raja_krapao'
 */

// Headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=utf-8");

// Handle CORS Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Database Connection
$dbHost = 'localhost';
$dbUser = 'root';
$dbPass = '';
$dbName = 'raja_krapao';

try {
    $pdo = new PDO("mysql:host={$dbHost};dbname={$dbName};charset=utf8mb4", $dbUser, $dbPass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    http_response_code(503);
    echo json_encode(['error' => 'Database connection failed: ' . $e->getMessage()]);
    exit;
}

// Auto-check tables if needed
function ensureTablesExist($pdo) {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS `staff` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `name` VARCHAR(255) NOT NULL,
          `username` VARCHAR(100) NOT NULL,
          `position` VARCHAR(100) NOT NULL,
          `phone` VARCHAR(50) NOT NULL,
          `status` VARCHAR(50) NOT NULL DEFAULT 'active',
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `inventory_items` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `name` VARCHAR(255) NOT NULL,
          `quantity` INT NOT NULL DEFAULT 0,
          `unit` VARCHAR(50) NOT NULL,
          `min_stock` INT NOT NULL DEFAULT 5,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `requisition_logs` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `item_id` INT NOT NULL,
          `item_name` VARCHAR(255) NOT NULL,
          `quantity` INT NOT NULL,
          `unit` VARCHAR(50) NOT NULL DEFAULT 'กก.',
          `staff_name` VARCHAR(255) NOT NULL,
          `action_time` VARCHAR(50) NOT NULL,
          `remarks` TEXT,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `stock_in_logs` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `item_id` INT NOT NULL,
          `item_name` VARCHAR(255) NOT NULL,
          `quantity` INT NOT NULL,
          `unit` VARCHAR(50) NOT NULL DEFAULT 'กก.',
          `cost` DECIMAL(10, 2) DEFAULT 0,
          `supplier` VARCHAR(255) DEFAULT '',
          `staff_name` VARCHAR(255) NOT NULL,
          `action_time` VARCHAR(50) NOT NULL,
          `remarks` TEXT,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `closed_tables` (
          `table_number` INT NOT NULL,
          PRIMARY KEY (`table_number`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `billed_tables` (
          `table_number` INT NOT NULL,
          PRIMARY KEY (`table_number`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `expenses` (
          `id` VARCHAR(50) NOT NULL,
          `date` DATE NOT NULL,
          `category` VARCHAR(100) NOT NULL,
          `description` TEXT NOT NULL,
          `amount` INT NOT NULL,
          `staff_name` VARCHAR(255) NOT NULL,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `store_owner` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `name` VARCHAR(255) NOT NULL,
          `username` VARCHAR(100) NOT NULL,
          `phone` VARCHAR(50) NOT NULL,
          `role` VARCHAR(100) NOT NULL DEFAULT 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
          `passcode` VARCHAR(50) NOT NULL DEFAULT '1234',
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `toppings` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `name` VARCHAR(100) NOT NULL UNIQUE,
          `price` INT NOT NULL DEFAULT 10,
          `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

        CREATE TABLE IF NOT EXISTS `menu_toppings` (
          `id` INT AUTO_INCREMENT NOT NULL,
          `menu_item_id` VARCHAR(50) NOT NULL,
          `name` VARCHAR(100) NOT NULL,
          `price` INT NOT NULL DEFAULT 10,
          PRIMARY KEY (`id`)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
    ");

    // Seed default store owner if empty
    $ownerChk = $pdo->query("SELECT COUNT(*) AS cnt FROM store_owner")->fetch();
    if (($ownerChk['cnt'] ?? 0) == 0) {
        $pdo->exec("
            INSERT INTO `store_owner` (`id`, `name`, `username`, `phone`, `role`, `passcode`) 
            VALUES (1, 'คุณราชา เจ้าของร้าน', 'owner', '089-999-9999', 'เจ้าของร้าน (ผู้บริหารสูงสุด)', '1234')
        ");
    }

    try {
        $pdo->exec("ALTER TABLE `orders` ADD COLUMN `staff_name` VARCHAR(255) DEFAULT NULL");
    } catch (Exception $e) {}

    try {
        $pdo->exec("ALTER TABLE `menu_items` ADD COLUMN `has_spicy` TINYINT(1) DEFAULT 1");
    } catch (Exception $e) {}

    try {
        $pdo->exec("
            CREATE TABLE IF NOT EXISTS `table_staff` (
                `table_number` INT NOT NULL,
                `staff_name` VARCHAR(255) NOT NULL,
                `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                PRIMARY KEY (`table_number`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        ");
    } catch (Exception $e) {}
}
ensureTablesExist($pdo);

// Parse Route and Method
$method = $_SERVER['REQUEST_METHOD'];

// Get route either from _route param (via rewrite) or parse from REQUEST_URI
$route = '';
if (isset($_GET['_route'])) {
    $route = trim($_GET['_route'], '/');
} else {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    if (preg_match('#/api/(.*)$#i', $uri, $matches)) {
        $route = trim($matches[1], '/');
    }
}

// Read JSON Body
$rawInput = file_get_contents('php://input');
$body = json_decode($rawInput, true) ?: [];

$parts = explode('/', $route);
$resource = $parts[0] ?? '';
$id = $parts[1] ?? null;
$subAction = $parts[2] ?? null;

try {
    // ----------------------------------------------------
    // 0. DATABASE STATUS / HEALTH CHECK & SERVER INFO
    // ----------------------------------------------------
    if ($resource === 'server-info' || $resource === 'ip') {
        $ip = gethostbyname(gethostname());
        $port = $_SERVER['SERVER_PORT'] ?? '80';
        $portSuffix = ($port === '80' || $port === '443') ? '' : ':' . $port;
        echo json_encode([
            'ip' => $ip,
            'hostname' => gethostname(),
            'port' => $port,
            'wifi_url' => "http://{$ip}{$portSuffix}/QR/"
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    if ($resource === 'db-status' || $resource === 'health') {
        $tablesStmt = $pdo->query("SHOW TABLES");
        $tables = $tablesStmt->fetchAll(PDO::FETCH_COLUMN);
        echo json_encode([
            'status' => 'connected',
            'database' => $dbName,
            'host' => $dbHost,
            'user' => $dbUser,
            'tables' => $tables,
            'table_count' => count($tables),
            'message' => 'เชื่อมต่อฐานข้อมูล MySQL: raja_krapao เรียบร้อยแล้ว 100%'
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // ----------------------------------------------------
    // 1. MENU
    // ----------------------------------------------------
    if ($resource === 'menu') {
        if ($method === 'GET') {
            $stmt = $pdo->query("
                SELECT m.*, GROUP_CONCAT(CONCAT(t.name, ':', t.price) SEPARATOR ',') AS toppings_concat
                FROM menu_items m
                LEFT JOIN menu_toppings t ON m.id = t.menu_item_id
                GROUP BY m.id
                ORDER BY 
                    CASE WHEN m.category = 'drinks' THEN 1 ELSE 0 END ASC,
                    CASE WHEN m.id = 'drink-05' THEN 1 WHEN m.id = 'drink-04' THEN 2 ELSE 3 END ASC,
                    CAST(SUBSTRING_INDEX(m.id, '-', -1) AS UNSIGNED) ASC,
                    m.id ASC
            ");
            $rows = $stmt->fetchAll();
            $menu = array_map(function ($row) {
                $toppings = [];
                if (!empty($row['toppings_concat'])) {
                    foreach (explode(',', $row['toppings_concat']) as $str) {
                        $p = explode(':', $str);
                        if (count($p) >= 2) {
                            $toppings[] = ['name' => $p[0], 'price' => (int)$p[1]];
                        }
                    }
                }
                return [
                    'id' => $row['id'],
                    'name' => $row['name'],
                    'price' => (int)$row['price'],
                    'category' => $row['category'],
                    'image' => $row['image'],
                    'rating' => (float)$row['rating'],
                    'badge' => $row['badge'],
                    'desc' => $row['description'],
                    'isAvailable' => (bool)$row['is_available'],
                    'hasSpicy' => isset($row['has_spicy']) ? (bool)$row['has_spicy'] : true,
                    'toppings' => $toppings
                ];
            }, $rows);
            echo json_encode($menu, JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'POST') {
            $pdo->beginTransaction();
            $stmt = $pdo->prepare("
                INSERT INTO menu_items (id, name, price, category, image, rating, badge, description, is_available, has_spicy) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ");
            $isAvail = (!isset($body['isAvailable']) || $body['isAvailable'] !== false) ? 1 : 0;
            $hasSpicy = (!isset($body['hasSpicy']) || $body['hasSpicy'] !== false) ? 1 : 0;
            $stmt->execute([
                $body['id'] ?? uniqid('menu-'),
                $body['name'] ?? '',
                $body['price'] ?? 0,
                $body['category'] ?? '',
                $body['image'] ?? '',
                $body['rating'] ?? 5.0,
                $body['badge'] ?? null,
                $body['desc'] ?? '',
                $isAvail,
                $hasSpicy
            ]);
            $newId = $body['id'] ?? uniqid('menu-');

            if (!empty($body['toppings']) && is_array($body['toppings'])) {
                $topStmt = $pdo->prepare("INSERT INTO menu_toppings (menu_item_id, name, price) VALUES (?, ?, ?)");
                foreach ($body['toppings'] as $t) {
                    $topStmt->execute([$newId, $t['name'], (int)$t['price']]);
                }
            }

            $pdo->commit();
            http_response_code(201);
            echo json_encode(['success' => true, 'id' => $newId], JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'PUT' && $id && $subAction === 'availability') {
            $isAvail = (!empty($body['isAvailable'])) ? 1 : 0;
            $stmt = $pdo->prepare("UPDATE menu_items SET is_available = ? WHERE id = ?");
            $stmt->execute([$isAvail, $id]);
            echo json_encode(['success' => true]);
            exit;
        }

        if ($method === 'PUT' && $id) {
            $pdo->beginTransaction();
            $stmt = $pdo->prepare("
                UPDATE menu_items 
                SET name = ?, price = ?, category = ?, image = ?, rating = ?, badge = ?, description = ?, is_available = ?, has_spicy = ? 
                WHERE id = ?
            ");
            $isAvail = (!isset($body['isAvailable']) || $body['isAvailable'] !== false) ? 1 : 0;
            $hasSpicy = (!isset($body['hasSpicy']) || $body['hasSpicy'] !== false) ? 1 : 0;
            $stmt->execute([
                $body['name'] ?? '',
                $body['price'] ?? 0,
                $body['category'] ?? '',
                $body['image'] ?? '',
                $body['rating'] ?? 5.0,
                $body['badge'] ?? null,
                $body['desc'] ?? '',
                $isAvail,
                $hasSpicy,
                $id
            ]);

            // Delete existing toppings
            $delTop = $pdo->prepare("DELETE FROM menu_toppings WHERE menu_item_id = ?");
            $delTop->execute([$id]);

            if (!empty($body['toppings']) && is_array($body['toppings'])) {
                $topStmt = $pdo->prepare("INSERT INTO menu_toppings (menu_item_id, name, price) VALUES (?, ?, ?)");
                foreach ($body['toppings'] as $t) {
                    $topStmt->execute([$id, $t['name'], (int)$t['price']]);
                }
            }

            $pdo->commit();
            echo json_encode(['success' => true]);
            exit;
        }

        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM menu_items WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 1.1 TOPPINGS MANAGEMENT
    // ----------------------------------------------------
    if ($resource === 'toppings') {
        if ($method === 'GET') {
            $stmt = $pdo->query("
                SELECT t.id, t.name, t.price, GROUP_CONCAT(mt.menu_item_id SEPARATOR ',') as menu_ids
                FROM toppings t
                LEFT JOIN menu_toppings mt ON t.name = mt.name
                GROUP BY t.id, t.name, t.price
                ORDER BY t.id ASC
            ");
            $rows = $stmt->fetchAll();
            $result = array_map(function($r) {
                return [
                    'id' => (int)$r['id'],
                    'name' => $r['name'],
                    'price' => (int)$r['price'],
                    'menuIds' => !empty($r['menu_ids']) ? explode(',', $r['menu_ids']) : []
                ];
            }, $rows);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'POST') {
            $origName = trim($body['origName'] ?? '');
            $name = trim($body['name'] ?? '');
            $price = (int)($body['price'] ?? 0);
            $menuIds = $body['menuIds'] ?? [];

            if (empty($name)) {
                http_response_code(400);
                echo json_encode(['error' => 'Topping name is required']);
                exit;
            }

            $pdo->beginTransaction();
            try {
                // Sync master toppings table
                if (!empty($origName) && $origName !== $name) {
                    $updTop = $pdo->prepare("UPDATE toppings SET name = ?, price = ? WHERE name = ?");
                    $updTop->execute([$name, $price, $origName]);
                } else {
                    $insTop = $pdo->prepare("INSERT INTO toppings (name, price) VALUES (?, ?) ON DUPLICATE KEY UPDATE price = VALUES(price)");
                    $insTop->execute([$name, $price]);
                }

                // Sync menu_toppings table
                $targetToDelete = !empty($origName) ? $origName : $name;
                $del = $pdo->prepare("DELETE FROM menu_toppings WHERE name = ?");
                $del->execute([$targetToDelete]);

                if (!empty($origName) && $origName !== $name) {
                    $del->execute([$name]);
                }

                if (!empty($menuIds) && is_array($menuIds)) {
                    $ins = $pdo->prepare("INSERT INTO menu_toppings (menu_item_id, name, price) VALUES (?, ?, ?)");
                    foreach ($menuIds as $mId) {
                        $mId = trim($mId);
                        if (!empty($mId)) {
                            $ins->execute([$mId, $name, $price]);
                        }
                    }
                }

                $pdo->commit();
                echo json_encode(['success' => true]);
                exit;
            } catch (Exception $e) {
                $pdo->rollBack();
                http_response_code(500);
                echo json_encode(['error' => $e->getMessage()]);
                exit;
            }
        }

        if ($method === 'DELETE') {
            $name = trim($body['name'] ?? ($_GET['name'] ?? (!empty($id) ? urldecode($id) : '')));

            if (empty($name)) {
                http_response_code(400);
                echo json_encode(['error' => 'Topping name is required']);
                exit;
            }

            $delTop = $pdo->prepare("DELETE FROM toppings WHERE name = ?");
            $delTop->execute([$name]);

            $stmt = $pdo->prepare("DELETE FROM menu_toppings WHERE name = ?");
            $stmt->execute([$name]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 2. ORDERS
    // ----------------------------------------------------
    if ($resource === 'orders') {
        if ($method === 'GET') {
            $stmt = $pdo->query("
                SELECT o.*, 
                       GROUP_CONCAT(
                           oi.name, 
                           IF(oi.toppings IS NULL OR oi.toppings = '', '', CONCAT(' ', oi.toppings)), 
                           IF(oi.remarks IS NULL OR oi.remarks = '', '', CONCAT(' [หมายเหตุ: ', oi.remarks, ']')), 
                           ' (x', oi.quantity, ') [', oi.price * oi.quantity, ' B]'
                           SEPARATOR '\n'
                       ) AS order_details_concat
                FROM orders o
                LEFT JOIN order_items oi ON o.id = oi.order_id
                GROUP BY o.id
                ORDER BY o.order_date DESC, o.order_time DESC
            ");
            $rows = $stmt->fetchAll();
            $orders = array_map(function ($row) {
                return [
                    'id' => $row['id'],
                    'table' => (int)$row['table_number'],
                    'details' => $row['order_details_concat'] ?? '',
                    'total' => (int)$row['total_price'],
                    'time' => $row['order_time'],
                    'date' => $row['order_date'],
                    'status' => $row['status'],
                    'payment_method' => $row['payment_method'],
                    'staff_name' => $row['staff_name'] ?? null
                ];
            }, $rows);
            echo json_encode($orders, JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'POST') {
            $pdo->beginTransaction();
            $orderId = $body['id'] ?? uniqid('ORD-');
            $table = (int)($body['table'] ?? 1);
            $total = (int)($body['total'] ?? 0);
            $time = $body['time'] ?? date('H:i');
            $orderDate = date('Y-m-d');
            $status = $body['status'] ?? 'pending';
            $staffName = $body['staff_name'] ?? ($body['staffName'] ?? null);
            if (empty($staffName)) {
                $stfStmt = $pdo->prepare("SELECT staff_name FROM table_staff WHERE table_number = ?");
                $stfStmt->execute([$table]);
                $stfRow = $stfStmt->fetch();
                if ($stfRow && !empty($stfRow['staff_name'])) {
                    $staffName = $stfRow['staff_name'];
                }
            }

            $chk = $pdo->prepare("SELECT id FROM orders WHERE id = ?");
            $chk->execute([$orderId]);
            if ($chk->fetch()) {
                if ($staffName) {
                    $upd = $pdo->prepare("UPDATE orders SET total_price = ?, status = ?, staff_name = ? WHERE id = ?");
                    $upd->execute([$total, $status, $staffName, $orderId]);
                } else {
                    $upd = $pdo->prepare("UPDATE orders SET total_price = ?, status = ? WHERE id = ?");
                    $upd->execute([$total, $status, $orderId]);
                }
            } else {
                $ins = $pdo->prepare("INSERT INTO orders (id, table_number, total_price, order_time, order_date, status, staff_name) VALUES (?, ?, ?, ?, ?, ?, ?)");
                $ins->execute([$orderId, $table, $total, $time, $orderDate, $status, $staffName]);
            }

            if (!empty($body['cartItems']) && is_array($body['cartItems'])) {
                $oiStmt = $pdo->prepare("INSERT INTO order_items (order_id, menu_item_id, name, quantity, price, toppings, remarks) VALUES (?, ?, ?, ?, ?, ?, ?)");
                foreach ($body['cartItems'] as $item) {
                    $topStr = '';
                    if (!empty($item['toppings']) && is_array($item['toppings'])) {
                        $partsArr = [];
                        foreach ($item['toppings'] as $t) {
                            $qty = (isset($t['quantity']) && $t['quantity'] > 1) ? " x{$t['quantity']}" : '';
                            $partsArr[] = $t['name'] . $qty;
                        }
                        $topStr = '(+' . implode(', ', $partsArr) . ')';
                    }
                    $oiStmt->execute([
                        $orderId,
                        $item['itemId'] ?? '',
                        $item['name'] ?? '',
                        (int)($item['quantity'] ?? 1),
                        (int)($item['price'] ?? 0),
                        $topStr ?: null,
                        $item['remarks'] ?? null
                    ]);
                }
            }

            $pdo->commit();
            http_response_code(201);
            echo json_encode(['success' => true, 'id' => $orderId], JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'PUT' && $id) {
            if (isset($body['table'])) {
                $stmt = $pdo->prepare("UPDATE orders SET table_number = ? WHERE id = ?");
                $stmt->execute([(int)$body['table'], $id]);
            }
            if (isset($body['staff_name']) || isset($body['staffName'])) {
                $sName = $body['staff_name'] ?? $body['staffName'];
                $stmt = $pdo->prepare("UPDATE orders SET staff_name = ? WHERE id = ?");
                $stmt->execute([$sName, $id]);
            }
            if (isset($body['status'])) {
                if (!empty($body['payment_method'])) {
                    $stmt = $pdo->prepare("UPDATE orders SET status = ?, payment_method = ? WHERE id = ?");
                    $stmt->execute([$body['status'], $body['payment_method'], $id]);
                } else {
                    $stmt = $pdo->prepare("UPDATE orders SET status = ? WHERE id = ?");
                    $stmt->execute([$body['status'], $id]);
                }
            }
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 3. SALES REPORTS (DAILY & DASHBOARD REPORT)
    // ----------------------------------------------------
    if ($resource === 'sales' && $id === 'report') {
        if ($method === 'GET') {
            $startDate = $_GET['startDate'] ?? null;
            $endDate = $_GET['endDate'] ?? null;

            $whereOrders = ["status = 'completed'"];
            $paramsOrders = [];

            if (!empty($startDate)) {
                $whereOrders[] = "order_date >= ?";
                $paramsOrders[] = $startDate;
            }
            if (!empty($endDate)) {
                $whereOrders[] = "order_date <= ?";
                $paramsOrders[] = $endDate;
            }

            $whereOrdersSql = implode(' AND ', $whereOrders);

            // Daily sales breakdown
            $stmt = $pdo->prepare("
                SELECT order_date AS date, 
                       SUM(total_price) AS daily_total,
                       SUM(CASE WHEN payment_method = 'cash' THEN total_price ELSE 0 END) AS cash_total,
                       SUM(CASE WHEN payment_method = 'scan' THEN total_price ELSE 0 END) AS scan_total,
                       COUNT(id) AS total_orders
                FROM orders
                WHERE {$whereOrdersSql}
                GROUP BY order_date
                ORDER BY order_date DESC
            ");
            $stmt->execute($paramsOrders);
            $dailyRows = $stmt->fetchAll();

            // Daily expenses breakdown
            $whereExp = ["1=1"];
            $paramsExp = [];
            if (!empty($startDate)) {
                $whereExp[] = "date >= ?";
                $paramsExp[] = $startDate;
            }
            if (!empty($endDate)) {
                $whereExp[] = "date <= ?";
                $paramsExp[] = $endDate;
            }
            $whereExpSql = implode(' AND ', $whereExp);

            $expStmt = $pdo->prepare("
                SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date,
                       SUM(amount) AS daily_expense
                FROM expenses
                WHERE {$whereExpSql}
                GROUP BY date
                ORDER BY date DESC
            ");
            $expStmt->execute($paramsExp);
            $expRows = $expStmt->fetchAll();
            $expensesByDate = [];
            $totalExpenses = 0;
            foreach ($expRows as $er) {
                $expensesByDate[$er['date']] = (int)$er['daily_expense'];
                $totalExpenses += (int)$er['daily_expense'];
            }

            // Top selling items in date range
            $topItemsSql = "
                SELECT oi.name, 
                       SUM(oi.quantity) AS total_qty, 
                       SUM(oi.price * oi.quantity) AS total_amount
                FROM order_items oi
                JOIN orders o ON oi.order_id = o.id
                WHERE o.status = 'completed'
            ";
            $topParams = [];
            if (!empty($startDate)) {
                $topItemsSql .= " AND o.order_date >= ?";
                $topParams[] = $startDate;
            }
            if (!empty($endDate)) {
                $topItemsSql .= " AND o.order_date <= ?";
                $topParams[] = $endDate;
            }
            $topItemsSql .= " GROUP BY oi.name ORDER BY total_qty DESC LIMIT 10";

            $topStmt = $pdo->prepare($topItemsSql);
            $topStmt->execute($topParams);
            $topItems = array_map(function($r) {
                return [
                    'name' => $r['name'],
                    'total_qty' => (int)$r['total_qty'],
                    'total_amount' => (int)$r['total_amount']
                ];
            }, $topStmt->fetchAll());

            // Merge expenses with daily sales
            $allDates = [];
            foreach ($dailyRows as $dr) {
                $allDates[$dr['date']] = true;
            }
            foreach ($expRows as $er) {
                $allDates[$er['date']] = true;
            }
            krsort($allDates);

            $dailyMap = [];
            foreach ($dailyRows as $dr) {
                $dailyMap[$dr['date']] = $dr;
            }

            $dailyResult = [];
            $totalRevenue = 0;
            $totalCash = 0;
            $totalScan = 0;
            $totalOrders = 0;

            foreach (array_keys($allDates) as $d) {
                $dSales = $dailyMap[$d] ?? null;
                $dailyTotal = $dSales ? (int)$dSales['daily_total'] : 0;
                $cashTotal = $dSales ? (int)$dSales['cash_total'] : 0;
                $scanTotal = $dSales ? (int)$dSales['scan_total'] : 0;
                $ordersCount = $dSales ? (int)$dSales['total_orders'] : 0;
                $dailyExp = $expensesByDate[$d] ?? 0;
                $dailyProfit = $dailyTotal - $dailyExp;

                $totalRevenue += $dailyTotal;
                $totalCash += $cashTotal;
                $totalScan += $scanTotal;
                $totalOrders += $ordersCount;

                $dailyResult[] = [
                    'date' => $d,
                    'daily_total' => $dailyTotal,
                    'cash_total' => $cashTotal,
                    'scan_total' => $scanTotal,
                    'total_orders' => $ordersCount,
                    'daily_expense' => $dailyExp,
                    'daily_profit' => $dailyProfit
                ];
            }

            // Expense categories summary
            $expCatStmt = $pdo->prepare("
                SELECT category, SUM(amount) AS total_amount, COUNT(id) AS count
                FROM expenses
                WHERE {$whereExpSql}
                GROUP BY category
                ORDER BY total_amount DESC
            ");
            $expCatStmt->execute($paramsExp);
            $expenseCategories = array_map(function($r) {
                return [
                    'category' => $r['category'],
                    'total_amount' => (int)$r['total_amount'],
                    'count' => (int)$r['count']
                ];
            }, $expCatStmt->fetchAll());

            $netProfit = $totalRevenue - $totalExpenses;
            $avgTicket = $totalOrders > 0 ? (int)round($totalRevenue / $totalOrders) : 0;

            echo json_encode([
                'success' => true,
                'startDate' => $startDate,
                'endDate' => $endDate,
                'summary' => [
                    'total_revenue' => $totalRevenue,
                    'cash_total' => $totalCash,
                    'scan_total' => $totalScan,
                    'total_orders' => $totalOrders,
                    'total_expenses' => $totalExpenses,
                    'net_profit' => $netProfit,
                    'avg_ticket' => $avgTicket
                ],
                'daily' => $dailyResult,
                'top_items' => $topItems,
                'expense_categories' => $expenseCategories
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    if ($resource === 'sales' && $id === 'daily') {
        if ($method === 'GET') {
            $stmt = $pdo->query("
                SELECT order_date AS date, 
                       SUM(total_price) AS daily_total,
                       SUM(CASE WHEN payment_method = 'cash' THEN total_price ELSE 0 END) AS cash_total,
                       SUM(CASE WHEN payment_method = 'scan' THEN total_price ELSE 0 END) AS scan_total,
                       COUNT(id) AS total_orders
                FROM orders
                WHERE status = 'completed'
                GROUP BY order_date
                ORDER BY order_date DESC
            ");
            $rows = $stmt->fetchAll();
            $result = array_map(function($r) {
                return [
                    'date' => $r['date'],
                    'daily_total' => (int)($r['daily_total'] ?? 0),
                    'cash_total' => (int)($r['cash_total'] ?? 0),
                    'scan_total' => (int)($r['scan_total'] ?? 0),
                    'total_orders' => (int)($r['total_orders'] ?? 0)
                ];
            }, $rows);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
            exit;
        }
    }

    // ----------------------------------------------------
    // 4. STAFF
    // ----------------------------------------------------
    if ($resource === 'staff') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT * FROM staff ORDER BY id DESC");
            echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $stmt = $pdo->prepare("INSERT INTO staff (name, username, position, phone, status) VALUES (?, ?, ?, ?, ?)");
            $stmt->execute([
                $body['name'] ?? '',
                $body['username'] ?? '',
                $body['position'] ?? '',
                $body['phone'] ?? '',
                $body['status'] ?? 'active'
            ]);
            http_response_code(201);
            echo json_encode(['success' => true, 'id' => (int)$pdo->lastInsertId()]);
            exit;
        }
        if ($method === 'PUT' && $id) {
            $stmt = $pdo->prepare("UPDATE staff SET name = ?, username = ?, position = ?, phone = ?, status = ? WHERE id = ?");
            $stmt->execute([
                $body['name'] ?? '',
                $body['username'] ?? '',
                $body['position'] ?? '',
                $body['phone'] ?? '',
                $body['status'] ?? 'active',
                (int)$id
            ]);
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM staff WHERE id = ?");
            $stmt->execute([(int)$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 5. INVENTORY
    // ----------------------------------------------------
    if ($resource === 'inventory') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT * FROM inventory_items ORDER BY id DESC");
            echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $stmt = $pdo->prepare("INSERT INTO inventory_items (name, quantity, unit, min_stock) VALUES (?, ?, ?, ?)");
            $stmt->execute([
                $body['name'] ?? '',
                (int)($body['quantity'] ?? 0),
                $body['unit'] ?? 'กก.',
                (int)($body['min_stock'] ?? 5)
            ]);
            http_response_code(201);
            echo json_encode(['success' => true, 'id' => (int)$pdo->lastInsertId()]);
            exit;
        }
        if ($method === 'PUT' && $id) {
            $stmt = $pdo->prepare("UPDATE inventory_items SET name = ?, quantity = ?, unit = ?, min_stock = ? WHERE id = ?");
            $stmt->execute([
                $body['name'] ?? '',
                (int)($body['quantity'] ?? 0),
                $body['unit'] ?? 'กก.',
                (int)($body['min_stock'] ?? 5),
                (int)$id
            ]);
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM inventory_items WHERE id = ?");
            $stmt->execute([(int)$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 6. REQUISITIONS
    // ----------------------------------------------------
    if ($resource === 'requisitions') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT * FROM requisition_logs ORDER BY id DESC");
            echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $pdo->beginTransaction();
            $stmt = $pdo->prepare("INSERT INTO requisition_logs (item_id, item_name, quantity, unit, staff_name, action_time, remarks) VALUES (?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([
                (int)($body['itemId'] ?? 0),
                $body['itemName'] ?? '',
                (int)($body['quantity'] ?? 0),
                $body['unit'] ?? 'กก.',
                $body['staffName'] ?? '',
                $body['time'] ?? date('H:i'),
                $body['remarks'] ?? null
            ]);

            $deduct = $pdo->prepare("UPDATE inventory_items SET quantity = quantity - ? WHERE id = ?");
            $deduct->execute([(int)($body['quantity'] ?? 0), (int)($body['itemId'] ?? 0)]);

            $pdo->commit();
            http_response_code(201);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 6.1 STOCK IN (RECEIVING INVENTORY)
    // ----------------------------------------------------
    if ($resource === 'stock-in' || $resource === 'stock_in') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT * FROM stock_in_logs ORDER BY id DESC");
            echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $itemId = (int)($body['itemId'] ?? 0);
            $itemName = trim($body['itemName'] ?? '');
            $quantity = (float)($body['quantity'] ?? 0);
            $unit = trim($body['unit'] ?? 'กก.');
            if (empty($unit)) $unit = 'กก.';
            $cost = (float)($body['cost'] ?? 0);
            $supplier = trim($body['supplier'] ?? '');
            $staffName = trim($body['staffName'] ?? 'พนักงาน');
            $time = $body['time'] ?? date('H:i');
            $remarks = $body['remarks'] ?? null;
            $recordExpense = !empty($body['recordExpense']);

            $pdo->beginTransaction();

            if ($itemId <= 0 && !empty($itemName)) {
                $check = $pdo->prepare("SELECT id, unit FROM inventory_items WHERE name = ?");
                $check->execute([$itemName]);
                $existing = $check->fetch();
                if ($existing) {
                    $itemId = (int)$existing['id'];
                    if (empty($body['unit'])) {
                        $unit = $existing['unit'];
                    }
                } else {
                    $ins = $pdo->prepare("INSERT INTO inventory_items (name, quantity, unit, min_stock) VALUES (?, 0, ?, 5)");
                    $ins->execute([$itemName, $unit]);
                    $itemId = (int)$pdo->lastInsertId();
                }
            }

            $stmt = $pdo->prepare("INSERT INTO stock_in_logs (item_id, item_name, quantity, unit, cost, supplier, staff_name, action_time, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
            $stmt->execute([
                $itemId,
                $itemName,
                $quantity,
                $unit,
                $cost,
                $supplier,
                $staffName,
                $time,
                $remarks
            ]);

            $addStock = $pdo->prepare("UPDATE inventory_items SET quantity = quantity + ? WHERE id = ?");
            $addStock->execute([$quantity, $itemId]);

            if ($recordExpense && $cost > 0) {
                $expId = 'EXP-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT);
                $expDesc = "รับเข้าวัตถุดิบ: " . $itemName . " " . $quantity . " " . $unit;
                if (!empty($supplier)) {
                    $expDesc .= " (" . $supplier . ")";
                }
                $expStmt = $pdo->prepare("INSERT INTO expenses (id, date, category, description, amount, staff_name) VALUES (?, ?, ?, ?, ?, ?)");
                $expStmt->execute([
                    $expId,
                    date('Y-m-d'),
                    'วัตถุดิบอาหาร',
                    $expDesc,
                    $cost,
                    $staffName
                ]);
            }

            $pdo->commit();
            http_response_code(201);
            echo json_encode(['success' => true, 'itemId' => $itemId]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 7. CLOSED TABLES
    // ----------------------------------------------------
    if ($resource === 'closed-tables') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT table_number FROM closed_tables");
            $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
            echo json_encode(array_map('intval', $tables));
            exit;
        }
        if ($method === 'POST') {
            $tableNum = (int)($body['tableNum'] ?? 0);
            $stmt = $pdo->prepare("INSERT IGNORE INTO closed_tables (table_number) VALUES (?)");
            $stmt->execute([$tableNum]);
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM closed_tables WHERE table_number = ?");
            $stmt->execute([(int)$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 7.1 BILLED TABLES
    // ----------------------------------------------------
    if ($resource === 'billed-tables') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT table_number FROM billed_tables");
            $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
            echo json_encode(array_map('intval', $tables));
            exit;
        }
        if ($method === 'POST') {
            $tableNum = (int)($body['tableNum'] ?? 0);
            $stmt = $pdo->prepare("INSERT IGNORE INTO billed_tables (table_number) VALUES (?)");
            $stmt->execute([$tableNum]);
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM billed_tables WHERE table_number = ?");
            $stmt->execute([(int)$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 7.2 TABLE STAFF ASSIGNMENTS
    // ----------------------------------------------------
    if ($resource === 'table-staff') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT table_number, staff_name FROM table_staff");
            $rows = $stmt->fetchAll();
            $map = [];
            foreach ($rows as $r) {
                $map[(int)$r['table_number']] = $r['staff_name'];
            }
            echo json_encode($map, JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $tbl = (int)($body['table_number'] ?? ($body['tableNum'] ?? 0));
            $stf = trim($body['staff_name'] ?? ($body['staffName'] ?? ''));
            if ($tbl > 0 && !empty($stf)) {
                $stmt = $pdo->prepare("
                    INSERT INTO table_staff (table_number, staff_name) 
                    VALUES (?, ?) 
                    ON DUPLICATE KEY UPDATE staff_name = VALUES(staff_name)
                ");
                $stmt->execute([$tbl, $stf]);
            }
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM table_staff WHERE table_number = ?");
            $stmt->execute([(int)$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 8. EXPENSES
    // ----------------------------------------------------
    if ($resource === 'expenses') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT id, DATE_FORMAT(date, '%Y-%m-%d') AS date, category, description AS `desc`, amount, staff_name AS staffName FROM expenses ORDER BY id DESC");
            echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
            exit;
        }
        if ($method === 'POST') {
            $stmt = $pdo->prepare("INSERT INTO expenses (id, date, category, description, amount, staff_name) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([
                $body['id'] ?? ('EXP-' . str_pad(rand(1, 9999), 4, '0', STR_PAD_LEFT)),
                $body['date'] ?? date('Y-m-d'),
                $body['category'] ?? '',
                $body['desc'] ?? '',
                (int)($body['amount'] ?? 0),
                $body['staffName'] ?? ''
            ]);
            http_response_code(201);
            echo json_encode(['success' => true, 'id' => $body['id'] ?? '']);
            exit;
        }
        if ($method === 'PUT' && $id) {
            $stmt = $pdo->prepare("UPDATE expenses SET category = ?, description = ?, amount = ?, staff_name = ? WHERE id = ?");
            $stmt->execute([
                $body['category'] ?? '',
                $body['desc'] ?? '',
                (int)($body['amount'] ?? 0),
                $body['staffName'] ?? '',
                $id
            ]);
            echo json_encode(['success' => true]);
            exit;
        }
        if ($method === 'DELETE' && $id) {
            $stmt = $pdo->prepare("DELETE FROM expenses WHERE id = ?");
            $stmt->execute([$id]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // ----------------------------------------------------
    // 10. STORE OWNER
    // ----------------------------------------------------
    if ($resource === 'owner') {
        if ($method === 'GET') {
            $stmt = $pdo->query("SELECT * FROM store_owner ORDER BY id ASC LIMIT 1");
            $owner = $stmt->fetch();
            if (!$owner) {
                $owner = [
                    'id' => 1,
                    'name' => 'คุณราชา เจ้าของร้าน',
                    'username' => 'owner',
                    'phone' => '089-999-9999',
                    'role' => 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
                    'passcode' => '1234'
                ];
            }
            echo json_encode($owner, JSON_UNESCAPED_UNICODE);
            exit;
        }

        if ($method === 'PUT') {
            $stmt = $pdo->prepare("
                UPDATE store_owner 
                SET name = ?, username = ?, phone = ?, role = ?, passcode = ? 
                WHERE id = 1
            ");
            $stmt->execute([
                $body['name'] ?? 'คุณราชา เจ้าของร้าน',
                $body['username'] ?? 'owner',
                $body['phone'] ?? '089-999-9999',
                $body['role'] ?? 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
                $body['passcode'] ?? '1234'
            ]);
            echo json_encode(['success' => true]);
            exit;
        }
    }

    // Route not found
    http_response_code(404);
    echo json_encode(['error' => "Route not found: {$method} /api/{$route}"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}
