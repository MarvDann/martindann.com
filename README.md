# Martin Dann - Portfolio Website

Professional portfolio website showcasing 25 years of full stack development experience as a Lead Software Engineer.

Built with **Solid Start**, **TypeScript**, and a futuristic dark aqua theme.

## Features

- ✨ **Modern Stack**: Solid Start with TypeScript
- 🎨 **Dark Aqua Theme**: Professional, futuristic design
- 📧 **Secure Contact Form**: Server-side email via Resend API
- 🤖 **Bot Protection**: Honeypot + timing checks
- 🔒 **Server-Side API**: Credentials never exposed to browser
- 📱 **Fully Responsive**: Works on all devices
- ⚡ **SSR**: Server-side rendering for better SEO

## Tech Stack

- **Framework**: Solid Start
- **Language**: TypeScript
- **Email**: Resend API
- **Deployment**: Node.js with PM2
- **Server**: Nginx reverse proxy

## Development

### Prerequisites

- Node.js 18+ (recommend using [nvm](https://github.com/nvm-sh/nvm))
- npm or pnpm

### Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env and add your Resend API key
# See RESEND_SETUP.md for details

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

## Deployment

See [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) for complete VPS deployment instructions.

### Quick Deploy on VPS

```bash
# On your VPS
cd /var/www/martindann.com
git pull origin main
./deploy-vps.sh
```

### Automatic Deployment

GitHub Actions automatically deploys to VPS when code is pushed to `main` branch.

See [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) for setup instructions.

## Email Configuration

The contact form uses [Resend](https://resend.com) for email delivery.

See [RESEND_SETUP.md](./RESEND_SETUP.md) for setup instructions.

**Quick Setup:**
1. Sign up at https://resend.com
2. Get API key from dashboard
3. Add to `.env` file
4. Restart dev server

## Project Structure

```
src/
├── app.tsx                 # Root app with router
├── entry-client.tsx        # Client entry point
├── entry-server.tsx        # Server entry point
├── routes/
│   ├── index.tsx          # Home page
│   └── api/
│       └── contact.ts     # Server-side email API
├── components/            # React components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── ContactModal.tsx
└── index.css             # Global styles
```

## Environment Variables

Required variables (see `.env.example`):

```bash
RESEND_API_KEY=re_your_api_key
EMAIL_FROM=Portfolio <onboarding@resend.dev>
EMAIL_TO=your-email@gmail.com
```

## Security

- ✅ API credentials stored server-side only
- ✅ Environment variables never exposed to browser
- ✅ Bot protection on contact form
- ✅ Server-side validation of all form inputs

## Available Scripts

### Development
- `npm run dev` - Start development server (port 3000)

### Production
- `npm run build` - Build for production
- `npm run start` - Start production server

### Deployment
- `./deploy-vps.sh` - Deploy to VPS (run on server)

## Documentation

- [DEPLOYMENT_SETUP.md](./DEPLOYMENT_SETUP.md) - Complete deployment guide
- [RESEND_SETUP.md](./RESEND_SETUP.md) - Email setup instructions

## License

Private - © 2024 Martin Dann

## Contact

For inquiries, use the contact form on the website or visit:
- LinkedIn: [linkedin.com/in/dannster](https://www.linkedin.com/in/dannster/)
- GitHub: [github.com/MarvDann](https://github.com/MarvDann)
