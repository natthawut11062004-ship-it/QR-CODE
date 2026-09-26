const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Serve static assets from project root
app.use(express.static(path.join(__dirname)));

// MySQL Database Credentials (default localhost settings)
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'raja_krapao'
};

let pool;

// Check and establish MySQL connection
async function initDB() {
    try {
        pool = mysql.createPool(dbConfig);
        // Test connection
        const connection = await pool.getConnection();
        console.log('Successfully connected to MySQL database: raja_krapao');
        
        // Auto-create staff table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`staff\` (
              \`id\` INT AUTO_INCREMENT NOT NULL,
              \`name\` VARCHAR(255) NOT NULL,
              \`username\` VARCHAR(100) NOT NULL,
              \`position\` VARCHAR(100) NOT NULL,
              \`phone\` VARCHAR(50) NOT NULL,
              \`status\` VARCHAR(50) NOT NULL DEFAULT 'active',
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created staff table successfully.');
        
        // Auto-create inventory_items table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`inventory_items\` (
              \`id\` INT AUTO_INCREMENT NOT NULL,
              \`name\` VARCHAR(255) NOT NULL,
              \`quantity\` INT NOT NULL DEFAULT 0,
              \`unit\` VARCHAR(50) NOT NULL,
              \`min_stock\` INT NOT NULL DEFAULT 5,
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created inventory_items table successfully.');
        
        // Auto-create requisition_logs table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`requisition_logs\` (
              \`id\` INT AUTO_INCREMENT NOT NULL,
              \`item_id\` INT NOT NULL,
              \`item_name\` VARCHAR(255) NOT NULL,
              \`quantity\` INT NOT NULL,
              \`unit\` VARCHAR(50) NOT NULL DEFAULT 'กก.',
              \`staff_name\` VARCHAR(255) NOT NULL,
              \`action_time\` VARCHAR(50) NOT NULL,
              \`remarks\` TEXT,
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created requisition_logs table successfully.');
        
        // Auto-create stock_in_logs table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`stock_in_logs\` (
              \`id\` INT AUTO_INCREMENT NOT NULL,
              \`item_id\` INT NOT NULL,
              \`item_name\` VARCHAR(255) NOT NULL,
              \`quantity\` INT NOT NULL,
              \`unit\` VARCHAR(50) NOT NULL DEFAULT 'กก.',
              \`cost\` DECIMAL(10, 2) DEFAULT 0,
              \`supplier\` VARCHAR(255) DEFAULT '',
              \`staff_name\` VARCHAR(255) NOT NULL,
              \`action_time\` VARCHAR(50) NOT NULL,
              \`remarks\` TEXT,
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created stock_in_logs table successfully.');
        
        // Alter table fallback to add unit column if it was created previously without it
        try {
            await connection.query('ALTER TABLE `requisition_logs` ADD COLUMN `unit` VARCHAR(50) NOT NULL DEFAULT \'กก.\'');
            console.log('Added unit column to requisition_logs table successfully.');
        } catch (e) {
            // Column already exists, safe to ignore
        }

        // Alter table fallback to add payment_method column to orders if it was created previously without it
        try {
            await connection.query('ALTER TABLE `orders` ADD COLUMN `payment_method` VARCHAR(50) DEFAULT NULL');
            console.log('Added payment_method column to orders table successfully.');
        } catch (e) {
            // Column already exists, safe to ignore
        }

        // Auto-create closed_tables table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`closed_tables\` (
              \`table_number\` INT NOT NULL,
              PRIMARY KEY (\`table_number\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created closed_tables table successfully.');

        // Auto-create billed_tables table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`billed_tables\` (
              \`table_number\` INT NOT NULL,
              PRIMARY KEY (\`table_number\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created billed_tables table successfully.');

        // Auto-create expenses table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`expenses\` (
              \`id\` VARCHAR(50) NOT NULL,
              \`date\` DATE NOT NULL,
              \`category\` VARCHAR(100) NOT NULL,
              \`description\` TEXT NOT NULL,
              \`amount\` INT NOT NULL,
              \`staff_name\` VARCHAR(255) NOT NULL,
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created expenses table successfully.');

        // Seed expenses if empty
        const [expenseCount] = await connection.query('SELECT COUNT(*) AS cnt FROM expenses');
        if (expenseCount[0].cnt === 0) {
            await connection.query(`
                INSERT INTO \`expenses\` (\`id\`, \`date\`, \`category\`, \`description\`, \`amount\`, \`staff_name\`) VALUES
                ('EXP-001', '2026-08-29', 'วัตถุดิบอาหาร', 'ซื้อไข่เป็ดและใบกะเพราป่าล็อตเช้า', 1500, 'นางสาวศิริพร บริการดี'),
                ('EXP-002', '2026-08-30', 'สาธารณูปโภค', 'จ่ายค่าไฟฟ้าร้านรอบเดือน ก.ค.', 4800, 'นายสมเกียรติ ยอดฝีมือ')
            `);
            console.log('Seed default expenses successfully.');
        }

        // Auto-create store_owner table if not exists
        await connection.query(`
            CREATE TABLE IF NOT EXISTS \`store_owner\` (
              \`id\` INT AUTO_INCREMENT NOT NULL,
              \`name\` VARCHAR(255) NOT NULL,
              \`username\` VARCHAR(100) NOT NULL,
              \`phone\` VARCHAR(50) NOT NULL,
              \`role\` VARCHAR(100) NOT NULL DEFAULT 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
              \`passcode\` VARCHAR(50) NOT NULL DEFAULT '1234',
              PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `);
        console.log('Verified/Created store_owner table successfully.');

        // Seed store_owner if empty
        const [ownerCount] = await connection.query('SELECT COUNT(*) AS cnt FROM store_owner');
        if (ownerCount[0].cnt === 0) {
            await connection.query(`
                INSERT INTO \`store_owner\` (\`id\`, \`name\`, \`username\`, \`phone\`, \`role\`, \`passcode\`) VALUES
                (1, 'คุณราชา เจ้าของร้าน', 'owner', '089-999-9999', 'เจ้าของร้าน (ผู้บริหารสูงสุด)', '1234')
            `);
            console.log('Seed default store owner successfully.');
        }
        
        connection.release();
    } catch (err) {
        console.error('MySQL connection failed. Will run in LocalStorage mode if requested.');
        console.error(err.message);
    }
}

