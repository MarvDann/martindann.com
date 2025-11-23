# EmailJS Setup Instructions

Your contact form is now configured to use EmailJS! Follow these steps to complete the setup:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the prompts to connect your email
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Save the template** and **copy the Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** in the dashboard
2. Find your **Public Key** (also called User ID)
3. **Copy this key**

## Step 5: Update Configuration File

Open `src/config/emailjs.ts` and replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'your_actual_public_key',
  SERVICE_ID: 'your_actual_service_id',
  TEMPLATE_ID: 'your_actual_template_id'
}
```

## Step 6: Test Your Contact Form

1. Run your development server: `npm run dev`
2. Open the website and click "Send Message"
3. Fill out the form and submit
4. Check your email inbox for the message!

## Security Notes

✅ **Safe to commit:** The keys in `src/config/emailjs.ts` are public keys designed for frontend use
✅ **Bot protection:** Built-in honeypot and timing checks prevent spam
✅ **Rate limiting:** EmailJS has built-in rate limiting on the free tier (200 emails/month)

## Free Tier Limits

- **200 emails per month**
- **Sufficient for a portfolio website**
- Can upgrade if needed for more volume

## Troubleshooting

### Emails not sending?
1. Check browser console for errors
2. Verify all three credentials are correct
3. Ensure your email service is connected in EmailJS dashboard
4. Check EmailJS dashboard for failed sends

### Getting spam?
- Bot protection is already enabled (honeypot + timing)
- You can add domain restrictions in EmailJS dashboard
- Enable reCAPTCHA in EmailJS settings if needed

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
