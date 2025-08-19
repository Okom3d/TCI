#!/bin/bash

# TC Investments - Deployment Script
# This script prepares the project for deployment

echo "🚀 TC Investments - Deployment Preparation"
echo "============================================"

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "frontend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📁 Checking project structure..."

# Frontend check
if [ -d "frontend" ]; then
    echo "✅ Frontend directory found"
    cd frontend
    
    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo "📦 Installing frontend dependencies..."
        yarn install
    else
        echo "✅ Frontend dependencies already installed"
    fi
    
    # Build production version
    echo "🏗️  Building production frontend..."
    yarn build
    
    if [ $? -eq 0 ]; then
        echo "✅ Frontend build successful"
    else
        echo "❌ Frontend build failed"
        exit 1
    fi
    
    cd ..
else
    echo "❌ Frontend directory not found"
    exit 1
fi

# Backend check (optional)
if [ -d "backend" ]; then
    echo "✅ Backend directory found"
    cd backend
    
    # Check if virtual environment exists
    if [ ! -d "venv" ]; then
        echo "🐍 Creating Python virtual environment..."
        python -m venv venv
    fi
    
    # Activate virtual environment and install dependencies
    echo "📦 Installing backend dependencies..."
    source venv/bin/activate 2>/dev/null || source venv/Scripts/activate 2>/dev/null
    pip install -r requirements.txt
    
    if [ $? -eq 0 ]; then
        echo "✅ Backend setup successful"
    else
        echo "❌ Backend setup failed"
        exit 1
    fi
    
    cd ..
else
    echo "ℹ️  Backend directory not found (frontend-only deployment)"
fi

echo ""
echo "✅ Deployment preparation complete!"
echo ""
echo "📋 Deployment Checklist:"
echo "========================"
echo "□ Update domain in reCAPTCHA console"
echo "□ Verify EmailJS templates are configured"
echo "□ Test forms work correctly"
echo "□ Check all images load properly"
echo "□ Verify mobile responsiveness"
echo "□ Test contact form email delivery"
echo ""
echo "🌐 Deployment Options:"
echo "======================"
echo "Frontend-only (Recommended):"
echo "  • Netlify: Connect GitHub repo"
echo "  • Vercel: Run 'vercel --prod' in frontend/"
echo "  • GitHub Pages: Run 'yarn deploy' in frontend/"
echo ""
echo "Full-stack:"
echo "  • Railway: Connect GitHub repo"
echo "  • Render: Connect GitHub repo"
echo "  • DigitalOcean: Deploy to VPS"
echo ""
echo "📖 See docs/DEPLOYMENT.md for detailed instructions"
echo ""
echo "🎉 TC Investments website is ready for deployment!"