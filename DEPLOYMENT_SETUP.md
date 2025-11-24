# Automated Deployment Setup

This project uses GitHub Actions to automatically deploy to your VPS when code is merged to the `main` branch.

## Initial VPS Setup (One-Time)

### 1. Set Up Your VPS

SSH into your VPS and set up the project directory:

```bash
# Install Node.js via nvm (if not already installed)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts

# Install nginx (if not already installed)
sudo apt update
sudo apt install nginx

# Create project directory
sudo mkdir -p /var/www/martindann.com
sudo chown $USER:$USER /var/www/martindann.com

# Clone the repository
cd /var/www/martindann.com
git clone https://github.com/MarvDann/martindann.com.git .
```

### 2. Set Up Environment Variables

Create your `.env` file on the VPS:

```bash
cd /var/www/martindann.com
cp .env.example .env
nano .env
```

Add your actual credentials:
```bash
RESEND_API_KEY=re_your_actual_api_key
EMAIL_FROM=Portfolio <onboarding@resend.dev>
EMAIL_TO=your-email@gmail.com
```

### 3. Run Initial Deployment

```bash
cd /var/www/martindann.com
chmod +x deploy-vps.sh
./deploy-vps.sh
```

This will:
- Check Node.js installation
- Install PM2 (if needed)
- Build your app
- Start it with PM2
- Configure nginx
- Make it live!

### 4. Add SSL Certificate (Recommended)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d martindann.com -d www.martindann.com
```

## GitHub Actions Setup

To enable automatic deployments when you merge to `main`:

### 1. Generate SSH Key for GitHub Actions

On your **VPS**, generate a dedicated SSH key:

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/github_actions
```

Press Enter for no passphrase (needed for automation).

### 2. Add Public Key to VPS

```bash
cat ~/.ssh/github_actions.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

### 3. Get the Private Key

```bash
cat ~/.ssh/github_actions
```

Copy the entire output (including `-----BEGIN OPENSSH PRIVATE KEY-----` and `-----END OPENSSH PRIVATE KEY-----`).

### 4. Add GitHub Secrets

Go to your GitHub repository:

1. Click **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add each of these:

| Secret Name | Value | Example |
|-------------|-------|---------|
| `VPS_HOST` | Your VPS IP address or domain | `123.45.67.89` or `vps.example.com` |
| `VPS_USER` | Your VPS username | `ubuntu` or `root` or your username |
| `VPS_SSH_KEY` | The private key you copied | (paste entire key including BEGIN/END lines) |
| `VPS_PORT` | SSH port (usually 22) | `22` |

### 5. Test Automatic Deployment

Make a change to your code, commit, and push to a feature branch:

```bash
git checkout -b test-deployment
echo "# Test" >> README.md
git add README.md
git commit -m "Test deployment"
git push origin test-deployment
```

Then merge to main:

```bash
git checkout main
git merge test-deployment
git push origin main
```

GitHub Actions will automatically:
1. SSH into your VPS
2. Pull the latest code
3. Run the deployment script
4. Your site will be updated!

## Monitoring Deployments

### Check GitHub Actions

- Go to your repository → **Actions** tab
- You'll see all deployment runs
- Click any run to see logs

### Check VPS Status

SSH into your VPS and run:

```bash
# Check app status
pm2 status

# View app logs
pm2 logs martindann-portfolio

# View nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## Manual Deployment

If you need to deploy manually (without GitHub Actions):

```bash
# SSH into VPS
ssh user@your-vps-ip

# Navigate to project
cd /var/www/martindann.com

# Pull latest code
git pull origin main

# Deploy
./deploy-vps.sh
```

## Useful Commands

### On VPS

```bash
# Restart app
pm2 restart martindann-portfolio

# Stop app
pm2 stop martindann-portfolio

# View logs
pm2 logs martindann-portfolio

# Reload nginx
sudo systemctl reload nginx

# Check nginx status
sudo systemctl status nginx
```

## Troubleshooting

### GitHub Actions Fails to Connect

- Check `VPS_HOST` is correct (IP or domain)
- Check `VPS_PORT` is correct (usually 22)
- Check `VPS_USER` has access to `/var/www/martindann.com`
- Verify SSH key is correct (include BEGIN/END lines)

### Deployment Script Fails

SSH into VPS and check:

```bash
# Check if directory exists
ls -la /var/www/martindann.com

# Check permissions
ls -ld /var/www/martindann.com

# Check Node.js
node --version

# Check PM2
pm2 status
```

### Site Not Loading

```bash
# Check app is running
pm2 status

# Check nginx
sudo nginx -t
sudo systemctl status nginx

# Check logs
pm2 logs
sudo tail -f /var/log/nginx/error.log
```

## Security Notes

✅ **SSH Key** is stored as GitHub secret (encrypted)
✅ **Environment variables** (.env) stay on VPS only
✅ **No credentials** in GitHub repository
✅ **Automated deployments** reduce human error

## Workflow Overview

```
Developer → Push to main
     ↓
GitHub Actions triggered
     ↓
SSH into VPS
     ↓
Pull latest code
     ↓
Run deploy-vps.sh
     ↓
App updated & restarted
     ↓
Site live! ✅
```
