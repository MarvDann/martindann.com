# Solid Start Migration

This branch migrates the portfolio website from a static SolidJS app to **Solid Start**, enabling server-side rendering and secure API routes.

## Why Migrate to Solid Start?

The main reason for this migration was to **secure EmailJS credentials** by moving email handling to the server-side.

### Before (Static SolidJS):
- ❌ EmailJS credentials embedded in client JavaScript (visible in browser)
- ❌ Environment variables still compiled into the client bundle
- ❌ No server-side capabilities

### After (Solid Start):
- ✅ EmailJS credentials stored server-side only (never exposed to browser)
- ✅ Server-side API route handles email sending
- ✅ Full SSR capabilities
- ✅ Better SEO with server-side rendering
- ✅ API routes for future features

## What Changed

### 1. Project Structure

**Old Structure:**
```
src/
├── App.tsx          # Main component
├── index.tsx        # Entry point
├── components/      # Components
└── config/
    └── emailjs.ts   # EmailJS config (exposed in browser)
```

**New Structure:**
```
src/
├── app.tsx              # Root app with router
├── entry-client.tsx     # Client entry point
├── entry-server.tsx     # Server entry point
├── routes/
│   ├── index.tsx        # Home page
│   └── api/
│       └── contact.ts   # Server-side email API
└── components/          # Components (unchanged)
```

### 2. Dependencies Added

```json
{
  "@solidjs/start": "^1.2.0",
  "@solidjs/router": "^0.15.4",
  "vinxi": "^0.5.8"
}
```

### 3. Scripts Updated

```json
{
  "dev": "vinxi dev",
  "build": "vinxi build",
  "start": "vinxi start"
}
```

### 4. EmailJS Integration

**Before:** Client-side EmailJS calls
```typescript
// In ContactModal.tsx
await emailjs.send(
  EMAILJS_CONFIG.SERVICE_ID,
  EMAILJS_CONFIG.TEMPLATE_ID,
  templateParams,
  EMAILJS_CONFIG.PUBLIC_KEY
)
```

**After:** Server-side API route
```typescript
// ContactModal.tsx posts to API
await fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify(formData)
})

// API route handles EmailJS (credentials stay on server)
// src/routes/api/contact.ts
export async function POST({ request }: APIEvent) {
  const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY; // Server-side only
  await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}
```

### 5. Environment Variables

**Before:**
```bash
# .env (compiled into client JavaScript)
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

**After:**
```bash
# .env (server-side only, never exposed to browser)
EMAILJS_PUBLIC_KEY=...
EMAILJS_SERVICE_ID=...
EMAILJS_TEMPLATE_ID=...
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
```bash
# Copy the example file
cp .env.example .env

# Edit .env and add your EmailJS credentials
# (Get them from https://dashboard.emailjs.com/)
```

### 3. Development
```bash
npm run dev
# Visit http://localhost:3000
```

### 4. Production Build
```bash
npm run build
npm start
```

### 5. Production Deployment on VPS

The build output is in `.output/` directory:

```bash
# On your VPS
cd /var/www/martindann.com
git pull origin claude/migrate-to-solid-start
npm install
npm run build

# Set environment variables
nano .env
# Add your EmailJS credentials

# Start the server (using PM2 or similar)
pm2 start .output/server/index.mjs --name "martindann-portfolio"

# Or run directly
node .output/server/index.mjs
```

#### Nginx Configuration for Solid Start

```nginx
server {
    listen 80;
    server_name martindann.com www.martindann.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Testing

### Test Contact Form
1. Run the dev server: `npm run dev`
2. Visit http://localhost:3000
3. Click "Send Message"
4. Fill out the form and submit
5. Check server console for "Email sent successfully"
6. Check your email inbox

### Verify Credentials Are Secure
1. Open browser DevTools → Network tab
2. Submit the contact form
3. Check the JavaScript files - EmailJS credentials should NOT be visible
4. Only the API request to `/api/contact` should be visible

## Benefits of This Migration

1. **Security**: EmailJS credentials never exposed to browser
2. **SEO**: Server-side rendering improves search engine visibility
3. **Performance**: Better initial page load with SSR
4. **Flexibility**: Can add more server-side features in the future
5. **Type Safety**: Full TypeScript support throughout

## Files Modified

- `package.json` - Updated scripts and dependencies
- `.env.example` - Updated environment variable names (removed VITE_ prefix)
- `src/components/ContactModal.tsx` - Now calls API route instead of EmailJS directly

## Files Created

- `app.config.ts` - Solid Start configuration
- `src/app.tsx` - Root app component with router
- `src/entry-client.tsx` - Client entry point
- `src/entry-server.tsx` - Server entry point with HTML structure
- `src/routes/index.tsx` - Home page (moved from App.tsx)
- `src/routes/api/contact.ts` - Server-side email API route

## Files That Can Be Removed (Optional)

These files are no longer needed but kept for reference:
- `src/App.tsx` - Functionality moved to `src/routes/index.tsx`
- `src/index.tsx` - Replaced by entry-client.tsx and entry-server.tsx
- `src/config/emailjs.ts` - No longer needed (env vars used directly)
- `index.html` - HTML structure now in entry-server.tsx
- `vite.config.ts` - Replaced by app.config.ts (if it exists)

## Troubleshooting

### Contact Form Not Working
1. Check `.env` file exists with correct credentials
2. Check server console for errors
3. Verify API route is accessible: http://localhost:3000/api/contact

### Build Errors
1. Clear build cache: `rm -rf .vinxi .output`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Rebuild: `npm run build`

### Port Already in Use
```bash
# Change port in app.config.ts or use environment variable
PORT=3001 npm run dev
```

## Next Steps

- [ ] Test deployment on your VPS
- [ ] Set up PM2 for process management
- [ ] Configure Nginx reverse proxy
- [ ] Set up SSL certificate with Let's Encrypt
- [ ] Test contact form in production
- [ ] Monitor server logs

## Questions?

Refer to the Solid Start documentation: https://start.solidjs.com/
