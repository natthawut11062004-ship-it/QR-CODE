@echo off
echo Starting Python Web Server for Raja Kra Pao...
echo.
echo Checking local IP address...
for /f "tokens=4 delims= " %%i in ('route print ^| findstr 0.0.0.0 ^| findstr /v "127.0.0.1" 2^>nul') do (
    set LOCAL_IP=%%i
)
if "%LOCAL_IP%"=="" (
    set LOCAL_IP=your-computer-ip
)
echo.
echo =========================================================
echo 🍛 Python server is running on Local Area Network!
echo Local machine URL: http://localhost:8000
echo.
echo To access from other devices (Phones/Tablets) on same Wi-Fi:
echo   👉 http://%LOCAL_IP%:8000
echo =========================================================
echo.
python -m http.server 8000
pause
