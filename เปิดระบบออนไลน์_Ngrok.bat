@echo off
chcp 65001 >nul
title Raja Kra Pao - ระบบสั่งอาหารออนไลน์ 4G/5G (Ngrok)
cd /d "%~dp0"
node tunnel_ngrok.js
pause