initDB();

// Middleware to check if database is online
function checkDB(req, res, next) {
    if (!pool) {
        return res.status(503).json({ error: 'Database connection offline' });
    }
    next();
}

// --- API Endpoints ---

// 0. Database Status / Health Check
app.get(['/api/db-status', '/api/health'], checkDB, async (req, res) => {
    try {
        const [tables] = await pool.query('SHOW TABLES');
        const tableList = tables.map(t => Object.values(t)[0]);
        res.json({
            status: 'connected',
            database: dbConfig.database,
            host: dbConfig.host,
            user: dbConfig.user,
            tables: tableList,
            table_count: tableList.length,
            message: 'เชื่อมต่อฐานข้อมูล MySQL: raja_krapao เรียบร้อยแล้ว 100%'
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 0.1 Server info & network IP
app.get('/api/server-info', (req, res) => {
    const ips = getLocalIPs();
    const primaryIp = ips[0] || '127.0.0.1';
    res.json({
        ip: primaryIp,
        all_ips: ips,
        port: PORT,
        wifi_url: `http://${primaryIp}:${PORT}/`
    });
});

// 1. Get all menu items
app.get('/api/menu', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT m.*, GROUP_CONCAT(t.name, ':', t.price) AS toppings_concat
            FROM menu_items m
            LEFT JOIN menu_toppings t ON m.id = t.menu_item_id
            GROUP BY m.id
            ORDER BY 
                CASE WHEN m.category = 'drinks' THEN 1 ELSE 0 END ASC,
                CASE WHEN m.id = 'drink-05' THEN 1 WHEN m.id = 'drink-04' THEN 2 ELSE 3 END ASC,
                CAST(SUBSTRING_INDEX(m.id, '-', -1) AS UNSIGNED) ASC,
                m.id ASC
        `);

        // Format to match default mock objects in app.js
        const menu = rows.map(row => {
            const toppings = row.toppings_concat 
                ? row.toppings_concat.split(',').map(str => {
                    const parts = str.split(':');
                    return { name: parts[0], price: parseInt(parts[1]) };
                })
                : [];
            return {
                id: row.id,
                name: row.name,
                price: row.price,
                category: row.category,
                image: row.image,
                rating: parseFloat(row.rating),
                badge: row.badge,
                desc: row.description,
                isAvailable: row.is_available === 1 || row.is_available === true,
                hasSpicy: row.has_spicy !== undefined ? (row.has_spicy === 1 || row.has_spicy === true) : true,
                toppings
            };
        });

        res.json(menu);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. Add menu item
app.post('/api/menu', checkDB, async (req, res) => {
    const { id, name, price, category, image, rating, badge, desc, isAvailable, hasSpicy, toppings } = req.body;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        await connection.query(
            `INSERT INTO menu_items (id, name, price, category, image, rating, badge, description, is_available, has_spicy) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [id, name, price, category, image, rating, badge, desc, isAvailable !== false ? 1 : 0, hasSpicy !== false ? 1 : 0]
        );

        if (toppings && toppings.length > 0) {
            const values = toppings.map(t => [id, t.name, t.price]);
            await connection.query(
                `INSERT INTO menu_toppings (menu_item_id, name, price) VALUES ?`,
                [values]
            );
        }

        await connection.commit();
        res.status(201).json({ success: true, id });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 3. Update menu item
app.put('/api/menu/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    const { name, price, category, image, rating, badge, desc, isAvailable, hasSpicy, toppings } = req.body;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        await connection.query(
            `UPDATE menu_items SET name = ?, price = ?, category = ?, image = ?, rating = ?, badge = ?, description = ?, is_available = ?, has_spicy = ? 
             WHERE id = ?`,
            [name, price, category, image, rating, badge, desc, isAvailable !== false ? 1 : 0, hasSpicy !== false ? 1 : 0, id]
        );

        // Delete existing toppings
        await connection.query(`DELETE FROM menu_toppings WHERE menu_item_id = ?`, [id]);

        // Insert new toppings list
        if (toppings && toppings.length > 0) {
            const values = toppings.map(t => [id, t.name, t.price]);
            await connection.query(
                `INSERT INTO menu_toppings (menu_item_id, name, price) VALUES ?`,
                [values]
            );
        }

        await connection.commit();
        res.json({ success: true });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 4. Delete menu item
app.delete('/api/menu/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    try {
        // Cascade delete on menu_toppings is handled by FOREIGN KEY reference cascade
        await pool.query(`DELETE FROM menu_items WHERE id = ?`, [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4.1 Get all toppings
app.get('/api/toppings', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT t.id, t.name, t.price, GROUP_CONCAT(mt.menu_item_id SEPARATOR ',') as menu_ids
            FROM toppings t
            LEFT JOIN menu_toppings mt ON t.name = mt.name
            GROUP BY t.id, t.name, t.price
            ORDER BY t.id ASC
        `);
        const result = rows.map(r => ({
            id: r.id,
            name: r.name,
            price: r.price,
            menuIds: r.menu_ids ? r.menu_ids.split(',') : []
        }));
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 4.2 Save / update topping across menus
app.post('/api/toppings', checkDB, async (req, res) => {
    const { origName, name, price, menuIds } = req.body;
    const trimName = (name || '').trim();
    const trimOrigName = (origName || '').trim();

    if (!trimName) {
        return res.status(400).json({ error: 'Topping name is required' });
    }

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        // Sync master toppings table
        if (trimOrigName && trimOrigName !== trimName) {
            await connection.query(`UPDATE toppings SET name = ?, price = ? WHERE name = ?`, [trimName, parseInt(price || 0), trimOrigName]);
        } else {
            await connection.query(`
                INSERT INTO toppings (name, price) VALUES (?, ?) 
                ON DUPLICATE KEY UPDATE price = VALUES(price)
            `, [trimName, parseInt(price || 0)]);
        }

        // Sync menu_toppings table
        const targetToDelete = trimOrigName || trimName;
        await connection.query(`DELETE FROM menu_toppings WHERE name = ?`, [targetToDelete]);

        if (trimOrigName && trimOrigName !== trimName) {
            await connection.query(`DELETE FROM menu_toppings WHERE name = ?`, [trimName]);
        }

        if (Array.isArray(menuIds) && menuIds.length > 0) {
            const values = menuIds
                .map(mId => (mId || '').trim())
                .filter(mId => mId.length > 0)
                .map(mId => [mId, trimName, parseInt(price || 0)]);
            if (values.length > 0) {
                await connection.query(
                    `INSERT INTO menu_toppings (menu_item_id, name, price) VALUES ?`,
                    [values]
                );
            }
        }

        await connection.commit();
        res.json({ success: true });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 4.3 Delete topping from all menus
app.delete('/api/toppings', checkDB, async (req, res) => {
    const name = (req.body?.name || req.query?.name || '').trim();
    if (!name) {
        return res.status(400).json({ error: 'Topping name is required' });
    }
    try {
        await pool.query(`DELETE FROM toppings WHERE name = ?`, [name]);
        await pool.query(`DELETE FROM menu_toppings WHERE name = ?`, [name]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 5. Get all orders
app.get('/api/orders', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query(`
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
        `);

        // Format to match orders payload expected by app.js admin dashboard
        const orders = rows.map(row => {
            return {
                id: row.id,
                table: row.table_number,
                details: row.order_details_concat || '',
                total: row.total_price,
                time: row.order_time,
                date: row.order_date,
                status: row.status,
                payment_method: row.payment_method,
                staff_name: row.staff_name || null
            };
        });

        res.json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 6. Create order
app.post('/api/orders', checkDB, async (req, res) => {
    const { id, table, total, time, status, cartItems, staff_name, staffName } = req.body;
    const finalStatus = status || 'pending';
    let finalStaff = staff_name || staffName || null;
    const orderDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        if (!finalStaff && table) {
            const [stfRows] = await connection.query(`SELECT staff_name FROM table_staff WHERE table_number = ?`, [table]);
            if (stfRows.length > 0 && stfRows[0].staff_name) {
                finalStaff = stfRows[0].staff_name;
            }
        }

        // Check if order already exists (combining orders)
        const [existing] = await connection.query(`SELECT id FROM orders WHERE id = ?`, [id]);
        if (existing.length > 0) {
            await connection.query(
                `UPDATE orders SET total_price = ?, status = ?, staff_name = COALESCE(?, staff_name) WHERE id = ?`,
                [total, finalStatus, finalStaff, id]
            );
        } else {
            await connection.query(
                `INSERT INTO orders (id, table_number, total_price, order_time, order_date, status, staff_name) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [id, table, total, time, orderDate, finalStatus, finalStaff]
            );
        }

        if (cartItems && cartItems.length > 0) {
            for (const item of cartItems) {
                const toppingsStr = item.toppings && item.toppings.length > 0 
                    ? `(+${item.toppings.map(t => `${t.name}${t.quantity > 1 ? ` x${t.quantity}` : ''}`).join(', ')})` 
                    : '';
                await connection.query(
                    `INSERT INTO order_items (order_id, menu_item_id, name, quantity, price, toppings, remarks) 
                     VALUES (?, ?, ?, ?, ?, ?, ?)`,
                    [id, item.itemId, item.name, item.quantity, item.price, toppingsStr, item.remarks || null]
                );
            }
        }

        await connection.commit();
        res.status(201).json({ success: true, id });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 7. Update order status / table number / staff_name
app.put('/api/orders/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    const { status, payment_method, table, staff_name, staffName } = req.body;
    const finalStaff = staff_name || staffName;
    try {
        if (table !== undefined) {
            await pool.query(`UPDATE orders SET table_number = ? WHERE id = ?`, [table, id]);
        }
        if (finalStaff !== undefined) {
            await pool.query(`UPDATE orders SET staff_name = ? WHERE id = ?`, [finalStaff, id]);
        }
        if (status !== undefined) {
            if (payment_method) {
                await pool.query(`UPDATE orders SET status = ?, payment_method = ? WHERE id = ?`, [status, payment_method, id]);
            } else {
                await pool.query(`UPDATE orders SET status = ? WHERE id = ?`, [status, id]);
            }
        }
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 8. Get sales report (dashboard & date range)
app.get('/api/sales/report', checkDB, async (req, res) => {
    try {
        const { startDate, endDate } = req.query;
        let whereOrders = ["status = 'completed'"];
        let paramsOrders = [];

        if (startDate) {
            whereOrders.push("order_date >= ?");
            paramsOrders.push(startDate);
        }
        if (endDate) {
            whereOrders.push("order_date <= ?");
            paramsOrders.push(endDate);
        }

        const whereOrdersSql = whereOrders.join(' AND ');

        const [dailyRows] = await pool.query(`
            SELECT order_date AS date, 
                   SUM(total_price) AS daily_total,
                   SUM(CASE WHEN payment_method = 'cash' THEN total_price ELSE 0 END) AS cash_total,
                   SUM(CASE WHEN payment_method = 'scan' THEN total_price ELSE 0 END) AS scan_total,
                   COUNT(id) AS total_orders
            FROM orders
            WHERE ${whereOrdersSql}
            GROUP BY order_date
            ORDER BY order_date DESC
        `, paramsOrders);

        let whereExp = ["1=1"];
        let paramsExp = [];
        if (startDate) {
            whereExp.push("date >= ?");
            paramsExp.push(startDate);
        }
        if (endDate) {
            whereExp.push("date <= ?");
            paramsExp.push(endDate);
        }
        const whereExpSql = whereExp.join(' AND ');

        const [expRows] = await pool.query(`
            SELECT DATE_FORMAT(date, '%Y-%m-%d') AS date,
                   SUM(amount) AS daily_expense
            FROM expenses
            WHERE ${whereExpSql}
            GROUP BY date
            ORDER BY date DESC
        `, paramsExp);

        const expensesByDate = {};
        let totalExpenses = 0;
        expRows.forEach(er => {
            const expVal = Number(er.daily_expense || 0);
            expensesByDate[er.date] = expVal;
            totalExpenses += expVal;
        });

        let topItemsSql = `
            SELECT oi.name, 
                   SUM(oi.quantity) AS total_qty, 
                   SUM(oi.price * oi.quantity) AS total_amount
            FROM order_items oi
            JOIN orders o ON oi.order_id = o.id
            WHERE o.status = 'completed'
        `;
        let topParams = [];
        if (startDate) {
            topItemsSql += " AND o.order_date >= ?";
            topParams.push(startDate);
        }
        if (endDate) {
            topItemsSql += " AND o.order_date <= ?";
            topParams.push(endDate);
        }
        topItemsSql += " GROUP BY oi.name ORDER BY total_qty DESC LIMIT 10";

        const [topRows] = await pool.query(topItemsSql, topParams);
        const topItems = topRows.map(r => ({
            name: r.name,
            total_qty: Number(r.total_qty || 0),
            total_amount: Number(r.total_amount || 0)
        }));

        const allDates = new Set();
        dailyRows.forEach(dr => {
            const dStr = dr.date instanceof Date ? dr.date.toISOString().split('T')[0] : String(dr.date);
            allDates.add(dStr);
        });
        expRows.forEach(er => allDates.add(er.date));

        const sortedDates = Array.from(allDates).sort((a, b) => b.localeCompare(a));
        const dailyMap = {};
        dailyRows.forEach(dr => {
            const dStr = dr.date instanceof Date ? dr.date.toISOString().split('T')[0] : String(dr.date);
            dailyMap[dStr] = dr;
        });

        let totalRevenue = 0;
        let totalCash = 0;
        let totalScan = 0;
        let totalOrders = 0;

        const dailyResult = sortedDates.map(d => {
            const dSales = dailyMap[d];
            const dailyTotal = dSales ? Number(dSales.daily_total || 0) : 0;
            const cashTotal = dSales ? Number(dSales.cash_total || 0) : 0;
            const scanTotal = dSales ? Number(dSales.scan_total || 0) : 0;
            const ordersCount = dSales ? Number(dSales.total_orders || 0) : 0;
            const dailyExp = expensesByDate[d] || 0;
            const dailyProfit = dailyTotal - dailyExp;

            totalRevenue += dailyTotal;
            totalCash += cashTotal;
            totalScan += scanTotal;
            totalOrders += ordersCount;

            return {
                date: d,
                daily_total: dailyTotal,
                cash_total: cashTotal,
                scan_total: scanTotal,
                total_orders: ordersCount,
                daily_expense: dailyExp,
                daily_profit: dailyProfit
            };
        });

        const [expCatRows] = await pool.query(`
            SELECT category, SUM(amount) AS total_amount, COUNT(id) AS count
            FROM expenses
            WHERE ${whereExpSql}
            GROUP BY category
            ORDER BY total_amount DESC
        `, paramsExp);
        const expenseCategories = expCatRows.map(r => ({
            category: r.category,
            total_amount: Number(r.total_amount || 0),
            count: Number(r.count || 0)
        }));

        const netProfit = totalRevenue - totalExpenses;
        const avgTicket = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

        res.json({
            success: true,
            startDate: startDate || null,
            endDate: endDate || null,
            summary: {
                total_revenue: totalRevenue,
                cash_total: totalCash,
                scan_total: totalScan,
                total_orders: totalOrders,
                total_expenses: totalExpenses,
                net_profit: netProfit,
                avg_ticket: avgTicket
            },
            daily: dailyResult,
            top_items: topItems,
            expense_categories: expenseCategories
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 8. Get daily sales report
app.get('/api/sales/daily', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT order_date AS date, 
                   SUM(total_price) AS daily_total,
                   SUM(CASE WHEN payment_method = 'cash' THEN total_price ELSE 0 END) AS cash_total,
                   SUM(CASE WHEN payment_method = 'scan' THEN total_price ELSE 0 END) AS scan_total,
                   COUNT(id) AS total_orders
            FROM orders
            WHERE status = 'completed'
            GROUP BY order_date
            ORDER BY order_date DESC
        `);
        const result = rows.map(r => ({
            date: r.date,
            daily_total: Number(r.daily_total || 0),
            cash_total: Number(r.cash_total || 0),
            scan_total: Number(r.scan_total || 0),
            total_orders: Number(r.total_orders || 0)
        }));
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 9. Update menu item availability status
app.put('/api/menu/:id/availability', checkDB, async (req, res) => {
    const { id } = req.params;
    const { isAvailable } = req.body;
    try {
        await pool.query(`UPDATE menu_items SET is_available = ? WHERE id = ?`, [isAvailable ? 1 : 0, id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 10. Get all staff members
app.get('/api/staff', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM staff ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 11. Add a staff member
app.post('/api/staff', checkDB, async (req, res) => {
    const { name, username, position, phone, status } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO staff (name, username, position, phone, status) VALUES (?, ?, ?, ?, ?)',
            [name, username, position, phone, status || 'active']
        );
        res.status(201).json({ success: true, id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 12. Update staff member
app.put('/api/staff/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    const { name, username, position, phone, status } = req.body;
    try {
        await pool.query(
            'UPDATE staff SET name = ?, username = ?, position = ?, phone = ?, status = ? WHERE id = ?',
            [name, username, position, phone, status, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 13. Delete staff member
app.delete('/api/staff/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM staff WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 14. Get all inventory items
app.get('/api/inventory', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventory_items ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 15. Add inventory item
app.post('/api/inventory', checkDB, async (req, res) => {
    const { name, quantity, unit, min_stock } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO inventory_items (name, quantity, unit, min_stock) VALUES (?, ?, ?, ?)',
            [name, quantity || 0, unit, min_stock || 5]
        );
        res.status(201).json({ success: true, id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 16. Update inventory item
app.put('/api/inventory/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    const { name, quantity, unit, min_stock } = req.body;
    try {
        await pool.query(
            'UPDATE inventory_items SET name = ?, quantity = ?, unit = ?, min_stock = ? WHERE id = ?',
            [name, quantity, unit, min_stock, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 17. Delete inventory item
app.delete('/api/inventory/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM inventory_items WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 18. Get all requisition logs
app.get('/api/requisitions', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM requisition_logs ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 19. Record a requisition (deducts stock inside transaction)
app.post('/api/requisitions', checkDB, async (req, res) => {
    const { itemId, itemName, quantity, unit, staffName, remarks, time } = req.body;
    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();
        
        // Insert log
        await connection.query(
            'INSERT INTO requisition_logs (item_id, item_name, quantity, unit, staff_name, action_time, remarks) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [itemId, itemName, quantity, unit || 'กก.', staffName, time, remarks || null]
        );
        
        // Deduct stock
        await connection.query(
            'UPDATE inventory_items SET quantity = quantity - ? WHERE id = ?',
            [quantity, itemId]
        );
        
        await connection.commit();
        res.status(201).json({ success: true });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 19.1 Get all stock-in logs
app.get('/api/stock-in', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM stock_in_logs ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 19.2 Record a stock-in (adds stock inside transaction)
app.post('/api/stock-in', checkDB, async (req, res) => {
    let { itemId, itemName, quantity, unit, cost, supplier, staffName, remarks, time, recordExpense } = req.body;
    itemId = parseInt(itemId) || 0;
    itemName = (itemName || '').trim();
    quantity = parseFloat(quantity) || 0;
    unit = (unit || 'กก.').trim();
    cost = parseFloat(cost) || 0;
    supplier = (supplier || '').trim();
    staffName = (staffName || 'พนักงาน').trim();

    const connection = await pool.getConnection();
    try {
        await connection.beginTransaction();

        if (itemId <= 0 && itemName) {
            const [existing] = await connection.query('SELECT id, unit FROM inventory_items WHERE name = ?', [itemName]);
            if (existing.length > 0) {
                itemId = existing[0].id;
                if (!req.body.unit) unit = existing[0].unit;
            } else {
                const [ins] = await connection.query('INSERT INTO inventory_items (name, quantity, unit, min_stock) VALUES (?, 0, ?, 5)', [itemName, unit]);
                itemId = ins.insertId;
            }
        }
        
        await connection.query(
            'INSERT INTO stock_in_logs (item_id, item_name, quantity, unit, cost, supplier, staff_name, action_time, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [itemId, itemName, quantity, unit, cost, supplier, staffName, time, remarks || null]
        );
        
        await connection.query(
            'UPDATE inventory_items SET quantity = quantity + ? WHERE id = ?',
            [quantity, itemId]
        );

        if (recordExpense && cost > 0) {
            const expId = 'EXP-' + String(Math.floor(Math.random() * 9000) + 1000);
            let expDesc = `รับเข้าวัตถุดิบ: ${itemName} ${quantity} ${unit}`;
            if (supplier) expDesc += ` (${supplier})`;
            const todayStr = new Date().toISOString().split('T')[0];
            await connection.query(
                'INSERT INTO expenses (id, date, category, description, amount, staff_name) VALUES (?, ?, ?, ?, ?, ?)',
                [expId, todayStr, 'วัตถุดิบอาหาร', expDesc, Math.round(cost), staffName]
            );
        }
        
        await connection.commit();
        res.status(201).json({ success: true, itemId });
    } catch (err) {
        await connection.rollback();
        res.status(500).json({ error: err.message });
    } finally {
        connection.release();
    }
});

// 20. Get all closed tables
app.get('/api/closed-tables', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT table_number FROM closed_tables');
        const closedTables = rows.map(r => r.table_number);
        res.json(closedTables);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 21. Close a table
app.post('/api/closed-tables', checkDB, async (req, res) => {
    const { tableNum } = req.body;
    try {
        await pool.query('INSERT IGNORE INTO closed_tables (table_number) VALUES (?)', [tableNum]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22. Open a closed table (Delete from closed list)
app.delete('/api/closed-tables/:tableNum', checkDB, async (req, res) => {
    const { tableNum } = req.params;
    try {
        await pool.query('DELETE FROM closed_tables WHERE table_number = ?', [tableNum]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22.1 Get all billed tables
app.get('/api/billed-tables', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT table_number FROM billed_tables');
        const billedTables = rows.map(r => r.table_number);
        res.json(billedTables);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22.2 Mark a table as billed
app.post('/api/billed-tables', checkDB, async (req, res) => {
    const { tableNum } = req.body;
    try {
        await pool.query('INSERT IGNORE INTO billed_tables (table_number) VALUES (?)', [tableNum]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22.3 Reset a billed table (open for new customer)
app.delete('/api/billed-tables/:tableNum', checkDB, async (req, res) => {
    const { tableNum } = req.params;
    try {
        await pool.query('DELETE FROM billed_tables WHERE table_number = ?', [tableNum]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22.4 Get Table Staff assignments
app.get('/api/table-staff', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT table_number, staff_name FROM table_staff');
        const map = {};
        rows.forEach(r => { map[r.table_number] = r.staff_name; });
        res.json(map);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 22.5 Set Table Staff assignment
app.post('/api/table-staff', checkDB, async (req, res) => {
    const { table_number, tableNum, staff_name, staffName } = req.body;
    const tbl = parseInt(table_number || tableNum, 10);
    const stf = (staff_name || staffName || '').trim();
    if (!tbl || !stf) {
        return res.status(400).json({ error: 'table_number and staff_name are required' });
    }
    try {
        await pool.query(
            `INSERT INTO table_staff (table_number, staff_name) VALUES (?, ?) 
             ON DUPLICATE KEY UPDATE staff_name = VALUES(staff_name)`,
            [tbl, stf]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 23. Get all expenses
app.get('/api/expenses', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT id, DATE_FORMAT(date, "%Y-%m-%d") AS date, category, description AS `desc`, amount, staff_name AS staffName FROM expenses ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 28. Add expense
app.post('/api/expenses', checkDB, async (req, res) => {
    const { id, date, category, desc, amount, staffName } = req.body;
    try {
        await pool.query(
            'INSERT INTO expenses (id, date, category, description, amount, staff_name) VALUES (?, ?, ?, ?, ?, ?)',
            [id, date, category, desc, amount || 0, staffName]
        );
        res.status(201).json({ success: true, id });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 29. Update expense
app.put('/api/expenses/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    const { category, desc, amount, staffName } = req.body;
    try {
        await pool.query(
            'UPDATE expenses SET category = ?, description = ?, amount = ?, staff_name = ? WHERE id = ?',
            [category, desc, amount, staffName, id]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 30. Delete expense
app.delete('/api/expenses/:id', checkDB, async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM expenses WHERE id = ?', [id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 31. Get store owner details
app.get('/api/owner', checkDB, async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM store_owner ORDER BY id ASC LIMIT 1');
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.json({
                id: 1,
                name: 'คุณราชา เจ้าของร้าน',
                username: 'owner',
                phone: '089-999-9999',
                role: 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
                passcode: '1234'
            });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 32. Update store owner details
app.put('/api/owner', checkDB, async (req, res) => {
    const { name, username, phone, role, passcode } = req.body;
    try {
        await pool.query(
            'UPDATE store_owner SET name = ?, username = ?, phone = ?, role = ?, passcode = ? WHERE id = 1',
            [
                name || 'คุณราชา เจ้าของร้าน',
                username || 'owner',
                phone || '089-999-9999',
                role || 'เจ้าของร้าน (ผู้บริหารสูงสุด)',
                passcode || '1234'
            ]
        );
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const os = require('os');

// Helper to find local IP addresses of this host machine
function getLocalIPs() {
    const interfaces = os.networkInterfaces();
    const ips = [];
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                ips.push(iface.address);
            }
        }
    }
    return ips;
}

// Fallback: Default status routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n=========================================================`);
    console.log(`🍛 Raja Kra Pao Web Application is running!`);
    console.log(`Local machine URL: http://localhost:${PORT}`);
    
    const localIPs = getLocalIPs();
    if (localIPs.length > 0) {
        console.log(`\nTo access from other devices (Phones/Tablets) on the same Wi-Fi:`);
        localIPs.forEach(ip => {
            console.log(`  👉 http://${ip}:${PORT}`);
        });
    } else {
        console.log(`\nNo local network IP detected. Ensure your server is connected to Wi-Fi/Ethernet.`);
    }
    console.log(`=========================================================\n`);
});
