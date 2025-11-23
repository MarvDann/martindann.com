# Resend Email Setup Guide

Simple setup guide for getting your contact form working with Resend.

## Why Resend?

- ✅ **Simple setup** - Just one API key, no SMTP configuration
- ✅ **Reliable delivery** - Built for transactional emails
- ✅ **Free tier** - 100 emails/day, 3,000 emails/month
- ✅ **No headaches** - No 2FA, App Passwords, or authentication issues
- ✅ **Server-side only** - API key never exposed to browser

## Setup (5 minutes)

### 1. Sign Up for Resend

Go to: https://resend.com/signup

- Free tier is perfect for portfolio contact forms
- No credit card required

### 2. Get Your API Key

1. After signing up, go to: https://resend.com/api-keys
2. Click **"Create API Key"**
3. Name it: **"Portfolio Website"**
4. Permission: **"Sending access"** (default)
5. Click **"Add"**
6. **Copy the API key** - it looks like: `re_123abc456def789...`

⚠️ **Important**: Save this key now! You won't be able to see it again.

### 3. Set Up Environment Variables

```bash
# Copy the example file
cp .env.example .env

# Edit the .env file
nano .env
```

Add your credentials:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_FROM=Portfolio <onboarding@resend.dev>
EMAIL_TO=martindann.com@gmail.com
```

**For testing:**
- Use `EMAIL_FROM=Portfolio <onboarding@resend.dev>` (Resend's test domain)
- Use your actual email for `EMAIL_TO`

**For production:**
- You'll want to verify your own domain (see below)

### 4. Test It!

```bash
# Start the dev server
npm run dev

# Open http://localhost:3000
# Fill out the contact form
# Submit it
# Check your email!
```

## Production Setup (Optional)

For production, you'll want emails to come from your own domain (martindann.com).

### 1. Add Your Domain

1. Go to: https://resend.com/domains
2. Click **"Add Domain"**
3. Enter: **martindann.com**

### 2. Verify DNS Records

Resend will give you DNS records to add:

```
Type: TXT
Name: resend._domainkey
Value: [Resend will provide this]
```

Add this to your DNS settings (wherever you manage martindann.com DNS).

### 3. Update .env

Once verified, update your `.env`:

```bash
EMAIL_FROM=Portfolio <contact@martindann.com>
```

Now emails will come from your domain! 🎉

## Troubleshooting

### API Key Not Working

- Make sure you copied the entire key (starts with `re_`)
- Check there are no extra spaces or quotes in `.env`
- Restart your dev server after changing `.env`

### Not Receiving Emails

- Check your spam folder
- Verify `EMAIL_TO` is correct in `.env`
- Look at the server console for error messages

### "Domain not verified" Error

- If using `onboarding@resend.dev`, this shouldn't happen
- If using your own domain, make sure DNS records are added
- DNS propagation can take up to 48 hours (usually much faster)

## Free Tier Limits

- **100 emails per day**
- **3,000 emails per month**
- Perfect for a portfolio contact form!

If you need more, Resend's paid tiers are very affordable.

## Security

✅ **API key is server-side only** - Never exposed in browser JavaScript
✅ **Bot protection** - Honeypot field + timing checks built in
✅ **Validated fields** - Server validates all form data before sending

## API Key Management

**Best Practices:**
- Never commit `.env` to git (it's already in `.gitignore`)
- Keep your API key secret
- Rotate keys periodically
- Use different keys for dev/staging/production

**To rotate your API key:**
1. Create a new key in Resend dashboard
2. Update `.env` with new key
3. Test that it works
4. Delete the old key from Resend dashboard

## Questions?

- Resend Docs: https://resend.com/docs
- Resend Support: https://resend.com/support

## Example Email

When someone submits your contact form, you'll receive an email like:

```
From: Portfolio <onboarding@resend.dev>
Reply-To: their-email@example.com
Subject: Portfolio Contact: John Doe

New Contact Form Submission

Name: John Doe
Email: john@example.com
Phone: 555-1234

Message:
Hi, I'd like to discuss a project with you...
```

Just hit "Reply" and it goes directly to the person who submitted the form!
