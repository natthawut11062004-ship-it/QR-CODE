@echo off
echo Installing required Node.js libraries (Express & MySQL2)...
call npm install express mysql2
echo.
echo Starting Raja Kra Pao App Server...
echo Make sure you have started your MySQL service (e.g., XAMPP) and executed d:\QR\schema.sql first!
echo.
node server.js
pause
