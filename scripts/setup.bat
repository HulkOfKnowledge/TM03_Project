@echo off
REM Creduman Setup Script for Windows
REM Run this script to set up the development environment

echo Setting up Creduman development environment...

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js 20+ first.
    exit /b 1
)

REM Check if Python is installed
where python >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Python is not installed. Please install Python 3.11+ first.
    exit /b 1
)

echo Node.js and Python found

REM Install Next.js dependencies
echo Installing Next.js dependencies...
call npm install

REM Set up environment files
if not exist .env (
    echo Creating .env file from .env.example...
    copy .env.example .env
    echo Please update .env with your actual credentials
) else (
    echo .env file already exists
)

REM Set up Python service
echo Setting up Python service...
cd credit-intelligence-service

if not exist .env (
    echo Creating Python .env file from .env.example...
    copy .env.example .env
) else (
    echo Python .env file already exists
)

REM Create virtual environment
if not exist venv (
    echo Creating Python virtual environment...
    python -m venv venv
)

echo Installing Python dependencies...
call venv\Scripts\activate.bat
pip install -r requirements.txt
call deactivate

cd ..

echo.
echo Setup complete!
echo.
echo Next steps:
echo 1. Update .env files with your credentials
echo 2. Set up Supabase database
echo 3. Install shadcn/ui: npx shadcn-ui@latest init
echo 4. Start servers: npm run dev and python service
echo.
echo Happy coding!
