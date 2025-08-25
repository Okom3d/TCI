#!/bin/bash

# TC Investments - GitHub Pages Deployment Script
echo "🚀 Deploying TC Investments to GitHub Pages"
echo "============================================="

# Check if we're in the right directory
if [ ! -f "README.md" ] || [ ! -d "frontend" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Navigate to frontend directory
cd frontend

echo "📦 Installing dependencies..."
yarn install

echo "🏗️  Building production version..."
yarn build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please check for errors."
    exit 1
fi

echo "📤 Deploying to GitHub Pages..."
yarn deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo ""
    echo "🌐 Your website will be available at:"
    echo "   https://YOURUSERNAME.github.io/tc-investments"
    echo ""
    echo "⏱️  Note: It may take a few minutes for changes to appear"
    echo ""
    echo "📋 Next Steps:"
    echo "1. Update reCAPTCHA domain settings"
    echo "2. Test all forms and functionality"
    echo "3. Verify both English and French versions"
else
    echo "❌ Deployment failed! Please check the error messages above."
    exit 1
fi