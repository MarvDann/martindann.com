#!/bin/bash
# Deployment script for martindann.com on VPS

set -e  # Exit on any error

echo "🚀 Deploying martindann.com to VPS"
echo "======================================"

# Check if we're on the VPS
if [ ! -f "/etc/nginx/nginx.conf" ]; then
    echo "⚠️  This script should be run on your VPS, not locally"
    exit 1
fi

# Source nvm if available (needed for non-interactive shells like CI)
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Step 1: Check Node.js is installed
echo ""
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo ""
    echo "Please install Node.js first. Recommended methods:"
    echo "  1. Using nvm (recommended): https://github.com/nvm-sh/nvm"
    echo "     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "     nvm install --lts"
    echo ""
    echo "  2. Using your package manager:"
    echo "     Ubuntu/Debian: sudo apt install nodejs npm"
    echo ""
    exit 1
else
    echo "✅ Node.js $(node --version) is installed"
fi

# Check Node.js version (require 18+)
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️  Node.js version 18+ required, found v$NODE_VERSION"
    echo "Please upgrade Node.js"
    exit 1
fi

# Step 2: Install PM2 for process management
echo ""
echo "📦 Checking PM2 installation..."
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
    sudo pm2 startup systemd -u $USER --hp $HOME
else
    echo "✅ PM2 is installed"
fi

# Step 3: Build the Solid Start app
echo ""
echo "🔨 Building Solid Start application..."
npm install
npm run build

# Step 4: Stop existing PM2 process if running
echo ""
echo "🔄 Stopping existing process..."
pm2 delete martindann-portfolio 2>/dev/null || echo "No existing process found"

# Step 5: Start the app with PM2
echo ""
echo "🚀 Starting application with PM2..."
pm2 start .output/server/index.mjs --name "martindann-portfolio"
pm2 save

# Note: nginx config is managed on the server (includes SSL from certbot)
# Only run 'sudo cp nginx-martindann.conf ...' on first deploy
# Then run: sudo certbot --nginx -d martindann.com -d www.martindann.com

# Show status
echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Application status:"
pm2 status

echo ""
echo "🌐 Your website should now be live at:"
echo "   http://martindann.com"
echo ""
echo "📝 Useful commands:"
echo "   pm2 logs martindann-portfolio  - View application logs"
echo "   pm2 restart martindann-portfolio  - Restart the app"
echo "   pm2 stop martindann-portfolio  - Stop the app"
echo ""
