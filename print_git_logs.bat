set path=%cd%
if not exist %path%\logs\ mkdir %path%\logs\

@echo off
goto :start

:start

REM Environment Variables
cls

echo "THIS FILE IS TO SAVE GIT LOG."
echo "CREATED BY DARIO PASSARIELLO."

echo "Save full log to file"

start git --no-pager log > git.txt


