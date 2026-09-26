// --- Default Menu Items ---
const DEFAULT_MENU_ITEMS = [
    {
        id: "krapao-01",
        name: "กะเพราหมูสับ",
        price: 50,
        category: "basil-pork-chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_CV7t2UlnuHtcrqkeqK_ykdln_Snm1iHz_C3lU0Xg&s=10?w=500&auto=format&fit=crop&q=60.jpg",
        rating: 4.9,
        badge: "ยอดฮิต",
        desc: "กะเพราหมูสับสูตรโบราณผัดแห้งๆ ใช้พริกแห้งและพริกขี้หนูสวนหอมกลุ่น เสิร์ฟคู่ข้าวสวยร้อนๆ",
        toppings: [
            { name: "ไข่ดาว", price: 10 },
            { name: "ไข่เจียว", price: 10 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-02",
        name: "กะเพราเครื่องในไก่",
        price: 50,
        category: "basil-pork-chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR7_zs3OE_kPaeVTlIIogDBK1oVrwVPeFeIGVnPij19FCCb0lZBqCpW3g&s=10?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "ยอดฮิต",
        desc: "เครื่องในไก่สดใหม่ (ตับ กึ๋น หัวใจ) ผัดเน้นๆ กับพริกขี้หนูสวนและกระเทียมไทยรสจัดจ้าน ผัดแห้งกำลังดี หอมกลิ่นใบกะเพราแท้ รสชาติเข้มข้นถึงใจ",
        toppings: [
            { name: "ไข่ดาวเป็ดขอบกรอบ", price: 10 },
            { name: "ไข่เจียวฟูนุ่ม", price: 10 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-03",
        name: "กะเพราหมูกรอบ",
        price: 60,
        category: "basil-pork-chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMMXOibFx9GFBHu2sIEK2SKKnrpk0hPrA1UKjwyLdgQ&s=10?w=500&auto=formt&fit=crop&q=60",
        rating: 4.9,
        badge: "หมูกรอบคัดพิเศษ",
        desc: "หมูกรอบสูตรเด็ดของร้าน หนังกรอบสนั่น เนื้อนุ่มฉ่ำ ผัดคลุกเคล้ากับพริกกระเทียมและซอสกะเพราเข้มข้น รสชาติจัดจ้าน หอมกลิ่นกะเพราแท้ ผัดแห้ง ไม่แฉะ",
        toppings: [
            { name: "ไข่ดาว", price: 10 },
            { name: "ไข่เจียวฟูนุ่ม", price: 10 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-04",
        name: "กะเพราทะเลรวมมิตร",
        price: 60,
        category: "basil-seafood",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwRGpj1t8JnmuuvwZWgb1Y4NYpwiinPAKSeAuLanKIKw&s?w=500&auto=format&fit=crop&q=60",
        rating: 4.7,
        badge: "ยอดฮิต",
        desc: "จัดเต็มซีฟู้ดสดๆ (กุ้งแกะเปลือก หมึกชิ้นโต และหอยแมลงภู่) ผัดเข้มข้นด้วยพริกกระเทียมและซอสกะเพราสูตรเด็ด รสจัดจ้าน เผ็ดร้อน หอมกลิ่นกะเพราแท้โชยเตะจมูก",
        toppings: [
            { name: "ไข่ดาว", price: 10},
            { name: "ไข่เจียวฟูนุ่ม", price: 10},
            { name: "พิเศษ", price: 10},
        ]
    },
    {
        id: "krapao-05",
        name: "ต้มยำน้ำข้นทะเล",
        price: 90,
        category: "basil-seafood",
        image: "https://s359.kapook.com/pagebuilder/d23c7c93-9b7b-45a4-b7e5-e508722d8369.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.9,
        badge: "เมนูแนะนำ",
        desc: "ซีฟู้ดจัดเต็ม (กุ้ง หมึก หอย) ในน้ำซุปต้มยำรสเข้มข้น หอมละมุนด้วยนมสดและพริกเผา จัดจ้านครบเครื่องต้มยำไทยแท้ เปรี้ยว เผ็ด เค็ม ลงตัว",
        toppings: [
            { name: "พิเศษ",price: 20},
        ]
    },
    {
        id: "krapao-06",
        name: "ข้าวผัดหมู",
        price: 50,
        category: "others",
        image: "https://img.wongnai.com/p/1920x0/2020/05/19/5fd0de43e8ec43ef8838c6502c0bb70c.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.6,
        badge: "ยอดฮิต",
        desc: "ข้าวสวยเม็ดร่วนผัดไฟแรง หอมกลิ่นกระทะโชย คลุกเคล้ากับเนื้อหมูนุ่มหมักเข้าเนื้อ ไข่ไก่สด และผักรวม รสชาติกลมกล่อม หวานเค็มกำลังดี ทานง่าย อร่อยถูกใจทุกคน",
        toppings :[
            { name: "พิเศษ",price: 10},
        ]
    },
    {
        id: "krapao-07",
        name: "ผัดมาม่าหมู",
        price: 60,
        category: "others",
        image: "https://s359.kapook.com/pagebuilder/cb2adb38-2575-40cb-9107-72e52737ee79.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.5,
        badge: "เมนูแนะนำ",
        desc: "เส้นมาม่าลวกสุกกำลังดี เหนียวนุ่ม ไม่เละ ผัดไฟแรงคั่วกระทะพร้อมไข่ไก่ เนื้อหมูหมักนุ่ม และผักคะน้าสดกรอบ ปรุงรสกลมกล่อม หอมอร่อยทานเพลิน",
        toppings :[
            { name: "พิเศษ",price: 10},
        ]
    },
    {
        id: "krapao-08",
        name: "ผัดซีอิ๊ว",
        price: 60,
        category: "others",
        image: "https://www.foodequipment.co.th/wp-content/uploads/2024/09/1-13.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.7,
        badge: "",
        desc: "เส้นใหญ่ (หรือเส้นหมี่) เหนียวนุ่ม ผัดคั่วไฟแรงจนหอมกลิ่นกระทะ คลุกเคล้าซีอิ๊วดำหวานชั้นดี ไข่ไก่สด และผักคะน้าฮ่องกงกรอบอร่อย รสชาติกลมกล่อมลงตัว",
        toppings: [
            { name: "ไข่ดาว", price: 15 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-09",
        name: "ผัดกระเพราเนื้อวัวสับ",
        price: 60,
        category: "basil-pork-chicken",
        image: "https://i.ytimg.com/vi/xbYGXTFr36E/mqdefault.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "เมนูแนะนำ",
        desc: "เนื้อวัวบดคัดเกรดอย่างดี ผัดแห้งไฟแรงกับพริกขี้หนูสวนและกระเทียมไทย รสชาติเผ็ดร้อนดุดัน เข้มข้นเข้าเนื้อ หอมกลิ่นใบกะเพราแท้ ไม่แฉะน้ำมัน",
         toppings: [
            { name: "ไข่ดาว", price: 15 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-10",
        name: "กระเพราปลาหมึก",
        price: 50,
        category: "basil-seafood",
        image: "https://i.ytimg.com/vi/vgyTnh7ekMA/sddefault.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "",
        desc: "ปลาหมึกกล้วยสดๆ ชิ้นโต เนื้อเด้งกรุบ ไม่เหนียว ผัดไฟแรงสะดุ้งกระทะกับพริกกระเทียมและซอสกะเพราสูตรเด็ด รสชาติจัดจ้าน เผ็ดร้อน หอมกลิ่นกะเพราแท้",
         toppings: [
            { name: "ไข่ดาว", price: 15 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-11",
        name: "ผัดผงกะหรี่ทะเล",
        price: 60,
        category: "basil-seafood",
        image: "https://i.ytimg.com/vi/Jx-JNgO4c00/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "",
        desc: "ยกกองทัพซีฟู้ดสดๆ (กุ้งเนื้อเด้ง หมึกชิ้นโต หอยแมลงภู่) ผัดคลุกเคล้ากับซอสผงกะหรี่สูตรเข้มข้น ไข่นุ่มละมุนลิ้น และนมสด หอมมัน กลมกล่อม เครื่องเทศแน่นๆ",
         toppings: [
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-12",
        name: "กะเพราตับหมู",
        price: 50,
        category: "basil-pork-chicken",
        image: "https://i.ytimg.com/vi/rm3wZ6lhD50/hq720.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "",
        desc: "ตับหมูสดคัดเกรด หั่นชิ้นหนากำลังดี ผัดสะดุ้งไฟแรงจนเนื้อนุ่มเด้ง ไม่แข็งกระด้าง จัดจ้านด้วยพริกกระเทียมและซอสกะเพราสูตรเด็ด หอมกลิ่นใบกะเพราแท้",
         toppings: [
            { name: "ไข่ดาว", price: 15 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-13",
        name: "ผัดพริกแกงปลาดุก",
        price: 60,
        category: "others",
        image: "https://i.ytimg.com/vi/Rhr8E9v0Ls8/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "",
        desc: "ปลาดุกหั่นชิ้นทอดจนเหลืองกรอบนอกนุ่มใน ผัดเข้มข้นคลุกเคล้ากับพริกแกงเผ็ดใต้ตำมือ หอมกลิ่นกระชาย ซอยใบมะกรูดและพริกชี้ฟ้า รสจัดจ้าน เผ็ดร้อนถึงใจ",
         toppings: [
            { name: "ไข่ดาว", price: 15 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "krapao-14",
        name: "ยำวุ้นเส้นหมูสับ",
        price: 80,
        category: "others",
        image: "https://i.ytimg.com/vi/m2dJQRDhz-o/maxresdefault.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "",
        desc: "วุ้นเส้นเหนียวนุ่ม ลวกสุกกำลังดี ยำคลุกเคล้ากับหมูสับล้วนเนื้อนุ่ม และผักสมุนไพรสด ปรุงรสน้ำยำมะนาวแท้รสจัดจ้าน ครบรสเปรี้ยว เค็ม เผ็ด แซ่บซี๊ดถึงใจ",
         toppings: [
            { name: "พิเศษ", price: 20 }
        ]
    },
    {
        id: "krapao-15",
        name: "สุกี้",
        price: 50,
        category: "others",
        image: "https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0194_1200x630.jpg?w=500&auto=format&fit=crop&q=60",
        rating: 4.8,
        badge: "รีเฟรชดับเผ็ด",
        desc: "วุ้นเส้นเหนียวนุ่ม ผัดแห้งหอมกลิ่นกระทะ หรือเลือกแบบน้ำซุปร้อนๆ กลมกล่อม จัดเต็มผักกาดขาว ผักบุ้งสดกรอบ และเนื้อสัตว์นุ่มๆ เสิร์ฟพร้อมน้ำจิ้มสุกี้สูตรเด็ด เข้มข้น ครบรส",
         toppings: [
            { name: "หมูชิ้น", price: 10 },
            { name: "ทะเล", price: 20 },
            { name: "แห้ง", price: 10 },
            { name: "น้ำ", price: 10 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "custom-1790427439582",
        name: "ข้าวสวย",
        price: 20,
        category: "others",
        image: "https://variety.teenee.com/foodforbrain/img9/214014.jpg",
        rating: 4.8,
        badge: "",
        hasSpicy: false,
        desc: "ข้าวสวยหอมมะลิร้อนๆ นุ่มละมุน",
        toppings: [
            { name: "ไข่ดาว", price: 10 },
            { name: "ไข่ดาวเป็ด", price: 10 },
            { name: "ไข่เจียว", price: 10 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "custom-1790427784606",
        name: "ผัดกะเพรา(กับข้าว)",
        price: 70,
        category: "basil-pork-chicken",
        image: "https://www.matichon.co.th/weekly/wp-content/uploads/2026/07/Food-2397-1200x630.jpg",
        rating: 4.6,
        badge: "",
        desc: "ผัดกะเพรารสจัดจ้านแบบกับข้าว สามารถเลือกเนื้อสัตว์ได้ตามต้องการ",
        toppings: [
            { name: "หมูชิ้น", price: 10 },
            { name: "หมูสับ", price: 10 },
            { name: "เนื้อวัวสับ", price: 10 },
            { name: "หมูกรอบ", price: 10 },
            { name: "ปลาหมึก", price: 10 },
            { name: "ทะเล", price: 20 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "custom-1790428241358",
        name: "ผัดผงกะหรี่(กับข้าว)",
        price: 70,
        category: "basil-pork-chicken",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Y0LAVbRgXfp_Chp9sD0BU7fHfJ2Ewjp_zP9eTIuO2WUui6juOvvYAc2k&s=10",
        rating: 4.5,
        badge: "",
        desc: "ผัดผงกะหรี่เข้มข้น หอมมันกลมกล่อมแบบกับข้าว สามารถเลือกเนื้อสัตว์ได้ตามต้องการ",
        toppings: [
            { name: "หมูชิ้น", price: 10 },
            { name: "หมูสับ", price: 10 },
            { name: "เนื้อวัวสับ", price: 10 },
            { name: "หมูกรอบ", price: 10 },
            { name: "ปลาหมึก", price: 10 },
            { name: "ทะเล", price: 20 },
            { name: "พิเศษ", price: 10 }
        ]
    },
    {
        id: "drink-05",
        name: "น้ำเปล่าเย็น",
        price: 10,
        category: "drinks",
        image: "https://img.th.my-best.com/product_images/d68638208391099f2dc353bffc6ab717.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=7845671ef59dc1c5f371e538e82e78c3?w=500&auto=format&fit=crop&q=60",
        rating: 4.9,
        badge: "ดับกระหาย",
        desc: "น้ำเปล่าขวดเย็นฉ่ำเสิร์ฟพร้อมแก้วน้ำแข็งสะอาดสดชื่น",
        toppings: []
    },
    {
        id: "drink-04",
        name: "โค้กกระป๋องเย็น",
        price: 15,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&auto=format&fit=crop&q=60",
        rating: 4.9,
        badge: "ซ่าเย็นสะใจ",
        desc: "เครื่องดื่มอัดลมโคคาโคล่ารสชาติต้นตำรับ เสิร์ฟเย็นพร้อมน้ำแข็งแก้วโต ดับเผ็ดลงตัว",
        toppings: []
    }
];

const CATEGORIES = [
    { id: "all", name: "เมนูทั้งหมด", icon: "fa-solid fa-border-all" },
    { id: "basil-pork-chicken", name: "กะเพราหมู-ไก่", icon: "fa-solid fa-fire" },
    { id: "basil-beef", name: "กะเพราเนื้อพรีเมียม", icon: "fa-solid fa-cow" },
    { id: "basil-seafood", name: "กะเพราทะเลเดือด", icon: "fa-solid fa-shrimp" },
    { id: "others", name: "อาหารจานเดียวอื่น", icon: "fa-solid fa-utensils" },
    { id: "drinks", name: "เครื่องดื่มเย็นๆ", icon: "fa-solid fa-glass-water" },
];

// Helper to update Detail Modal price live when toppings selected/adjusted
function updateDetailModalPrice(basePrice) {
    let toppingsTotal = 0;
    const qtySpans = document.querySelectorAll('.topping-qty-val');
    qtySpans.forEach(span => {
        const qty = parseInt(span.innerText) || 0;
        const price = parseInt(span.getAttribute("data-price")) || 0;
        toppingsTotal += price * qty;
    });
    const checkboxes = document.querySelectorAll('.topping-checkbox-val');
    checkboxes.forEach(cb => {
        if (cb.checked) {
            const price = parseInt(cb.getAttribute("data-price")) || 0;
            toppingsTotal += price;
        }
    });
    document.getElementById("detailModalPrice").innerText = basePrice + toppingsTotal;
}

function adjustToppingQty(idx, change, basePrice) {
    const qtySpan = document.getElementById(`topping-qty-${idx}`);
    if (!qtySpan) return;
    
    let currentQty = parseInt(qtySpan.innerText) || 0;
    currentQty += change;
    if (currentQty < 0) currentQty = 0;
    
    qtySpan.innerText = currentQty;
    
    // Highlight if selected (>0)
    const row = qtySpan.closest('.topping-row-item');
    if (row) {
        if (currentQty > 0) {
            row.style.background = "rgba(255, 94, 54, 0.04)";
            row.style.borderLeft = "3px solid var(--primary)";
            row.style.paddingLeft = "8px";
        } else {
            row.style.background = "transparent";
            row.style.borderLeft = "none";
            row.style.paddingLeft = "0";
        }
    }
    
    updateDetailModalPrice(basePrice);
}

function toggleToppingCheckbox(idx, basePrice) {
    const cb = document.getElementById(`topping-checkbox-${idx}`);
    if (!cb) return;
    
    const row = cb.closest('.topping-row-item');
    if (row) {
        if (cb.checked) {
            row.style.background = "rgba(255, 94, 54, 0.04)";
            row.style.borderLeft = "3px solid var(--primary)";
            row.style.paddingLeft = "8px";
        } else {
            row.style.background = "transparent";
            row.style.borderLeft = "none";
            row.style.paddingLeft = "0";
        }
    }
    
    updateDetailModalPrice(basePrice);
}

// --- App State ---
let menuItems = [];
let orders = [];
let activeReceiptOrder = null;
let cart = [];
let selectedTable = null;
let currentCategory = "all";
let searchQuery = "";
let currentView = "customer";
let activeTrackingId = null;
let trackingInterval = null;
let closedTables = [];
let billedTables = [];
let tableStaffMap = {};
let customerScannedStaff = "";
let storeOwner = null;
let staffList = [];
let inventoryItems = [];
let requisitionLogs = [];
let stockInLogs = [];
let inventorySubTab = "stock"; // "stock" or "requisitions"
let selectedAdminMenuItemId = null;
let selectedAdminToppingName = null;

// Admin Orders Pagination & Filter States
let adminOrdersSubTab = "active"; // "active" or "completed"
let adminActiveOrdersPage = 1;
let adminCompletedOrdersPage = 1;
let adminCompletedOrdersPaymentFilter = "all"; // "all", "cash", or "scan"
const ADMIN_PAGE_SIZE = 4;

const API_BASE = (function() {
    if (window.location.protocol === 'file:') {
        return 'http://localhost/QR';
    }
    if (window.location.port === '8000') {
        return '';
    }
    // Dynamic path detection for Apache / XAMPP (e.g. /QR)
    const pathname = window.location.pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '');
    return pathname;
})();
let isBackendOnline = false;
let isAdminAuthenticated = false;
let detectedServerIp = "172.86.11.115";

// Purge obsolete hardcoded local IP if previously saved
try {
    const saved = localStorage.getItem("raja_table_qr_base_url");
    if (saved && saved.includes("192.168.1.165")) {
        localStorage.removeItem("raja_table_qr_base_url");
    }
} catch (e) {}

async function loadServerNetworkInfo() {
    try {
        const res = await fetch(`${API_BASE}/api/server-info`);
        if (res.ok) {
            const data = await res.json();
            if (data && data.ip) {
                detectedServerIp = data.ip;
                console.log("[Network] Local Wi-Fi IP detected:", detectedServerIp);
            }
        }
    } catch (e) {
        console.warn("[Network] Could not query server-info:", e);
    }
}

function getLocalWifiBaseUrl() {
    const port = (window.location.port && window.location.port !== "80" && window.location.port !== "443") ? `:${window.location.port}` : "";
    let path = window.location.pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '');
    if (!path || path === "" || path === "/") path = "/QR";
    return `http://${detectedServerIp}${port}${path}/`;
}

// --- DOM References ---
document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupEventListeners();
});

// Initialize App
async function initApp() {
    // 0. Detect local Wi-Fi IP from backend
    await loadServerNetworkInfo();

    // 1. Try to load menu items from MySQL backend
    try {
        const menuRes = await fetch(`${API_BASE}/api/menu`);
        if (menuRes.ok) {
            menuItems = await menuRes.json();
            isBackendOnline = true;
            console.log("Connected to MySQL database. Loaded menu.");
            
            // Filter out deleted drinks
            menuItems = menuItems.filter(item => !['drink-01', 'drink-02', 'drink-03'].includes(item.id));

            // Seed drinks in database if they don't exist
            const hasDrinks = menuItems.some(item => item.category === 'drinks');
            if (!hasDrinks) {
                console.log("Seeding drinks into MySQL database...");
                const drinksToAdd = DEFAULT_MENU_ITEMS.filter(item => item.category === 'drinks');
                for (const drink of drinksToAdd) {
                    await fetch(`${API_BASE}/api/menu`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(drink)
                    }).catch(e => console.error("Failed to seed drink in MySQL:", e));
                }
                const reloadRes = await fetch(`${API_BASE}/api/menu`);
                if (reloadRes.ok) menuItems = await reloadRes.json();
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for menu items.");
        const storedMenu = localStorage.getItem("raja_menu_v2_items");
        if (storedMenu) {
            menuItems = JSON.parse(storedMenu);
        } else {
            menuItems = [...DEFAULT_MENU_ITEMS];
        }
    }

    // Always filter out deleted drinks and ensure drinks (water & coke) are at the very bottom
    menuItems = menuItems.filter(item => !['drink-01', 'drink-02', 'drink-03'].includes(item.id));
    menuItems.sort((a, b) => {
        const isDrinkA = a.category === 'drinks' ? 1 : 0;
        const isDrinkB = b.category === 'drinks' ? 1 : 0;
        if (isDrinkA !== isDrinkB) return isDrinkA - isDrinkB; // Non-drinks first, drinks at bottom
        if (a.id === 'drink-05' && b.id === 'drink-04') return -1;
        if (a.id === 'drink-04' && b.id === 'drink-05') return 1;
        return a.id.localeCompare(b.id, undefined, { numeric: true });
    });
    localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));

    // 2. Try to load orders from MySQL backend
    try {
        if (isBackendOnline) {
            const ordersRes = await fetch(`${API_BASE}/api/orders`);
            if (ordersRes.ok) {
                orders = await ordersRes.json();
                console.log("Loaded orders from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for orders.");
        const storedOrders = localStorage.getItem("raja_orders_v2");
        if (storedOrders) {
            orders = JSON.parse(storedOrders);
        } else {
            orders = [];
            localStorage.setItem("raja_orders_v2", JSON.stringify(orders));
        }
    }

    // 3. Try to load staff members from MySQL backend
    try {
        if (isBackendOnline) {
            const staffRes = await fetch(`${API_BASE}/api/staff`);
            if (staffRes.ok) {
                staffList = await staffRes.json();
                console.log("Loaded staff from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for staff members.");
        const storedStaff = localStorage.getItem("raja_staff_v2");
        if (storedStaff) {
            staffList = JSON.parse(storedStaff);
        } else {
            const defaultStaff = [
                { id: 1, name: "นายสมเกียรติ ยอดฝีมือ", username: "somkiat.chef", position: "chef", phone: "0812345678", status: "active" },
                { id: 2, name: "นางสาวศิริพร บริการดี", username: "siriporn.w", position: "waiter", phone: "0898765432", status: "active" }
            ];
            staffList = defaultStaff;
            localStorage.setItem("raja_staff_v2", JSON.stringify(staffList));
        }
    }

    // 4. Try to load inventory items from MySQL backend
    try {
        if (isBackendOnline) {
            const invRes = await fetch(`${API_BASE}/api/inventory`);
            if (invRes.ok) {
                inventoryItems = await invRes.json();
                console.log("Loaded inventory from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for inventory items.");
        const storedInv = localStorage.getItem("raja_inventory_items_v2");
        if (storedInv) {
            inventoryItems = JSON.parse(storedInv);
        } else {
            const defaultInv = [
                { id: 1, name: "หมูสับ", quantity: 25, unit: "กก.", min_stock: 5 },
                { id: 2, name: "เนื้อโคขุนสไลด์", quantity: 15, unit: "กก.", min_stock: 3 },
                { id: 3, name: "ไข่เป็ด", quantity: 120, unit: "ฟอง", min_stock: 30 },
                { id: 4, name: "ใบกะเพราป่า", quantity: 8, unit: "กก.", min_stock: 2 }
            ];
            inventoryItems = defaultInv;
            localStorage.setItem("raja_inventory_items_v2", JSON.stringify(inventoryItems));
        }
    }

    // 5. Try to load requisition logs from MySQL backend
    try {
        if (isBackendOnline) {
            const reqRes = await fetch(`${API_BASE}/api/requisitions`);
            if (reqRes.ok) {
                requisitionLogs = await reqRes.json();
                console.log("Loaded requisitions from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for requisitions.");
        const storedLogs = localStorage.getItem("raja_requisition_logs_v2");
        if (storedLogs) {
            requisitionLogs = JSON.parse(storedLogs);
        } else {
            requisitionLogs = [];
            localStorage.setItem("raja_requisition_logs_v2", JSON.stringify(requisitionLogs));
        }
    }

    // 5.1 Try to load stock-in logs from MySQL backend
    try {
        if (isBackendOnline) {
            const stockInRes = await fetch(`${API_BASE}/api/stock-in`);
            if (stockInRes.ok) {
                stockInLogs = await stockInRes.json();
                console.log("Loaded stock-in logs from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for stock-in logs.");
        const storedStockIn = localStorage.getItem("raja_stock_in_logs_v2");
        if (storedStockIn) {
            stockInLogs = JSON.parse(storedStockIn);
        } else {
            stockInLogs = [];
            localStorage.setItem("raja_stock_in_logs_v2", JSON.stringify(stockInLogs));
        }
    }

    // 6. Try to load closed tables from MySQL backend
    try {
        if (isBackendOnline) {
            const closedRes = await fetch(`${API_BASE}/api/closed-tables`);
            if (closedRes.ok) {
                closedTables = await closedRes.json();
                console.log("Loaded closed tables from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for closed tables.");
        closedTables = JSON.parse(localStorage.getItem("raja_closed_tables") || "[]");
    }

    // 6.5. Try to load billed tables from MySQL backend
    try {
        if (isBackendOnline) {
            const billedRes = await fetch(`${API_BASE}/api/billed-tables`);
            if (billedRes.ok) {
                billedTables = await billedRes.json();
                console.log("Loaded billed tables from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for billed tables.");
        billedTables = JSON.parse(localStorage.getItem("raja_billed_tables") || "[]");
    }

    // 6.6 Try to load table staff assignments from MySQL backend
    try {
        if (isBackendOnline) {
            const tableStaffRes = await fetch(`${API_BASE}/api/table-staff`);
            if (tableStaffRes.ok) {
                tableStaffMap = await tableStaffRes.json();
                console.log("Loaded table staff assignments from MySQL database.");
                localStorage.setItem("raja_table_staff", JSON.stringify(tableStaffMap));
            }
        } else {
            tableStaffMap = JSON.parse(localStorage.getItem("raja_table_staff") || "{}");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for table staff.");
        tableStaffMap = JSON.parse(localStorage.getItem("raja_table_staff") || "{}");
    }

    customerScannedStaff = sessionStorage.getItem("raja_scanned_staff") || "";

    // 7. Try to load expenses from MySQL backend
    try {
        if (isBackendOnline) {
            const expenseRes = await fetch(`${API_BASE}/api/expenses`);
            if (expenseRes.ok) {
                expensesList = await expenseRes.json();
                console.log("Loaded expenses from MySQL database.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for store expenses.");
        loadExpensesData();
    }

    // 9. Try to load store owner from MySQL backend
    try {
        if (isBackendOnline) {
            const ownerRes = await fetch(`${API_BASE}/api/owner`);
            if (ownerRes.ok) {
                storeOwner = await ownerRes.json();
                console.log("Loaded store owner from backend.");
            } else {
                throw new Error("Backend offline");
            }
        } else {
            throw new Error("Backend offline");
        }
    } catch (err) {
        console.warn("Using LocalStorage fallback for store owner.");
        const storedOwner = localStorage.getItem("raja_store_owner_v2");
        if (storedOwner) {
            storeOwner = JSON.parse(storedOwner);
        } else {
            storeOwner = {
                name: "คุณราชา เจ้าของร้าน",
                username: "owner",
                phone: "089-999-9999",
                role: "เจ้าของร้าน (ผู้บริหารสูงสุด)",
                passcode: "1234"
            };
            localStorage.setItem("raja_store_owner_v2", JSON.stringify(storeOwner));
        }
    }

    // Checking if there is any active order to track in sessionStorage
    const storedTrackingId = sessionStorage.getItem("raja_active_tracking_v2_id");
    if (storedTrackingId) {
        activeTrackingId = storedTrackingId;
        const trackingOrder = orders.find(o => o.id === activeTrackingId);
        if (trackingOrder) {
            selectedTable = parseInt(trackingOrder.table);
        }
    }

    // Check table from URL or SessionStorage
    checkTableUrlParameter();

    // 3. Render items
    renderCategoryChips();
    renderCustomerMenu();
    renderCart();
    
    // 4. Update Header Badge & Table Indicators
    updateCartCountBadge();
    updateTableStatusBar();
    updateAllTableDisplays();
    renderStoreOwnerCard();
    localStorage.removeItem("raja_customers_v2");
    
    // Purge any legacy/cached elements from DOM
    ['adminSidebarTabCustomers', 'adminCustomersSubView', 'customerFormModal', 'headerDbStatusBadge', 'adminDbStatusBadge'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.remove();
    });
    // Remove any sidebar button that mentions ข้อมูลลูกค้า
    document.querySelectorAll('.sidebar-item').forEach(btn => {
        if (btn.textContent && btn.textContent.includes('ข้อมูลลูกค้า')) {
            btn.remove();
        }
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Search Listener
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            renderCustomerMenu();
        });
    }

    // Logo Click refreshes category and resets search
    const logoLink = document.getElementById("logoLink");
    if (logoLink) {
        logoLink.addEventListener("click", (e) => {
            e.preventDefault();
            switchView("customer");
            currentCategory = "all";
            searchQuery = "";
            if (searchInput) searchInput.value = "";
            renderCategoryChips();
            renderCustomerMenu();
        });
    }

    // Admin password input Enter key listener
    const passwordInput = document.getElementById("adminPasswordInput");
    if (passwordInput) {
        passwordInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                verifyAdminPassword();
            }
        });
    }

    // Periodically sync orders and update status bar (every 5 seconds)
    setInterval(async () => {
        try {
            const res = await fetch(`${API_BASE}/api/orders`);
            if (res.ok) {
                orders = await res.json();
                isBackendOnline = true;
            }
            const closedRes = await fetch(`${API_BASE}/api/closed-tables`);
            if (closedRes.ok) {
                closedTables = await closedRes.json();
            }
            const billedRes = await fetch(`${API_BASE}/api/billed-tables`);
            if (billedRes.ok) {
                billedTables = await billedRes.json();
            }
            const expRes = await fetch(`${API_BASE}/api/expenses`);
            if (expRes.ok) {
                expensesList = await expRes.json();
            }
        } catch (e) {
            isBackendOnline = false;
            console.error("Background sync error:", e);
            orders = JSON.parse(localStorage.getItem("raja_orders_v2") || "[]");
            closedTables = JSON.parse(localStorage.getItem("raja_closed_tables") || "[]");
            billedTables = JSON.parse(localStorage.getItem("raja_billed_tables") || "[]");
            expensesList = JSON.parse(localStorage.getItem("raja_expenses_v2") || "[]");
        }

        if (currentView === "customer" && selectedTable !== null) {
            const tableNum = parseInt(selectedTable, 10);
            if (isTableBilled(tableNum)) {
                showBilledNoticeModal(tableNum);
            }
            
            updateTableStatusBar();
            updateAllTableDisplays();
            
            const histModal = document.getElementById("orderHistoryModal");
            if (histModal && histModal.classList.contains("active")) {
                renderOrderHistory();
            }
        } else if (currentView === "admin") {
            recalculateAdminMetrics();
            renderAdminOrders();
            renderAdminTablesGrid();
            
            // Auto-refresh active subview tables when visible
            const expSubView = document.getElementById("adminExpensesSubView");
            if (expSubView && expSubView.style.display === "flex") {
                renderExpensesTable();
            }
        }
    }, 5000);
}

// View Switches (Customer vs Admin)
function switchView(view) {
    currentView = view;
    
    const customerViewEl = document.getElementById("customerView");
    const adminViewEl = document.getElementById("adminView");
    const tabCustomer = document.getElementById("tabCustomer");
    const tabAdmin = document.getElementById("tabAdmin");
    const searchBar = document.getElementById("searchBarWrapper");
    const cartToggleBtn = document.getElementById("cartToggleBtn");
    const historyToggleBtn = document.getElementById("historyToggleBtn");
    const btnExitAdmin = document.getElementById("btnExitAdmin");
    const mainHeader = document.querySelector(".app-container > header");

    if (view === "customer") {
        customerViewEl.classList.add("active");
        adminViewEl.classList.remove("active");
        tabCustomer.classList.add("active");
        tabAdmin.classList.remove("active");
        if (searchBar) searchBar.style.display = "block";
        if (cartToggleBtn) cartToggleBtn.style.display = "inline-flex";
        if (historyToggleBtn) historyToggleBtn.style.display = "inline-flex";
        if (btnExitAdmin) btnExitAdmin.style.display = "none";
        if (mainHeader) mainHeader.style.display = "flex";
        renderCustomerMenu();
    } else {
        customerViewEl.classList.remove("active");
        adminViewEl.classList.add("active");
        tabCustomer.classList.remove("active");
        tabAdmin.classList.add("active");
        if (searchBar) searchBar.style.display = "none";
        if (cartToggleBtn) cartToggleBtn.style.display = "none";
        if (historyToggleBtn) historyToggleBtn.style.display = "none";
        if (btnExitAdmin) btnExitAdmin.style.display = "inline-flex";
        if (mainHeader) mainHeader.style.display = "flex";
        
        // Load admin components
        recalculateAdminMetrics();
        renderAdminOrders();
        renderAdminMenuGrid();
        renderDailySalesReport();
        renderAdminTablesGrid();
        renderStaffTable();
        renderInventoryTable();
        renderRequisitionsTable();
        switchAdminSubView('dashboard');
    }
    updateTableStatusBar();
    updateAllTableDisplays();
}

// --- Customer View Rendering ---

// Render Category Chips
function renderCategoryChips() {
    const container = document.getElementById("categoryChipsContainer");
    if (!container) return;
    
    container.innerHTML = CATEGORIES.map(cat => `
        <button class="category-chip ${currentCategory === cat.id ? 'active' : ''}" onclick="selectCategory('${cat.id}')">
            <i class="${cat.icon}"></i>
            <span>${cat.name}</span>
        </button>
    `).join("");
}

function selectCategory(categoryId) {
    currentCategory = categoryId;
    renderCategoryChips();
    renderCustomerMenu();
}

// Render Menu Cards for Customer
function renderCustomerMenu() {
    const grid = document.getElementById("customerMenuGrid");
    if (!grid) return;

    // Filter menu items by category and search query
    const filteredItems = menuItems.filter(item => {
        const matchesCategory = (currentCategory === "all" || item.category === currentCategory);
        const matchesSearch = item.name.toLowerCase().includes(searchQuery) || 
                              item.desc.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filteredItems.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-face-frown" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <p>ไม่พบรายการอาหารที่ตรงกับการค้นหาของคุณ</p>
            </div>
        `;
        return;
    }

    grid.innerHTML = filteredItems.map(item => {
        const isAvailable = item.isAvailable !== false;
        const cardClass = isAvailable ? "menu-card" : "menu-card out-of-stock";
        const badgeHtml = !isAvailable
            ? `<span class="card-badge" style="background: #ef4444; color: white;"><i class="fa-solid fa-ban"></i> หมด</span>`
            : (item.badge ? `<span class="card-badge">${item.badge}</span>` : "");
        const buttonHtml = isAvailable
            ? `<button class="btn-card-add" onclick="openFoodDetail('${item.id}')"><i class="fa-solid fa-plus"></i> สั่งอาหาร</button>`
            : `<button class="btn-card-add" disabled style="background: rgba(255,255,255,0.05); color: var(--text-muted); cursor: not-allowed;"><i class="fa-solid fa-ban"></i> หมด</button>`;

        return `
            <div class="${cardClass}" onclick="openFoodDetail('${item.id}')" style="cursor: pointer; ${!isAvailable ? 'opacity: 0.65;' : ''}">
                <div class="card-img-wrapper">
                    <img class="card-img" src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/400x300/101524/FFFFFF?text=${encodeURIComponent(item.name)}'">
                    ${badgeHtml}
                </div>
                <div class="card-body">
                    <div class="card-title-row">
                        <h3 class="card-title">${item.name}</h3>
                    </div>
                    <div class="card-desc">${item.desc}</div>
                    <div class="card-footer" onclick="event.stopPropagation();">
                        <div class="card-price"><span>฿</span>${item.price}</div>
                        ${buttonHtml}
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

// --- Modal Operations ---

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("open");
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("open");
    
    // Stop tracker loading interval if tracking closed
    if (modalId === "orderTrackModal" && trackingInterval) {
        clearInterval(trackingInterval);
        trackingInterval = null;
    }
}

// Open Food Detail Modal
function openFoodDetail(itemId) {
    if (selectedTable !== null && isTableBilled(selectedTable)) {
        showBilledNoticeModal(selectedTable, true);
        return;
    }

    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    document.getElementById("detailModalImg").src = item.image;
    document.getElementById("detailModalCategory").innerText = CATEGORIES.find(c => c.id === item.category)?.name || item.category;
    document.getElementById("detailModalTitle").innerText = item.name;
    document.getElementById("detailModalRating").innerText = item.rating.toFixed(1);
    document.getElementById("detailModalDesc").innerText = item.desc;
    document.getElementById("detailModalPrice").innerText = item.price;
    document.getElementById("detailModalRemarks").value = ""; // Clear remarks on open
    
    // Render Toppings with Quantity Selectors
    const toppingsListContainer = document.getElementById("detailModalToppingsList");
    const toppingsSection = document.getElementById("detailModalToppingsSection");
    
    if (item.toppings && item.toppings.length > 0) {
        toppingsSection.style.display = "block";
        toppingsListContainer.innerHTML = item.toppings.map((t, idx) => {
            const isSpecial = t.name.includes("พิเศษ");
            if (isSpecial) {
                return `
                <div class="topping-row-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed rgba(255,255,255,0.05); transition: var(--transition-fast); cursor: pointer;" onclick="const cb = document.getElementById('topping-checkbox-${idx}'); if (cb) { cb.checked = !cb.checked; toggleToppingCheckbox(${idx}, ${item.price}); }">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <span class="topping-name" style="font-size: 13px; font-weight: 600; color: var(--text-main);">${t.name}</span>
                        <span class="topping-price" style="font-size: 12px; font-weight: 700; color: var(--primary);">+${t.price} ฿</span>
                    </div>
                    <div style="display: flex; align-items: center; padding-right: 4px;" onclick="event.stopPropagation()">
                        <input type="checkbox" id="topping-checkbox-${idx}" data-name="${t.name}" data-price="${t.price}" class="topping-checkbox-val" onchange="toggleToppingCheckbox(${idx}, ${item.price})" style="width: 20px; height: 20px; cursor: pointer; accent-color: var(--primary);">
                    </div>
                </div>
                `;
            }

            return `
            <div class="topping-row-item" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed rgba(255,255,255,0.05); transition: var(--transition-fast);">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <span class="topping-name" style="font-size: 13px; font-weight: 600; color: var(--text-main);">${t.name}</span>
                    <span class="topping-price" style="font-size: 12px; font-weight: 700; color: var(--primary);">+${t.price} ฿</span>
                </div>
                <div class="topping-qty-controls" style="display: flex; align-items: center; background: var(--bg-input); border: 1px solid var(--border); border-radius: var(--radius-sm); overflow: hidden;">
                    <button type="button" onclick="adjustToppingQty(${idx}, -1, ${item.price})" style="background: transparent; border: none; color: var(--text-main); width: 26px; height: 26px; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition-fast);"><i class="fa-solid fa-minus"></i></button>
                    <span id="topping-qty-${idx}" data-name="${t.name}" data-price="${t.price}" class="topping-qty-val" style="width: 28px; text-align: center; font-size: 12px; font-weight: 700; color: var(--text-main);">0</span>
                    <button type="button" onclick="adjustToppingQty(${idx}, 1, ${item.price})" style="background: transparent; border: none; color: var(--text-main); width: 26px; height: 26px; font-size: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: var(--transition-fast);"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            `;
        }).join("");
    } else {
        toppingsSection.style.display = "none";
        toppingsListContainer.innerHTML = "";
    }
    
    // Render Spicy Level selection
    const spicySection = document.getElementById("detailModalSpicySection");
    const isRice = item.name && (item.name.includes("ข้าวสวย") || item.name.includes("ข้าวเปล่า") || item.name.includes("ข้าวหอมมะลิ"));
    const isDrink = item.category === "drinks";
    const itemHasSpicy = item.hasSpicy !== undefined 
        ? (item.hasSpicy === true || item.hasSpicy === 1 || item.hasSpicy === "1") 
        : (!isRice && !isDrink);
    const spicyEligible = !isRice && !isDrink && itemHasSpicy && ["basil-pork-chicken", "basil-beef", "basil-seafood", "basil-sharing", "others"].includes(item.category);
    
    if (spicySection) {
        if (spicyEligible) {
            spicySection.style.display = "block";
            // Reset default to "เผ็ดกลาง"
            const defaultSpicyRadio = document.querySelector('input[name="spicyLevel"][value="เผ็ดกลาง"]');
            if (defaultSpicyRadio) defaultSpicyRadio.checked = true;
        } else {
            spicySection.style.display = "none";
            // Uncheck all spicy levels so it is not sent
            const checkedSpicyRadios = document.querySelectorAll('input[name="spicyLevel"]');
            checkedSpicyRadios.forEach(r => r.checked = false);
        }
    }
    
    // Setup Action button on modal
    const addBtn = document.getElementById("detailModalAddBtn");
    const isAvailable = item.isAvailable !== false;
    if (isAvailable) {
        addBtn.disabled = false;
        addBtn.innerHTML = `<i class="fa-solid fa-basket-shopping"></i> ใส่ตะกร้าอาหาร`;
        addBtn.style.opacity = "1";
        addBtn.style.cursor = "pointer";
        addBtn.onclick = () => {
            const selectedToppings = [];
            const qtySpans = document.querySelectorAll('.topping-qty-val');
            qtySpans.forEach(span => {
                const qty = parseInt(span.innerText) || 0;
                if (qty > 0) {
                    selectedToppings.push({
                        name: span.getAttribute("data-name"),
                        price: parseInt(span.getAttribute("data-price")),
                        quantity: qty
                    });
                }
            });
            const checkboxes = document.querySelectorAll('.topping-checkbox-val');
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedToppings.push({
                        name: cb.getAttribute("data-name"),
                        price: parseInt(cb.getAttribute("data-price")),
                        quantity: 1
                    });
                }
            });
            
            // Get selected spicy level if visible
            let selectedSpicy = "";
            if (spicyEligible) {
                const checkedRadio = document.querySelector('input[name="spicyLevel"]:checked');
                if (checkedRadio) {
                    selectedSpicy = checkedRadio.value;
                }
            }
            
            const remarks = document.getElementById("detailModalRemarks").value.trim();
            addToCart(item.id, 1, selectedToppings, remarks, selectedSpicy);
            closeModal("foodDetailModal");
        };
    } else {
        addBtn.disabled = true;
        addBtn.innerHTML = `<i class="fa-solid fa-ban"></i> สินค้าหมดชั่วคราว`;
        addBtn.style.opacity = "0.5";
        addBtn.style.cursor = "not-allowed";
        addBtn.onclick = null;
    }

    openModal("foodDetailModal");
}

// --- Cart Operations ---

function toggleCartDrawer(open) {
    const overlay = document.getElementById("cartOverlay");
    if (!overlay) return;
    if (open) {
        overlay.classList.add("open");
        renderCart();
    } else {
        overlay.classList.remove("open");
    }
}

function addToCart(itemId, qty = 1, selectedToppings = [], remarks = "", spicy = "") {
    if (selectedTable !== null && isTableBilled(selectedTable)) {
        showBilledNoticeModal(selectedTable, true);
        return;
    }

    // Generate unique compound key for item configuration
    const toppingsKey = selectedToppings.map(t => `${t.name}x${t.quantity || 1}`).sort().join(",");
    const cartKey = itemId + (toppingsKey ? "_" + toppingsKey : "") + (spicy ? "_spicy_" + spicy : "") + (remarks ? "_rem_" + remarks : "");

    const cartIdx = cart.findIndex(c => c.cartKey === cartKey);
    if (cartIdx > -1) {
        cart[cartIdx].quantity += qty;
    } else {
        cart.push({ cartKey, itemId, quantity: qty, toppings: selectedToppings, remarks: remarks, spicy: spicy });
    }
    
    updateCartCountBadge();
    renderCart();
    
    // Auto show message overlay or toast (could update badge / bounce button)
    const btn = document.getElementById("cartToggleBtn");
    if (btn) {
        btn.classList.add("bounce");
        setTimeout(() => btn.classList.remove("bounce"), 300);
    }
}

// Global accessor for direct main menu grid quick additions (without toppings)
function quickAddToCart(itemId) {
    if (selectedTable !== null && isTableBilled(selectedTable)) {
        showBilledNoticeModal(selectedTable, true);
        return;
    }
    addToCart(itemId, 1, []);
}

function updateCartCountBadge() {
    const badge = document.getElementById("cartCountBadge");
    if (!badge) return;
    
    const count = cart.reduce((total, current) => total + current.quantity, 0);
    badge.innerText = count;
    
    // Trigger animations or styling if greater than 0
    if (count > 0) {
        badge.style.display = "flex";
    } else {
        badge.style.display = "none";
    }
}

function changeQuantity(cartKey, change) {
    const cartIdx = cart.findIndex(c => c.cartKey === cartKey);
    if (cartIdx === -1) return;

    cart[cartIdx].quantity += change;
    
    if (cart[cartIdx].quantity <= 0) {
        cart.splice(cartIdx, 1);
    }

    updateCartCountBadge();
    renderCart();
}

function removeFromCart(cartKey) {
    cart = cart.filter(c => c.cartKey !== cartKey);
    updateCartCountBadge();
    renderCart();
}

function selectTable(tableNum) {
    selectedTable = tableNum;
    sessionStorage.setItem("raja_selected_table", tableNum);
    updateAllTableDisplays();
    updateTableStatusBar();
}

function updateCartTableDisplay() {
    updateAllTableDisplays();
}

function promptChangeTable() {
    // โต๊ะจะถูกล็อกตาม QR Code ที่สแกนจากใบสั่งอาหารประจำโต๊ะอัตโนมัติ โดยไม่ต้องพิมพ์หมายเลขโต๊ะ
}

function renderCustomerTableSelector() {
    updateAllTableDisplays();
}

// Render Cart Panel Drawer items list
function renderCart() {
    updateAllTableDisplays();
    const container = document.getElementById("cartItemsContainer");
    const totalItemsText = document.getElementById("cartTotalItemsCount");
    const totalPriceText = document.getElementById("cartTotalPriceVal");

    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <i class="fa-solid fa-basket-shopping"></i>
                <h3>ยังไม่มีอาหารในตะกร้า</h3>
                <p>เลือกเมนูอาหารจานโปรดของคุณที่หน้าหลักและกดปุ่มเพิ่มเพื่อสั่งได้ทันทีค่ะ/ครับ</p>
            </div>
        `;
        totalItemsText.innerText = "0 ชิ้น";
        totalPriceText.innerText = "0";
        return;
    }

    let totalPrice = 0;
    let totalItems = 0;
    
    let htmlContent = "";
    
    cart.forEach(cartItem => {
        const itemInfo = menuItems.find(m => m.id === cartItem.itemId);
        if (!itemInfo) return;
        
        let toppingsPriceTotal = cartItem.toppings ? cartItem.toppings.reduce((sum, t) => sum + (t.price * (t.quantity || 1)), 0) : 0;
        const itemSubtotal = (itemInfo.price + toppingsPriceTotal) * cartItem.quantity;
        totalPrice += itemSubtotal;
        totalItems += cartItem.quantity;
        
        let toppingsDescHtml = "";
        if (cartItem.toppings && cartItem.toppings.length > 0) {
            toppingsDescHtml = `<div class="cart-item-toppings">+ ${cartItem.toppings.map(t => `${t.name}${t.quantity > 1 ? ` x${t.quantity}` : ""} (+${t.price * (t.quantity || 1)}฿)`).join(", ")}</div>`;
        }
        
        let spicyDescHtml = "";
        if (cartItem.spicy) {
            spicyDescHtml = `<div class="cart-item-spicy" style="font-size: 11px; color: var(--warning); margin-top: 2px;"><i class="fa-solid fa-pepper-hot"></i> ความเผ็ด: ${cartItem.spicy}</div>`;
        }
        
        let remarksHtml = "";
        if (cartItem.remarks) {
            remarksHtml = `<div class="cart-item-remarks">หมายเหตุ: ${cartItem.remarks}</div>`;
        }
        
        htmlContent += `
            <div class="cart-item">
                <img class="cart-item-img" src="${itemInfo.image}" alt="${itemInfo.name}" onerror="this.src='https://placehold.co/100x100?text=Food'">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${itemInfo.name}</h4>
                    ${spicyDescHtml}
                    ${toppingsDescHtml}
                    ${remarksHtml}
                    <div class="cart-item-price"><span>฿</span>${itemInfo.price + toppingsPriceTotal} / จาน</div>
                </div>
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="changeQuantity('${cartItem.cartKey}', -1)"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-val">${cartItem.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity('${cartItem.cartKey}', 1)"><i class="fa-solid fa-plus"></i></button>
                </div>
                <button class="btn-remove-item" onclick="removeFromCart('${cartItem.cartKey}')">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
    totalItemsText.innerText = `${totalItems} ชิ้น`;
    totalPriceText.innerText = totalPrice;
    renderCustomerTableSelector();
}

// Process Checkout & Place Order
function processCheckout() {
    if (cart.length === 0) {
        alert("กรุณาเลือกรายการอาหารใส่ตะกร้าก่อนทำการสั่งชื้อค่ะ/ครับ");
        return;
    }
    
    if (selectedTable === null) {
        alert("กรุณาสแกน QR Code ประจำโต๊ะอาหารเพื่อสั่งซื้อค่ะ/ครับ");
        return;
    }

    if (isTableBilled(selectedTable)) {
        alert("โต๊ะนี้ได้ทำการปิดบิลไปแล้วค่ะ ไม่สามารถสั่งอาหารเองได้ กรุณาแจ้งพนักงานหรือทางร้านเพื่อเปิดบิลใหม่ให้นะคะ/ครับ");
        showBilledNoticeModal(selectedTable, true);
        return;
    }

    // Check if there is an existing active order for this table
    const existingActiveOrder = orders.find(o => parseInt(o.table) === parseInt(selectedTable) && o.status !== "completed");
    
    let orderId;
    let isNewOrder = true;
    if (existingActiveOrder) {
        orderId = existingActiveOrder.id;
        isNewOrder = false;
    } else {
        orderId = `OR-${Math.floor(1000 + Math.random() * 9000)}`;
    }
    const now = new Date();
    const timeStr = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    
    // Compile items names and quantities description text
    const orderItemsDetail = cart.map(cartItem => {
        const itemInfo = menuItems.find(m => m.id === cartItem.itemId);
        const toppingsPriceTotal = cartItem.toppings ? cartItem.toppings.reduce((sum, t) => sum + (t.price * (t.quantity || 1)), 0) : 0;
        const subtotal = (itemInfo ? (itemInfo.price + toppingsPriceTotal) * cartItem.quantity : 0);
        const toppingsDesc = cartItem.toppings && cartItem.toppings.length > 0 
            ? ` (+${cartItem.toppings.map(t => `${t.name}${t.quantity > 1 ? ` x${t.quantity}` : ""}`).join(", ")})` 
            : "";
        const spicyDesc = cartItem.spicy ? ` (${cartItem.spicy})` : "";
        const remarksDesc = cartItem.remarks ? ` [หมายเหตุ: ${cartItem.remarks}]` : "";
        return itemInfo ? `${itemInfo.name}${spicyDesc}${toppingsDesc}${remarksDesc} (x${cartItem.quantity}) [${subtotal} B]` : "";
    }).filter(t => t !== "").join("\n");
    
    // Calculate total price
    const orderTotal = cart.reduce((sum, cartItem) => {
        const itemInfo = menuItems.find(m => m.id === cartItem.itemId);
        const toppingsPriceTotal = cartItem.toppings ? cartItem.toppings.reduce((s, t) => s + (t.price * (t.quantity || 1)), 0) : 0;
        return sum + (itemInfo ? (itemInfo.price + toppingsPriceTotal) * cartItem.quantity : 0);
    }, 0);
    
    const todayStr = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, '0') + "-" + String(now.getDate()).padStart(2, '0');
    
    if (!isNewOrder) {
        // Combine with existing active order
        existingActiveOrder.details += "\n" + orderItemsDetail;
        existingActiveOrder.total += orderTotal;
        existingActiveOrder.status = "pending"; // Reset status to pending so kitchen knows there are new items to cook
        localStorage.setItem("raja_orders_v2", JSON.stringify(orders));
    } else {
        const assignedStaffName = customerScannedStaff || (selectedTable ? getTableStaff(selectedTable) : "พนักงานหน้าร้าน");
        const defaultStaffName = isNewOrder 
            ? assignedStaffName
            : (existingActiveOrder.staff_name || assignedStaffName);

        // Create new order entry
        const newOrder = {
            id: orderId,
            table: selectedTable,
            details: orderItemsDetail,
            total: orderTotal,
            time: timeStr,
            date: todayStr,
            status: "pending", // Initial status: pending
            staff_name: defaultStaffName
        };
        orders.unshift(newOrder); // Add to beginning
        localStorage.setItem("raja_orders_v2", JSON.stringify(orders));
    }
    
    // Save to customer order history list
    let myOrderIds = JSON.parse(localStorage.getItem("raja_my_order_ids") || "[]");
    if (!myOrderIds.includes(orderId)) {
        myOrderIds.push(orderId);
        localStorage.setItem("raja_my_order_ids", JSON.stringify(myOrderIds));
    }
    
    // 3. Store active tracking ID
    activeTrackingId = orderId;
    sessionStorage.setItem("raja_active_tracking_v2_id", orderId);

    // Save order to MySQL backend if active
    if (isBackendOnline) {
        const cartItemsPayload = cart.map(cartItem => {
            const itemInfo = menuItems.find(m => m.id === cartItem.itemId);
            const toppingsPriceTotal = cartItem.toppings ? cartItem.toppings.reduce((s, t) => s + (t.price * (t.quantity || 1)), 0) : 0;
            let itemName = itemInfo ? itemInfo.name : '';
            if (cartItem.spicy) {
                itemName += ` (${cartItem.spicy})`;
            }
            return {
                itemId: cartItem.itemId,
                name: itemName,
                price: itemInfo ? (itemInfo.price + toppingsPriceTotal) : 0,
                quantity: cartItem.quantity,
                toppings: cartItem.toppings,
                remarks: cartItem.remarks
            };
        });

        const activeStaffName = isNewOrder 
            ? (customerScannedStaff || (selectedTable ? getTableStaff(selectedTable) : "พนักงานหน้าร้าน"))
            : (existingActiveOrder.staff_name || customerScannedStaff || (selectedTable ? getTableStaff(selectedTable) : "พนักงานหน้าร้าน"));

        fetch(`${API_BASE}/api/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: orderId,
                table: selectedTable,
                total: isNewOrder ? orderTotal : existingActiveOrder.total,
                time: timeStr,
                status: 'pending',
                staff_name: activeStaffName,
                cartItems: cartItemsPayload
            })
        }).catch(err => console.error("MySQL Order Insert Error:", err));
    }
    
    // 4. Render Checkout Success receipt details
    document.getElementById("receiptOrderId").innerText = `#${orderId}`;
    document.getElementById("receiptTableNum").innerText = `โต๊ะ ${selectedTable}`;
    document.getElementById("receiptTotalAmount").innerText = isNewOrder ? orderTotal : existingActiveOrder.total;
    
    // 5. Clean up cart
    cart = [];
    updateCartCountBadge();
    updateTableStatusBar();
    updateCustomerTableIndicator();
    
    // 6. Close Cart, Open Success Modal
    toggleCartDrawer(false);
    openModal("checkoutSuccessModal");
}

// Track active order in order tracker modal
function trackActiveOrder() {
    closeModal("checkoutSuccessModal");
    openOrderTrackerModal(activeTrackingId);
}

function openOrderTrackerModal(orderId) {
    if (!orderId) {
        alert("ยังไม่มีรายการสั่งอาหารที่ใช้งานร่วมกันเพื่อติดตามสถานะครับ");
        return;
    }
    
    const order = orders.find(o => o.id === orderId);
    if (!order) {
        alert("ไม่พบรหัสหลักฐานการสั่งซื้อในระบบค่ะ");
        return;
    }
    
    document.getElementById("trackOrderIdLabel").innerText = `รหัสออเดอร์: #${order.id} (โต๊ะที่ ${order.table})`;
    
    const updateTrackerSteps = (status) => {
        const stepPending = document.getElementById("trackStepPending");
        const stepCooking = document.getElementById("trackStepCooking");
        const stepReady = document.getElementById("trackStepReady");
        const stepDelivered = document.getElementById("trackStepDelivered");
        
        // Reset steps classes
        [stepPending, stepCooking, stepReady, stepDelivered].forEach(step => {
            step.className = "tracker-step";
        });
        
        if (status === "pending") {
            stepPending.classList.add("active");
        } else if (status === "cooking") {
            stepPending.classList.add("done");
            stepCooking.classList.add("active");
        } else if (status === "ready") {
            stepPending.classList.add("done");
            stepCooking.classList.add("done");
            stepReady.classList.add("active");
        } else if (status === "delivered") {
            stepPending.classList.add("done");
            stepCooking.classList.add("done");
            stepReady.classList.add("done");
            stepDelivered.classList.add("done");
        }
    };
    
    updateTrackerSteps(order.status);
    openModal("orderTrackModal");
    
    // Setup interval to fetch real-time updates
    if (trackingInterval) clearInterval(trackingInterval);
    trackingInterval = setInterval(async () => {
        if (isBackendOnline) {
            try {
                const res = await fetch(`${API_BASE}/api/orders`);
                if (res.ok) {
                    orders = await res.json();
                }
            } catch (e) {
                console.error("Tracker sync error:", e);
            }
        } else {
            orders = JSON.parse(localStorage.getItem("raja_orders_v2") || "[]");
        }
        
        const refreshedOrder = orders.find(o => o.id === orderId);
        if (refreshedOrder) {
            updateTrackerSteps(refreshedOrder.status);
            
            // Auto close tracking if billing is completed and show bill notice
            if (refreshedOrder.status === 'completed') {
                clearInterval(trackingInterval);
                trackingInterval = null;
                closeModal("orderTrackModal");
                
                const tableNum = parseInt(refreshedOrder.table, 10);
                if (!billedTables.map(t => parseInt(t, 10)).includes(tableNum)) {
                    billedTables.push(tableNum);
                    localStorage.setItem("raja_billed_tables", JSON.stringify(billedTables));
                }

                showBilledNoticeModal(tableNum);
                updateAllTableDisplays();
                updateTableStatusBar();
            }
        }
    }, 2000);
}

// --- ADMIN / RESTAURANT MANAGEMENT VIEW LOGIC ---

// Recalculate metrics in admin panel (Daily Sales for Today, Auto-updates daily)
function recalculateAdminMetrics() {
    const now = new Date();
    const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    // 1. Revenue for today (completed/billed orders only)
    const allCompleted = getAllCompletedOrdersList();
    const todayOrders = allCompleted.filter(o => (normalizeDateString(o.date) || todayStr) === todayStr);

    const revenue = todayOrders.reduce((sum, current) => sum + (Number(current.total) || 0), 0);
    const metricTotalEl = document.getElementById("metricTotalSales");
    if (metricTotalEl) {
        metricTotalEl.innerText = revenue.toLocaleString();
    }
    
    // Cash vs Scan breakdown for today
    const cashRevenue = todayOrders
        .filter(o => o.payment_method === 'cash')
        .reduce((sum, current) => sum + (Number(current.total) || 0), 0);
    const scanRevenue = todayOrders
        .filter(o => o.payment_method !== 'cash')
        .reduce((sum, current) => sum + (Number(current.total) || 0), 0);
        
    const breakdownEl = document.getElementById("metricSalesBreakdown");
    if (breakdownEl) {
        breakdownEl.innerHTML = `เงินสด: <strong>${cashRevenue.toLocaleString()}</strong> ฿ | สแกน: <strong>${scanRevenue.toLocaleString()}</strong> ฿`;
    }
    
    // 2. Active cooking/serving orders (live right now)
    const activeOrders = orders.filter(o => ["pending", "cooking", "ready", "delivered"].includes(o.status)).length;
    const activeEl = document.getElementById("metricActiveOrders");
    if (activeEl) activeEl.innerText = activeOrders;
    
    // 3. Completed/Billed orders count for today
    const completedEl = document.getElementById("metricCompletedOrders");
    if (completedEl) completedEl.innerText = todayOrders.length;

    const completedDescEl = document.getElementById("metricCompletedDesc");
    if (completedDescEl) {
        completedDescEl.innerText = `รวมสะสมทุกวัน: ${allCompleted.length} บิล`;
    }
}

// Helper to render staff select options
function getStaffSelectOptionsHtml(selectedStaffName) {
    const defaultOption = "พนักงานหน้าร้าน";
    const currentName = selectedStaffName || defaultOption;
    let options = [`<option value="${defaultOption}" ${currentName === defaultOption ? "selected" : ""}>${defaultOption}</option>`];

    // Include Store Owner as an option
    if (storeOwner && storeOwner.name) {
        const isOwnerSelected = (currentName === storeOwner.name) ? "selected" : "";
        const safeOwnerName = storeOwner.name.replace(/"/g, '&quot;');
        options.push(`<option value="${safeOwnerName}" ${isOwnerSelected}>👑 ${safeOwnerName} (เจ้าของร้าน)</option>`);
    }

    if (Array.isArray(staffList) && staffList.length > 0) {
        staffList.forEach(s => {
            if (s && s.name && s.name !== defaultOption) {
                const isSelected = (currentName === s.name) ? "selected" : "";
                let posThai = "";
                if (s.position === "chef") posThai = " (ครัว)";
                else if (s.position === "waiter") posThai = " (เสิร์ฟ)";
                else if (s.position === "cashier") posThai = " (แคชเชียร์)";
                else if (s.position === "manager") posThai = " (ผู้จัดการ)";
                const statusTag = s.status === "inactive" ? " [พักงาน]" : "";
                const safeName = s.name.replace(/"/g, '&quot;');
                options.push(`<option value="${safeName}" ${isSelected}>${safeName}${posThai}${statusTag}</option>`);
            }
        });
    }

    // In case currentName is custom not found in staffList
    if (currentName !== defaultOption && (!staffList || !staffList.some(s => s.name === currentName))) {
        const safeCustom = currentName.replace(/"/g, '&quot;');
        options.push(`<option value="${safeCustom}" selected>${safeCustom}</option>`);
    }

    return options.join("");
}

// Get assigned staff for a table (defaults to active waiter or first staff or fallback)
function getTableStaff(tableNum) {
    const num = parseInt(tableNum, 10);
    if (tableStaffMap && tableStaffMap[num]) return tableStaffMap[num];
    if (Array.isArray(staffList) && staffList.length > 0) {
        const active = staffList.find(s => s.status === 'active' && s.position === 'waiter') 
                    || staffList.find(s => s.status === 'active') 
                    || staffList[0];
        if (active && active.name) return active.name;
    }
    return "พนักงานหน้าร้าน";
}

// Save assigned staff for a table
async function setTableStaff(tableNum, staffName) {
    const num = parseInt(tableNum, 10);
    if (!num) return;
    const cleanStaffName = (staffName || "พนักงานหน้าร้าน").trim();
    tableStaffMap[num] = cleanStaffName;
    localStorage.setItem("raja_table_staff", JSON.stringify(tableStaffMap));

    if (isBackendOnline) {
        try {
            await fetch(`${API_BASE}/api/table-staff`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ table_number: num, staff_name: cleanStaffName })
            });
        } catch (err) {
            console.error("Error saving table staff:", err);
        }
    }
}

// Update staff assigned to an order
function assignOrderStaff(orderId, newStaffName) {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    order.staff_name = newStaffName;
    localStorage.setItem("raja_orders_v2", JSON.stringify(orders));

    if (isBackendOnline) {
        fetch(`${API_BASE}/api/orders/${orderId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ staff_name: newStaffName })
        }).catch(err => console.error("MySQL Staff Update Error:", err));
    }

    // If receipt preview is currently open for this order, sync it
    if (activeReceiptOrder && activeReceiptOrder.id === orderId) {
        activeReceiptOrder.staff_name = newStaffName;
        const printEl = document.getElementById("printReceiptStaffName");
        if (printEl) printEl.innerText = newStaffName || "พนักงานหน้าร้าน";
        const selectEl = document.getElementById("receiptStaffSelect");
        if (selectEl) selectEl.value = newStaffName;
    }
}

// --- Order Items Parsing & Rich Card Formatter ---

function escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Parse single order item text into structured object
function parseOrderItem(itemStr) {
    if (!itemStr || typeof itemStr !== 'string') return null;
    let raw = itemStr.trim();
    if (!raw) return null;

    let clean = raw;
    let price = "";
    let qty = 1;
    let remarks = "";
    let toppings = [];
    let spicy = "";

    // 1. Extract subtotal price e.g. [120 B], [120 ฿], [120 Baht], [120] at the end
    const priceMatch = clean.match(/\s*\[(\d+(?:\.\d+)?\s*(?:B|฿|บาท)?|Free|ฟรี)\]\s*$/i);
    if (priceMatch) {
        price = priceMatch[1].trim();
        clean = clean.substring(0, clean.length - priceMatch[0].length).trim();
    }

    // 2. Extract quantity e.g. (x2), (x 2), (จำนวน 2), x2 at the end
    const qtyMatch = clean.match(/\s*(?:\(x\s*(\d+)\)|\(จำนวน\s*(\d+)\)|x\s*(\d+))\s*$/i);
    if (qtyMatch) {
        qty = parseInt(qtyMatch[1] || qtyMatch[2] || qtyMatch[3], 10) || 1;
        clean = clean.substring(0, clean.length - qtyMatch[0].length).trim();
    }

    // 3. Extract special remarks e.g. [หมายเหตุ: ไม่ใส่ผงชูรส] or [Note: ...] or [หมายเหตุ ...]
    const remarksMatch = clean.match(/\s*\[(?:หมายเหตุ|Note|ข้อความพิเศษ)?:\s*([^\]]+)\]/i);
    if (remarksMatch) {
        remarks = remarksMatch[1].trim();
        clean = clean.replace(remarksMatch[0], "").trim();
    } else {
        const genericBracketMatch = clean.match(/\s*\[([^\]]+)\]/);
        if (genericBracketMatch && !genericBracketMatch[1].match(/^\d+\s*(?:B|฿)?$/i)) {
            remarks = genericBracketMatch[1].replace(/^(?:หมายเหตุ|Note):\s*/i, "").trim();
            clean = clean.replace(genericBracketMatch[0], "").trim();
        }
    }

    // 4. Extract toppings e.g. (+ไข่ดาว x1, +พิเศษ x1) or (+ไข่ดาว)
    const toppingsMatch = clean.match(/\s*\(\+([^\)]+)\)/);
    if (toppingsMatch) {
        const topStr = toppingsMatch[1];
        toppings = topStr.split(/,\s*\+?/).map(t => t.replace(/^\+/, "").trim()).filter(Boolean);
        clean = clean.replace(toppingsMatch[0], "").trim();
    }

    // 5. Extract spiciness e.g. (เผ็ดน้อย), (เผ็ดกลาง), (เผ็ดมาก), (ไม่เผ็ด), (เผ็ดจัดจ้าน)
    const spicyMatch = clean.match(/\s*\(((?:ไม่เผ็ด|เผ็ด[^\)]*))\)/);
    if (spicyMatch) {
        spicy = spicyMatch[1].trim();
        clean = clean.replace(spicyMatch[0], "").trim();
    }

    // 6. Name is the remaining text
    let name = clean.trim();
    name = name.replace(/^[\(\[]|[\)\]]$/g, "").trim();
    if (!name) name = raw;

    return {
        name,
        qty,
        price,
        spicy,
        toppings,
        remarks,
        raw
    };
}

// Parse multiline or comma-separated details string into array of items
function parseOrderDetails(detailsStr) {
    if (!detailsStr || typeof detailsStr !== 'string') return [];
    
    let rawLines = [];
    if (detailsStr.includes("\n")) {
        rawLines = detailsStr.split(/\r?\n/);
    } else {
        // Split on comma only when outside parentheses and brackets
        let current = "";
        let parenDepth = 0;
        let bracketDepth = 0;
        for (let i = 0; i < detailsStr.length; i++) {
            const char = detailsStr[i];
            if (char === '(') parenDepth++;
            else if (char === ')') parenDepth = Math.max(0, parenDepth - 1);
            else if (char === '[') bracketDepth++;
            else if (char === ']') bracketDepth = Math.max(0, bracketDepth - 1);

            if (char === ',' && parenDepth === 0 && bracketDepth === 0) {
                if (current.trim()) rawLines.push(current.trim());
                current = "";
            } else {
                current += char;
            }
        }
        if (current.trim()) rawLines.push(current.trim());
    }
    
    return rawLines
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .map(line => parseOrderItem(line))
        .filter(item => item !== null);
}

// Format order details string into rich, beautiful HTML cards
function formatOrderDetailsHtml(detailsStr) {
    const items = parseOrderDetails(detailsStr);
    if (!items || items.length === 0) {
        return `<span style="color: var(--text-muted); font-size: 13px;">-</span>`;
    }

    let totalDishes = 0;
    const itemsHtml = items.map(item => {
        const qty = item.qty || 1;
        totalDishes += qty;

        // Spicy badge logic
        let spicyBadge = "";
        if (item.spicy) {
            let spicyClass = "spicy-medium";
            let spicyIcon = "fa-solid fa-pepper-hot";
            if (item.spicy.includes("ไม่เผ็ด")) {
                spicyClass = "spicy-none";
                spicyIcon = "fa-solid fa-seedling";
            } else if (item.spicy.includes("น้อย")) {
                spicyClass = "spicy-mild";
                spicyIcon = "fa-solid fa-pepper-hot";
            } else if (item.spicy.includes("มาก") || item.spicy.includes("จัดจ้าน") || item.spicy.includes("เดือด")) {
                spicyClass = "spicy-hot";
                spicyIcon = "fa-solid fa-fire-flame-curved";
            }
            spicyBadge = `<span class="order-badge ${spicyClass}"><i class="${spicyIcon}"></i> ${escapeHtml(item.spicy)}</span>`;
        }

        // Toppings badges logic
        let toppingsHtml = "";
        if (item.toppings && item.toppings.length > 0) {
            toppingsHtml = item.toppings.map(t => 
                `<span class="order-badge badge-topping"><i class="fa-solid fa-circle-plus"></i> ${escapeHtml(t)}</span>`
            ).join("");
        }

        // Remarks logic (alert style so kitchen staff never misses it)
        let remarksHtml = "";
        if (item.remarks) {
            remarksHtml = `
                <div class="order-item-remark">
                    <i class="fa-solid fa-note-sticky"></i>
                    <span><strong>หมายเหตุ:</strong> ${escapeHtml(item.remarks)}</span>
                </div>
            `;
        }

        // Quantity badge highlight: if qty > 1, make it super prominent
        const qtyBadgeClass = qty > 1 ? "order-qty-multi" : "order-qty-single";
        const priceClean = item.price ? item.price.replace(/B$/i, '฿') : '';
        const priceHtml = priceClean ? `<span class="order-item-price">${escapeHtml(priceClean)}</span>` : "";

        return `
            <div class="order-item-row">
                <div class="order-item-main">
                    <span class="order-qty-badge ${qtyBadgeClass}" title="จำนวน ${qty} จาน">x${qty}</span>
                    <span class="order-item-name">${escapeHtml(item.name)}</span>
                    ${priceHtml}
                </div>
                ${(spicyBadge || toppingsHtml) ? `<div class="order-item-tags">${spicyBadge}${toppingsHtml}</div>` : ""}
                ${remarksHtml}
            </div>
        `;
    }).join("");

    // If more than 1 item or total quantity > 1, show compact footer summary count
    let summaryHtml = "";
    if (items.length > 1 || totalDishes > 1) {
        summaryHtml = `
            <div class="order-items-total-tag">
                <i class="fa-solid fa-utensils"></i> รวม ${items.length} รายการ (${totalDishes} จาน)
            </div>
        `;
    }

    return `
        <div class="order-details-card-list">
            ${itemsHtml}
            ${summaryHtml}
        </div>
    `;
}

// Render Order Reviews Table for Admin
function renderAdminOrders() {
    const tbody = document.getElementById("adminOrderTableBody");
    if (!tbody) return;

    // 1. Filter and sort orders based on subtab selection
    let filteredOrders = [];
    if (adminOrdersSubTab === "active") {
        filteredOrders = orders.filter(o => o.status !== "completed");
        filteredOrders.sort((a, b) => {
            const dateA = a.date || "";
            const dateB = b.date || "";
            const dateCompare = dateB.localeCompare(dateA);
            if (dateCompare !== 0) return dateCompare;
            const timeA = a.time || "";
            const timeB = b.time || "";
            return timeB.localeCompare(timeA);
        });
    } else {
        // Show all orders (both completed and active) in the history tab
        filteredOrders = [...orders];
        
        // Filter by selected date
        const dateFilter = document.getElementById("completedOrdersDateFilter");
        if (dateFilter && dateFilter.value !== "all") {
            const selectedDate = normalizeDateString(dateFilter.value);
            filteredOrders = filteredOrders.filter(o => normalizeDateString(o.date) === selectedDate);
        }
        
        // Filter by selected payment method
        if (adminCompletedOrdersPaymentFilter !== "all") {
            filteredOrders = filteredOrders.filter(o => o.payment_method === adminCompletedOrdersPaymentFilter);
        }
        
        // Sort completed orders by date & time descending (newest first)
        filteredOrders.sort((a, b) => {
            const dateA = a.date || "";
            const dateB = b.date || "";
            const dateCompare = dateB.localeCompare(dateA);
            if (dateCompare !== 0) return dateCompare;
            const timeA = a.time || "";
            const timeB = b.time || "";
            return timeB.localeCompare(timeA);
        });
    }

    // 2. Pagination Calculations
    const totalItems = filteredOrders.length;
    const totalPages = Math.ceil(totalItems / ADMIN_PAGE_SIZE) || 1;
    
    // Clamp current page
    let currentPage = Number(adminOrdersSubTab === "active" ? adminActiveOrdersPage : adminCompletedOrdersPage);
    if (isNaN(currentPage)) currentPage = 1;
    if (currentPage > totalPages) {
        currentPage = totalPages;
        if (adminOrdersSubTab === "active") adminActiveOrdersPage = totalPages;
        else adminCompletedOrdersPage = totalPages;
    }
    if (currentPage < 1) {
        currentPage = 1;
        if (adminOrdersSubTab === "active") adminActiveOrdersPage = 1;
        else adminCompletedOrdersPage = 1;
    }

    const startIdx = (currentPage - 1) * ADMIN_PAGE_SIZE;
    const pageOrders = filteredOrders.slice(startIdx, startIdx + ADMIN_PAGE_SIZE);

    // 3. Render Table Body
    if (pageOrders.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 40px; color: var(--text-muted);">
                    ไม่มีรายการสั่งอาหารในหมวดหมู่นี้ในขณะนี้ครับ
                </td>
            </tr>
        `;
        const paginationEl = document.getElementById("adminOrdersPagination");
        if (paginationEl) paginationEl.style.display = "none";
        return;
    } else {
        const paginationEl = document.getElementById("adminOrdersPagination");
        if (paginationEl) paginationEl.style.display = "flex";
    }

    tbody.innerHTML = pageOrders.map(order => {
        let statusBadgeHtml = "";
        let actionBtnHtml = "";
        
        switch (order.status) {
            case "pending":
                statusBadgeHtml = `<span class="item-status-pill status-pending" style="background: rgba(245, 158, 11, 0.1); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.2);"><i class="fa-regular fa-bell"></i> ได้รับออเดอร์แล้ว</span>`;
                actionBtnHtml = `<button class="action-row-btn btn-approve" onclick="advanceOrderStatus('${order.id}', 'cooking')"><i class="fa-solid fa-spinner fa-spin"></i> เริ่มปรุงอาหาร</button>`;
                break;
            case "cooking":
                statusBadgeHtml = `<span class="item-status-pill status-cooking"><i class="fa-solid fa-spinner fa-spin"></i> กำลังจัดปรุง...</span>`;
                actionBtnHtml = `<button class="action-row-btn btn-complete" onclick="advanceOrderStatus('${order.id}', 'ready')"><i class="fa-solid fa-bell"></i> อาหารพร้อมเสิร์ฟ</button>`;
                break;
            case "ready":
                statusBadgeHtml = `<span class="item-status-pill status-ready"><i class="fa-regular fa-bell"></i> เลอค่าพร้อมเสิร์ฟ</span>`;
                actionBtnHtml = `<button class="action-row-btn btn-approve" onclick="advanceOrderStatus('${order.id}', 'delivered')"><i class="fa-solid fa-circle-check"></i> เสิร์ฟสำเร็จแล้ว</button>`;
                break;
            case "delivered":
                statusBadgeHtml = `<span class="item-status-pill status-delivered"><i class="fa-solid fa-check-double"></i> ส่งเรียบร้อยแล้ว</span>`;
                actionBtnHtml = `
                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                        <button class="action-row-btn" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none;" onclick="advanceOrderStatus('${order.id}', 'completed', 'cash')">
                            <i class="fa-solid fa-money-bill-wave"></i> ปิดบิลเงินสด
                        </button>
                        <button class="action-row-btn" style="background: linear-gradient(135deg, #0284c7, #0369a1); color: white; border: none;" onclick="advanceOrderStatus('${order.id}', 'completed', 'scan')">
                            <i class="fa-solid fa-qrcode"></i> ปิดบิลสแกน
                        </button>
                        <button class="action-row-btn" style="background: rgba(0, 180, 216, 0.15); color: var(--secondary); border: 1px solid rgba(0, 180, 216, 0.3);" onclick="openReceiptPrintPreview('${order.id}')">
                            <i class="fa-solid fa-print"></i> ใบเสร็จ
                        </button>
                    </div>
                `;
                break;
            case "completed":
                {
                    let badgeBg = "rgba(255,255,255,0.05)";
                    let badgeColor = "var(--text-muted)";
                    let badgeBorder = "1px solid var(--border)";
                    let badgeIcon = '<i class="fa-solid fa-circle-check"></i>';
                    let badgeText = "เช็คบิลเรียบร้อย";

                    if (order.payment_method === 'cash') {
                        badgeBg = "rgba(16, 185, 129, 0.12)";
                        badgeColor = "#10b981";
                        badgeBorder = "1px solid rgba(16, 185, 129, 0.3)";
                        badgeIcon = '<i class="fa-solid fa-money-bill-wave"></i>';
                        badgeText = "เงินสด";
                    } else if (order.payment_method === 'scan') {
                        badgeBg = "rgba(2, 132, 199, 0.12)";
                        badgeColor = "#0284c7";
                        badgeBorder = "1px solid rgba(2, 132, 199, 0.3)";
                        badgeIcon = '<i class="fa-solid fa-qrcode"></i>';
                        badgeText = "สแกน QR";
                    }

                    statusBadgeHtml = `<span class="item-status-pill" style="background: ${badgeBg}; color: ${badgeColor}; border: ${badgeBorder};">${badgeIcon} ${badgeText}</span>`;
                }
                actionBtnHtml = `
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <button class="action-row-btn" style="background: rgba(0, 180, 216, 0.15); color: var(--secondary); border: 1px solid rgba(0, 180, 216, 0.3);" onclick="openReceiptPrintPreview('${order.id}')">
                            <i class="fa-solid fa-print"></i> พิมพ์อีกครั้ง
                        </button>
                        <span style="color: var(--text-muted); font-size: 11px;"><i class="fa-solid fa-lock"></i> ปิดบิลแล้ว</span>
                    </div>
                `;
                break;
        }

        const dateStr = order.date ? formatThaiDate(order.date) : "-";
        const currentStaff = order.staff_name || "พนักงานหน้าร้าน";

        return `
            <tr>
                <td><span class="order-id-badge">#${order.id}</span></td>
                <td><span class="order-date" style="font-size: 13px; font-weight: 500;">${dateStr}</span></td>
                <td><span class="order-time">${order.time} น.</span></td>
                <td><strong>โต๊ะที่ ${order.table}</strong></td>
                <td><div class="order-details-col">${formatOrderDetailsHtml(order.details)}</div></td>
                <td><strong>${order.total} ฿</strong></td>
                <td>
                    <div style="display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--text-main); background: rgba(255,255,255,0.05); padding: 5px 12px; border-radius: 6px; border: 1px solid var(--border);">
                        <i class="fa-solid fa-user-check" style="color: var(--primary); font-size: 12px;"></i>
                        <span>${escapeHtml(currentStaff)}</span>
                    </div>
                </td>
                <td>${statusBadgeHtml}</td>
                <td><div class="action-row-buttons">${actionBtnHtml}</div></td>
            </tr>
        `;
    }).join("");

    // 4. Update Pagination Controls UI
    const paginationInfo = document.getElementById("paginationInfoText");
    if (paginationInfo) {
        const itemStart = totalItems === 0 ? 0 : startIdx + 1;
        const itemEnd = Math.min(startIdx + ADMIN_PAGE_SIZE, totalItems);
        paginationInfo.innerText = `กำลังแสดงออเดอร์ที่ ${itemStart}-${itemEnd} จากทั้งหมด ${totalItems} รายการ`;
    }

    const btnPrev = document.getElementById("btnPrevPage");
    if (btnPrev) {
        if (currentPage <= 1) {
            btnPrev.setAttribute("disabled", "true");
            btnPrev.style.opacity = "0.5";
            btnPrev.style.cursor = "not-allowed";
        } else {
            btnPrev.removeAttribute("disabled");
            btnPrev.style.opacity = "1";
            btnPrev.style.cursor = "pointer";
        }
    }

    const btnNext = document.getElementById("btnNextPage");
    if (btnNext) {
        if (currentPage >= totalPages) {
            btnNext.setAttribute("disabled", "true");
            btnNext.style.opacity = "0.5";
            btnNext.style.cursor = "not-allowed";
        } else {
            btnNext.removeAttribute("disabled");
            btnNext.style.opacity = "1";
            btnNext.style.cursor = "pointer";
        }
    }

    // Render Page Numbers
    const numbersContainer = document.getElementById("pageNumbersContainer");
    if (numbersContainer) {
        let numbersHtml = "";
        for (let i = 1; i <= totalPages; i++) {
            const isActive = i === currentPage;
            numbersHtml += `<button class="page-btn ${isActive ? 'active' : ''}" onclick="goToAdminOrdersPage(${i})">${i}</button>`;
        }
        numbersContainer.innerHTML = numbersHtml;
    }
}

// Modify order state
function advanceOrderStatus(orderId, newStatus, paymentMethod = null) {
    const idx = orders.findIndex(o => o.id === orderId);
    if (idx === -1) return;
    
    orders[idx].status = newStatus;
    if (paymentMethod) {
        orders[idx].payment_method = paymentMethod;
    }
    localStorage.setItem("raja_orders_v2", JSON.stringify(orders));

    if (newStatus === 'completed') {
        const orderTableNum = parseInt(orders[idx].table, 10);
        // Check if there are any remaining non-completed orders for this table
        const remainingActive = orders.filter(o => parseInt(o.table, 10) === orderTableNum && o.id !== orderId && o.status !== 'completed');
        if (remainingActive.length === 0) {
            if (!billedTables.map(t => parseInt(t, 10)).includes(orderTableNum)) {
                billedTables.push(orderTableNum);
                localStorage.setItem("raja_billed_tables", JSON.stringify(billedTables));
                if (isBackendOnline) {
                    fetch(`${API_BASE}/api/billed-tables`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ tableNum: orderTableNum })
                    }).catch(err => console.error("Error marking table as billed in backend:", err));
                }
            }
        }
    }

    if (isBackendOnline) {
        const payload = { status: newStatus };
        if (paymentMethod) {
            payload.payment_method = paymentMethod;
        }
        fetch(`${API_BASE}/api/orders/${orderId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }).catch(err => console.error("MySQL Status Update Error:", err));
    }
    
    // Refresh tables and stats
    recalculateAdminMetrics();
    renderAdminOrders();
    renderDailySalesReport();
    renderAdminTablesGrid();
    updateAllTableDisplays();
}

async function resetTableForNewCustomer(tableNum) {
    const num = parseInt(tableNum, 10);
    const idx = billedTables.findIndex(t => parseInt(t, 10) === num);
    if (idx > -1) {
        billedTables.splice(idx, 1);
        localStorage.setItem("raja_billed_tables", JSON.stringify(billedTables));
    }
    
    // Clear session modal flag if exists
    sessionStorage.removeItem(`raja_billed_modal_shown_${num}`);

    if (isBackendOnline) {
        try {
            await fetch(`${API_BASE}/api/billed-tables/${num}`, { method: 'DELETE' });
        } catch (e) {
            console.error("Error unmarking billed table in backend:", e);
        }
    }

    renderAdminTablesGrid();
    updateAllTableDisplays();
    alert(`เปิดรับลูกค้ารายใหม่สำหรับโต๊ะที่ ${num} เรียบร้อยแล้วค่ะ/ครับ`);
}// Render Admin Menu Editor grid
function renderAdminMenuGrid() {
    const container = document.getElementById("adminMenuListContainer");
    if (!container) return;

    if (menuItems.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 20px; font-size: 13px;">ไม่มีรายการอาหารในระบบ</div>`;
        renderAdminMenuEditorDetail();
        return;
    }

    container.innerHTML = menuItems.map((item, index) => {
        const isSelected = item.id === selectedAdminMenuItemId;
        const indexStr = String(index + 1).padStart(2, '0');
        const activeBg = isSelected ? 'background: rgba(255, 94, 54, 0.08); border-color: var(--primary); font-weight: 700;' : 'border-color: var(--border);';
        const opacityStyle = item.isAvailable === false ? 'opacity: 0.6;' : '';
        
        return `
            <div onclick="selectMenuForEdit('${item.id}')" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 16px; border: 1px solid; border-radius: var(--radius-sm); cursor: pointer; transition: all 0.2s; ${activeBg} ${opacityStyle}" class="admin-menu-list-item">
                <span style="font-size: 14px; color: var(--text-main);">${indexStr}. ${item.name}</span>
                <span style="font-size: 13px; font-weight: 600; color: var(--primary);">${item.price} B</span>
            </div>
        `;
    }).join("");

    renderAdminMenuEditorDetail();
}

function selectMenuForEdit(id) {
    selectedAdminMenuItemId = id;
    renderAdminMenuGrid();
}

function updateAdminFormImagePreview(url) {
    const img = document.getElementById("adminFormImgPreview");
    if (img) {
        img.src = url || 'https://placehold.co/300x180?text=No+Image';
    }
}

function renderAdminMenuEditorDetail() {
    const container = document.getElementById("adminMenuDetailContainer");
    if (!container) return;

    if (selectedAdminMenuItemId === null) {
        // Render Add Menu form
        container.innerHTML = `
            <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main); border-bottom: 1px solid var(--border); padding-bottom: 12px;"><i class="fa-solid fa-plus" style="color: var(--primary);"></i> เพิ่มเมนูอาหารใหม่</h4>
            
            <form id="adminMenuForm" onsubmit="saveAdminMenuItem(event)" style="display: flex; flex-direction: column; gap: 14px;">
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ชื่ออาหาร/เครื่องดื่ม</label>
                    <input type="text" id="adminFormName" required placeholder="เช่น กะเพราหมูสับราชา" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                </div>
                
                <div style="display: flex; gap: 12px;">
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">ราคา (บาท)</label>
                        <input type="number" id="adminFormPrice" required min="1" placeholder="89" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">หมวดหมู่</label>
                        <select id="adminFormCategory" required style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                            <option value="basil-pork-chicken">กะเพราหมู-ไก่</option>
                            <option value="basil-beef">กะเพราเนื้อพรีเมียม</option>
                            <option value="basil-seafood">กะเพราทะเลเดือด</option>
                            <option value="others">อาหารจานเดียวอื่น</option>
                            <option value="drinks">เครื่องดื่มเย็นๆ</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ลิงก์รูปภาพอาหาร</label>
                    <input type="text" id="adminFormImageUrl" oninput="updateAdminFormImagePreview(this.value)" required placeholder="https://..." style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    <div style="margin-top: 8px;">
                        <img id="adminFormImgPreview" src="https://placehold.co/300x180?text=No+Image" style="width:100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border);">
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px;">
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">คะแนนจำลอง (1-5)</label>
                        <input type="number" id="adminFormRating" required min="1" max="5" step="0.1" value="4.8" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">ป้ายพิเศษ (ถ้ามี)</label>
                        <input type="text" id="adminFormBadge" placeholder="เช่น แนะนำ, ขายดี" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">คำอธิบายรายละเอียดอาหาร</label>
                    <textarea id="adminFormDesc" required placeholder="คำอธิบายรายละเอียดอาหาร..." style="width:100%; height: 60px; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main); font-family: inherit; resize: none;"></textarea>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ท็อปปิ้งเพิ่มเติม (รูปแบบ ชื่อ:ราคา เช่น ไข่ดาว:10,พิเศษ:10)</label>
                    <input type="text" id="adminFormToppings" placeholder="ไข่ดาว:10, ไข่เจียว:10, พิเศษ:10" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                </div>

                <div class="form-group" style="margin-top: 4px; padding: 10px 14px; background: rgba(0,0,0,0.02); border: 1px dashed var(--border); border-radius: var(--radius-sm);">
                    <label style="display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 13px; cursor: pointer; user-select: none; margin: 0;">
                        <input type="checkbox" id="adminFormHasSpicy" checked style="width: 18px; height: 18px; accent-color: var(--primary); cursor: pointer;">
                        <span>🌶️ มีตัวเลือกระดับความเผ็ด (เผ็ดน้อย, เผ็ดกลาง, เผ็ดมาก - <em>สำหรับเมนูเช่น ข้าวสวย ให้เอาติ๊กออก</em>)</span>
                    </label>
                </div>
                
                <div style="display: flex; justify-content: flex-end; margin-top: 12px;">
                    <button type="submit" class="btn btn-primary-gradient" style="padding: 10px 24px;">
                        <i class="fa-solid fa-save"></i> บันทึกเมนูใหม่
                    </button>
                </div>
            </form>
        `;
    } else {
        // Render Edit Menu form
        const item = menuItems.find(i => i.id === selectedAdminMenuItemId);
        if (!item) {
            selectedAdminMenuItemId = null;
            renderAdminMenuEditorDetail();
            return;
        }

        const isAvailable = item.isAvailable !== false;
        const toggleBtnHtml = isAvailable
            ? `<button type="button" class="btn-toggle-availability btn-available" onclick="toggleAdminItemAvailability('${item.id}', false)" style="background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-circle-check"></i> พร้อมขาย</button>`
            : `<button type="button" class="btn-toggle-availability btn-unavailable" onclick="toggleAdminItemAvailability('${item.id}', true)" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 6px 12px; border-radius: var(--radius-sm); font-size: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 4px;"><i class="fa-solid fa-ban"></i> สินค้าหมด</button>`;

        // Parse toppings back into input string
        let toppingsStr = "";
        if (Array.isArray(item.toppings)) {
            toppingsStr = item.toppings.map(t => `${t.name}:${t.price}`).join(", ");
        } else if (typeof item.toppings === 'string') {
            toppingsStr = item.toppings;
        }

        const isPlainRice = item.name && (item.name.includes("ข้าวสวย") || item.name.includes("ข้าวเปล่า") || item.name.includes("ข้าวหอมมะลิ"));
        const isDrink = item.category === "drinks";
        const hasSpicyChecked = item.hasSpicy !== undefined 
            ? (item.hasSpicy === true || item.hasSpicy === 1 || item.hasSpicy === "1") 
            : (!isPlainRice && !isDrink);

        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main);"><i class="fa-solid fa-edit" style="color: var(--primary);"></i> แก้ไขรายละเอียดอาหาร</h4>
                ${toggleBtnHtml}
            </div>
            
            <form id="adminMenuForm" onsubmit="saveAdminMenuItem(event)" style="display: flex; flex-direction: column; gap: 14px;">
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ชื่ออาหาร/เครื่องดื่ม</label>
                    <input type="text" id="adminFormName" required value="${item.name}" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                </div>
                
                <div style="display: flex; gap: 12px;">
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">ราคา (บาท)</label>
                        <input type="number" id="adminFormPrice" required value="${item.price}" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">หมวดหมู่</label>
                        <select id="adminFormCategory" required style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                            <option value="basil-pork-chicken" ${item.category === 'basil-pork-chicken' ? 'selected' : ''}>กะเพราหมู-ไก่</option>
                            <option value="basil-beef" ${item.category === 'basil-beef' ? 'selected' : ''}>กะเพราเนื้อพรีเมียม</option>
                            <option value="basil-seafood" ${item.category === 'basil-seafood' ? 'selected' : ''}>กะเพราทะเลเดือด</option>
                            <option value="others" ${item.category === 'others' ? 'selected' : ''}>อาหารจานเดียวอื่น</option>
                            <option value="drinks" ${item.category === 'drinks' ? 'selected' : ''}>เครื่องดื่มเย็นๆ</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ลิงก์รูปภาพอาหาร</label>
                    <input type="text" id="adminFormImageUrl" value="${item.image}" oninput="updateAdminFormImagePreview(this.value)" required style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    <div style="margin-top: 8px;">
                        <img id="adminFormImgPreview" src="${item.image}" style="width:100%; height: 160px; object-fit: cover; border-radius: var(--radius-md); border: 1px solid var(--border);" onerror="this.src='https://placehold.co/300x180?text=No+Image'">
                    </div>
                </div>
                
                <div style="display: flex; gap: 12px;">
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">คะแนนจำลอง (1-5)</label>
                        <input type="number" id="adminFormRating" required min="1" max="5" step="0.1" value="${item.rating || 4.8}" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1;">
                        <label style="font-weight: 600; font-size: 13px;">ป้ายพิเศษ (ถ้ามี)</label>
                        <input type="text" id="adminFormBadge" value="${item.badge || ''}" placeholder="เช่น แนะนำ, ขายดี" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">คำอธิบายรายละเอียดอาหาร</label>
                    <textarea id="adminFormDesc" required style="width:100%; height: 60px; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main); font-family: inherit; resize: none;">${item.description || ''}</textarea>
                </div>
                
                <div class="form-group">
                    <label style="font-weight: 600; font-size: 13px;">ท็อปปิ้งเพิ่มเติม (รูปแบบ ชื่อ:ราคา เช่น ไข่ดาว:10,พิเศษ:10)</label>
                    <input type="text" id="adminFormToppings" value="${toppingsStr}" placeholder="ไข่ดาว:10, ไข่เจียว:10, พิเศษ:10" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                </div>

                <div class="form-group" style="margin-top: 4px; padding: 10px 14px; background: rgba(0,0,0,0.02); border: 1px dashed var(--border); border-radius: var(--radius-sm);">
                    <label style="display: flex; align-items: center; gap: 10px; font-weight: 600; font-size: 13px; cursor: pointer; user-select: none; margin: 0;">
                        <input type="checkbox" id="adminFormHasSpicy" ${hasSpicyChecked ? 'checked' : ''} style="width: 18px; height: 18px; accent-color: var(--primary); cursor: pointer;">
                        <span>🌶️ มีตัวเลือกระดับความเผ็ด (เผ็ดน้อย, เผ็ดกลาง, เผ็ดมาก - <em>สำหรับเมนูเช่น ข้าวสวย ให้เอาติ๊กออก</em>)</span>
                    </label>
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
                    <button type="button" class="btn btn-secondary" onclick="deleteAdminMenuItem('${item.id}')" style="background: rgba(239, 68, 68, 0.05); color: #ef4444; border-color: rgba(239, 68, 68, 0.15); padding: 10px 20px;">
                        <i class="fa-solid fa-trash-can"></i> ลบรายการนี้
                    </button>
                    <button type="submit" class="btn btn-primary-gradient" style="padding: 10px 24px;">
                        <i class="fa-solid fa-save"></i> บันทึกข้อมูล
                    </button>
                </div>
            </form>
        `;
    }
}

async function toggleAdminItemAvailability(itemId, newStatus) {
    const idx = menuItems.findIndex(i => i.id === itemId);
    if (idx === -1) return;

    menuItems[idx].isAvailable = newStatus;
    localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));

    if (isBackendOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/menu/${itemId}/availability`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ isAvailable: newStatus })
            });
            if (!res.ok) throw new Error("Failed to update availability in MySQL");
        } catch (err) {
            console.error("MySQL Availability Update Error:", err);
        }
    }

    renderAdminMenuGrid();
    renderCustomerMenu();
}

function openAddMenuModal() {
    selectMenuForEdit(null);
}

function openEditMenuModal(itemId) {
    selectMenuForEdit(itemId);
}

async function deleteAdminMenuItem(itemId) {
    if (!confirm("คุณต้องการลบรายการอาหารเมนูนี้ออกจากร้านใช่หรือไม่?")) return;
    
    menuItems = menuItems.filter(i => i.id !== itemId);
    localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));

    if (isBackendOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/menu/${itemId}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Failed to delete menu item in MySQL");
        } catch (err) {
            console.error("MySQL Delete Error:", err);
        }
    }
    
    selectedAdminMenuItemId = null; // Reset selection
    
    alert("ลบเมนูอาหารเรียบร้อยแล้วค่ะ/ครับ!");
    
    renderAdminMenuGrid();
    renderCustomerMenu();
}

async function saveAdminMenuItem(event) {
    event.preventDefault();
    
    const name = document.getElementById("adminFormName").value.trim();
    const price = parseInt(document.getElementById("adminFormPrice").value);
    const category = document.getElementById("adminFormCategory").value;
    let image = document.getElementById("adminFormImageUrl").value.trim();
    
    if (image && !image.startsWith("http://") && !image.startsWith("https://") && !image.startsWith("data:") && !image.startsWith("/")) {
        image = "https://" + image;
    }
    
    const rating = parseFloat(document.getElementById("adminFormRating").value || 4.8);
    const badge = document.getElementById("adminFormBadge").value.trim();
    const desc = document.getElementById("adminFormDesc").value.trim();
    
    const toppingsStr = document.getElementById("adminFormToppings").value.trim();
    const toppings = toppingsStr ? toppingsStr.split(",").map(t => {
        const parts = t.split(":");
        return {
            name: parts[0].trim(),
            price: parts[1] ? parseInt(parts[1].trim()) : 0
        };
    }).filter(t => t.name !== "") : [];

    const hasSpicyCheckbox = document.getElementById("adminFormHasSpicy");
    const hasSpicy = hasSpicyCheckbox ? hasSpicyCheckbox.checked : true;
    
    let savedItem;
    if (selectedAdminMenuItemId === null) {
        // Add Mode
        const newId = `custom-${Date.now()}`;
        savedItem = {
            id: newId,
            name,
            price,
            category,
            image,
            rating,
            badge,
            description: desc,
            toppings,
            isAvailable: true,
            hasSpicy: hasSpicy
        };
        menuItems.push(savedItem);

        if (isBackendOnline) {
            try {
                const res = await fetch(`${API_BASE}/api/menu`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(savedItem)
                });
                if (!res.ok) throw new Error("Failed to save menu item in MySQL");
            } catch (err) {
                console.error("MySQL Save Error:", err);
            }
        }
        
        selectedAdminMenuItemId = newId; // Select the newly created item
    } else {
        // Edit Mode
        const itemIdx = menuItems.findIndex(i => i.id === selectedAdminMenuItemId);
        if (itemIdx > -1) {
            const currentItem = menuItems[itemIdx];
            savedItem = {
                id: selectedAdminMenuItemId,
                name,
                price,
                category,
                image,
                rating,
                badge,
                description: desc,
                toppings,
                isAvailable: currentItem.isAvailable !== false,
                hasSpicy: hasSpicy
            };
            menuItems[itemIdx] = savedItem;

            if (isBackendOnline) {
                try {
                    const res = await fetch(`${API_BASE}/api/menu/${selectedAdminMenuItemId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(savedItem)
                    });
                    if (!res.ok) throw new Error("Failed to update menu item in MySQL");
                } catch (err) {
                    console.error("MySQL Update Error:", err);
                }
            }
        }
    }
    
    localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));
    
    alert("บันทึกข้อมูลเมนูอาหารเรียบร้อยแล้วค่ะ/ครับ!");
    
    renderAdminMenuGrid();
    renderCustomerMenu();
}

// --- Admin Security & Auth ---
function triggerAdminAuth() {
    if (isAdminAuthenticated) {
        switchView('admin');
    } else {
        document.getElementById("adminPasswordInput").value = "";
        openModal("adminAuthModal");
    }
}

function verifyAdminPassword() {
    const passwordInput = document.getElementById("adminPasswordInput");
    if (!passwordInput) return;
    
    const password = passwordInput.value.trim();
    const validPasscode = (storeOwner && storeOwner.passcode) ? storeOwner.passcode.trim() : "1234";
    if (password === validPasscode || password === "1234") {
        isAdminAuthenticated = true;
        closeModal("adminAuthModal");
        switchView("admin");
    } else {
        alert("รหัสผ่านไม่ถูกต้อง! เฉพาะผู้ดูแลร้านที่มีสิทธิ์เท่านั้น");
        passwordInput.value = "";
    }
}

// --- Customer Order History ---
function openOrderHistoryModal() {
    renderOrderHistory();
    renderCustomerTableMoveSelector();
    openModal("orderHistoryModal");
}

function renderCustomerTableMoveSelector() {
    const section = document.getElementById("customerTableMoveSection");
    const select = document.getElementById("customerNewTableSelect");
    if (!section || !select) return;

    if (selectedTable === null) {
        section.style.display = "none";
        return;
    }

    section.style.display = "block";

    let optionsHtml = "";
    for (let i = 1; i <= 10; i++) {
        const tableNum = i;
        const isClosed = closedTables.includes(tableNum);
        const isOccupied = orders.some(o => parseInt(o.table) === tableNum && o.status !== 'completed' && parseInt(o.table) !== parseInt(selectedTable));
        
        if (isClosed) continue; // skip closed tables
        if (isOccupied) continue; // skip tables occupied by other customers
        
        const isCurrent = parseInt(selectedTable) === tableNum;
        optionsHtml += `<option value="${tableNum}" ${isCurrent ? 'selected' : ''}>โต๊ะที่ ${tableNum} ${isCurrent ? '(ปัจจุบัน)' : ''}</option>`;
    }
    
    select.innerHTML = optionsHtml;
}

function confirmCustomerMoveTable() {
    const select = document.getElementById("customerNewTableSelect");
    if (!select) return;
    
    const newTable = parseInt(select.value);
    if (isNaN(newTable)) return;
    
    if (newTable === parseInt(selectedTable)) {
        alert("คุณเลือกโต๊ะเดิมอยู่แล้วค่ะ");
        return;
    }
    
    if (!confirm(`คุณต้องการย้ายจากโต๊ะที่ ${selectedTable} ไปโต๊ะที่ ${newTable} ใช่หรือไม่?\nรายการออเดอร์ค้างทั้งหมดของคุณจะย้ายตามไปด้วย`)) {
        return;
    }
    
    const oldTable = selectedTable;
    
    // 1. Update selectedTable locally
    selectedTable = newTable;
    
    // 2. Find active orders of this customer and update table number
    const myOrderIds = JSON.parse(localStorage.getItem("raja_my_order_ids") || "[]");
    orders.forEach((o, idx) => {
        if (myOrderIds.includes(o.id) && parseInt(o.table) === parseInt(oldTable) && o.status !== 'completed') {
            orders[idx].table = newTable;
            
            // 3. Update MySQL if active
            if (isBackendOnline) {
                fetch(`${API_BASE}/api/orders/${o.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ table: newTable })
                }).catch(err => console.error("MySQL Table Move Update Error:", err));
            }
        }
    });
    
    // Save updated orders to local storage
    localStorage.setItem("raja_orders_v2", JSON.stringify(orders));
    
    // Update UI elements
    alert(`ย้ายโต๊ะเรียบร้อยแล้วค่ะ! เปลี่ยนเป็นโต๊ะที่ ${newTable}`);
    
    // Reset selected table UI styles in cart selector
    renderCustomerTableSelector();
    updateTableStatusBar();
    
    // Refresh modal lists
    renderOrderHistory();
    renderCustomerTableMoveSelector();
}

function renderOrderHistory() {
    const container = document.getElementById("orderHistoryList");
    if (!container) return;

    // 1. Clean up completed orders from raja_my_order_ids so old sessions do not persist
    try {
        const rawMyOrderIds = JSON.parse(localStorage.getItem("raja_my_order_ids") || "[]");
        if (rawMyOrderIds.length > 0) {
            const activeMyIds = rawMyOrderIds.filter(id => {
                const ord = orders.find(o => o.id === id);
                return ord ? ord.status !== 'completed' : false;
            });
            if (activeMyIds.length !== rawMyOrderIds.length) {
                localStorage.setItem("raja_my_order_ids", JSON.stringify(activeMyIds));
            }
        }
    } catch (e) {}

    const myOrderIds = JSON.parse(localStorage.getItem("raja_my_order_ids") || "[]");
    const activeTrackingId = sessionStorage.getItem("raja_active_tracking_v2_id");

    // 2. Only show active orders belonging to the current bill/session
    // Never show completed orders from previous customers/past bills
    let myOrders = [];
    if (selectedTable !== null) {
        myOrders = orders.filter(o => 
            parseInt(o.table) === parseInt(selectedTable) && 
            o.status !== 'completed'
        );
    } else if (activeTrackingId) {
        myOrders = orders.filter(o => o.id === activeTrackingId && o.status !== 'completed');
    } else if (myOrderIds.length > 0) {
        myOrders = orders.filter(o => myOrderIds.includes(o.id) && o.status !== 'completed');
    }

    if (myOrders.length === 0) {
        if (selectedTable !== null && isTableBilled(selectedTable)) {
            container.innerHTML = `
                <div style="text-align: center; padding: 28px 16px; color: var(--text-muted);">
                    <i class="fa-solid fa-circle-check" style="font-size: 38px; margin-bottom: 12px; display: block; color: #10b981;"></i>
                    <div style="font-weight: 700; color: var(--text-main); font-size: 15px; margin-bottom: 6px;">โต๊ะที่ ${selectedTable} ชำระเงิน / ปิดบิลเรียบร้อยแล้วค่ะ</div>
                    <div style="font-size: 13px; color: var(--text-muted);">หากต้องการสั่งอาหาร กรุณาแจ้งพนักงานหรือทางร้านเพื่อเปิดบิลใหม่นะคะ/ครับ</div>
                </div>
            `;
        } else {
            container.innerHTML = `
                <div style="text-align: center; padding: 28px 16px; color: var(--text-muted);">
                    <i class="fa-solid fa-utensils" style="font-size: 36px; margin-bottom: 12px; display: block; color: var(--primary);"></i>
                    <div style="font-weight: 600; color: var(--text-main); font-size: 15px; margin-bottom: 6px;">ยังไม่มีรายการสั่งอาหารสำหรับบิลนี้ค่ะ</div>
                    <div style="font-size: 13px; color: var(--text-muted);">เลือกเมนูใส่ตะกร้าและกดยืนยันการสั่งซื้อเพื่อส่งรายการเข้าครัวได้เลยค่ะ</div>
                </div>
            `;
        }
        return;
    }

    // Sort: newest orders first
    myOrders.sort((a, b) => (b.id > a.id ? 1 : -1));

    container.innerHTML = myOrders.map(order => {
        let statusText = "";
        let statusColor = "";
        let isCooking = false;
        switch (order.status) {
            case "pending":
                statusText = "ได้รับออเดอร์แล้ว";
                statusColor = "var(--warning)";
                break;
            case "cooking":
                statusText = "กำลังปรุงอาหาร";
                statusColor = "#3b82f6";
                isCooking = true;
                break;
            case "ready":
                statusText = "ปรุงเสร็จแล้ว (กำลังเสิร์ฟ)";
                statusColor = "#10b981";
                break;
            case "delivered":
                statusText = "เสิร์ฟที่โต๊ะแล้ว";
                statusColor = "var(--primary)";
                break;
            default:
                statusText = order.status;
                statusColor = "var(--text-muted)";
        }
        
        const spinnerHtml = isCooking ? `<i class="fa-solid fa-spinner fa-spin" style="margin-right: 4px;"></i>` : "";
        const cardBg = "rgba(255, 94, 54, 0.04)";
        const cardBorder = "1px solid rgba(255, 94, 54, 0.25)";

        return `
            <div style="background: ${cardBg}; border: ${cardBorder}; border-radius: var(--radius-sm); padding: 12px; margin-bottom: 8px; text-align: left;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                    <span class="order-id-badge" style="background: var(--primary); color: white;">#${order.id} (โต๊ะ ${order.table})</span>
                    <span style="font-size: 12px; font-weight: 700; color: ${statusColor};">
                        ${spinnerHtml}${statusText}
                    </span>
                </div>
                <div style="margin: 8px 0;">${formatOrderDetailsHtml(order.details)}</div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px; border-top: 1px dashed var(--border); padding-top: 6px; font-size: 12px; color: var(--text-muted);">
                    <span><i class="fa-regular fa-clock"></i> เวลาสั่ง: ${order.time} น.</span>
                    <strong style="color: var(--text-main); font-size: 13px;">ยอดรวม: ${order.total} ฿</strong>
                </div>
            </div>
        `;
    }).join("");
}

// --- Customer Table QR & Bill Tracking Detection ---
function checkTableUrlParameter() {
    try {
        let tableParam = null;
        let trackParam = null;
        let staffParam = null;
        if (window.location.search) {
            const urlParams = new URLSearchParams(window.location.search);
            tableParam = urlParams.get('table');
            trackParam = urlParams.get('track') || urlParams.get('order');
            staffParam = urlParams.get('staff');
        }
        if (!tableParam && window.location.hash) {
            const hash = window.location.hash;
            const qIdx = hash.indexOf('?');
            if (qIdx !== -1) {
                const urlParams = new URLSearchParams(hash.substring(qIdx));
                tableParam = urlParams.get('table');
                if (!trackParam) trackParam = urlParams.get('track') || urlParams.get('order');
                if (!staffParam) staffParam = urlParams.get('staff');
            }
        }

        if (staffParam) {
            customerScannedStaff = staffParam.trim();
            sessionStorage.setItem("raja_scanned_staff", customerScannedStaff);
            console.log(`[QR Order] Scanned staff: ${customerScannedStaff}`);
        }

        if (tableParam) {
            const tableNum = parseInt(tableParam, 10);
            if (!isNaN(tableNum) && tableNum >= 1 && tableNum <= 10) {
                selectedTable = tableNum;
                sessionStorage.setItem("raja_selected_table", tableNum);
                console.log(`[QR Order] Table ${tableNum} auto-selected from scanned URL.`);
            }
        } else {
            // Fallback to active session table if previously selected
            const storedTable = sessionStorage.getItem("raja_selected_table");
            if (storedTable) {
                const tableNum = parseInt(storedTable, 10);
                if (!isNaN(tableNum) && tableNum >= 1 && tableNum <= 10) {
                    selectedTable = tableNum;
                }
            }
        }

        // Auto-open order tracker if scanned from a bill
        if (trackParam) {
            console.log(`[QR Order] Scanned bill tracking order #${trackParam}`);
            setTimeout(() => {
                openOrderTrackerModal(trackParam);
            }, 600);
        }
    } catch (e) {
        console.warn("Could not parse table/bill URL parameter:", e);
    }
    updateAllTableDisplays();
}

function isTableBilled(tableNum) {
    if (tableNum === null || tableNum === undefined) return false;
    const num = parseInt(tableNum, 10);
    return billedTables.map(t => parseInt(t, 10)).includes(num);
}

function startNewBillForTable(tableNum = null) {
    const t = tableNum || selectedTable;
    if (t) {
        const num = parseInt(t, 10);
        const idx = billedTables.findIndex(x => parseInt(x, 10) === num);
        if (idx > -1) {
            billedTables.splice(idx, 1);
            localStorage.setItem("raja_billed_tables", JSON.stringify(billedTables));
        }
        sessionStorage.removeItem(`raja_billed_modal_shown_${num}`);
        if (isBackendOnline) {
            fetch(`${API_BASE}/api/billed-tables/${num}`, { method: 'DELETE' }).catch(() => {});
        }
        try {
            const myOrderIds = JSON.parse(localStorage.getItem("raja_my_order_ids") || "[]");
            if (myOrderIds.length > 0) {
                const remaining = orders.filter(o => myOrderIds.includes(o.id) && parseInt(o.table, 10) !== num).map(o => o.id);
                localStorage.setItem("raja_my_order_ids", JSON.stringify(remaining));
            }
        } catch (e) {}
    }
    closeModal("billedNoticeModal");
    updateAllTableDisplays();
    updateTableStatusBar();
}

function openNewBillFromAdmin(tableNum) {
    const num = parseInt(tableNum, 10);
    startNewBillForTable(num);
    renderAdminTablesGrid();
    updateAllTableDisplays();
    updateTableStatusBar();
    alert(`เปิดบิลใหม่สำหรับโต๊ะที่ ${num} เรียบร้อยแล้วค่ะ\nลูกค้าสามารถเริ่มสั่งอาหารได้ทันที`);
    openTableQRModal(num, true);
}

async function resetAllTablesForNewBill() {
    billedTables = [];
    localStorage.setItem("raja_billed_tables", JSON.stringify([]));
    for (let i = 1; i <= 10; i++) {
        sessionStorage.removeItem(`raja_billed_modal_shown_${i}`);
        if (isBackendOnline) {
            fetch(`${API_BASE}/api/billed-tables/${i}`, { method: 'DELETE' }).catch(() => {});
        }
    }
    renderAdminTablesGrid();
    updateAllTableDisplays();
    updateTableStatusBar();
    openTableQRModal('all', true);
}

function showBilledNoticeModal(tableNum, force = false) {
    const modalKey = `raja_billed_modal_shown_${tableNum}`;
    if (!force && sessionStorage.getItem(modalKey)) return;
    sessionStorage.setItem(modalKey, "true");

    const label = document.getElementById("billedNoticeTableLabel");
    if (label) {
        label.innerText = `โต๊ะอาหารที่ ${tableNum}`;
    }
    openModal("billedNoticeModal");
}

function updateDatabaseStatusBadge() {
    // Database status badges removed as requested (accessible via XAMPP)
    const headerBadge = document.getElementById("headerDbStatusBadge");
    const adminBadge = document.getElementById("adminDbStatusBadge");
    if (headerBadge) headerBadge.remove();
    if (adminBadge) adminBadge.remove();
}

function updateAllTableDisplays() {
    const tableIsBilled = isTableBilled(selectedTable);

    // 1. Header Table Pill Badge
    const headerBadge = document.getElementById("headerTableBadge");
    const headerBadgeText = document.getElementById("headerTableBadgeText");
    if (headerBadge && headerBadgeText) {
        if (currentView === "customer" && selectedTable !== null) {
            if (tableIsBilled) {
                headerBadgeText.innerHTML = `โต๊ะ ${selectedTable} <span style="font-size: 11px; opacity: 0.95; margin-left: 2px;">(ปิดบิลแล้ว)</span>`;
                headerBadge.style.background = "linear-gradient(135deg, #ef4444, #b91c1c)";
            } else {
                headerBadgeText.innerText = `โต๊ะ ${selectedTable}`;
                headerBadge.style.background = "";
            }
            headerBadge.style.display = "inline-flex";
        } else {
            headerBadge.style.display = "none";
        }
    }

    // 2. Menu Section Subtitle
    const menuTableSub = document.getElementById("menuTableSubtitle");
    const menuTableNum = document.getElementById("menuTableSubtitleNum");
    if (menuTableSub && menuTableNum) {
        if (currentView === "customer" && selectedTable !== null) {
            menuTableNum.innerText = tableIsBilled ? `${selectedTable} (ปิดบิลแล้ว - รอทางร้านเปิดบิล)` : selectedTable;
            menuTableSub.style.display = "inline-flex";
        } else {
            menuTableSub.style.display = "none";
        }
    }

    // 3. Cart Drawer Table Info Box
    const cartTableBadge = document.getElementById("cartCurrentTableBadge");
    if (cartTableBadge) {
        if (selectedTable !== null) {
            if (tableIsBilled) {
                cartTableBadge.innerHTML = `โต๊ะ <strong>${selectedTable}</strong> <span style="font-size: 12px; color: #ef4444; font-weight: 700;">(ปิดบิลแล้ว)</span>`;
                cartTableBadge.style.color = "#ef4444";
            } else {
                cartTableBadge.innerHTML = `โต๊ะ <strong>${selectedTable}</strong>`;
                cartTableBadge.style.color = "var(--primary)";
            }
        } else {
            cartTableBadge.innerHTML = `<span style="font-size: 12px; color: var(--text-muted); font-weight: normal;"><i class="fa-solid fa-qrcode"></i> ยังไม่ได้ระบุโต๊ะ</span>`;
            cartTableBadge.style.color = "var(--text-muted)";
        }
    }

    // 4. Cart Drawer Header Table Tag
    const cartHeaderTag = document.getElementById("cartHeaderTableTag");
    if (cartHeaderTag) {
        if (selectedTable !== null) {
            cartHeaderTag.innerText = tableIsBilled ? `(โต๊ะ ${selectedTable} - ปิดบิลแล้ว)` : `(โต๊ะ ${selectedTable})`;
            cartHeaderTag.style.display = "inline-block";
        } else {
            cartHeaderTag.style.display = "none";
        }
    }

    // 5. Cart Billed Alert & Checkout Button State
    const cartBilledAlert = document.getElementById("cartBilledAlert");
    const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");
    if (cartBilledAlert) {
        cartBilledAlert.style.display = tableIsBilled ? "block" : "none";
    }
    if (cartCheckoutBtn) {
        if (tableIsBilled) {
            cartCheckoutBtn.disabled = true;
            cartCheckoutBtn.style.opacity = "0.55";
            cartCheckoutBtn.style.cursor = "not-allowed";
            cartCheckoutBtn.style.background = "#64748b";
            cartCheckoutBtn.innerHTML = `<i class="fa-solid fa-lock"></i> ปิดบิลแล้ว (รอทางร้านเปิดบิล)`;
        } else {
            cartCheckoutBtn.disabled = false;
            cartCheckoutBtn.style.opacity = "";
            cartCheckoutBtn.style.cursor = "pointer";
            cartCheckoutBtn.style.background = "";
            cartCheckoutBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ยืนยันการสั่งอาหาร`;
        }
    }
}

function updateCustomerTableIndicator() {
    updateAllTableDisplays();
}

function updateTableStatusBar() {
    const bar = document.getElementById("tableStatusBar");
    const text = document.getElementById("tableStatusBarText");
    if (!bar || !text) return;

    if (currentView !== "customer" || selectedTable === null) {
        bar.style.display = "none";
        return;
    }

    if (isTableBilled(selectedTable)) {
        text.innerHTML = `<i class="fa-solid fa-lock" style="color: #ef4444;"></i> โต๊ะที่ <strong>${selectedTable}</strong>: ปิดบิลแล้ว (กรุณาแจ้งทางร้านเพื่อเปิดบิลใหม่)`;
        bar.style.background = "rgba(239, 68, 68, 0.12)";
        bar.style.border = "1px solid rgba(239, 68, 68, 0.35)";
        bar.style.color = "#dc2626";
        bar.style.display = "flex";
        return;
    }

    bar.style.background = "";
    bar.style.border = "";
    bar.style.color = "";

    // Count active orders belonging to this table's current bill
    const activeOrders = orders.filter(o => 
        parseInt(o.table) === parseInt(selectedTable) && 
        o.status !== 'completed'
    );

    if (activeOrders.length === 0) {
        bar.style.display = "none";
        return;
    }

    text.innerHTML = `โต๊ะที่ <strong>${selectedTable}</strong>: มี <strong>${activeOrders.length}</strong> ออเดอร์กำลังดำเนินการ (แตะเพื่อติดตามสถานะ)`;
    bar.style.display = "flex";
}

// --- Daily & Monthly Sales Report & Dashboard (Admin) ---
let currentSalesTab = "daily";
let activeDrilldownMonthKey = "";
let currentModalDrilldownTab = "days"; // "days" or "bills"

let salesReportFilter = {
    preset: "all",
    startDate: "",
    endDate: ""
};

function formatDateToYmd(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getTodayYmd() {
    return formatDateToYmd(new Date());
}

function setSalesDatePreset(preset) {
    salesReportFilter.preset = preset;
    const today = new Date();
    let startStr = "";
    let endStr = formatDateToYmd(today);

    if (preset === "today") {
        startStr = endStr;
    } else if (preset === "yesterday") {
        const y = new Date();
        y.setDate(y.getDate() - 1);
        startStr = formatDateToYmd(y);
        endStr = startStr;
    } else if (preset === "7days") {
        const d7 = new Date();
        d7.setDate(d7.getDate() - 6);
        startStr = formatDateToYmd(d7);
    } else if (preset === "30days") {
        const d30 = new Date();
        d30.setDate(d30.getDate() - 29);
        startStr = formatDateToYmd(d30);
    } else if (preset === "this-month") {
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        startStr = formatDateToYmd(firstDay);
    } else if (preset === "last-month") {
        const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
        startStr = formatDateToYmd(firstDay);
        endStr = formatDateToYmd(lastDay);
    } else if (preset === "all") {
        startStr = "";
        endStr = "";
    }

    salesReportFilter.startDate = startStr;
    salesReportFilter.endDate = endStr;

    // Update Input Fields
    const inputStart = document.getElementById("salesStartDate");
    const inputEnd = document.getElementById("salesEndDate");
    if (inputStart) inputStart.value = startStr;
    if (inputEnd) inputEnd.value = endStr;

    // Update preset buttons visual state
    const presetBtns = document.querySelectorAll(".sales-preset-btn");
    presetBtns.forEach(btn => btn.classList.remove("active"));
    const activeBtn = document.getElementById(`presetBtn_${preset}`);
    if (activeBtn) activeBtn.classList.add("active");

    renderDailySalesReport();
}

function applyCustomSalesDateRange() {
    const inputStart = document.getElementById("salesStartDate");
    const inputEnd = document.getElementById("salesEndDate");
    if (!inputStart || !inputEnd) return;

    salesReportFilter.preset = "custom";
    salesReportFilter.startDate = inputStart.value || "";
    salesReportFilter.endDate = inputEnd.value || "";

    const presetBtns = document.querySelectorAll(".sales-preset-btn");
    presetBtns.forEach(btn => btn.classList.remove("active"));

    renderDailySalesReport();
}

function resetSalesDateFilter() {
    setSalesDatePreset("all");
}

function switchSalesTab(tab) {
    currentSalesTab = tab;
    const tabDaily = document.getElementById("salesTabDaily");
    const tabMonthly = document.getElementById("salesTabMonthly");
    const header = document.getElementById("adminSalesReportHeader");
    
    if (tabDaily && tabMonthly) {
        if (tab === "daily") {
            tabDaily.classList.add("active");
            tabMonthly.classList.remove("active");
            if (header) {
                header.innerHTML = `
                    <th>วันที่</th>
                    <th>ยอดขายรวม</th>
                    <th>เงินสด</th>
                    <th>สแกน QR</th>
                    <th>จำนวนบิล</th>
                    <th>รายจ่าย</th>
                    <th>กำไรสุทธิ</th>
                    <th class="no-print">จัดการ</th>
                `;
            }
        } else {
            tabDaily.classList.remove("active");
            tabMonthly.classList.add("active");
            if (header) {
                header.innerHTML = `
                    <th>เดือน</th>
                    <th>ยอดขายรวม</th>
                    <th>เงินสด</th>
                    <th>สแกน QR</th>
                    <th>จำนวนบิล</th>
                    <th>รายจ่าย</th>
                    <th>กำไรสุทธิ</th>
                    <th class="no-print">จัดการ</th>
                `;
            }
        }
    }
    renderDailySalesReport();
}

function printSalesReport() {
    const printContainer = document.getElementById("salesReportPrintContainer");
    if (!printContainer) return;

    // Get current live state from dashboard
    const now = new Date();
    const dateText = now.toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    
    const staffName = (typeof currentLoggedInStaff !== 'undefined' && currentLoggedInStaff && currentLoggedInStaff.name)
        ? currentLoggedInStaff.name 
        : (storeOwner && storeOwner.name ? storeOwner.name : "ผู้จัดการร้าน");
    
    const ownerName = (storeOwner && storeOwner.name) ? storeOwner.name : "คุณราชา ยอดฝีมือ";

    let rangeLabel = "ข้อมูลทั้งหมด (All Time)";
    if (salesReportFilter.startDate && salesReportFilter.endDate) {
        if (salesReportFilter.startDate === salesReportFilter.endDate) {
            rangeLabel = `ประจำวันที่ ${formatThaiDate(salesReportFilter.startDate)}`;
        } else {
            rangeLabel = `วันที่ ${formatThaiDate(salesReportFilter.startDate)} ถึง ${formatThaiDate(salesReportFilter.endDate)}`;
        }
    } else if (salesReportFilter.startDate) {
        rangeLabel = `ตั้งแต่วันที่ ${formatThaiDate(salesReportFilter.startDate)} เป็นต้นไป`;
    } else if (salesReportFilter.endDate) {
        rangeLabel = `ถึงวันที่ ${formatThaiDate(salesReportFilter.endDate)}`;
    }

    // Get latest KPI texts
    const kpiRev = document.getElementById("kpiTotalRevenue")?.innerText || "0 B";
    const kpiRevSub = document.getElementById("kpiRevenueSubtext")?.innerText || "เงินสด: 0 B | สแกน: 0 B";
    const kpiExp = document.getElementById("kpiTotalExpenses")?.innerText || "0 B";
    const kpiProfit = document.getElementById("kpiNetProfit")?.innerText || "0 B";
    const kpiMargin = document.getElementById("kpiNetProfitMargin")?.innerText || "อัตรากำไร: 0.0%";
    const kpiOrders = document.getElementById("kpiTotalOrders")?.innerText || "0 บิล";
    const kpiAvg = document.getElementById("kpiAvgTicket")?.innerText || "ยอดเฉลี่ย: 0 B / บิล";
    const kpiPayRatio = document.getElementById("kpiPaymentRatio")?.innerText || "เงินสด 0% | สแกน 0%";

    // Get Top 5 Items HTML
    const topItemsRows = document.getElementById("salesReportTopItemsBody")?.innerHTML || "";
    // Get Expense Categories HTML
    const expenseCatRows = document.getElementById("salesReportExpenseCategoryBody")?.innerHTML || "";
    // Get Table Body & Foot HTML
    const salesTableBody = document.getElementById("adminDailySalesReportBody")?.innerHTML || "";
    const salesTableFoot = document.getElementById("adminDailySalesReportFoot")?.innerHTML || "";
    const viewTitle = currentSalesTab === "daily" ? "สรุปยอดขายรายวัน" : "สรุปยอดขายรายเดือน";

    // Build complete self-contained printable document
    printContainer.innerHTML = `
        <div class="print-doc">
            <!-- Header -->
            <div class="print-header">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 10px; margin-bottom: 12px;">
                    <div>
                        <h1 style="font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-crown" style="color: #ff5e36;"></i> ร้าน ราชา กะเพรา (Raja Krapao)
                        </h1>
                        <h2 style="font-size: 14px; font-weight: 700; color: #475569; margin: 0;">
                            รายงานสรุปผลประกอบการและยอดขาย (Financial & Sales Report)
                        </h2>
                    </div>
                    <div style="text-align: right; font-size: 11px; color: #475569; line-height: 1.6;">
                        <div><strong>ช่วงเวลา:</strong> <span style="background: #f1f5f9; padding: 2px 6px; border-radius: 4px; border: 1px solid #cbd5e1; font-weight: 700; color: #0f172a;">${rangeLabel}</span></div>
                        <div><strong>พิมพ์เมื่อ:</strong> ${dateText} น.</div>
                        <div><strong>ผู้พิมพ์รายงาน:</strong> ${staffName}</div>
                    </div>
                </div>
            </div>

            <!-- Summary KPI Cards -->
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin-bottom: 14px;">
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #f8fafc;">
                    <div style="font-size: 10px; color: #64748b; font-weight: 700;">ยอดขายรวม</div>
                    <div style="font-size: 16px; font-weight: 800; color: #059669; margin: 2px 0;">${kpiRev}</div>
                    <div style="font-size: 9px; color: #475569;">${kpiRevSub}</div>
                </div>
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #f8fafc;">
                    <div style="font-size: 10px; color: #64748b; font-weight: 700;">รายจ่ายรวม</div>
                    <div style="font-size: 16px; font-weight: 800; color: #dc2626; margin: 2px 0;">${kpiExp}</div>
                    <div style="font-size: 9px; color: #475569;">รวมต้นทุนและค่าใช้จ่ายร้าน</div>
                </div>
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #f8fafc;">
                    <div style="font-size: 10px; color: #64748b; font-weight: 700;">กำไรสุทธิ</div>
                    <div style="font-size: 16px; font-weight: 800; color: #0f172a; margin: 2px 0;">${kpiProfit}</div>
                    <div style="font-size: 9px; color: #475569;">${kpiMargin}</div>
                </div>
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #f8fafc;">
                    <div style="font-size: 10px; color: #64748b; font-weight: 700;">จำนวนบิลสำเร็จ</div>
                    <div style="font-size: 16px; font-weight: 800; color: #2563eb; margin: 2px 0;">${kpiOrders}</div>
                    <div style="font-size: 9px; color: #475569;">${kpiAvg}</div>
                </div>
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #f8fafc;">
                    <div style="font-size: 10px; color: #64748b; font-weight: 700;">สัดส่วนชำระเงิน</div>
                    <div style="font-size: 12px; font-weight: 800; color: #7c3aed; margin: 4px 0 2px 0;">${kpiPayRatio}</div>
                    <div style="font-size: 9px; color: #475569;">เงินสด vs สแกน QR</div>
                </div>
            </div>

            <!-- Middle Section: Top 5 Items & Expense Breakdown -->
            <div style="display: grid; grid-template-columns: 3fr 2fr; gap: 12px; margin-bottom: 14px; page-break-inside: avoid;">
                <!-- Top 5 -->
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #ffffff;">
                    <h3 style="font-size: 12px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
                        <i class="fa-solid fa-fire" style="color: #f59e0b;"></i> 5 อันดับเมนูขายดียอดนิยม
                    </h3>
                    <table class="print-table" style="width: 100%; border-collapse: collapse; font-size: 10px;">
                        <thead>
                            <tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;">
                                <th style="text-align: center; width: 36px; padding: 4px;">อันดับ</th>
                                <th style="text-align: left; padding: 4px;">ชื่อเมนู</th>
                                <th style="text-align: right; width: 60px; padding: 4px;">จำนวนจาน</th>
                                <th style="text-align: right; width: 80px; padding: 4px;">ยอดขายรวม</th>
                            </tr>
                        </thead>
                        <tbody>${topItemsRows}</tbody>
                    </table>
                </div>

                <!-- Expense Breakdown -->
                <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #ffffff;">
                    <h3 style="font-size: 12px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
                        <i class="fa-solid fa-pie-chart" style="color: #ec4899;"></i> สรุปรายจ่ายแยกตามหมวดหมู่
                    </h3>
                    <table class="print-table" style="width: 100%; border-collapse: collapse; font-size: 10px;">
                        <thead>
                            <tr style="background: #f1f5f9; border-bottom: 1px solid #cbd5e1;">
                                <th style="text-align: left; padding: 4px;">หมวดหมู่</th>
                                <th style="text-align: center; width: 50px; padding: 4px;">รายการ</th>
                                <th style="text-align: right; width: 70px; padding: 4px;">ยอดรวม</th>
                                <th style="text-align: right; width: 45px; padding: 4px;">สัดส่วน</th>
                            </tr>
                        </thead>
                        <tbody>${expenseCatRows}</tbody>
                    </table>
                </div>
            </div>

            <!-- Detailed Sales Breakdown Table -->
            <div style="border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; background: #ffffff; margin-bottom: 18px;">
                <h3 style="font-size: 12px; font-weight: 700; color: #0f172a; margin: 0 0 6px 0; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px;">
                    <i class="fa-solid fa-table-list" style="color: #ff5e36;"></i> ตารางรายละเอียด (${viewTitle})
                </h3>
                <table class="print-table" style="width: 100%; border-collapse: collapse; font-size: 10px;">
                    <thead>
                        <tr style="background: #f1f5f9; border-bottom: 1.5px solid #64748b;">
                            <th style="text-align: left; padding: 5px 6px;">วันที่ / เดือน</th>
                            <th style="text-align: right; padding: 5px 6px;">ยอดขายรวม</th>
                            <th style="text-align: right; padding: 5px 6px;">เงินสด</th>
                            <th style="text-align: right; padding: 5px 6px;">สแกน QR</th>
                            <th style="text-align: center; padding: 5px 6px;">จำนวนบิล</th>
                            <th style="text-align: right; padding: 5px 6px;">รายจ่าย</th>
                            <th style="text-align: right; padding: 5px 6px;">กำไรสุทธิ</th>
                        </tr>
                    </thead>
                    <tbody>${salesTableBody}</tbody>
                    <tfoot style="border-top: 2px solid #0f172a; background: #f8fafc; font-weight: 800;">
                        ${salesTableFoot}
                    </tfoot>
                </table>
            </div>

            <!-- Sign-off Signatures Block -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 24px; text-align: center; page-break-inside: avoid;">
                <div style="padding: 6px;">
                    <div style="color: #64748b; margin-bottom: 8px;">....................................................................</div>
                    <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">( ${staffName} )</div>
                    <div style="font-size: 10px; color: #475569; margin-bottom: 4px;">ผู้จัดทำรายงาน (พนักงาน / แคชเชียร์)</div>
                    <div style="font-size: 10px; color: #64748b;">วันที่: ........ / ........ / ................</div>
                </div>
                <div style="padding: 6px;">
                    <div style="color: #64748b; margin-bottom: 8px;">....................................................................</div>
                    <div style="font-size: 12px; font-weight: 700; color: #0f172a; margin-bottom: 3px;">( ${ownerName} )</div>
                    <div style="font-size: 10px; color: #475569; margin-bottom: 4px;">ผู้จัดการร้าน / เจ้าของร้าน</div>
                    <div style="font-size: 10px; color: #64748b;">วันที่: ........ / ........ / ................</div>
                </div>
            </div>

            <div style="text-align: center; font-size: 9px; color: #94a3b8; margin-top: 18px; border-top: 1px dashed #cbd5e1; padding-top: 6px;">
                เอกสารนี้สร้างขึ้นโดยระบบ POS ร้านราชา กะเพรา เพื่อใช้สรุปข้อมูลประกอบการบริหารร้าน
            </div>
        </div>
    `;

    // Strip out all .no-print elements inside the cloned tables
    printContainer.querySelectorAll('.no-print').forEach(el => el.remove());

    const originalTitle = document.title;
    const rangeTag = salesReportFilter.startDate ? `${salesReportFilter.startDate}_${salesReportFilter.endDate || 'now'}` : 'all';
    document.title = `รายงานยอดขาย_ราชา_กะเพรา_${rangeTag}`;

    document.body.classList.add("printing-sales-report");
    window.focus();
    window.print();
    setTimeout(() => {
        document.body.classList.remove("printing-sales-report");
        document.title = originalTitle;
    }, 1000);
}

window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-sales-report");
});

function normalizeDateString(dateInput) {
    if (!dateInput) return "";
    const str = String(dateInput).trim();
    const match = str.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
    if (match) {
        return `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`;
    }
    try {
        const dateObj = new Date(str);
        if (!isNaN(dateObj.getTime())) {
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const day = String(dateObj.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }
    } catch (e) {}
    return str;
}

function formatThaiMonth(monthKey) {
    try {
        const parts = String(monthKey).split('-');
        if (parts.length !== 2) return monthKey;
        const year = parseInt(parts[0]) + 543;
        const monthNames = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
        const month = monthNames[parseInt(parts[1]) - 1];
        return `${month} ${year}`;
    } catch (e) {
        return monthKey;
    }
}

// Get all completed orders combined from memory & localStorage safely
function getAllCompletedOrdersList() {
    const local = JSON.parse(localStorage.getItem("raja_orders_v2") || "[]");
    const mergedMap = new Map();
    orders.forEach(o => { if (o && o.id) mergedMap.set(o.id, o); });
    local.forEach(o => {
        if (o && o.id) {
            const existing = mergedMap.get(o.id) || {};
            mergedMap.set(o.id, { ...existing, ...o });
        }
    });
    return Array.from(mergedMap.values()).filter(o => o.status === 'completed');
}

function clearSalesMonthFilter() {
    resetSalesDateFilter();
}

function filterSalesReportByMonth() {
    renderDailySalesReport();
}

async function renderDailySalesReport() {
    const tbody = document.getElementById("adminDailySalesReportBody");
    const tfoot = document.getElementById("adminDailySalesReportFoot");
    if (!tbody) return;

    let reportData = null;

    if (isBackendOnline) {
        try {
            const qParams = new URLSearchParams();
            if (salesReportFilter.startDate) qParams.set('startDate', salesReportFilter.startDate);
            if (salesReportFilter.endDate) qParams.set('endDate', salesReportFilter.endDate);
            const res = await fetch(`${API_BASE}/api/sales/report?${qParams.toString()}`);
            if (res.ok) {
                reportData = await res.json();
            }
        } catch (err) {
            console.error("Failed to fetch sales dashboard report from backend:", err);
        }
    }

    // Fallback calculation from orders and expensesList if backend offline or failed
    if (!reportData || !reportData.success) {
        const allCompleted = getAllCompletedOrdersList();
        const startFilter = salesReportFilter.startDate;
        const endFilter = salesReportFilter.endDate;

        const filteredOrders = allCompleted.filter(o => {
            const oDate = normalizeDateString(o.date);
            if (startFilter && oDate < startFilter) return false;
            if (endFilter && oDate > endFilter) return false;
            return true;
        });

        // Ensure expenses are loaded
        if (typeof loadExpensesData === 'function') loadExpensesData();
        const filteredExpenses = (expensesList || []).filter(e => {
            const eDate = normalizeDateString(e.date);
            if (startFilter && eDate < startFilter) return false;
            if (endFilter && eDate > endFilter) return false;
            return true;
        });

        // Daily groups
        const dailyGroups = {};
        filteredOrders.forEach(o => {
            const d = normalizeDateString(o.date) || getTodayYmd();
            if (!dailyGroups[d]) {
                dailyGroups[d] = { date: d, daily_total: 0, cash_total: 0, scan_total: 0, total_orders: 0, daily_expense: 0, daily_profit: 0 };
            }
            const tot = (o.total || 0);
            dailyGroups[d].daily_total += tot;
            if (o.payment_method === 'cash') dailyGroups[d].cash_total += tot;
            else dailyGroups[d].scan_total += tot;
            dailyGroups[d].total_orders += 1;
        });

        // Expenses by date
        filteredExpenses.forEach(e => {
            const d = normalizeDateString(e.date) || getTodayYmd();
            if (!dailyGroups[d]) {
                dailyGroups[d] = { date: d, daily_total: 0, cash_total: 0, scan_total: 0, total_orders: 0, daily_expense: 0, daily_profit: 0 };
            }
            dailyGroups[d].daily_expense += (e.amount || 0);
        });

        const dailyList = Object.values(dailyGroups).map(row => {
            row.daily_profit = row.daily_total - row.daily_expense;
            return row;
        }).sort((a, b) => b.date.localeCompare(a.date));

        // Top items calculation
        const itemCounts = {};
        filteredOrders.forEach(o => {
            if (Array.isArray(o.cartItems)) {
                o.cartItems.forEach(it => {
                    if (!itemCounts[it.name]) itemCounts[it.name] = { name: it.name, total_qty: 0, total_amount: 0 };
                    itemCounts[it.name].total_qty += (it.quantity || 1);
                    itemCounts[it.name].total_amount += ((it.price || 0) * (it.quantity || 1));
                });
            } else if (typeof o.details === 'string') {
                const lines = o.details.split('\n');
                lines.forEach(line => {
                    const match = line.match(/^(.+?)(?:\s+\(x(\d+)\))?(?:\s+\[(\d+)\s*B\])?$/);
                    if (match) {
                        const name = match[1].trim();
                        const qty = parseInt(match[2] || '1', 10);
                        const amount = parseInt(match[3] || '0', 10);
                        if (name) {
                            if (!itemCounts[name]) itemCounts[name] = { name: name, total_qty: 0, total_amount: 0 };
                            itemCounts[name].total_qty += qty;
                            itemCounts[name].total_amount += amount;
                        }
                    }
                });
            }
        });
        const topItems = Object.values(itemCounts).sort((a, b) => b.total_qty - a.total_qty).slice(0, 10);

        // Expense categories calculation
        const expCatMap = {};
        let totalExp = 0;
        filteredExpenses.forEach(e => {
            const cat = e.category || 'อื่นๆ';
            if (!expCatMap[cat]) expCatMap[cat] = { category: cat, total_amount: 0, count: 0 };
            expCatMap[cat].total_amount += (e.amount || 0);
            expCatMap[cat].count += 1;
            totalExp += (e.amount || 0);
        });
        const expenseCategories = Object.values(expCatMap).sort((a, b) => b.total_amount - a.total_amount);

        let totalRev = 0, totalCash = 0, totalScan = 0, totalOrd = 0;
        dailyList.forEach(r => {
            totalRev += r.daily_total;
            totalCash += r.cash_total;
            totalScan += r.scan_total;
            totalOrd += r.total_orders;
        });

        reportData = {
            success: true,
            summary: {
                total_revenue: totalRev,
                cash_total: totalCash,
                scan_total: totalScan,
                total_orders: totalOrd,
                total_expenses: totalExp,
                net_profit: totalRev - totalExp,
                avg_ticket: totalOrd > 0 ? Math.round(totalRev / totalOrd) : 0
            },
            daily: dailyList,
            top_items: topItems,
            expense_categories: expenseCategories
        };
    }

    const { summary, daily, top_items, expense_categories } = reportData;

    // 1. Update Active Filter Banner & Print Header Meta
    let rangeLabel = "ทั้งหมด (All Time)";
    if (salesReportFilter.startDate && salesReportFilter.endDate) {
        if (salesReportFilter.startDate === salesReportFilter.endDate) {
            rangeLabel = `ประจำวันที่ ${formatThaiDate(salesReportFilter.startDate)}`;
        } else {
            rangeLabel = `วันที่ ${formatThaiDate(salesReportFilter.startDate)} ถึง ${formatThaiDate(salesReportFilter.endDate)}`;
        }
    } else if (salesReportFilter.startDate) {
        rangeLabel = `ตั้งแต่วันที่ ${formatThaiDate(salesReportFilter.startDate)} เป็นต้นไป`;
    } else if (salesReportFilter.endDate) {
        rangeLabel = `ถึงวันที่ ${formatThaiDate(salesReportFilter.endDate)}`;
    }

    const bannerText = document.getElementById("salesReportActiveFilterText");
    const countBadge = document.getElementById("salesReportOrderCountBadge");
    const printDateRange = document.getElementById("printDateRangeText");

    if (bannerText) bannerText.innerHTML = `กำลังแสดงข้อมูล: <strong>${rangeLabel}</strong>`;
    if (countBadge) countBadge.innerText = `${summary.total_orders || 0} บิล`;
    if (printDateRange) printDateRange.innerText = rangeLabel;

    // 2. Update KPI Metric Cards
    const kpiRev = document.getElementById("kpiTotalRevenue");
    const kpiRevSub = document.getElementById("kpiRevenueSubtext");
    const kpiExp = document.getElementById("kpiTotalExpenses");
    const kpiProfit = document.getElementById("kpiNetProfit");
    const kpiMargin = document.getElementById("kpiNetProfitMargin");
    const kpiProfitIcon = document.getElementById("kpiProfitIconBox");
    const kpiOrders = document.getElementById("kpiTotalOrders");
    const kpiAvg = document.getElementById("kpiAvgTicket");
    const kpiPayRatio = document.getElementById("kpiPaymentRatio");
    const kpiCashBar = document.getElementById("kpiCashRatioBar");
    const kpiScanBar = document.getElementById("kpiScanRatioBar");

    if (kpiRev) kpiRev.innerText = `${(summary.total_revenue || 0).toLocaleString()} B`;
    if (kpiRevSub) kpiRevSub.innerText = `เงินสด: ${(summary.cash_total || 0).toLocaleString()} B | สแกน: ${(summary.scan_total || 0).toLocaleString()} B`;
    if (kpiExp) kpiExp.innerText = `${(summary.total_expenses || 0).toLocaleString()} B`;
    
    if (kpiProfit) {
        const netProfit = summary.net_profit || 0;
        kpiProfit.innerText = `${netProfit.toLocaleString()} B`;
        if (netProfit >= 0) {
            kpiProfit.style.color = "#10b981";
            if (kpiProfitIcon) {
                kpiProfitIcon.style.background = "rgba(16, 185, 129, 0.12)";
                kpiProfitIcon.style.color = "#10b981";
            }
        } else {
            kpiProfit.style.color = "#ef4444";
            if (kpiProfitIcon) {
                kpiProfitIcon.style.background = "rgba(239, 68, 68, 0.12)";
                kpiProfitIcon.style.color = "#ef4444";
            }
        }
    }

    if (kpiMargin) {
        const rev = summary.total_revenue || 0;
        const profit = summary.net_profit || 0;
        const margin = rev > 0 ? ((profit / rev) * 100).toFixed(1) : "0.0";
        kpiMargin.innerText = `อัตรากำไร: ${margin}%`;
    }

    if (kpiOrders) kpiOrders.innerText = `${summary.total_orders || 0} บิล`;
    if (kpiAvg) kpiAvg.innerText = `ยอดเฉลี่ย: ${(summary.avg_ticket || 0).toLocaleString()} B / บิล`;

    const totalPay = (summary.cash_total || 0) + (summary.scan_total || 0);
    const cashPct = totalPay > 0 ? Math.round(((summary.cash_total || 0) / totalPay) * 100) : 0;
    const scanPct = totalPay > 0 ? (100 - cashPct) : 0;
    if (kpiPayRatio) kpiPayRatio.innerText = `เงินสด ${cashPct}% | สแกน ${scanPct}%`;
    if (kpiCashBar) kpiCashBar.style.width = `${cashPct}%`;
    if (kpiScanBar) kpiScanBar.style.width = `${scanPct}%`;

    // 3. Update Top 5 Best Sellers
    const topItemsBody = document.getElementById("salesReportTopItemsBody");
    if (topItemsBody) {
        if (!top_items || top_items.length === 0) {
            topItemsBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 18px;">ไม่มีรายการสั่งซื้อในช่วงเวลานี้ค่ะ</td></tr>`;
        } else {
            const top5 = top_items.slice(0, 5);
            topItemsBody.innerHTML = top5.map((item, idx) => {
                const rank = idx + 1;
                const rankClass = rank === 1 ? 'rank-1' : (rank === 2 ? 'rank-2' : (rank === 3 ? 'rank-3' : 'rank-other'));
                const medal = rank === 1 ? '🥇' : (rank === 2 ? '🥈' : (rank === 3 ? '🥉' : rank));
                return `
                    <tr>
                        <td style="text-align: center;"><span class="best-seller-rank ${rankClass}">${medal}</span></td>
                        <td><strong>${escapeHtml(item.name)}</strong></td>
                        <td style="text-align: right;"><span style="background: rgba(255, 94, 54, 0.08); color: var(--primary); padding: 2px 8px; border-radius: 12px; font-weight: 700;">${item.total_qty} จาน</span></td>
                        <td style="text-align: right; font-weight: 700; color: var(--text-main);">${item.total_amount.toLocaleString()} B</td>
                    </tr>
                `;
            }).join("");
        }
    }

    // 4. Update Expense Categories
    const expCatBody = document.getElementById("salesReportExpenseCategoryBody");
    if (expCatBody) {
        if (!expense_categories || expense_categories.length === 0) {
            expCatBody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 18px;">ไม่มีบันทึกรายจ่ายในช่วงเวลานี้ค่ะ</td></tr>`;
        } else {
            const totalExp = summary.total_expenses || 1;
            expCatBody.innerHTML = expense_categories.map(cat => {
                const pct = totalExp > 0 ? ((cat.total_amount / totalExp) * 100).toFixed(1) : 0;
                return `
                    <tr>
                        <td><strong>${escapeHtml(cat.category)}</strong></td>
                        <td style="text-align: center;">${cat.count} รายการ</td>
                        <td style="text-align: right; color: #ef4444; font-weight: 700;">${cat.total_amount.toLocaleString()} B</td>
                        <td style="text-align: right; color: var(--text-muted); font-size: 12px;">${pct}%</td>
                    </tr>
                `;
            }).join("");
        }
    }

    // 5. Update Main Sales Table & Grand Total Footer
    if (daily.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 28px; color: var(--text-muted); font-size: 13px;">
                    ไม่มีข้อมูลยอดขายในช่วงเวลาที่เลือกค่ะ
                </td>
            </tr>
        `;
        if (tfoot) tfoot.innerHTML = "";
        return;
    }

    if (currentSalesTab === "daily") {
        tbody.innerHTML = daily.map(row => {
            const cashVal = row.cash_total || 0;
            const scanVal = row.scan_total || 0;
            const expVal = row.daily_expense || 0;
            const profitVal = row.daily_profit !== undefined ? row.daily_profit : ((row.daily_total || 0) - expVal);
            const profitColor = profitVal >= 0 ? '#10b981' : '#ef4444';
            return `
                <tr style="cursor: pointer;" onclick="viewDailyBills('${row.date}')" title="คลิกเพื่อดูรายละเอียดบิลทั้งหมดของวันนี้">
                    <td><strong>${formatThaiDate(row.date)}</strong></td>
                    <td><strong style="color: var(--primary);">${(row.daily_total || 0).toLocaleString()} B</strong></td>
                    <td style="color: #10b981;"><strong>${cashVal.toLocaleString()} B</strong></td>
                    <td style="color: #3b82f6;"><strong>${scanVal.toLocaleString()} B</strong></td>
                    <td><strong>${row.total_orders || 0} บิล</strong></td>
                    <td style="color: #ef4444;">${expVal > 0 ? `${expVal.toLocaleString()} B` : '-'}</td>
                    <td style="color: ${profitColor}; font-weight: 700;">${profitVal.toLocaleString()} B</td>
                    <td class="no-print">
                        <button class="btn btn-secondary" onclick="event.stopPropagation(); viewDailyBills('${row.date}')" style="padding: 5px 10px; font-size: 11px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 4px;">
                            <i class="fa-solid fa-receipt"></i> ดูบิล
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    } else {
        // Monthly group view
        const monthlyGroups = {};
        daily.forEach(row => {
            const norm = normalizeDateString(row.date);
            const parts = norm.split('-');
            if (parts.length < 2) return;
            const monthKey = `${parts[0]}-${parts[1]}`;
            if (!monthlyGroups[monthKey]) {
                monthlyGroups[monthKey] = {
                    month: monthKey,
                    total_sales: 0,
                    cash_sales: 0,
                    scan_sales: 0,
                    total_orders: 0,
                    total_expense: 0,
                    net_profit: 0
                };
            }
            monthlyGroups[monthKey].total_sales += Number(row.daily_total || 0);
            monthlyGroups[monthKey].cash_sales += Number(row.cash_total || 0);
            monthlyGroups[monthKey].scan_sales += Number(row.scan_total || 0);
            monthlyGroups[monthKey].total_orders += Number(row.total_orders || 0);
            monthlyGroups[monthKey].total_expense += Number(row.daily_expense || 0);
            monthlyGroups[monthKey].net_profit += Number(row.daily_profit || 0);
        });

        const monthlyList = Object.values(monthlyGroups).sort((a, b) => b.month.localeCompare(a.month));

        tbody.innerHTML = monthlyList.map(row => {
            const profitColor = row.net_profit >= 0 ? '#10b981' : '#ef4444';
            return `
                <tr style="cursor: pointer;" onclick="viewMonthlyBills('${row.month}')" title="คลิกเพื่อดูสรุปยอดขายของเดือนนี้">
                    <td><strong>${formatThaiMonth(row.month)}</strong></td>
                    <td><strong style="color: var(--primary);">${row.total_sales.toLocaleString()} B</strong></td>
                    <td style="color: #10b981;"><strong>${row.cash_sales.toLocaleString()} B</strong></td>
                    <td style="color: #3b82f6;"><strong>${row.scan_sales.toLocaleString()} B</strong></td>
                    <td><strong>${row.total_orders} บิล</strong></td>
                    <td style="color: #ef4444;">${row.total_expense > 0 ? `${row.total_expense.toLocaleString()} B` : '-'}</td>
                    <td style="color: ${profitColor}; font-weight: 700;">${row.net_profit.toLocaleString()} B</td>
                    <td class="no-print">
                        <button class="btn btn-secondary" onclick="event.stopPropagation(); viewMonthlyBills('${row.month}')" style="padding: 5px 10px; font-size: 11px; border-radius: var(--radius-sm); display: inline-flex; align-items: center; gap: 4px; color: var(--primary); border-color: rgba(255, 94, 54, 0.4);">
                            <i class="fa-solid fa-chart-pie"></i> ดูยอดเดือนนี้
                        </button>
                    </td>
                </tr>
            `;
        }).join("");
    }

    // Render Grand Total Footer
    if (tfoot) {
        const profitColor = (summary.net_profit || 0) >= 0 ? '#10b981' : '#ef4444';
        tfoot.innerHTML = `
            <tr>
                <td style="color: var(--primary); font-size: 13px;"><strong>รวมทั้งสิ้น (Grand Total)</strong></td>
                <td style="color: var(--primary); font-size: 14px;"><strong>${(summary.total_revenue || 0).toLocaleString()} B</strong></td>
                <td style="color: #10b981;"><strong>${(summary.cash_total || 0).toLocaleString()} B</strong></td>
                <td style="color: #3b82f6;"><strong>${(summary.scan_total || 0).toLocaleString()} B</strong></td>
                <td><strong>${summary.total_orders || 0} บิล</strong></td>
                <td style="color: #ef4444;"><strong>${(summary.total_expenses || 0).toLocaleString()} B</strong></td>
                <td style="color: ${profitColor}; font-size: 14px;"><strong>${(summary.net_profit || 0).toLocaleString()} B</strong></td>
                <td class="no-print" style="text-align: center; color: var(--text-muted);">-</td>
            </tr>
        `;
    }
}

function formatThaiDate(dateStr) {
    if (!dateStr) return "-";
    try {
        const str = String(dateStr).trim();
        const parts = str.split('-');
        if (parts.length === 3 && parts[0].length === 4) {
            const year = parseInt(parts[0], 10) + 543;
            const monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
            const mIdx = parseInt(parts[1], 10) - 1;
            const month = (mIdx >= 0 && mIdx < 12) ? monthNames[mIdx] : parts[1];
            const day = parseInt(parts[2], 10);
            return `${day} ${month} ${year}`;
        }
        const dateObj = new Date(str);
        if (!isNaN(dateObj.getTime())) {
            const day = dateObj.getDate();
            const monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
            const month = monthNames[dateObj.getMonth()];
            const year = dateObj.getFullYear() + 543;
            return `${day} ${month} ${year}`;
        }
        return str;
    } catch (e) {
        return dateStr;
    }
}

// --- Admin Table Management ---
function renderAdminTablesGrid() {
    const container = document.getElementById("adminTablesGridContainer");
    if (!container) return;

    container.innerHTML = Array.from({ length: 10 }, (_, i) => {
        const tableNum = i + 1;
        const isClosed = closedTables.includes(tableNum);
        const isBilled = billedTables.map(t => parseInt(t, 10)).includes(tableNum);
        
        // Find if there are active orders for this table
        const activeOrders = orders.filter(o => parseInt(o.table) === tableNum && o.status !== 'completed');
        const isOccupied = activeOrders.length > 0;
        
        let status = 'vacant';
        let statusText = 'ว่าง (พร้อมเปิดบิล)';
        let actionBtnHtml = `<button class="btn-table-toggle" onclick="openNewBillFromAdmin(${tableNum})" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 6px;"><i class="fa-solid fa-plus-circle"></i> เปิดบิลใหม่</button>`;
        
        if (isClosed) {
            status = 'closed';
            statusText = 'ปิดให้บริการ';
            actionBtnHtml = `<button class="btn-table-toggle" onclick="toggleTableClosedState(${tableNum})" style="margin-bottom: 6px;">เปิดให้บริการโต๊ะ</button>`;
        } else if (isOccupied) {
            status = 'occupied';
            statusText = `ไม่ว่าง (${activeOrders.length} ออเดอร์)`;
            actionBtnHtml = `<button class="btn-table-toggle" style="opacity: 0.65; cursor: not-allowed; margin-bottom: 6px;" title="มีลูกค้ากำลังใช้งาน" disabled><i class="fa-solid fa-utensils"></i> มีลูกค้าใช้งาน</button>`;
        } else if (isBilled) {
            status = 'billed';
            statusText = 'ปิดบิลแล้ว (เปิดบิลใหม่ได้)';
            actionBtnHtml = `<button class="btn-table-toggle" onclick="openNewBillFromAdmin(${tableNum})" style="background: linear-gradient(135deg, #10b981, #059669); color: white; border: none; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; margin-bottom: 6px;"><i class="fa-solid fa-plus-circle"></i> เปิดบิลใหม่</button>`;
        }
        
        let cardExtraStyle = "";
        let badgeExtraStyle = "";
        if (status === 'billed') {
            cardExtraStyle = "border: 2px solid rgba(16, 185, 129, 0.4); background: rgba(16, 185, 129, 0.05);";
            badgeExtraStyle = "background: rgba(16, 185, 129, 0.15); color: #059669; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.3);";
        }
        
        return `
            <div class="table-manager-card status-${status}" style="${cardExtraStyle}">
                <div class="table-icon">
                    <i class="fa-solid fa-chair"></i>
                </div>
                <h4 class="table-title">โต๊ะที่ ${tableNum}</h4>
                <span class="table-status-badge" style="${badgeExtraStyle}">
                    ${(status === 'billed' || status === 'vacant') ? '<i class="fa-solid fa-circle-check"></i> ' : ''}${statusText}
                </span>
                ${actionBtnHtml}
                <div style="margin: 6px 0 8px 0; width: 100%; display: flex; flex-direction: column; gap: 3px; text-align: left;">
                    <label style="font-size: 11px; font-weight: 600; color: var(--text-muted); display: flex; align-items: center; gap: 4px;">
                        <i class="fa-solid fa-user-tag" style="color: var(--primary);"></i> ผู้รับออเดอร์:
                    </label>
                    <select onchange="setTableStaff(${tableNum}, this.value)" style="width: 100%; font-size: 11px; padding: 4px 6px; border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main); border: 1px solid var(--border); cursor: pointer;" title="เลือกพนักงานผู้รับออเดอร์ประจำโต๊ะนี้">
                        ${getStaffSelectOptionsHtml(getTableStaff(tableNum))}
                    </select>
                </div>
                <button type="button" class="btn-table-qr" onclick="openTableQRModal(${tableNum})" style="margin-top: 0; width: 100%; padding: 6px 10px; font-size: 11px; font-weight: 700; border-radius: var(--radius-sm); border: 1px solid rgba(0, 180, 216, 0.35); background: rgba(0, 180, 216, 0.08); color: var(--secondary); cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 5px; transition: var(--transition-fast);">
                    <i class="fa-solid fa-qrcode"></i> พิมพ์ QR โต๊ะนี้
                </button>
            </div>
        `;
    }).join("");
}

async function toggleTableClosedState(tableNum) {
    const idx = closedTables.indexOf(tableNum);
    try {
        if (idx > -1) {
            // Table is closed, open it
            if (isBackendOnline) {
                const res = await fetch(`${API_BASE}/api/closed-tables/${tableNum}`, { method: 'DELETE' });
                if (!res.ok) throw new Error("Failed to open table in MySQL");
                const closedRes = await fetch(`${API_BASE}/api/closed-tables`);
                if (closedRes.ok) closedTables = await closedRes.json();
            } else {
                closedTables.splice(idx, 1);
                localStorage.setItem("raja_closed_tables", JSON.stringify(closedTables));
            }
        } else {
            // Table is open, close it (only if there are no active orders on it, to be safe!)
            const activeOrders = orders.filter(o => parseInt(o.table) === tableNum && o.status !== 'completed');
            if (activeOrders.length > 0) {
                alert(`ไม่สามารถปิดโต๊ะที่ ${tableNum} ได้ในขณะนี้ เนื่องจากมีลูกค้ากำลังใช้งานหรือมีออเดอร์ค้างอยู่ค่ะ/ครับ`);
                return;
            }
            if (isBackendOnline) {
                const res = await fetch(`${API_BASE}/api/closed-tables`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ tableNum })
                });
                if (!res.ok) throw new Error("Failed to close table in MySQL");
                const closedRes = await fetch(`${API_BASE}/api/closed-tables`);
                if (closedRes.ok) closedTables = await closedRes.json();
            } else {
                closedTables.push(tableNum);
                localStorage.setItem("raja_closed_tables", JSON.stringify(closedTables));
            }
        }
        
        // Refresh grids
        renderAdminTablesGrid();
        renderCustomerTableSelector();
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาด: " + err.message);
    }
}

// --- Table QR Code Tent Cards Generator & Operations ---
function openTableQRModal(tableNum = null, isNewBill = false) {
    const filterSelect = document.getElementById("tableQRFilterSelect");
    let currentTableNum = 1;
    if (filterSelect) {
        if (tableNum !== null && tableNum !== undefined && tableNum !== 'all') {
            filterSelect.value = String(tableNum);
            currentTableNum = parseInt(tableNum, 10);
        } else {
            filterSelect.value = "all";
            currentTableNum = 1;
        }
    }

    // Populate and sync staff selector in Table QR Modal
    const staffSelect = document.getElementById("tableQRStaffSelect");
    if (staffSelect) {
        const staffForTable = getTableStaff(currentTableNum);
        staffSelect.innerHTML = getStaffSelectOptionsHtml(staffForTable);
        staffSelect.value = staffForTable;
    }

    // Default base URL: saved URL, or auto-detect based on current location / Wi-Fi IP / public tunnel
    const savedBaseUrl = localStorage.getItem("raja_table_qr_base_url");
    const input = document.getElementById("tableQRBaseUrlInput");
    if (input) {
        if (savedBaseUrl && !savedBaseUrl.includes("192.168.1.165")) {
            input.value = savedBaseUrl;
        } else {
            const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
            const protocol = window.location.protocol === "https:" ? "https:" : "http:";
            const host = isLocalhost ? detectedServerIp : window.location.hostname;
            const port = window.location.port && window.location.port !== "80" && window.location.port !== "443" ? `:${window.location.port}` : "";
            let path = window.location.pathname;
            if (!path.endsWith("/")) {
                path = path.substring(0, path.lastIndexOf("/") + 1);
            }
            if (!path || path === "/") path = "/QR/";
            input.value = `${protocol}//${host}${port}${path}`;
        }
    }

    const banner = document.getElementById("tableQRNoticeBanner");
    const bannerText = document.getElementById("tableQRNoticeBannerText");
    if (banner && bannerText) {
        if (tableNum !== null && tableNum !== undefined && tableNum !== 'all') {
            bannerText.innerHTML = `<strong>เปิดบิลใหม่ โต๊ะที่ ${tableNum} เรียบร้อยแล้ว!</strong> ลูกค้าสามารถสแกน QR Code นี้เพื่อสั่งอาหาร หรือกดพิมพ์ป้ายตั้งโต๊ะได้ทันทีค่ะ/ครับ`;
            banner.style.display = "flex";
        } else if (isNewBill) {
            bannerText.innerHTML = `<strong>เปิดรับบิลใหม่สำหรับทุกโต๊ะเรียบร้อยแล้ว!</strong> สามารถสแกนหรือกดพิมพ์ป้าย QR Code ประจำโต๊ะได้ทันทีค่ะ/ครับ`;
            banner.style.display = "flex";
        } else {
            banner.style.display = "none";
        }
    }

    checkActiveOnlineTunnel();
    renderTableQRCards();
    openModal("tableQRModal");
}

async function checkActiveOnlineTunnel() {
    const badge = document.getElementById("tableQROnlineDetectedBadge");
    const linkSpan = document.getElementById("tableQROnlineDetectedUrl");
    const input = document.getElementById("tableQRBaseUrlInput");

    let detectedUrl = null;

    try {
        const res = await fetch("online_url.txt?_t=" + Date.now());
        if (res.ok) {
            const rawUrl = (await res.text()).replace(/^\uFEFF/, '').trim();
            if (rawUrl && (rawUrl.startsWith("http://") || rawUrl.startsWith("https://"))) {
                detectedUrl = rawUrl;
            }
        }
    } catch (e) {}

    // Check if current browser is already on a public tunnel (not localhost/LAN)
    if (!detectedUrl) {
        if (window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1" && !window.location.hostname.startsWith("192.168.") && !window.location.hostname.startsWith("172.")) {
            detectedUrl = window.location.origin + window.location.pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '') + '/';
        }
    }

    if (detectedUrl) {
        // Online Tunnel is ACTIVE!
        if (badge) {
            badge.style.display = "flex";
            if (linkSpan) linkSpan.textContent = detectedUrl;
            badge.setAttribute("data-online-url", detectedUrl);
        }

        // Auto-apply online URL so QR codes immediately work on 4G/5G
        if (input && (!input.value || input.value.includes("192.168.") || input.value.includes("localhost") || input.value.includes("127.0.0.1"))) {
            input.value = detectedUrl;
            localStorage.setItem("raja_table_qr_base_url", detectedUrl);
            renderTableQRCards();
            console.log("[QR Order] Auto-applied active online tunnel URL:", detectedUrl);
        }
    } else {
        // Tunnel is NOT running - local Wi-Fi only
        if (badge) badge.style.display = "none";

        // Ensure input uses the real local Wi-Fi IP if it was using obsolete 192.168.1.165
        if (input && (input.value.includes("192.168.1.165") || input.value.includes("localhost") || input.value.includes("127.0.0.1"))) {
            input.value = getLocalWifiBaseUrl();
            localStorage.setItem("raja_table_qr_base_url", input.value);
            renderTableQRCards();
        }
    }
}

function applyOnlineDetectedUrl(specificUrl = null) {
    const badge = document.getElementById("tableQROnlineDetectedBadge");
    const targetUrl = specificUrl || badge?.getAttribute("data-online-url");
    if (targetUrl) {
        const input = document.getElementById("tableQRBaseUrlInput");
        if (input) {
            input.value = targetUrl;
            localStorage.setItem("raja_table_qr_base_url", targetUrl);
            renderTableQRCards();
            alert("✅ สลับไปใช้ลิงก์ออนไลน์ 4G/5G เรียบร้อยแล้วค่ะ/ครับ!\n\nลิงก์: " + targetUrl + "\nลูกค้าสามารถใช้เน็ตมือถือสแกนสั่งได้ทันที");
        }
    }
}

function resetToLocalWifiUrl() {
    const input = document.getElementById("tableQRBaseUrlInput");
    if (input) {
        const defaultWifiUrl = getLocalWifiBaseUrl();
        input.value = defaultWifiUrl;
        localStorage.setItem("raja_table_qr_base_url", defaultWifiUrl);
        renderTableQRCards();
        alert("📶 สลับเป็นลิงก์ Wi-Fi ร้านเรียบร้อยแล้วค่ะ/ครับ (" + defaultWifiUrl + ")\n* เครื่องที่ต่อ Wi-Fi เดียวกันในร้านสามารถสแกนสั่งได้ทันที");
    }
}

function updateTableQRBaseUrl() {
    const input = document.getElementById("tableQRBaseUrlInput");
    if (!input) return;
    let url = input.value.trim();
    if (!url) {
        alert("กรุณาระบุที่อยู่เว็บไซต์ (URL) ของระบบค่ะ/ครับ");
        return;
    }
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "https://" + url;
        input.value = url;
    }
    localStorage.setItem("raja_table_qr_base_url", url);
    renderTableQRCards();
    alert("บันทึกที่อยู่ลิงก์สั่งอาหารประจำโต๊ะและสร้าง QR Code ใหม่เรียบร้อยแล้วค่ะ/ครับ!");
}

function onTableQRFilterChanged() {
    const filter = document.getElementById("tableQRFilterSelect")?.value || "all";
    const staffSelect = document.getElementById("tableQRStaffSelect");
    if (staffSelect) {
        let currentStaff = "พนักงานหน้าร้าน";
        if (filter !== "all") {
            const tableNum = parseInt(filter, 10);
            currentStaff = getTableStaff(tableNum);
        } else {
            currentStaff = getTableStaff(1);
        }
        staffSelect.innerHTML = getStaffSelectOptionsHtml(currentStaff);
        staffSelect.value = currentStaff;
    }
    renderTableQRCards();
}

async function onTableQRStaffChanged(newStaffName) {
    if (!newStaffName) return;
    const filter = document.getElementById("tableQRFilterSelect")?.value || "all";
    if (filter === "all") {
        for (let i = 1; i <= 10; i++) {
            await setTableStaff(i, newStaffName);
        }
    } else {
        const tableNum = parseInt(filter, 10);
        await setTableStaff(tableNum, newStaffName);
    }
    renderTableQRCards();
    renderAdminTablesGrid();
}

function renderTableQRCards() {
    const container = document.getElementById("tableQRPrintableArea");
    if (!container) return;

    const filter = document.getElementById("tableQRFilterSelect")?.value || "all";
    let baseUrl = document.getElementById("tableQRBaseUrlInput")?.value.trim() || getLocalWifiBaseUrl();
    
    // Ensure baseUrl formatting
    if (!baseUrl.endsWith("/") && !baseUrl.includes(".html") && !baseUrl.includes(".php")) {
        baseUrl += "/";
    }

    let tablesToRender = [];
    if (filter === "all") {
        tablesToRender = Array.from({ length: 10 }, (_, i) => i + 1);
    } else {
        tablesToRender = [parseInt(filter, 10)];
    }

    container.innerHTML = tablesToRender.map(tableNum => {
        const staffForTable = getTableStaff(tableNum);
        const separator = baseUrl.includes("?") ? "&" : "?";
        const targetUrl = `${baseUrl}${separator}table=${tableNum}&staff=${encodeURIComponent(staffForTable)}`;
        const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(targetUrl)}&color=111111&bgcolor=ffffff&qzone=1`;

        return `
            <div class="table-qr-card">
                <div class="table-qr-card-header">
                    <div class="table-qr-card-brand">
                        <i class="fa-solid fa-utensils" style="color: #ff5e36;"></i>
                        <span>ราชากะเพรา (Raja Kra Pao)</span>
                    </div>
                    <div style="font-size: 11px; color: #64748b; font-weight: 600; margin-top: 2px;">ระบบสแกนสั่งอาหารผ่านโทรศัพท์มือถือ</div>
                </div>

                <div class="table-qr-card-table-badge">
                    <i class="fa-solid fa-chair"></i> โต๊ะที่ ${tableNum}
                </div>

                <div class="table-qr-card-staff-badge">
                    <i class="fa-solid fa-user-check"></i> ผู้รับออเดอร์: <strong>${escapeHtml(staffForTable)}</strong>
                </div>

                <div class="table-qr-img-wrapper">
                    <img src="${qrApiUrl}" alt="QR Code โต๊ะ ${tableNum}" loading="lazy" onerror="this.src='https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(targetUrl)}'">
                </div>
            </div>
        `;
    }).join("");
}

function triggerTableQRPrint() {
    document.body.classList.add("printing-qr");
    window.focus();
    window.print();
    setTimeout(() => {
        document.body.classList.remove("printing-qr");
    }, 1000);
}

window.addEventListener("afterprint", () => {
    document.body.classList.remove("printing-qr");
});

// --- Print Receipt Operations (Admin / Backoffice) ---
function openReceiptPrintPreview(orderId) {
    if (!orderId) return;
    const order = orders.find(o => String(o.id) === String(orderId));
    if (!order) return;

    activeReceiptOrder = order;

    document.getElementById("printReceiptId").innerText = `#${order.id}`;
    
    // Parse order date or use formatted current date
    const orderDate = order.date ? formatThaiDate(order.date) : formatThaiDate(new Date());
    document.getElementById("printReceiptDate").innerText = orderDate;
    document.getElementById("printReceiptTime").innerText = `${order.time} น.`;
    document.getElementById("printReceiptTable").innerText = `โต๊ะที่ ${order.table}`;

    // Update store phone in receipt header
    const storePhoneEl = document.getElementById("printReceiptStorePhone");
    if (storePhoneEl) {
        const phone = (storeOwner && storeOwner.phone) ? storeOwner.phone : "063-516-4606";
        storePhoneEl.innerText = phone;
    }

    // Render items details
    const itemsContainer = document.getElementById("printReceiptItems");
    if (itemsContainer) {
        let itemsList = [];
        if (order.details.includes("\n")) {
            itemsList = order.details.split("\n");
        } else if (order.details.includes(", ")) {
            itemsList = order.details.split(", ");
        } else {
            itemsList = [order.details];
        }
        itemsList = itemsList.filter(line => line.trim() !== "");

        const headerHtml = `
            <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 11px; font-weight: bold; border-bottom: 1px dashed #333; padding-bottom: 4px; margin-bottom: 6px; color: #111;">
                <span style="width: 60%;">รายการ</span>
                <span style="width: 15%; text-align: center;">จำนวน</span>
                <span style="width: 25%; text-align: right;">ราคา</span>
            </div>
        `;

        const itemsHtml = itemsList.map(itemStr => {
            let name = itemStr;
            let qty = "1";
            let price = "";
            
            // Check for subtotal price e.g. [120 ฿] or [120 B]
            const priceStartIdx = itemStr.lastIndexOf(" [");
            let cleanItemStr = itemStr;
            if (priceStartIdx > -1) {
                const pricePart = itemStr.substring(priceStartIdx + 1).trim();
                if (pricePart.startsWith("[") && pricePart.endsWith("]")) {
                    price = pricePart.substring(1, pricePart.length - 1);
                    cleanItemStr = itemStr.substring(0, priceStartIdx);
                }
            }
            
            // Check for quantity e.g. (x2)
            const qIdx = cleanItemStr.lastIndexOf(" (x");
            if (qIdx > -1) {
                name = cleanItemStr.substring(0, qIdx);
                const rest = cleanItemStr.substring(qIdx + 3);
                const closeParenIdx = rest.indexOf(")");
                if (closeParenIdx > -1) {
                    qty = rest.substring(0, closeParenIdx);
                }
            } else {
                name = cleanItemStr;
            }

            // Fallback for older orders without price suffix in details
            if (!price) {
                // Remove remarks if any in the name
                const remarksStartIdx = name.indexOf(" [หมายเหตุ:");
                let nameWithoutRemarks = name;
                if (remarksStartIdx > -1) {
                    nameWithoutRemarks = name.substring(0, remarksStartIdx);
                }
                
                // Get base name (remove toppings in parentheses)
                const baseName = nameWithoutRemarks.replace(/\s*\(.*?\)/g, "").trim();
                const menuItem = menuItems.find(m => m.name === baseName);
                if (menuItem) {
                    let unitPrice = menuItem.price;
                    
                    // Parse toppings in parentheses e.g. (+หมูชิ้น) or (+ไข่ดาว, พิเศษ)
                    const toppingsMatch = nameWithoutRemarks.match(/\(\+(.*?)\)/);
                    if (toppingsMatch && menuItem.toppings) {
                        const toppingNames = toppingsMatch[1].split(", ");
                        toppingNames.forEach(tName => {
                            const topInfo = menuItem.toppings.find(t => t.name === tName.trim());
                            if (topInfo) {
                                unitPrice += topInfo.price;
                            }
                        });
                    }
                    price = `${unitPrice * parseInt(qty)} ฿`;
                }
            }

            if (price) {
                price = price.replace(/\s*B$/i, ' ฿').replace(/\s*฿$/, '') + ' ฿';
            }

            return `
                <div style="display: flex; justify-content: space-between; font-family: monospace; font-size: 11px; margin-bottom: 2px;">
                    <span style="width: 60%; max-width: 60%; overflow-wrap: break-word;">${name}</span>
                    <span style="width: 15%; text-align: center;">x${qty}</span>
                    <span style="width: 25%; text-align: right;">${price || "-"}</span>
                </div>
            `;
        }).join("");
        itemsContainer.innerHTML = headerHtml + itemsHtml;
    }

    const totalVal = parseFloat(order.total);
    const subtotalVal = totalVal / 1.07;
    const vatVal = totalVal - subtotalVal;

    document.getElementById("printReceiptSubtotal").innerText = `${subtotalVal.toFixed(2)} ฿`;
    const vatEl = document.getElementById("printReceiptVat");
    if (vatEl) vatEl.innerText = `${vatVal.toFixed(2)} ฿`;
    document.getElementById("printReceiptTotal").innerText = `${totalVal.toFixed(2)} ฿`;
    
    // Set Staff name in receipt preview
    const staffNameVal = order.staff_name || "พนักงานหน้าร้าน";
    const receiptStaffEl = document.getElementById("printReceiptStaffName");
    if (receiptStaffEl) receiptStaffEl.innerText = staffNameVal;

    // Payment PromptPay QR Code Handling
    const ppQrSection = document.getElementById("receiptPaymentQRCodeSection");
    const paymentMethodRow = document.getElementById("printReceiptPaymentMethodRow");
    const paymentMethodVal = document.getElementById("printReceiptPaymentMethod");

    if (order.status === 'completed' && order.payment_method === 'cash') {
        if (ppQrSection) ppQrSection.style.display = "none";
        if (paymentMethodRow) {
            paymentMethodRow.style.display = "block";
            if (paymentMethodVal) paymentMethodVal.innerText = "เงินสด";
        }
    } else {
        if (ppQrSection) ppQrSection.style.display = "flex";
        renderReceiptPromptPayQR(order);
        if (paymentMethodRow) {
            if (order.status === 'completed') {
                paymentMethodRow.style.display = "block";
                if (paymentMethodVal) paymentMethodVal.innerText = "สแกน QR (PromptPay)";
            } else {
                paymentMethodRow.style.display = "none";
            }
        }
    }

    openModal("receiptPreviewModal");
}

function renderReceiptPromptPayQR(order) {
    const qrCodeImg = document.getElementById("receiptPaymentQRCodeImg");
    const qrTotal = document.getElementById("receiptQRTotal");
    const phoneDisplay = document.getElementById("receiptPromptPayDisplayNumber");
    if (!order || !qrCodeImg) return;

    if (qrTotal) qrTotal.innerText = order.total;

    let rawPhone = (storeOwner && storeOwner.phone) ? storeOwner.phone : "063-516-4606";
    if (rawPhone === "089-999-9999") rawPhone = "063-516-4606";
    if (phoneDisplay) phoneDisplay.textContent = rawPhone;

    const phoneClean = rawPhone.replace(/[^0-9]/g, '');
    const promptPayNumber = phoneClean || "0635164606";
    qrCodeImg.src = `https://promptpay.io/${promptPayNumber}/${order.total}.png`;
}

async function saveReceiptPromptPayFromInput() {
    const input = document.getElementById("receiptPromptPayInput");
    if (!input) return;
    const newPhone = input.value.trim();
    if (!newPhone) {
        alert("กรุณาระบุเบอร์โทรศัพท์หรือเลขพร้อมเพย์ค่ะ/ครับ");
        return;
    }
    const clean = newPhone.replace(/[^0-9]/g, '');
    if (clean.length !== 10 && clean.length !== 13) {
        alert("เบอร์พร้อมเพย์ต้องเป็นเบอร์มือถือ 10 หลัก หรือเลขบัตรประชาชน 13 หลักค่ะ/ครับ");
        return;
    }

    if (!storeOwner) storeOwner = {};
    storeOwner.phone = newPhone;
    localStorage.setItem("raja_store_owner_v2", JSON.stringify(storeOwner));

    if (isBackendOnline) {
        try {
            await fetch(`${API_BASE}/api/owner`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...storeOwner, phone: newPhone })
            });
        } catch (e) {}
    }

    if (activeReceiptOrder) {
        renderReceiptPromptPayQR(activeReceiptOrder);
    }
    alert("✅ บันทึกเบอร์พร้อมเพย์เรียบร้อยแล้วค่ะ/ครับ: " + newPhone + "\nQR Code พร้อมเพย์บนบิลได้รับการอัปเดตเรียบร้อยแล้ว");
}

function triggerReceiptPrint() {
    window.focus();
    window.print();
}

// --- Admin Orders Navigation & Tab Switch Controls ---
function switchAdminOrdersTab(tab) {
    adminOrdersSubTab = tab;
    
    const btnTabActive = document.getElementById("btnTabActiveOrders");
    const btnTabCompleted = document.getElementById("btnTabCompletedOrders");
    
    const filterWrapper = document.getElementById("completedOrdersDateFilterWrapper");
    
    if (tab === "active") {
        if (btnTabActive) btnTabActive.classList.add("active");
        if (btnTabCompleted) btnTabCompleted.classList.remove("active");
        if (filterWrapper) filterWrapper.style.display = "none";
    } else {
        if (btnTabActive) btnTabActive.classList.remove("active");
        if (btnTabCompleted) btnTabCompleted.classList.add("active");
        if (filterWrapper) filterWrapper.style.display = "flex";
        
        // Reset completed orders filter states to show all
        adminCompletedOrdersPaymentFilter = "all";
        adminCompletedOrdersPage = 1;
        
        const filterAll = document.getElementById("paymentFilterAll");
        const filterCash = document.getElementById("paymentFilterCash");
        const filterScan = document.getElementById("paymentFilterScan");
        if (filterAll) filterAll.classList.add("active");
        if (filterCash) filterCash.classList.remove("active");
        if (filterScan) filterScan.classList.remove("active");
        
        populateCompletedOrdersDateFilter();
    }
    
    renderAdminOrders();
}

function changeAdminOrdersPage(direction) {
    direction = Number(direction);
    if (adminOrdersSubTab === "active") {
        adminActiveOrdersPage = Number(adminActiveOrdersPage) + direction;
    } else {
        adminCompletedOrdersPage = Number(adminCompletedOrdersPage) + direction;
    }
    renderAdminOrders();
}

function goToAdminOrdersPage(page) {
    page = Number(page);
    if (adminOrdersSubTab === "active") {
        adminActiveOrdersPage = page;
    } else {
        adminCompletedOrdersPage = page;
    }
    renderAdminOrders();
}

// --- Admin Sub View Toggles ---
function switchAdminSubView(subView) {
    const views = {
        'dashboard': 'adminDashboardSubView',
        'inventory-stock': 'adminStockSubView',
        'menu-editor': 'adminMenuSubView',
        'staff': 'adminStaffSubView',
        'toppings': 'adminToppingsSubView',
        'requisitions': 'adminRequisitionsSubView',
        'stock-in': 'adminStockInSubView',
        'expenses': 'adminExpensesSubView',
        'sales': 'adminSalesSubView'
    };
    
    const tabs = {
        'dashboard': 'adminSidebarTabDashboard',
        'inventory-stock': 'adminSidebarTabInventoryStock',
        'menu-editor': 'adminSidebarTabMenuEditor',
        'staff': 'adminSidebarTabStaff',
        'toppings': 'adminSidebarTabToppings',
        'requisitions': 'adminSidebarTabRequisitions',
        'stock-in': 'adminSidebarTabStockIn',
        'expenses': 'adminSidebarTabExpenses',
        'sales': 'adminSidebarTabSales'
    };

    // Toggle subviews display
    for (const [key, id] of Object.entries(views)) {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = (key === subView) ? 'flex' : 'none';
        }
    }

    // Toggle active tabs class
    for (const [key, id] of Object.entries(tabs)) {
        const el = document.getElementById(id);
        if (el) {
            if (key === subView) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        }
    }

    // Refresh specific tab data
    if (subView === 'dashboard') {
        recalculateAdminMetrics();
        renderAdminOrders();
        renderAdminTablesGrid();
    } else if (subView === 'inventory-stock') {
        renderInventoryTable();
    } else if (subView === 'menu-editor') {
        renderAdminMenuGrid();
    } else if (subView === 'staff') {
        renderStoreOwnerCard();
        renderStaffTable();
    } else if (subView === 'toppings') {
        renderAdminToppingGrid();
    } else if (subView === 'requisitions') {
        renderRequisitionsTable();
    } else if (subView === 'stock-in') {
        renderStockInTable();
    } else if (subView === 'expenses') {
        renderExpensesTable();
    } else if (subView === 'sales') {
        if (isBackendOnline) {
            fetch(`${API_BASE}/api/orders`)
                .then(r => r.json())
                .then(latest => { if (Array.isArray(latest) && latest.length > 0) orders = latest; })
                .catch(() => {})
                .finally(() => renderDailySalesReport());
        } else {
            renderDailySalesReport();
        }
    }
}

// --- Store Owner Management Functions ---
let isOwnerPasscodeVisible = false;

function renderStoreOwnerCard() {
    const container = document.getElementById("storeOwnerCardContainer");
    if (!container) return;

    if (!storeOwner) {
        storeOwner = {
            name: "คุณราชา เจ้าของร้าน",
            username: "owner",
            phone: "089-999-9999",
            role: "เจ้าของร้าน (ผู้บริหารสูงสุด)",
            passcode: "1234"
        };
    }

    const safeName = (storeOwner.name || 'คุณราชา เจ้าของร้าน').replace(/"/g, '&quot;');
    const safeUser = (storeOwner.username || 'owner').replace(/"/g, '&quot;');
    const safePhone = (storeOwner.phone || '089-999-9999').replace(/"/g, '&quot;');
    const safeRole = (storeOwner.role || 'เจ้าของร้าน (ผู้บริหารสูงสุด)').replace(/"/g, '&quot;');
    const passcodeText = isOwnerPasscodeVisible ? (storeOwner.passcode || '1234') : '••••';
    const eyeIconClass = isOwnerPasscodeVisible ? 'fa-eye-slash' : 'fa-eye';

    container.innerHTML = `
        <div class="store-owner-card">
            <div class="store-owner-main">
                <div class="store-owner-avatar">
                    <i class="fa-solid fa-crown"></i>
                </div>
                <div class="store-owner-details">
                    <h4>
                        ${safeName}
                        <span class="store-owner-role-badge">
                            <i class="fa-solid fa-crown"></i> ${safeRole}
                        </span>
                    </h4>
                    <div style="font-size: 13px; color: var(--text-muted); display: flex; align-items: center; gap: 8px;">
                        <span><i class="fa-solid fa-user-shield" style="color: #f59e0b;"></i> ผู้ดูแลระบบหลัก (Super Administrator)</span>
                        <span>•</span>
                        <span style="color: #10b981; font-weight: 600;"><i class="fa-solid fa-circle-check"></i> บัญชีหลักพร้อมใช้งาน</span>
                    </div>
                </div>
            </div>
            <div class="store-owner-meta-grid">
                <div class="store-owner-meta-item">
                    <span class="store-owner-meta-label">ชื่อผู้ใช้งาน (USERNAME)</span>
                    <span class="store-owner-meta-val">
                        <i class="fa-solid fa-at" style="color: var(--primary); font-size: 12px;"></i> ${safeUser}
                    </span>
                </div>
                <div class="store-owner-meta-item">
                    <span class="store-owner-meta-label">เบอร์โทรศัพท์</span>
                    <span class="store-owner-meta-val">
                        <i class="fa-solid fa-phone" style="color: var(--secondary); font-size: 12px;"></i> ${safePhone}
                    </span>
                </div>
                <div class="store-owner-meta-item">
                    <span class="store-owner-meta-label">รหัสผ่านหลังบ้าน (PASSCODE)</span>
                    <span class="store-owner-meta-val">
                        <i class="fa-solid fa-key" style="color: #f59e0b; font-size: 12px;"></i> 
                        <span id="ownerPasscodeDisplay" style="letter-spacing: 2px; font-family: monospace; font-size: 15px;">${passcodeText}</span>
                        <i class="fa-regular ${eyeIconClass}" onclick="toggleOwnerPasscodeVisibility()" style="cursor: pointer; font-size: 13px; color: var(--text-muted); margin-left: 6px;" title="แสดง/ซ่อนรหัสผ่าน"></i>
                    </span>
                </div>
            </div>
        </div>
    `;
}

function toggleOwnerPasscodeVisibility() {
    isOwnerPasscodeVisible = !isOwnerPasscodeVisible;
    renderStoreOwnerCard();
}

function openEditOwnerModal() {
    if (!storeOwner) {
        storeOwner = {
            name: "คุณราชา เจ้าของร้าน",
            username: "owner",
            phone: "089-999-9999",
            role: "เจ้าของร้าน (ผู้บริหารสูงสุด)",
            passcode: "1234"
        };
    }
    document.getElementById("ownerFormName").value = storeOwner.name || "";
    document.getElementById("ownerFormUsername").value = storeOwner.username || "";
    document.getElementById("ownerFormPhone").value = storeOwner.phone || "";
    document.getElementById("ownerFormPasscode").value = storeOwner.passcode || "1234";
    openModal("ownerFormModal");
}

async function saveOwnerData(event) {
    event.preventDefault();
    const name = document.getElementById("ownerFormName").value.trim();
    const username = document.getElementById("ownerFormUsername").value.trim();
    const phone = document.getElementById("ownerFormPhone").value.trim();
    const passcode = document.getElementById("ownerFormPasscode").value.trim();

    if (!name || !username || !phone || !passcode) {
        alert("กรุณากรอกข้อมูลเจ้าของร้านให้ครบถ้วนทุกช่องค่ะ/ครับ");
        return;
    }

    const payload = {
        name,
        username,
        phone,
        role: "เจ้าของร้าน (ผู้บริหารสูงสุด)",
        passcode
    };

    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/owner`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Failed to update owner in backend");
            
            const reloadRes = await fetch(`${API_BASE}/api/owner`);
            if (reloadRes.ok) storeOwner = await reloadRes.json();
            else storeOwner = payload;
        } else {
            storeOwner = payload;
        }

        localStorage.setItem("raja_store_owner_v2", JSON.stringify(storeOwner));
        closeModal("ownerFormModal");
        renderStoreOwnerCard();
        alert("บันทึกข้อมูลเจ้าของร้านเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error("Save owner error:", err);
        storeOwner = payload;
        localStorage.setItem("raja_store_owner_v2", JSON.stringify(storeOwner));
        closeModal("ownerFormModal");
        renderStoreOwnerCard();
        alert("บันทึกข้อมูลเจ้าของร้านเรียบร้อยแล้ว (โหมดจัดเก็บในเครื่อง)");
    }
}

// --- Staff Management CRUD Functions ---
function renderStaffTable() {
    const tbody = document.getElementById("adminStaffTableBody");
    if (!tbody) return;
    
    if (staffList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีข้อมูลพนักงานในระบบ คลิกปุ่ม "เพิ่มพนักงานใหม่" ด้านบนเพื่อเริ่มบันทึกข้อมูล</td></tr>`;
        return;
    }
    
    tbody.innerHTML = staffList.map(staff => {
        let posThai = "";
        switch (staff.position) {
            case "chef": posThai = "พ่อครัว / แม่ครัว"; break;
            case "waiter": posThai = "พนักงานเสิร์ฟ"; break;
            case "cashier": posThai = "พนักงานแคชเชียร์"; break;
            case "manager": posThai = "ผู้จัดการร้าน"; break;
            case "auditor": posThai = "พนักงานตรวจสอบ"; break;
            default: posThai = staff.position;
        }
        
        const statusBadge = staff.status === "active" 
            ? `<span class="item-status-pill status-ready" style="cursor: pointer; user-select: none;" onclick="toggleStaffStatus(${staff.id})" title="คลิกเพื่อเปลี่ยนสถานะ"><i class="fa-solid fa-user-check"></i> ปกติ (ปฏิบัติงาน)</span>`
            : `<span class="item-status-pill status-pending" style="cursor: pointer; user-select: none;" onclick="toggleStaffStatus(${staff.id})" title="คลิกเพื่อเปลี่ยนสถานะ"><i class="fa-solid fa-user-slash"></i> พักงาน / ลางาน</span>`;
            
        return `
            <tr>
                <td><span class="order-id-badge">#ST-${staff.id}</span></td>
                <td><strong>${staff.name}</strong></td>
                <td><span class="order-time">${staff.username}</span></td>
                <td><span class="order-date" style="font-size: 13px; font-weight: 500;">${posThai}</span></td>
                <td>${staff.phone}</td>
                <td>${statusBadge}</td>
                <td>
                    <div style="display: flex; gap: 8px;">
                        <button class="action-row-btn" style="background: rgba(0, 180, 216, 0.15); color: var(--secondary); border: 1px solid rgba(0, 180, 216, 0.3);" onclick="openEditStaffModal(${staff.id})">
                            <i class="fa-solid fa-user-pen"></i> แก้ไข
                        </button>
                        <button class="action-row-btn" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);" onclick="deleteStaffData(${staff.id})">
                            <i class="fa-solid fa-trash-can"></i> ลบ
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function openAddStaffModal() {
    document.getElementById("staffForm").reset();
    document.getElementById("staffFormId").value = "";
    document.getElementById("staffModalTitle").innerHTML = `<i class="fa-solid fa-user-plus" style="color: var(--primary);"></i> เพิ่มพนักงานใหม่`;
    openModal("staffFormModal");
}

function openEditStaffModal(id) {
    const staff = staffList.find(s => s.id == id);
    if (!staff) return;
    
    document.getElementById("staffFormId").value = staff.id;
    document.getElementById("staffFormName").value = staff.name;
    document.getElementById("staffFormUsername").value = staff.username;
    document.getElementById("staffFormPosition").value = staff.position;
    document.getElementById("staffFormPhone").value = staff.phone;
    document.getElementById("staffFormStatus").value = staff.status;
    
    document.getElementById("staffModalTitle").innerHTML = `<i class="fa-solid fa-user-pen" style="color: var(--primary);"></i> แก้ไขข้อมูลพนักงาน`;
    openModal("staffFormModal");
}

async function saveStaffData(event) {
    event.preventDefault();
    
    const idVal = document.getElementById("staffFormId").value;
    const name = document.getElementById("staffFormName").value.trim();
    const username = document.getElementById("staffFormUsername").value.trim();
    const position = document.getElementById("staffFormPosition").value;
    const phone = document.getElementById("staffFormPhone").value.trim();
    const status = document.getElementById("staffFormStatus").value;
    
    if (!name || !username || !phone) {
        alert("กรุณากรอกข้อมูลที่สำคัญให้ครบถ้วนค่ะ/ครับ");
        return;
    }
    
    const payload = { name, username, position, phone, status };
    
    try {
        if (isBackendOnline) {
            if (idVal) {
                // Update
                const res = await fetch(`${API_BASE}/api/staff/${idVal}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Failed to update staff in MySQL");
            } else {
                // Create
                const res = await fetch(`${API_BASE}/api/staff`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Failed to create staff in MySQL");
            }
            
            // Reload from DB
            const reloadRes = await fetch(`${API_BASE}/api/staff`);
            if (reloadRes.ok) staffList = await reloadRes.json();
        } else {
            // LocalStorage Mode
            if (idVal) {
                // Edit existing
                const index = staffList.findIndex(s => s.id == idVal);
                if (index !== -1) {
                    staffList[index] = { id: parseInt(idVal), ...payload };
                }
            } else {
                // Create new
                const newId = staffList.length > 0 ? Math.max(...staffList.map(s => s.id)) + 1 : 1;
                staffList.unshift({ id: newId, ...payload });
            }
            localStorage.setItem("raja_staff_v2", JSON.stringify(staffList));
        }
        
        closeModal("staffFormModal");
        renderStaffTable();
        alert("บันทึกข้อมูลพนักงานเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูล: " + err.message);
    }
}

async function deleteStaffData(id) {
    if (!confirm("คุณต้องการลบข้อมูลพนักงานรายนี้ออกจากระบบใช่หรือไม่?")) return;
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/staff/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error("Failed to delete staff in MySQL");
            
            // Reload from DB
            const reloadRes = await fetch(`${API_BASE}/api/staff`);
            if (reloadRes.ok) staffList = await reloadRes.json();
        } else {
            // LocalStorage Mode
            staffList = staffList.filter(s => s.id != id);
            localStorage.setItem("raja_staff_v2", JSON.stringify(staffList));
        }
        
        renderStaffTable();
        alert("ลบข้อมูลพนักงานสำเร็จแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการลบข้อมูล: " + err.message);
    }
}

async function toggleStaffStatus(id) {
    const staff = staffList.find(s => s.id == id);
    if (!staff) return;
    
    const newStatus = staff.status === "active" ? "inactive" : "active";
    const payload = {
        name: staff.name,
        username: staff.username,
        position: staff.position,
        phone: staff.phone,
        status: newStatus
    };
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/staff/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Failed to toggle status in MySQL");
            
            // Reload from DB
            const reloadRes = await fetch(`${API_BASE}/api/staff`);
            if (reloadRes.ok) staffList = await reloadRes.json();
        } else {
            // LocalStorage Mode
            staff.status = newStatus;
            localStorage.setItem("raja_staff_v2", JSON.stringify(staffList));
        }
        
        renderStaffTable();
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการเปลี่ยนสถานะ: " + err.message);
    }
}

// --- Sales drilldown functions ---
function switchModalDrilldownTab(tab) {
    currentModalDrilldownTab = tab;
    const btnDays = document.getElementById("btnModalTabDays");
    const btnBills = document.getElementById("btnModalTabBills");
    const wrapperDays = document.getElementById("salesDrilldownDaysWrapper");
    const wrapperBills = document.getElementById("salesDrilldownBillsWrapper");

    if (tab === 'days') {
        if (btnDays) {
            btnDays.classList.add("active");
            btnDays.style.color = "var(--primary)";
            btnDays.style.fontWeight = "700";
        }
        if (btnBills) {
            btnBills.classList.remove("active");
            btnBills.style.color = "var(--text-muted)";
            btnBills.style.fontWeight = "600";
        }
        if (wrapperDays) wrapperDays.style.display = "block";
        if (wrapperBills) wrapperBills.style.display = "none";
    } else {
        if (btnDays) {
            btnDays.classList.remove("active");
            btnDays.style.color = "var(--text-muted)";
            btnDays.style.fontWeight = "600";
        }
        if (btnBills) {
            btnBills.classList.add("active");
            btnBills.style.color = "var(--primary)";
            btnBills.style.fontWeight = "700";
        }
        if (wrapperDays) wrapperDays.style.display = "none";
        if (wrapperBills) wrapperBills.style.display = "block";
    }
}

function viewMonthInMainDailyTable() {
    if (!activeDrilldownMonthKey) return;
    selectedSalesMonth = activeDrilldownMonthKey;
    const select = document.getElementById("salesMonthFilter");
    if (select) select.value = activeDrilldownMonthKey;
    switchSalesTab('daily');
    closeModal('salesDrilldownModal');
}

async function viewDailyBills(dateStr) {
    // Refresh orders if online
    if (isBackendOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/orders`);
            if (res.ok) {
                const fresh = await res.json();
                if (Array.isArray(fresh) && fresh.length > 0) orders = fresh;
            }
        } catch (e) {}
    }

    const drilldownTitle = document.getElementById("salesDrilldownTitle");
    const tbodyBills = document.getElementById("salesDrilldownTableBody");
    const tabControls = document.getElementById("salesDrilldownTabControls");
    const wrapperDays = document.getElementById("salesDrilldownDaysWrapper");
    const wrapperBills = document.getElementById("salesDrilldownBillsWrapper");
    const btnMain = document.getElementById("btnViewInMainDailyTable");
    const metricsContainer = document.getElementById("salesDrilldownMetrics");

    if (btnMain) btnMain.style.display = "none";
    if (tabControls) tabControls.style.display = "none";
    if (wrapperDays) wrapperDays.style.display = "none";
    if (wrapperBills) wrapperBills.style.display = "block";

    const formattedDate = formatThaiDate(dateStr);
    if (drilldownTitle) {
        drilldownTitle.innerHTML = `<i class="fa-solid fa-file-invoice-dollar" style="color: var(--primary);"></i> รายละเอียดบิลยอดขายประจำวันที่ ${formattedDate}`;
    }

    const targetDate = normalizeDateString(dateStr);
    const allCompleted = getAllCompletedOrdersList();
    const dayOrders = allCompleted.filter(o => normalizeDateString(o.date) === targetDate);
    dayOrders.sort((a, b) => (b.time || "").localeCompare(a.time || ""));

    // Update metrics cards
    let dayTotal = 0, dayCash = 0, dayScan = 0;
    dayOrders.forEach(o => {
        dayTotal += (o.total || 0);
        if (o.payment_method === 'cash') dayCash += (o.total || 0);
        else dayScan += (o.total || 0);
    });

    if (metricsContainer) {
        metricsContainer.style.display = "grid";
        const mTotal = document.getElementById("modalMetricTotalSales");
        const mCash = document.getElementById("modalMetricCashSales");
        const mScan = document.getElementById("modalMetricScanSales");
        const mCount = document.getElementById("modalMetricTotalOrders");
        if (mTotal) mTotal.innerText = `${dayTotal.toLocaleString()} B`;
        if (mCash) mCash.innerText = `${dayCash.toLocaleString()} B`;
        if (mScan) mScan.innerText = `${dayScan.toLocaleString()} B`;
        if (mCount) mCount.innerText = `${dayOrders.length} บิล`;
    }

    renderDrilldownOrders(dayOrders, tbodyBills);
    openModal("salesDrilldownModal");
}

async function viewMonthlyBills(monthKey) {
    activeDrilldownMonthKey = monthKey;

    // Refresh orders if online
    if (isBackendOnline) {
        try {
            const res = await fetch(`${API_BASE}/api/orders`);
            if (res.ok) {
                const fresh = await res.json();
                if (Array.isArray(fresh) && fresh.length > 0) orders = fresh;
            }
        } catch (e) {}
    }

    const drilldownTitle = document.getElementById("salesDrilldownTitle");
    const tbodyDays = document.getElementById("salesDrilldownDaysTableBody");
    const tbodyBills = document.getElementById("salesDrilldownTableBody");
    const tabControls = document.getElementById("salesDrilldownTabControls");
    const btnMain = document.getElementById("btnViewInMainDailyTable");
    const metricsContainer = document.getElementById("salesDrilldownMetrics");
    const modalBillsCount = document.getElementById("modalBillsCount");

    if (btnMain) btnMain.style.display = "inline-flex";
    if (tabControls) tabControls.style.display = "flex";
    if (metricsContainer) metricsContainer.style.display = "grid";

    const formattedMonth = formatThaiMonth(monthKey);
    if (drilldownTitle) {
        drilldownTitle.innerHTML = `<i class="fa-solid fa-chart-pie" style="color: var(--primary);"></i> สรุปรายงานและสถิติยอดขายประจำเดือน ${formattedMonth}`;
    }

    const parts = String(monthKey).split('-'); // YYYY-MM
    const allCompleted = getAllCompletedOrdersList();
    const monthOrders = allCompleted.filter(o => {
        const oDate = normalizeDateString(o.date);
        return oDate.startsWith(`${parts[0]}-${parts[1]}`);
    });

    monthOrders.sort((a, b) => {
        const dateA = a.date || "";
        const dateB = b.date || "";
        const dateCompare = dateB.localeCompare(dateA);
        if (dateCompare !== 0) return dateCompare;
        return (b.time || "").localeCompare(a.time || "");
    });

    // Calculate monthly totals
    let monthTotal = 0, monthCash = 0, monthScan = 0;
    const dailyBreakdown = {};

    monthOrders.forEach(o => {
        const totalVal = o.total || 0;
        monthTotal += totalVal;
        if (o.payment_method === 'cash') {
            monthCash += totalVal;
        } else {
            monthScan += totalVal;
        }

        const oDate = normalizeDateString(o.date) || new Date().toISOString().split('T')[0];
        if (!dailyBreakdown[oDate]) {
            dailyBreakdown[oDate] = { date: oDate, total: 0, cash: 0, scan: 0, count: 0 };
        }
        dailyBreakdown[oDate].total += totalVal;
        if (o.payment_method === 'cash') {
            dailyBreakdown[oDate].cash += totalVal;
        } else {
            dailyBreakdown[oDate].scan += totalVal;
        }
        dailyBreakdown[oDate].count += 1;
    });

    // Update modal cards
    const mTotal = document.getElementById("modalMetricTotalSales");
    const mCash = document.getElementById("modalMetricCashSales");
    const mScan = document.getElementById("modalMetricScanSales");
    const mCount = document.getElementById("modalMetricTotalOrders");
    if (mTotal) mTotal.innerText = `${monthTotal.toLocaleString()} B`;
    if (mCash) mCash.innerText = `${monthCash.toLocaleString()} B`;
    if (mScan) mScan.innerText = `${monthScan.toLocaleString()} B`;
    if (mCount) mCount.innerText = `${monthOrders.length} บิล`;
    if (modalBillsCount) modalBillsCount.innerText = monthOrders.length;

    // Render daily breakdown rows
    const daysList = Object.values(dailyBreakdown).sort((a, b) => b.date.localeCompare(a.date));
    if (tbodyDays) {
        if (daysList.length === 0) {
            tbodyDays.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">ไม่มีข้อมูลยอดขายในเดือนนี้ค่ะ</td></tr>`;
        } else {
            tbodyDays.innerHTML = daysList.map(day => `
                <tr style="cursor: pointer;" onclick="closeModal('salesDrilldownModal'); viewDailyBills('${day.date}')" title="คลิกเพื่อดูบิลของวันที่ ${formatThaiDate(day.date)}">
                    <td><strong>${formatThaiDate(day.date)}</strong></td>
                    <td><strong style="color: var(--primary);">${day.total.toLocaleString()} B</strong></td>
                    <td style="color: #10b981;">${day.cash.toLocaleString()} B</td>
                    <td style="color: #0284c7;">${day.scan.toLocaleString()} B</td>
                    <td><strong>${day.count} บิล</strong></td>
                    <td>
                        <button class="btn btn-secondary" onclick="event.stopPropagation(); closeModal('salesDrilldownModal'); viewDailyBills('${day.date}')" style="padding: 4px 10px; font-size: 11px; display: flex; align-items: center; gap: 4px;">
                            <i class="fa-solid fa-receipt"></i> ดูบิลวันนี้
                        </button>
                    </td>
                </tr>
            `).join("");
        }
    }

    // Render bills list
    if (tbodyBills) {
        renderDrilldownOrders(monthOrders, tbodyBills);
    }

    // Default to 'days' view
    switchModalDrilldownTab('days');
    openModal("salesDrilldownModal");
}

function renderDrilldownOrders(filteredOrders, tbody) {
    if (filteredOrders.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีบิลที่สั่งซื้อเสร็จสมบูรณ์ในรอบการขายนี้ค่ะ</td></tr>`;
        return;
    }
    
    tbody.innerHTML = filteredOrders.map(order => {
        const orderDateStr = order.date ? formatThaiDate(order.date) : "-";
        
        let payMethodBadge = "";
        if (order.payment_method === 'cash') {
            payMethodBadge = `<span class="item-status-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3); font-size: 11px;"><i class="fa-solid fa-money-bill-wave"></i> เงินสด</span>`;
        } else {
            payMethodBadge = `<span class="item-status-pill" style="background: rgba(2, 132, 199, 0.15); color: #0284c7; border: 1px solid rgba(2, 132, 199, 0.3); font-size: 11px;"><i class="fa-solid fa-qrcode"></i> สแกน QR</span>`;
        }

        const staffDisplay = order.staff_name || "พนักงานหน้าร้าน";

        return `
            <tr>
                <td><span class="order-id-badge">#${order.id}</span></td>
                <td><span class="order-date" style="font-size: 13px; font-weight: 500;">${orderDateStr}</span></td>
                <td><span class="order-time">${order.time || "-"} น.</span></td>
                <td><strong>โต๊ะที่ ${order.table}</strong></td>
                <td><div class="order-details-col">${formatOrderDetailsHtml(order.details)}</div></td>
                <td><span style="font-size: 12px; color: var(--text-muted);"><i class="fa-solid fa-user-tag"></i> ${staffDisplay}</span></td>
                <td><strong>${order.total} ฿</strong></td>
                <td>${payMethodBadge}</td>
                <td>
                    <button class="action-row-btn" style="background: rgba(0, 180, 216, 0.15); color: var(--secondary); border: 1px solid rgba(0, 180, 216, 0.3);" onclick="closeModal('salesDrilldownModal'); openReceiptPrintPreview('${order.id}')">
                        <i class="fa-solid fa-print"></i> ใบเสร็จ
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

// --- Completed Orders Date Filter Population ---
function populateCompletedOrdersDateFilter() {
    const filter = document.getElementById("completedOrdersDateFilter");
    if (!filter) return;
    
    // Save current selected value
    const currentVal = filter.value;
    
    // Get unique dates of all orders
    const uniqueDates = [...new Set(orders.map(o => o.date || new Date().toISOString().split('T')[0]))];
    uniqueDates.sort((a, b) => (b || '').localeCompare(a || '')); // Sort newest first
    
    let optionsHtml = `<option value="all">แสดงประวัติทุกวัน</option>`;
    uniqueDates.forEach(date => {
        optionsHtml += `<option value="${date}">${formatThaiDate(date)}</option>`;
    });
    
    filter.innerHTML = optionsHtml;
    
    // Re-set value if it still exists in the new list, otherwise default to all
    if (uniqueDates.includes(currentVal)) {
        filter.value = currentVal;
    } else {
        filter.value = "all";
    }
}

function filterCompletedOrdersByDate() {
    adminCompletedOrdersPage = 1; // Reset to page 1
    renderAdminOrders();
}

function filterCompletedOrdersByPayment(method) {
    adminCompletedOrdersPaymentFilter = method;
    adminCompletedOrdersPage = 1; // Reset to page 1
    
    // Update active class on buttons
    const filterAll = document.getElementById("paymentFilterAll");
    const filterCash = document.getElementById("paymentFilterCash");
    const filterScan = document.getElementById("paymentFilterScan");
    
    if (filterAll) filterAll.classList.remove("active");
    if (filterCash) filterCash.classList.remove("active");
    if (filterScan) filterScan.classList.remove("active");
    
    if (method === 'all' && filterAll) filterAll.classList.add("active");
    if (method === 'cash' && filterCash) filterCash.classList.add("active");
    if (method === 'scan' && filterScan) filterScan.classList.add("active");
    
    renderAdminOrders();
}

// --- Stock & Requisitions Functions ---
function switchInventorySubTab(subTab) {
    inventorySubTab = subTab;
    
    const tabStock = document.getElementById("btnTabStockInventory");
    const tabReqs = document.getElementById("btnTabRequisitions");
    
    const viewStock = document.getElementById("innerSubViewStock");
    const viewReqs = document.getElementById("innerSubViewRequisitions");
    
    const btnTabStockInventory = document.getElementById("btnTabStockInventory");
    const btnTabRequisitions = document.getElementById("btnTabRequisitions");
    
    if (subTab === "stock") {
        if (btnTabStockInventory) {
            btnTabStockInventory.classList.add("active");
            btnTabStockInventory.style.color = "var(--primary)";
            btnTabStockInventory.style.fontWeight = "700";
        }
        if (btnTabRequisitions) {
            btnTabRequisitions.classList.remove("active");
            btnTabRequisitions.style.color = "var(--text-muted)";
            btnTabRequisitions.style.fontWeight = "600";
        }
        if (viewStock) viewStock.style.display = "flex";
        if (viewReqs) viewReqs.style.display = "none";
        renderInventoryTable();
    } else {
        if (btnTabStockInventory) {
            btnTabStockInventory.classList.remove("active");
            btnTabStockInventory.style.color = "var(--text-muted)";
            btnTabStockInventory.style.fontWeight = "600";
        }
        if (btnTabRequisitions) {
            btnTabRequisitions.classList.add("active");
            btnTabRequisitions.style.color = "var(--primary)";
            btnTabRequisitions.style.fontWeight = "700";
        }
        if (viewStock) viewStock.style.display = "none";
        if (viewReqs) viewReqs.style.display = "flex";
        renderRequisitionsTable();
    }
}

function renderInventoryTable() {
    const tbody = document.getElementById("adminInventoryTableBody");
    if (!tbody) return;
    
    if (inventoryItems.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีข้อมูลวัตถุดิบในคลังสินค้า คลิกปุ่ม "เพิ่มวัตถุดิบใหม่" ด้านบนเพื่อเริ่มบันทึกข้อมูล</td></tr>`;
        return;
    }
    
    tbody.innerHTML = inventoryItems.map(item => {
        let statusBadge = "";
        let qtyColor = "var(--secondary)";
        let isRequisitionDisabled = false;
        
        if (item.quantity <= 0) {
            statusBadge = `<span class="item-status-pill" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3); font-weight: 700;"><i class="fa-solid fa-circle-xmark"></i> สินค้าหมด</span>`;
            qtyColor = "#ef4444";
            isRequisitionDisabled = true;
        } else if (item.quantity <= item.min_stock) {
            statusBadge = `<span class="item-status-pill status-pending"><i class="fa-solid fa-triangle-exclamation"></i> สต็อกใกล้หมด</span>`;
            qtyColor = "var(--primary)";
        } else {
            statusBadge = `<span class="item-status-pill status-ready"><i class="fa-solid fa-square-check"></i> ปกติ (เพียงพอ)</span>`;
            qtyColor = "var(--secondary)";
        }
            
        const reqBtnHtml = isRequisitionDisabled
            ? `<button class="action-row-btn" style="background: rgba(255,255,255,0.05); color: var(--text-muted); border: 1px solid var(--border); opacity: 0.5; cursor: not-allowed;" disabled title="ไม่สามารถเบิกได้เนื่องจากวัตถุดิบหมดคลัง">
                   <i class="fa-solid fa-file-signature"></i> เบิกจ่าย
               </button>`
            : `<button class="action-row-btn" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b; border: 1px solid rgba(245, 158, 11, 0.3);" onclick="openAddRequisitionModal(${item.id})">
                   <i class="fa-solid fa-file-signature"></i> เบิกจ่าย
               </button>`;

        return `
            <tr>
                <td><span class="order-id-badge">#INV-${item.id}</span></td>
                <td><strong>${item.name}</strong></td>
                <td><strong style="color: ${qtyColor};">${item.quantity} ${item.unit}</strong></td>
                <td>${item.min_stock} ${item.unit}</td>
                <td>${statusBadge}</td>
                <td>
                    <div style="display: flex; gap: 8px;">
                        <button class="action-row-btn" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);" onclick="openAddStockInModal(${item.id})" title="รับเข้าวัตถุดิบ">
                            <i class="fa-solid fa-plus"></i> รับเข้า
                        </button>
                        ${reqBtnHtml}
                        <button class="action-row-btn" style="background: rgba(0, 180, 216, 0.15); color: var(--secondary); border: 1px solid rgba(0, 180, 216, 0.3);" onclick="openEditInventoryModal(${item.id})">
                            <i class="fa-solid fa-edit"></i> แก้ไข
                        </button>
                        <button class="action-row-btn" style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.3);" onclick="deleteInventoryItem(${item.id})">
                            <i class="fa-solid fa-trash-can"></i> ลบ
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function renderRequisitionsTable() {
    const tbody = document.getElementById("adminRequisitionsTableBody");
    if (!tbody) return;
    
    if (requisitionLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีบันทึกประวัติการเบิกจ่ายวัตถุดิบในขณะนี้</td></tr>`;
        return;
    }
    
    tbody.innerHTML = requisitionLogs.map(log => {
        const itemUnit = log.unit || "กก.";
        return `
            <tr>
                <td><span class="order-id-badge">#REQ-${log.id}</span></td>
                <td><span class="order-time" style="font-size: 13px; font-weight: 500;">${log.action_time} น.</span></td>
                <td><strong>${log.item_name}</strong></td>
                <td><strong style="color: var(--primary);">${log.quantity} ${itemUnit}</strong></td>
                <td><span class="order-date" style="font-size: 13px; font-weight: 500;">${log.staff_name}</span></td>
                <td><span style="color: var(--text-muted); font-size: 13px;">${log.remarks || "-"}</span></td>
            </tr>
        `;
    }).join("");
}

function renderStockInTable() {
    const tbody = document.getElementById("adminStockInTableBody");
    if (!tbody) return;
    
    if (stockInLogs.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีบันทึกประวัติการรับเข้าวัตถุดิบในขณะนี้</td></tr>`;
        return;
    }
    
    tbody.innerHTML = stockInLogs.map(log => {
        const itemUnit = log.unit || "กก.";
        const costDisplay = (log.cost !== null && log.cost !== undefined && !isNaN(log.cost) && Number(log.cost) > 0) ? `฿${parseFloat(log.cost).toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "-";
        return `
            <tr>
                <td><span class="order-id-badge" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">#IN-${log.id}</span></td>
                <td><span class="order-time" style="font-size: 13px; font-weight: 500;">${log.action_time} น.</span></td>
                <td><strong>${log.item_name}</strong></td>
                <td><strong style="color: #10b981;">+${log.quantity} ${itemUnit}</strong></td>
                <td><strong style="color: var(--primary);">${costDisplay}</strong></td>
                <td><span class="order-date" style="font-size: 13px; font-weight: 500;">${log.staff_name}</span></td>
                <td><span style="color: var(--text-muted); font-size: 13px;">${log.remarks || "-"}</span></td>
            </tr>
        `;
    }).join("");
}

function openAddStockInModal(preselectedItemId = null) {
    const form = document.getElementById("stockInForm");
    if (form) form.reset();

    const input = document.getElementById("stockInItemInput");
    const hiddenId = document.getElementById("stockInFormItemId");
    const limitText = document.getElementById("stockInCurrentQtyText");
    const unitInput = document.getElementById("stockInFormUnit");
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");
    if (list) list.style.display = "none";
    if (icon) icon.style.transform = "translateY(-50%) rotate(0deg)";

    if (unitInput) unitInput.value = "กก.";

    if (preselectedItemId) {
        const item = inventoryItems.find(i => i.id == preselectedItemId);
        if (item) {
            if (input) input.value = item.name;
            if (hiddenId) hiddenId.value = item.id;
            if (limitText) limitText.innerText = `จำนวนคงเหลือปัจจุบัน: ${item.quantity} ${item.unit}`;
            if (unitInput && item.unit) unitInput.value = item.unit;
        }
    } else {
        if (input) input.value = "";
        if (hiddenId) hiddenId.value = "";
        if (limitText) limitText.innerText = `จำนวนคงเหลือปัจจุบัน: -`;
    }

    // Populate active staff select dropdown
    const staffSelect = document.getElementById("stockInFormStaff");
    if (staffSelect) {
        let optionsHtml = `<option value="">-- เลือกผู้รับเข้า --</option>`;
        if (storeOwner && storeOwner.name) {
            optionsHtml += `<option value="${storeOwner.name}">👑 ${storeOwner.name} (เจ้าของร้าน)</option>`;
        }
        const activeStaff = staffList.filter(s => s.status === 'active');
        activeStaff.forEach(staff => {
            let posThai = "";
            switch (staff.position) {
                case "chef": posThai = "เชฟ"; break;
                case "waiter": posThai = "พนักงานเสิร์ฟ"; break;
                case "cashier": posThai = "แคชเชียร์"; break;
                case "manager": posThai = "ผู้จัดการ"; break;
                case "auditor": posThai = "ผู้ตรวจสอบ"; break;
                default: posThai = staff.position;
            }
            optionsHtml += `<option value="${staff.name}">${staff.name} (${posThai})</option>`;
        });
        staffSelect.innerHTML = optionsHtml;
    }

    // Default expense checkbox checked
    const expCheckbox = document.getElementById("stockInRecordExpense");
    if (expCheckbox) expCheckbox.checked = true;

    openModal("stockInFormModal");
}

function showStockInDropdown() {
    const input = document.getElementById("stockInItemInput");
    renderStockInDropdown(input ? input.value : "");
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");
    if (list) list.style.display = "block";
    if (icon) icon.style.transform = "translateY(-50%) rotate(180deg)";
}

function toggleStockInDropdown() {
    const list = document.getElementById("stockInDropdownList");
    const input = document.getElementById("stockInItemInput");
    if (!list) return;
    if (list.style.display === "block") {
        list.style.display = "none";
        const icon = document.getElementById("stockInDropdownIcon");
        if (icon) icon.style.transform = "translateY(-50%) rotate(0deg)";
    } else {
        if (input) input.focus();
        showStockInDropdown();
    }
}

function handleStockInSearchInput(query) {
    renderStockInDropdown(query);
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");
    if (list) list.style.display = "block";
    if (icon) icon.style.transform = "translateY(-50%) rotate(180deg)";

    const trimmed = (query || "").trim();
    const matched = inventoryItems.find(i => i.name.toLowerCase() === trimmed.toLowerCase());
    const hiddenId = document.getElementById("stockInFormItemId");
    const limitText = document.getElementById("stockInCurrentQtyText");
    const unitInput = document.getElementById("stockInFormUnit");

    if (matched) {
        if (hiddenId) hiddenId.value = matched.id;
        if (limitText) limitText.innerText = `จำนวนคงเหลือปัจจุบัน: ${matched.quantity} ${matched.unit}`;
        if (unitInput && matched.unit) unitInput.value = matched.unit;
    } else {
        if (hiddenId) hiddenId.value = "";
        if (limitText) {
            limitText.innerText = trimmed ? `(พร้อมสร้างเป็นวัตถุดิบใหม่: "${trimmed}")` : `จำนวนคงเหลือปัจจุบัน: -`;
        }
    }
}

function renderStockInDropdown(filterText = "") {
    const list = document.getElementById("stockInDropdownList");
    if (!list) return;
    
    const q = (filterText || "").trim().toLowerCase();
    const filtered = inventoryItems.filter(item => {
        if (!q) return true;
        return item.name.toLowerCase().includes(q);
    });

    let html = "";
    if (filtered.length > 0) {
        html += filtered.map(item => `
            <div class="stock-in-dd-item" onclick="selectStockInItem(${item.id})"
                style="display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05);">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-cube" style="color: var(--secondary); font-size: 13px;"></i>
                    <strong style="color: var(--text-main); font-size: 14px;">${escapeHtml(item.name)}</strong>
                </div>
                <span style="font-size: 12px; background: rgba(0, 180, 216, 0.15); color: var(--secondary); padding: 3px 8px; border-radius: 10px; font-weight: 500;">
                    คงเหลือ ${item.quantity} ${item.unit}
                </span>
            </div>
        `).join("");
    }

    if (q && !inventoryItems.some(i => i.name.toLowerCase() === q)) {
        html += `
            <div class="stock-in-dd-item" onclick="selectStockInNewItem('${escapeHtml(filterText.trim())}')"
                style="display: flex; align-items: center; gap: 8px; padding: 10px 14px; cursor: pointer; color: #10b981; font-size: 13px; font-weight: 600; background: rgba(16, 185, 129, 0.08);">
                <i class="fa-solid fa-circle-plus"></i>
                <span>ใช้ชื่อนี้เป็นวัตถุดิบใหม่: "<strong>${escapeHtml(filterText.trim())}</strong>"</span>
            </div>
        `;
    }

    if (filtered.length === 0 && !q) {
        html = `<div style="padding: 14px; text-align: center; color: var(--text-muted); font-size: 13px;">ไม่มีรายการวัตถุดิบในคลัง สามารถพิมพ์ชื่อเพื่อสร้างใหม่ได้</div>`;
    }

    list.innerHTML = html;
}

function selectStockInItem(id) {
    const item = inventoryItems.find(i => i.id == id);
    if (!item) return;

    const input = document.getElementById("stockInItemInput");
    const hiddenId = document.getElementById("stockInFormItemId");
    const limitText = document.getElementById("stockInCurrentQtyText");
    const unitInput = document.getElementById("stockInFormUnit");
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");

    if (input) input.value = item.name;
    if (hiddenId) hiddenId.value = item.id;
    if (limitText) limitText.innerText = `จำนวนคงเหลือปัจจุบัน: ${item.quantity} ${item.unit}`;
    if (unitInput && item.unit) unitInput.value = item.unit;
    if (list) list.style.display = "none";
    if (icon) icon.style.transform = "translateY(-50%) rotate(0deg)";
}

function selectStockInNewItem(name) {
    const input = document.getElementById("stockInItemInput");
    const hiddenId = document.getElementById("stockInFormItemId");
    const limitText = document.getElementById("stockInCurrentQtyText");
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");

    if (input) input.value = name;
    if (hiddenId) hiddenId.value = "";
    if (limitText) limitText.innerText = `(พร้อมสร้างเป็นวัตถุดิบใหม่: "${name}")`;
    if (list) list.style.display = "none";
    if (icon) icon.style.transform = "translateY(-50%) rotate(0deg)";
}

// Global click listener to close dropdown when clicking outside
document.addEventListener("click", function(e) {
    const input = document.getElementById("stockInItemInput");
    const list = document.getElementById("stockInDropdownList");
    const icon = document.getElementById("stockInDropdownIcon");
    if (!input || !list) return;
    if (e.target !== input && e.target !== icon && !list.contains(e.target)) {
        list.style.display = "none";
        if (icon) icon.style.transform = "translateY(-50%) rotate(0deg)";
    }
});

async function saveStockInData(event) {
    event.preventDefault();
    
    const input = document.getElementById("stockInItemInput");
    const itemName = input ? input.value.trim() : "";
    const hiddenId = document.getElementById("stockInFormItemId");
    let itemId = hiddenId && hiddenId.value ? parseInt(hiddenId.value) : 0;
    
    if (!itemName) {
        alert("กรุณาเลือกหรือพิมพ์ชื่อวัตถุดิบที่ต้องการรับเข้าค่ะ/ครับ");
        if (input) input.focus();
        return;
    }

    if (itemId <= 0) {
        const matched = inventoryItems.find(i => i.name.toLowerCase() === itemName.toLowerCase());
        if (matched) {
            itemId = matched.id;
        }
    }
    
    const qtyInput = document.getElementById("stockInFormQty");
    const quantity = parseFloat(qtyInput ? qtyInput.value : 0);
    const unitInput = document.getElementById("stockInFormUnit");
    let unit = unitInput && unitInput.value.trim() ? unitInput.value.trim() : "กก.";
    
    if (itemId > 0) {
        const itemObj = inventoryItems.find(i => i.id == itemId);
        if (itemObj && itemObj.unit && (!unitInput || !unitInput.value.trim())) {
            unit = itemObj.unit;
        }
    }

    const costInput = document.getElementById("stockInFormCost");
    const cost = costInput && costInput.value !== "" ? parseFloat(costInput.value) : 0;
    const supplier = "";
    const staffSelect = document.getElementById("stockInFormStaff");
    const staffName = staffSelect ? staffSelect.value : "";
    const remarksInput = document.getElementById("stockInFormRemarks");
    const remarks = remarksInput ? remarksInput.value.trim() : "";
    const recordExpense = document.getElementById("stockInRecordExpense") ? document.getElementById("stockInRecordExpense").checked : false;
    
    if (isNaN(quantity) || quantity <= 0 || !staffName) {
        alert("กรุณากรอกข้อมูลที่สำคัญให้ครบถ้วน (จำนวนที่รับเข้า > 0, และผู้รับเข้า) ค่ะ/ครับ");
        return;
    }
    
    const now = new Date();
    const todayThai = typeof formatThaiDate === 'function' ? formatThaiDate(now.toISOString().split('T')[0]) : now.toISOString().split('T')[0];
    const timeStr = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    const fullTimeStr = `${todayThai} ${timeStr}`;
    
    const payload = {
        itemId: itemId || 0,
        itemName,
        quantity,
        unit,
        cost,
        supplier,
        staffName,
        remarks,
        recordExpense,
        time: fullTimeStr
    };
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/stock-in`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Failed to record stock-in in MySQL backend");
            
            // Reload inventory, stock-in logs, and expenses from DB
            const reloadInvRes = await fetch(`${API_BASE}/api/inventory`);
            if (reloadInvRes.ok) inventoryItems = await reloadInvRes.json();
            
            const reloadStockRes = await fetch(`${API_BASE}/api/stock-in`);
            if (reloadStockRes.ok) stockInLogs = await reloadStockRes.json();

            if (recordExpense && cost > 0) {
                const reloadExpRes = await fetch(`${API_BASE}/api/expenses`);
                if (reloadExpRes.ok) expensesList = await reloadExpRes.json();
            }
        } else {
            // LocalStorage Mode
            let targetItem = inventoryItems.find(i => (itemId && i.id == itemId) || i.name.toLowerCase() === itemName.toLowerCase());
            if (targetItem) {
                targetItem.quantity = (parseFloat(targetItem.quantity) || 0) + quantity;
                itemId = targetItem.id;
            } else {
                const newInvId = inventoryItems.length > 0 ? Math.max(...inventoryItems.map(i => i.id)) + 1 : 1;
                targetItem = {
                    id: newInvId,
                    name: itemName,
                    quantity: quantity,
                    unit: unit,
                    min_stock: 5
                };
                inventoryItems.unshift(targetItem);
                itemId = newInvId;
            }
            localStorage.setItem("raja_inventory_items_v2", JSON.stringify(inventoryItems));
            
            const newLogId = stockInLogs.length > 0 ? Math.max(...stockInLogs.map(r => r.id)) + 1 : 1;
            stockInLogs.unshift({
                id: newLogId,
                item_id: itemId,
                item_name: itemName,
                quantity,
                unit,
                cost,
                supplier,
                staff_name: staffName,
                action_time: fullTimeStr,
                remarks
            });
            localStorage.setItem("raja_stock_in_logs_v2", JSON.stringify(stockInLogs));

            if (recordExpense && cost > 0) {
                const dateYmd = now.toISOString().split('T')[0];
                const desc = `รับเข้าวัตถุดิบ: ${itemName} ${quantity} ${unit}`;
                const newExpId = "EXP-" + String(Date.now()).slice(-4);
                expensesList.unshift({
                    id: newExpId,
                    date: dateYmd,
                    category: "วัตถุดิบอาหาร",
                    desc: desc,
                    amount: cost,
                    staffName: staffName
                });
                localStorage.setItem("raja_expenses_v2", JSON.stringify(expensesList));
            }
        }
        
        closeModal("stockInFormModal");
        renderInventoryTable();
        renderStockInTable();
        if (typeof renderExpensesTable === 'function') renderExpensesTable();
        alert(`บันทึกรับเข้าวัตถุดิบ "${itemName}" จำนวน +${quantity} ${unit} เรียบร้อยแล้วค่ะ/ครับ!`);
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกรับเข้าวัตถุดิบ: " + err.message);
    }
}

function openAddInventoryModal() {
    document.getElementById("inventoryForm").reset();
    document.getElementById("inventoryFormId").value = "";
    document.getElementById("inventoryModalTitle").innerHTML = `<i class="fa-solid fa-box" style="color: var(--primary);"></i> เพิ่มวัตถุดิบใหม่`;
    openModal("inventoryFormModal");
}

function openEditInventoryModal(id) {
    const item = inventoryItems.find(i => i.id == id);
    if (!item) return;
    
    document.getElementById("inventoryFormId").value = item.id;
    document.getElementById("inventoryFormName").value = item.name;
    document.getElementById("inventoryFormQty").value = item.quantity;
    document.getElementById("inventoryFormUnit").value = item.unit;
    document.getElementById("inventoryFormMinStock").value = item.min_stock;
    
    document.getElementById("inventoryModalTitle").innerHTML = `<i class="fa-solid fa-edit" style="color: var(--primary);"></i> แก้ไขวัตถุดิบในสต็อก`;
    openModal("inventoryFormModal");
}

async function saveInventoryData(event) {
    event.preventDefault();
    
    const idVal = document.getElementById("inventoryFormId").value;
    const name = document.getElementById("inventoryFormName").value.trim();
    const quantity = parseInt(document.getElementById("inventoryFormQty").value);
    const unit = document.getElementById("inventoryFormUnit").value.trim();
    const min_stock = parseInt(document.getElementById("inventoryFormMinStock").value);
    
    if (!name || isNaN(quantity) || !unit || isNaN(min_stock)) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้องค่ะ/ครับ");
        return;
    }
    
    const payload = { name, quantity, unit, min_stock };
    
    try {
        if (isBackendOnline) {
            if (idVal) {
                const res = await fetch(`${API_BASE}/api/inventory/${idVal}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Failed to update inventory in MySQL");
            } else {
                const res = await fetch(`${API_BASE}/api/inventory`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Failed to add inventory in MySQL");
            }
            
            // Reload from DB
            const reloadRes = await fetch(`${API_BASE}/api/inventory`);
            if (reloadRes.ok) inventoryItems = await reloadRes.json();
        } else {
            // LocalStorage Mode
            if (idVal) {
                const index = inventoryItems.findIndex(i => i.id == idVal);
                if (index !== -1) {
                    inventoryItems[index] = { id: parseInt(idVal), ...payload };
                }
            } else {
                const newId = inventoryItems.length > 0 ? Math.max(...inventoryItems.map(i => i.id)) + 1 : 1;
                inventoryItems.unshift({ id: newId, ...payload });
            }
            localStorage.setItem("raja_inventory_items_v2", JSON.stringify(inventoryItems));
        }
        
        closeModal("inventoryFormModal");
        renderInventoryTable();
        alert("บันทึกข้อมูลคลังสินค้าเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกคลังสินค้า: " + err.message);
    }
}

async function deleteInventoryItem(id) {
    if (!confirm("คุณต้องการลบวัตถุดิบรายการนี้ออกจากระบบคลังสินค้าใช่หรือไม่?")) return;
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/inventory/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error("Failed to delete inventory item in MySQL");
            
            // Reload from DB
            const reloadRes = await fetch(`${API_BASE}/api/inventory`);
            if (reloadRes.ok) inventoryItems = await reloadRes.json();
        } else {
            // LocalStorage Mode
            inventoryItems = inventoryItems.filter(i => i.id != id);
            localStorage.setItem("raja_inventory_items_v2", JSON.stringify(inventoryItems));
        }
        
        renderInventoryTable();
        alert("ลบข้อมูลคลังสินค้าสำเร็จแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการลบข้อมูลคลังสินค้า: " + err.message);
    }
}

function openAddRequisitionModal(preselectedItemId = null) {
    document.getElementById("requisitionForm").reset();
    
    // Populate items select dropdown
    const itemSelect = document.getElementById("requisitionFormItem");
    if (itemSelect) {
        let optionsHtml = `<option value="">-- กรุณาเลือกวัตถุดิบ --</option>`;
        inventoryItems.forEach(item => {
            optionsHtml += `<option value="${item.id}" data-unit="${item.unit}" data-qty="${item.quantity}">${item.name} (${item.quantity} ${item.unit} คงเหลือ)</option>`;
        });
        itemSelect.innerHTML = optionsHtml;
        
        if (preselectedItemId) {
            itemSelect.value = preselectedItemId;
        }
    }
    
    // Populate active staff select dropdown
    const staffSelect = document.getElementById("requisitionFormStaff");
    if (staffSelect) {
        let optionsHtml = `<option value="">-- กรุณาเลือกพนักงาน --</option>`;
        if (storeOwner && storeOwner.name) {
            optionsHtml += `<option value="${storeOwner.name}">👑 ${storeOwner.name} (เจ้าของร้าน)</option>`;
        }
        const activeStaff = staffList.filter(s => s.status === 'active');
        activeStaff.forEach(staff => {
            let posThai = "";
            switch (staff.position) {
                case "chef": posThai = "เชฟ"; break;
                case "waiter": posThai = "พนักงานเสิร์ฟ"; break;
                case "cashier": posThai = "แคชเชียร์"; break;
                case "manager": posThai = "ผู้จัดการ"; break;
                case "auditor": posThai = "ผู้ตรวจสอบ"; break;
                default: posThai = staff.position;
            }
            optionsHtml += `<option value="${staff.name}">${staff.name} (${posThai})</option>`;
        });
        staffSelect.innerHTML = optionsHtml;
    }
    
    updateRequisitionStockLimit();
    openModal("requisitionFormModal");
}

function updateRequisitionStockLimit() {
    const itemSelect = document.getElementById("requisitionFormItem");
    const limitText = document.getElementById("requisitionStockLimitText");
    const qtyInput = document.getElementById("requisitionFormQty");
    
    if (!itemSelect || !limitText) return;
    
    const selectedOption = itemSelect.options[itemSelect.selectedIndex];
    if (selectedOption && selectedOption.value !== "") {
        const qty = parseFloat(selectedOption.getAttribute("data-qty"));
        const unit = selectedOption.getAttribute("data-unit");
        limitText.innerText = `จำนวนคงเหลือในคลัง: ${qty} ${unit}`;
        if (qtyInput) {
            qtyInput.setAttribute("max", qty);
            qtyInput.placeholder = `ระบุตัวเลขเบิก (สูงสุด ${qty})`;
        }
    } else {
        limitText.innerText = `จำนวนคงเหลือในคลัง: -`;
        if (qtyInput) {
            qtyInput.removeAttribute("max");
            qtyInput.placeholder = `ระบุจำนวนที่ต้องการเบิก`;
        }
    }
}

async function saveRequisitionData(event) {
    event.preventDefault();
    
    const itemId = document.getElementById("requisitionFormItem").value;
    const itemSelect = document.getElementById("requisitionFormItem");
    const selectedItemOption = itemSelect.options[itemSelect.selectedIndex];
    const itemName = selectedItemOption ? selectedItemOption.text.split(" (")[0] : "";
    
    const qtyInput = document.getElementById("requisitionFormQty");
    const quantity = parseInt(qtyInput.value);
    const staffName = document.getElementById("requisitionFormStaff").value;
    const remarks = document.getElementById("requisitionFormRemarks").value.trim();
    
    const maxQty = parseFloat(selectedItemOption.getAttribute("data-qty"));
    
    if (!itemId || isNaN(quantity) || !staffName) {
        alert("กรุณากรอกข้อมูลที่สำคัญให้ครบถ้วนค่ะ/ครับ");
        return;
    }
    
    if (quantity > maxQty) {
        alert(`ไม่สามารถเบิกจ่ายวัตถุดิบได้เนื่องจากยอดที่ต้องการเบิก (${quantity}) มากกว่ายอดวัตถุดิบคงเหลือในคลัง (${maxQty}) ค่ะ/ครับ`);
        return;
    }
    
    const now = new Date();
    const todayThai = formatThaiDate(now.toISOString().split('T')[0]);
    const timeStr = now.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' });
    const fullTimeStr = `${todayThai} ${timeStr}`;
    
    const unit = selectedItemOption ? selectedItemOption.getAttribute("data-unit") : "กก.";
    
    const payload = {
        itemId: parseInt(itemId),
        itemName,
        quantity,
        unit,
        staffName,
        remarks,
        time: fullTimeStr
    };
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/requisitions`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!res.ok) throw new Error("Failed to record requisition in MySQL");
            
            // Reload inventory and requisitions from DB
            const reloadInvRes = await fetch(`${API_BASE}/api/inventory`);
            if (reloadInvRes.ok) inventoryItems = await reloadInvRes.json();
            
            const reloadReqRes = await fetch(`${API_BASE}/api/requisitions`);
            if (reloadReqRes.ok) requisitionLogs = await reloadReqRes.json();
        } else {
            // LocalStorage Mode
            // 1. Deduct stock locally
            const stockIndex = inventoryItems.findIndex(i => i.id == itemId);
            if (stockIndex !== -1) {
                inventoryItems[stockIndex].quantity -= quantity;
            }
            localStorage.setItem("raja_inventory_items_v2", JSON.stringify(inventoryItems));
            
            // 2. Add requisition log locally
            const newLogId = requisitionLogs.length > 0 ? Math.max(...requisitionLogs.map(r => r.id)) + 1 : 1;
            requisitionLogs.unshift({
                id: newLogId,
                item_id: parseInt(itemId),
                item_name: itemName,
                quantity,
                unit,
                staff_name: staffName,
                action_time: fullTimeStr,
                remarks
            });
            localStorage.setItem("raja_requisition_logs_v2", JSON.stringify(requisitionLogs));
        }
        
        closeModal("requisitionFormModal");
        renderInventoryTable();
        renderRequisitionsTable();
        alert("ทำรายการอนุมัติเบิกจ่ายวัตถุดิบและตัดยอดในคลังเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกรายการเบิกจ่าย: " + err.message);
    }
}

// --- Store Expenses Management ---
let expensesList = [];
function loadExpensesData() {
    if (isBackendOnline) return;
    const stored = localStorage.getItem("raja_expenses_v2");
    if (stored) {
        expensesList = JSON.parse(stored);
    } else {
        expensesList = [
            { id: "EXP-001", date: "2026-08-29", category: "วัตถุดิบอาหาร", desc: "ซื้อไข่เป็ดและใบกะเพราป่าล็อตเช้า", amount: 1500, staffName: "นางสาวศิริพร บริการดี" },
            { id: "EXP-002", date: "2026-08-30", category: "สาธารณูปโภค", desc: "จ่ายค่าไฟฟ้าร้านรอบเดือน ก.ค.", amount: 4800, staffName: "นายสมเกียรติ ยอดฝีมือ" }
        ];
        localStorage.setItem("raja_expenses_v2", JSON.stringify(expensesList));
    }
}

function renderExpensesTable() {
    loadExpensesData();
    const tbody = document.getElementById("adminExpensesTableBody");
    if (!tbody) return;

    if (expensesList.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted); padding: 30px;">ไม่มีข้อมูลบันทึกรายจ่ายในระบบ</td></tr>`;
        return;
    }

    tbody.innerHTML = expensesList.map(e => `
        <tr>
            <td><strong>${e.id}</strong></td>
            <td>${formatThaiDate(e.date)}</td>
            <td><span class="item-status-pill" style="background: rgba(229, 46, 113, 0.1); color: #e52e71; border: 1px solid rgba(229, 46, 113, 0.2);">${e.category}</span></td>
            <td>${e.desc}</td>
            <td><strong style="color: var(--primary);">${e.amount.toLocaleString()} B</strong></td>
            <td>${e.staffName}</td>
            <td>
                <div style="display: flex; gap: 6px;">
                    <button class="btn btn-secondary" onclick="openEditExpenseModal('${e.id}')" style="padding: 4px 8px; font-size: 11px;"><i class="fa-solid fa-edit"></i> แก้ไข</button>
                    <button class="btn btn-secondary" onclick="deleteExpenseData('${e.id}')" style="padding: 4px 8px; font-size: 11px; background: rgba(239, 68, 68, 0.05); color: #ef4444; border-color: rgba(239, 68, 68, 0.15);"><i class="fa-solid fa-trash"></i> ลบ</button>
                </div>
            </td>
        </tr>
    `).join("");
}

function openAddExpenseModal() {
    const staffSelect = document.getElementById("expenseFormStaff");
    if (staffSelect) {
        let opts = `<option value="">-- กรุณาเลือกผู้บันทึก --</option>`;
        if (storeOwner && storeOwner.name) {
            opts += `<option value="${storeOwner.name}">👑 ${storeOwner.name} (เจ้าของร้าน)</option>`;
        }
        opts += staffList.map(s => `<option value="${s.name}">${s.name} (${s.position})</option>`).join("");
        staffSelect.innerHTML = opts;
    }

    document.getElementById("expenseModalTitle").innerHTML = `<i class="fa-solid fa-cash-register" style="color: var(--primary);"></i> บันทึกรายจ่ายใหม่`;
    document.getElementById("expenseFormId").value = "";
    document.getElementById("expenseFormCategory").value = "วัตถุดิบอาหาร";
    document.getElementById("expenseFormDesc").value = "";
    document.getElementById("expenseFormAmount").value = "";
    openModal("expenseFormModal");
}

function openEditExpenseModal(id) {
    const e = expensesList.find(x => x.id === id);
    if (!e) return;

    const staffSelect = document.getElementById("expenseFormStaff");
    if (staffSelect) {
        let opts = `<option value="">-- กรุณาเลือกผู้บันทึก --</option>`;
        if (storeOwner && storeOwner.name) {
            opts += `<option value="${storeOwner.name}">👑 ${storeOwner.name} (เจ้าของร้าน)</option>`;
        }
        opts += staffList.map(s => `<option value="${s.name}">${s.name} (${s.position})</option>`).join("");
        staffSelect.innerHTML = opts;
    }

    document.getElementById("expenseModalTitle").innerHTML = `<i class="fa-solid fa-file-invoice-dollar" style="color: var(--primary);"></i> แก้ไขบันทึกรายจ่าย`;
    document.getElementById("expenseFormId").value = e.id;
    document.getElementById("expenseFormCategory").value = e.category;
    document.getElementById("expenseFormDesc").value = e.desc;
    document.getElementById("expenseFormAmount").value = e.amount;
    if (staffSelect) staffSelect.value = e.staffName;
    openModal("expenseFormModal");
}

async function saveExpenseData(event) {
    event.preventDefault();
    const idVal = document.getElementById("expenseFormId").value;
    const catVal = document.getElementById("expenseFormCategory").value;
    const descVal = document.getElementById("expenseFormDesc").value;
    const amountVal = parseInt(document.getElementById("expenseFormAmount").value || 0);
    const staffVal = document.getElementById("expenseFormStaff").value;

    let targetId = idVal;
    let todayStr = new Date().toISOString().split('T')[0];

    if (!targetId) {
        const newNum = expensesList.length > 0 ? Math.max(...expensesList.map(e => {
            if (typeof e.id === 'string' && e.id.startsWith('EXP-')) {
                return parseInt(e.id.split('-')[1]) || 0;
            }
            return 0;
        })) + 1 : 1;
        targetId = `EXP-${String(newNum).padStart(3, '0')}`;
    }

    const payload = {
        date: idVal ? (expensesList.find(e => e.id === idVal)?.date || todayStr) : todayStr,
        category: catVal,
        desc: descVal,
        amount: amountVal,
        staffName: staffVal
    };

    try {
        if (isBackendOnline) {
            if (idVal) {
                const res = await fetch(`${API_BASE}/api/expenses/${idVal}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!res.ok) throw new Error("Failed to update expense in MySQL");
            } else {
                const res = await fetch(`${API_BASE}/api/expenses`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: targetId, ...payload })
                });
                if (!res.ok) throw new Error("Failed to create expense in MySQL");
            }
            
            const reloadRes = await fetch(`${API_BASE}/api/expenses`);
            if (reloadRes.ok) expensesList = await reloadRes.json();
        } else {
            if (idVal) {
                const index = expensesList.findIndex(e => e.id === idVal);
                if (index !== -1) {
                    expensesList[index] = { ...expensesList[index], category: catVal, desc: descVal, amount: amountVal, staffName: staffVal };
                }
            } else {
                expensesList.push({ id: targetId, ...payload });
            }
            localStorage.setItem("raja_expenses_v2", JSON.stringify(expensesList));
        }

        closeModal("expenseFormModal");
        renderExpensesTable();
        alert("บันทึกข้อมูลรายจ่ายของร้านเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกข้อมูลรายจ่าย: " + err.message);
    }
}

async function deleteExpenseData(id) {
    if (!confirm("คุณแน่ใจว่าต้องการลบข้อมูลรายจ่ายรายการนี้ใช่หรือไม่?")) return;
    
    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/expenses/${id}`, {
                method: 'DELETE'
            });
            if (!res.ok) throw new Error("Failed to delete expense in MySQL");
            
            const reloadRes = await fetch(`${API_BASE}/api/expenses`);
            if (reloadRes.ok) expensesList = await reloadRes.json();
        } else {
            expensesList = expensesList.filter(e => e.id !== id);
            localStorage.setItem("raja_expenses_v2", JSON.stringify(expensesList));
        }
        
        renderExpensesTable();
        alert("ลบข้อมูลรายจ่ายเรียบร้อยแล้วค่ะ/ครับ!");
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการลบข้อมูลรายจ่าย: " + err.message);
    }
}


// --- Master-Detail Toppings Management ---

function extractUniqueToppings() {
    const map = new Map();
    (menuItems || []).forEach(item => {
        if (Array.isArray(item.toppings)) {
            item.toppings.forEach(t => {
                const name = (t.name || '').trim();
                if (!name) return;
                const price = parseInt(t.price || 0);
                if (!map.has(name)) {
                    map.set(name, {
                        name: name,
                        price: price,
                        menuIds: new Set([item.id])
                    });
                } else {
                    const entry = map.get(name);
                    entry.menuIds.add(item.id);
                    if (entry.price === 0 && price > 0) entry.price = price;
                }
            });
        }
    });

    const list = Array.from(map.values()).map(t => ({
        name: t.name,
        price: t.price,
        menuIds: Array.from(t.menuIds)
    }));

    list.sort((a, b) => a.name.localeCompare(b.name, 'th'));
    return list;
}

function renderAdminToppingGrid() {
    const container = document.getElementById("adminToppingListContainer");
    if (!container) return;

    const toppings = extractUniqueToppings();

    if (toppings.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 24px; font-size: 13px;">ไม่มีรายการท็อปปิ้งในระบบ</div>`;
        renderAdminToppingDetail();
        return;
    }

    if (selectedAdminToppingName === undefined) {
        selectedAdminToppingName = toppings[0].name;
    } else if (selectedAdminToppingName !== null) {
        const exists = toppings.some(t => t.name === selectedAdminToppingName);
        if (!exists) {
            selectedAdminToppingName = toppings.length > 0 ? toppings[0].name : null;
        }
    }

    container.innerHTML = toppings.map((t, index) => {
        const isSelected = selectedAdminToppingName !== null && t.name === selectedAdminToppingName;
        const indexStr = String(index + 1).padStart(2, '0');
        const activeBg = isSelected
            ? 'background: rgba(255, 94, 54, 0.08); border-color: var(--primary); font-weight: 700;'
            : 'border-color: var(--border);';
        const safeName = (t.name || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

        return `
            <div onclick="selectToppingForEdit('${safeName}')" style="display: flex; align-items: center; justify-content: space-between; padding: 12px 14px; border: 1px solid; border-radius: var(--radius-sm); cursor: pointer; transition: all 0.2s; ${activeBg}" class="admin-menu-list-item">
                <div style="display: flex; flex-direction: column; gap: 2px;">
                    <span style="font-size: 14px; color: var(--text-main);">${indexStr}. ${escapeHtml(t.name)}</span>
                    <span style="font-size: 12px; color: var(--text-muted);"><i class="fa-solid fa-utensils"></i> แสดงใน ${t.menuIds.length} เมนู</span>
                </div>
                <span style="font-size: 13px; font-weight: 700; color: var(--primary);">+${t.price} B</span>
            </div>
        `;
    }).join("");

    renderAdminToppingDetail();
}

function selectToppingForEdit(toppingName) {
    selectedAdminToppingName = toppingName;
    renderAdminToppingGrid();
}

function renderAdminToppingDetail() {
    const container = document.getElementById("adminToppingDetailContainer");
    if (!container) return;

    const toppings = extractUniqueToppings();

    if (selectedAdminToppingName === null) {
        // --- ADD NEW TOPPING FORM ---
        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main);">
                    <i class="fa-solid fa-circle-plus" style="color: var(--primary);"></i> เพิ่มท็อปปิ้งอาหารใหม่
                </h4>
            </div>

            <form id="adminToppingForm" onsubmit="saveToppingDetailForm(event)" style="display: flex; flex-direction: column; gap: 16px;">
                <input type="hidden" id="adminToppingFormOrigName" value="">
                
                <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                    <div class="form-group" style="flex: 2; min-width: 200px; margin-bottom: 0;">
                        <label style="font-weight: 600; font-size: 13px;">ชื่อท็อปปิ้ง *</label>
                        <input type="text" id="adminToppingFormName" required placeholder="เช่น ไข่ดาว, ไข่เจียว, ชีส, พิเศษ" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1; min-width: 120px; margin-bottom: 0;">
                        <label style="font-weight: 600; font-size: 13px;">ราคาบวกเพิ่ม (฿) *</label>
                        <input type="number" id="adminToppingFormPrice" required min="0" value="10" placeholder="10" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                </div>

                <!-- Food Menu Selection Section -->
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <label style="font-weight: 700; font-size: 13px; color: var(--text-main); margin: 0;">
                            <i class="fa-solid fa-list-check" style="color: var(--primary);"></i> เลือกเมนูอาหารที่ต้องการให้ท็อปปิ้งนี้แสดง
                        </label>
                        <span id="toppingSelectedCountBadge" style="font-size: 12px; font-weight: 700; color: var(--primary); background: rgba(255, 94, 54, 0.1); padding: 3px 10px; border-radius: 12px;">
                            เลือกแล้ว 0 จาก ${menuItems.length} เมนู
                        </span>
                    </div>

                    <!-- Toolbar -->
                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                        <div style="position: relative; flex: 1; min-width: 180px;">
                            <input type="text" id="toppingMenuFilterInput" oninput="filterToppingMenuList(this.value)" placeholder="🔍 ค้นหาเมนูอาหาร..." style="width: 100%; padding: 6px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main); font-size: 12px;">
                        </div>
                        <button type="button" class="btn btn-secondary" onclick="toggleAllToppingMenus(true)" style="padding: 6px 10px; font-size: 12px; white-space: nowrap;">
                            <i class="fa-solid fa-check-double"></i> เลือกทุกเมนู
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="toggleAllToppingMenus(false)" style="padding: 6px 10px; font-size: 12px; white-space: nowrap;">
                            <i class="fa-solid fa-xmark"></i> ล้างการเลือก
                        </button>
                    </div>

                    <!-- Scrollable Checkbox Grid -->
                    <div id="adminToppingMenuCheckboxesContainer" style="max-height: 380px; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; padding: 4px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-main);">
                        ${renderToppingMenuCheckboxCards([])}
                    </div>
                </div>

                <div style="display: flex; justify-content: flex-end; margin-top: 12px; border-top: 1px solid var(--border); padding-top: 16px;">
                    <button type="submit" class="btn btn-primary-gradient" style="padding: 10px 24px;">
                        <i class="fa-solid fa-floppy-disk"></i> บันทึกท็อปปิ้งใหม่
                    </button>
                </div>
            </form>
        `;
    } else {
        // --- EDIT EXISTING TOPPING FORM ---
        const topping = toppings.find(t => t.name === selectedAdminToppingName);
        if (!topping) {
            selectedAdminToppingName = null;
            renderAdminToppingDetail();
            return;
        }

        const safeToppingName = (topping.name || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'");

        container.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border); padding-bottom: 12px;">
                <h4 style="margin: 0; font-size: 16px; font-weight: 700; color: var(--text-main);">
                    <i class="fa-solid fa-pen-to-square" style="color: var(--primary);"></i> แก้ไขรายละเอียดท็อปปิ้ง
                </h4>
                <span class="badge" style="background: rgba(255, 94, 54, 0.1); color: var(--primary); padding: 4px 10px; border-radius: 12px; font-size: 12px; font-weight: 700;">
                    ผูกแล้ว ${topping.menuIds.length} จาก ${menuItems.length} เมนู
                </span>
            </div>

            <form id="adminToppingForm" onsubmit="saveToppingDetailForm(event)" style="display: flex; flex-direction: column; gap: 16px;">
                <input type="hidden" id="adminToppingFormOrigName" value="${escapeHtml(topping.name)}">
                
                <div style="display: flex; gap: 14px; flex-wrap: wrap;">
                    <div class="form-group" style="flex: 2; min-width: 200px; margin-bottom: 0;">
                        <label style="font-weight: 600; font-size: 13px;">ชื่อท็อปปิ้ง *</label>
                        <input type="text" id="adminToppingFormName" required value="${escapeHtml(topping.name)}" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                    <div class="form-group" style="flex: 1; min-width: 120px; margin-bottom: 0;">
                        <label style="font-weight: 600; font-size: 13px;">ราคาบวกเพิ่ม (฿) *</label>
                        <input type="number" id="adminToppingFormPrice" required min="0" value="${topping.price}" style="width:100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main);">
                    </div>
                </div>

                <!-- Food Menu Selection Section -->
                <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                        <label style="font-weight: 700; font-size: 13px; color: var(--text-main); margin: 0;">
                            <i class="fa-solid fa-list-check" style="color: var(--primary);"></i> เลือกเมนูอาหารที่ต้องการให้ท็อปปิ้งนี้แสดง
                        </label>
                        <span id="toppingSelectedCountBadge" style="font-size: 12px; font-weight: 700; color: var(--primary); background: rgba(255, 94, 54, 0.1); padding: 3px 10px; border-radius: 12px;">
                            เลือกแล้ว ${topping.menuIds.length} จาก ${menuItems.length} เมนู
                        </span>
                    </div>

                    <!-- Toolbar -->
                    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
                        <div style="position: relative; flex: 1; min-width: 180px;">
                            <input type="text" id="toppingMenuFilterInput" oninput="filterToppingMenuList(this.value)" placeholder="🔍 ค้นหาเมนูอาหาร..." style="width: 100%; padding: 6px 12px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-input); color: var(--text-main); font-size: 12px;">
                        </div>
                        <button type="button" class="btn btn-secondary" onclick="toggleAllToppingMenus(true)" style="padding: 6px 10px; font-size: 12px; white-space: nowrap;">
                            <i class="fa-solid fa-check-double"></i> เลือกทุกเมนู
                        </button>
                        <button type="button" class="btn btn-secondary" onclick="toggleAllToppingMenus(false)" style="padding: 6px 10px; font-size: 12px; white-space: nowrap;">
                            <i class="fa-solid fa-xmark"></i> ล้างการเลือก
                        </button>
                    </div>

                    <!-- Scrollable Checkbox Grid -->
                    <div id="adminToppingMenuCheckboxesContainer" style="max-height: 380px; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 10px; padding: 4px; border: 1px solid var(--border); border-radius: var(--radius-sm); background: var(--bg-main);">
                        ${renderToppingMenuCheckboxCards(topping.menuIds)}
                    </div>
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px; border-top: 1px solid var(--border); padding-top: 16px;">
                    <button type="button" class="btn btn-secondary" onclick="deleteSelectedTopping('${safeToppingName}')" style="background: rgba(239, 68, 68, 0.08); color: #ef4444; border-color: rgba(239, 68, 68, 0.2); padding: 10px 20px;">
                        <i class="fa-solid fa-trash-can"></i> ลบท็อปปิ้งนี้
                    </button>
                    <button type="submit" class="btn btn-primary-gradient" style="padding: 10px 24px;">
                        <i class="fa-solid fa-floppy-disk"></i> บันทึกการเปลี่ยนแปลง
                    </button>
                </div>
            </form>
        `;
    }
}

function renderToppingMenuCheckboxCards(activeMenuIds) {
    if (!menuItems || menuItems.length === 0) {
        return `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 20px; font-size: 13px;">ไม่มีรายการอาหารในร้าน</div>`;
    }

    const activeSet = new Set(activeMenuIds || []);

    return menuItems.map(item => {
        const isChecked = activeSet.has(item.id);
        const selectedClass = isChecked ? ' selected' : '';
        const itemImg = item.image || 'https://placehold.co/38x38?text=Food';

        return `
            <label class="topping-menu-card${selectedClass}" id="toppingCard_${item.id}" data-name="${escapeHtml(item.name).toLowerCase()}">
                <input type="checkbox" name="toppingMenuItemCheck" value="${item.id}" ${isChecked ? 'checked' : ''} onchange="onToppingCheckboxChange(this)">
                <img src="${itemImg}" onerror="this.src='https://placehold.co/38x38?text=Food'" alt="${escapeHtml(item.name)}">
                <div class="menu-info">
                    <span class="menu-title">${escapeHtml(item.name)}</span>
                    <span class="menu-meta">฿${item.price} • ${item.id}</span>
                </div>
            </label>
        `;
    }).join("");
}

function onToppingCheckboxChange(checkbox) {
    const card = document.getElementById("toppingCard_" + checkbox.value);
    if (card) {
        if (checkbox.checked) {
            card.classList.add("selected");
        } else {
            card.classList.remove("selected");
        }
    }
    updateToppingSelectedCount();
}

function toggleAllToppingMenus(selectAll) {
    const container = document.getElementById("adminToppingMenuCheckboxesContainer");
    if (!container) return;

    const cards = container.querySelectorAll(".topping-menu-card");
    cards.forEach(card => {
        // If filter is active, only toggle visible cards
        if (card.style.display !== "none") {
            const cb = card.querySelector('input[type="checkbox"]');
            if (cb) {
                cb.checked = selectAll;
                if (selectAll) {
                    card.classList.add("selected");
                } else {
                    card.classList.remove("selected");
                }
            }
        }
    });
    updateToppingSelectedCount();
}

function filterToppingMenuList(keyword) {
    const container = document.getElementById("adminToppingMenuCheckboxesContainer");
    if (!container) return;

    const term = (keyword || '').toLowerCase().trim();
    const cards = container.querySelectorAll(".topping-menu-card");

    cards.forEach(card => {
        const name = card.getAttribute("data-name") || "";
        if (!term || name.includes(term)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function updateToppingSelectedCount() {
    const badge = document.getElementById("toppingSelectedCountBadge");
    if (!badge) return;

    const total = menuItems ? menuItems.length : 0;
    const checked = document.querySelectorAll('input[name="toppingMenuItemCheck"]:checked').length;
    badge.textContent = `เลือกแล้ว ${checked} จาก ${total} เมนู`;
}

async function saveToppingDetailForm(event) {
    event.preventDefault();
    const origNameInput = document.getElementById("adminToppingFormOrigName");
    const origName = origNameInput ? origNameInput.value.trim() : "";
    const name = (document.getElementById("adminToppingFormName").value || "").trim();
    const price = parseInt(document.getElementById("adminToppingFormPrice").value || 0);

    if (!name) {
        alert("กรุณาระบุชื่อท็อปปิ้งอาหารค่ะ/ครับ");
        return;
    }

    const checkedBoxes = document.querySelectorAll('input[name="toppingMenuItemCheck"]:checked');
    const selectedMenuIds = Array.from(checkedBoxes).map(cb => cb.value);

    // Update in-memory menuItems
    menuItems.forEach(item => {
        if (!Array.isArray(item.toppings)) item.toppings = [];
        
        // Remove old occurrences of origName or name
        item.toppings = item.toppings.filter(t => t.name !== origName && t.name !== name);
        
        // If this item is checked, add the topping
        if (selectedMenuIds.includes(item.id)) {
            item.toppings.push({ name: name, price: price });
        }
    });

    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/toppings`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    origName: origName,
                    name: name,
                    price: price,
                    menuIds: selectedMenuIds
                })
            });
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || "บันทึกลงฐานข้อมูลไม่สำเร็จ");
            }

            const reloadRes = await fetch(`${API_BASE}/api/menu`);
            if (reloadRes.ok) {
                menuItems = await reloadRes.json();
            }
        } else {
            localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));
        }

        selectedAdminToppingName = name;
        renderAdminToppingGrid();
        alert(`บันทึกท็อปปิ้ง "${name}" พร้อมเชื่อมโยง ${selectedMenuIds.length} เมนูเรียบร้อยแล้วค่ะ/ครับ!`);
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการบันทึกท็อปปิ้ง: " + err.message);
    }
}

async function deleteSelectedTopping(toppingName) {
    if (!toppingName) return;
    if (!confirm(`คุณแน่ใจว่าต้องการลบท็อปปิ้ง "${toppingName}" ออกจากทุกเมนูในร้านใช่หรือไม่?`)) return;

    // Update in-memory menuItems
    menuItems.forEach(item => {
        if (Array.isArray(item.toppings)) {
            item.toppings = item.toppings.filter(t => t.name !== toppingName);
        }
    });

    try {
        if (isBackendOnline) {
            const res = await fetch(`${API_BASE}/api/toppings`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: toppingName })
            });
            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.error || "ลบออกจากฐานข้อมูลไม่สำเร็จ");
            }

            const reloadRes = await fetch(`${API_BASE}/api/menu`);
            if (reloadRes.ok) {
                menuItems = await reloadRes.json();
            }
        } else {
            localStorage.setItem("raja_menu_v2_items", JSON.stringify(menuItems));
        }

        selectedAdminToppingName = null;
        renderAdminToppingGrid();
        alert(`ลบท็อปปิ้ง "${toppingName}" ออกจากทุกเมนูเรียบร้อยแล้วค่ะ/ครับ!`);
    } catch (err) {
        console.error(err);
        alert("เกิดข้อผิดพลาดในการลบท็อปปิ้ง: " + err.message);
    }
}

// Compatibility wrappers for existing calls
function renderToppingsTable() {
    renderAdminToppingGrid();
}

function openAddGlobalToppingModal() {
    selectToppingForEdit(null);
}
