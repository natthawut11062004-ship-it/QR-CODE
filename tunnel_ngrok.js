const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

console.clear();
console.log('=========================================================');
console.log('  Raja Kra Pao (ราชากะเพรา) - ระบบสั่งอาหารออนไลน์ (Ngrok)');
console.log('=========================================================\n');

// 1. Check if Apache is running on port 80
const req = http.get('http://localhost/QR/', (res) => {
    startNgrok();
});

req.on('error', (err) => {
    console.error('❌ ไม่พบ Apache ทำงานอยู่ที่พอร์ต 80');
    console.error('👉 กรุณาเปิดโปรแกรม XAMPP Control Panel แล้วกด Start โมดูล Apache และ MySQL ก่อนนะคะ/ครับ\n');
    process.exit(1);
});

function startNgrok() {
    console.log('⏳ กำลังเชื่อมต่อ Ngrok Tunnel...');

    const tunnel = spawn('ngrok', ['http', '80'], { shell: true });
    let publicUrl = null;
    let attempts = 0;

    const checkTunnels = setInterval(() => {
        attempts++;
        http.get('http://127.0.0.1:4040/api/tunnels', (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(data);
                    if (json.tunnels && json.tunnels.length > 0) {
                        clearInterval(checkTunnels);
                        publicUrl = json.tunnels[0].public_url;
                        const qrUrl = `${publicUrl}/QR/`;
                        fs.writeFileSync(path.join(__dirname, 'online_url.txt'), qrUrl, 'utf8');

                        console.clear();
                        console.log('=========================================================');
                        console.log('🍛 ระบบสั่งอาหารออนไลน์ (Ngrok Tunnel) พร้อมใช้งานแล้ว!');
                        console.log('=========================================================');
                        console.log('\n🌐 ลิงก์ออนไลน์สาธารณะสำหรับลูกค้า:');
                        console.log('👉 \x1b[36m' + qrUrl + '\x1b[0m\n');
                        console.log('✅ ลูกค้าใช้เน็ตมือถือ 4G / 5G สแกนสั่งได้ทันที โดยไม่ต้องต่อ Wi-Fi ในร้าน');
                        console.log('✅ หน้าระบบจัดการ QR โต๊ะในคอมจะตรวจพบลิงก์นี้ให้อัตโนมัติ');
                        console.log('\n---------------------------------------------------------');
                        console.log('💡 คำแนะนำ: เปิดหน้าต่างนี้ทิ้งไว้ตลอดเวลาที่เปิดร้าน');
                        console.log('🛑 เมื่อต้องการหยุด ให้ปิดหน้าต่างนี้ หรือกด Ctrl + C');
                        console.log('=========================================================\n');
                    }
                } catch (e) {}
            });
        }).on('error', () => {
            if (attempts > 30) {
                clearInterval(checkTunnels);
                console.error('❌ ไม่สามารถเชื่อมต่อกับ Ngrok ได้');
                cleanup();
            }
        });
    }, 500);

    function cleanup() {
        try {
            const urlPath = path.join(__dirname, 'online_url.txt');
            if (fs.existsSync(urlPath)) fs.unlinkSync(urlPath);
        } catch (e) {}
        try {
            spawn('taskkill', ['/F', '/IM', 'ngrok.exe'], { shell: true });
        } catch (e) {}
    }

    tunnel.on('close', () => {
        cleanup();
    });

    process.on('SIGINT', () => {
        cleanup();
        process.exit(0);
    });
    process.on('SIGTERM', () => {
        cleanup();
        process.exit(0);
    });
    process.on('exit', () => {
        cleanup();
    });
}
