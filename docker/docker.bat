@echo off

goto :start

This file permit to run in a terminal console prompt window and run automatically the App.
Please, not close the terminal during your job.
You can see a log in this window during your development.

:start

REM Environment Variables
cls

echo "THIS FILE IS TO RUN APP."
echo "CREATED BY DARIO PASSARIELLO."

echo "Starting dpSuperDemo Docker Compose"

docker-compose up -d
