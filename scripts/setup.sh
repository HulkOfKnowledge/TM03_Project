#!/bin/bash

# Creduman Setup Script
# Run this script to set up the development environment

echo "🚀 Setting up Creduman development environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 20+ first."
    exit 1
fi

# Check if Python is installed
if ! command -v python &> /dev/null && ! command -v python3 &> /dev/null; then
    echo "❌ Python is not installed. Please install Python 3.11+ first."
    exit 1
fi

echo "✅ Node.js and Python found"

# Install Next.js dependencies
echo "📦 Installing Next.js dependencies..."
npm install

# Set up environment files
if [ ! -f .env ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
    echo "⚠️  Please update .env with your actual credentials"
else
    echo "✅ .env file already exists"
fi

# Install shadcn/ui
echo "🎨 Setting up shadcn/ui..."
echo "Run the following commands manually:"
echo "  npx shadcn-ui@latest init"
echo "  npx shadcn-ui@latest add button card input label toast select tabs progress"

# Set up Python service
echo "🐍 Setting up Python service..."
cd credit-intelligence-service

if [ ! -f .env ]; then
    echo "📝 Creating Python .env file from .env.example..."
    cp .env.example .env
else
    echo "✅ Python .env file already exists"
fi

# Create virtual environment
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python3 -m venv venv
fi

echo "📦 Installing Python dependencies..."
source venv/bin/activate
pip install -r requirements.txt
deactivate

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update .env files with your credentials:"
echo "   - Supabase URL and keys"
echo "   - Flinks API credentials"
echo "   - API keys and secrets"
echo ""
echo "2. Set up Supabase database:"
echo "   - Run: npx supabase link --project-ref YOUR_PROJECT_REF"
echo "   - Run: npx supabase db push"
echo ""
echo "3. Install shadcn/ui components:"
echo "   - Run: npx shadcn-ui@latest init"
echo "   - Run: npx shadcn-ui@latest add button card input label toast"
echo ""
echo "4. Start development servers:"
echo "   Terminal 1: npm run dev"
echo "   Terminal 2: cd credit-intelligence-service && source venv/bin/activate && python main.py"
echo ""
echo "🎉 Happy coding!"
