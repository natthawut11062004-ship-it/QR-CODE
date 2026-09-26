@echo off
chcp 65001 >nul
title Raja Kra Pao - ระบบสั่งอาหารออนไลน์ 4G/5G (Cloudflare)
cd /d "%~dp0"
node tunnel_cloudflare.js
pause
