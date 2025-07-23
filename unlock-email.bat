@echo off
cd /d "%~dp0"
echo Ran at %date% %time% >> log.txt
node index.js

