@echo off
cd /D %~dp0/..
ng test
cd /D %~dp0
pause