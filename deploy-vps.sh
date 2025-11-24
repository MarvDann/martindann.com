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

# Step 1: Install Node.js if not installed
echo ""
echo "📦 Checking Node.js installation..."
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js $(node --version) is installed"
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

# Step 6: Configure nginx
echo ""
echo "🔧 Configuring nginx..."

# Copy nginx config
sudo cp nginx-martindann.conf /etc/nginx/sites-available/martindann.com

# Remove default site if it exists
sudo rm -f /etc/nginx/sites-enabled/default

# Enable our site
sudo ln -sf /etc/nginx/sites-available/martindann.com /etc/nginx/sites-enabled/

# Test nginx config
echo ""
echo "🧪 Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo ""
echo "♻️  Reloading nginx..."
sudo systemctl reload nginx

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
