// EmailJS Configuration
// Get your credentials from https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (User ID)
  // Find this at: https://dashboard.emailjs.com/admin/account
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',

  // Your EmailJS Service ID
  // Find this at: https://dashboard.emailjs.com/admin
  SERVICE_ID: 'YOUR_SERVICE_ID',

  // Your EmailJS Template ID
  // Find this at: https://dashboard.emailjs.com/admin/templates
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID'
}

// Setup Instructions:
// 1. Sign up at https://www.emailjs.com/
// 2. Add an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables:
//    - {{from_name}} - sender's name
//    - {{from_email}} - sender's email
//    - {{phone}} - sender's phone
//    - {{message}} - the message
// 4. Replace the values above with your actual credentials
