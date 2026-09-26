const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const http = require('http');

console.clear();
console.log('=========================================================');
console.log('  Raja Kra Pao (ราชากะเพรา) - ระบบสั่งอาหารออนไลน์ 4G/5G');
console.log('=========================================================\n');

// 1. Check if Apache is running on port 80
const req = http.get('http://localhost/QR/', (res) => {
    startTunnel();
});

req.on('error', (err) => {
    console.error('❌ ไม่พบ Apache ทำงานอยู่ที่พอร์ต 80');
    console.error('👉 กรุณาเปิดโปรแกรม XAMPP Control Panel แล้วกด Start โมดูล Apache และ MySQL ก่อนนะคะ/ครับ\n');
    process.exit(1);
});

function startTunnel() {
    console.log('⏳ กำลังเชื่อมต่อ Cloudflare Secure Tunnel...');
    const cloudflaredExe = path.join(__dirname, 'cloudflared.exe');
    if (!fs.existsSync(cloudflaredExe)) {
        console.error('❌ ไม่พบ cloudflared.exe ในโฟลเดอร์');
        process.exit(1);
    }

    const tunnel = spawn(cloudflaredExe, ['tunnel', '--url', 'http://localhost:80']);
    let publicUrl = null;

    const parseOutput = (data) => {
        const text = data.toString();
        const match = text.match(/https:\/\/[a-zA-Z0-9-]+\.trycloudflare\.com/);
        if (match && !publicUrl) {
            publicUrl = match[0];
            const qrUrl = `${publicUrl}/QR/`;
            fs.writeFileSync(path.join(__dirname, 'online_url.txt'), qrUrl, 'utf8');

            console.clear();
            console.log('=========================================================');
            console.log('🍛 ระบบสั่งอาหารออนไลน์ (4G/5G / ทั่วโลก) พร้อมใช้งานแล้ว!');
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
    };

    tunnel.stdout.on('data', parseOutput);
    tunnel.stderr.on('data', parseOutput);

    tunnel.on('close', (code) => {
        cleanup();
    });

    function cleanup() {
        try {
            const urlPath = path.join(__dirname, 'online_url.txt');
            if (fs.existsSync(urlPath)) fs.unlinkSync(urlPath);
        } catch (e) {}
        try { tunnel.kill(); } catch (e) {}
    }

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
