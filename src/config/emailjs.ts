// EmailJS Configuration
// Credentials are loaded from environment variables for security
// See .env.example for setup instructions

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key (User ID)
  // Set via VITE_EMAILJS_PUBLIC_KEY in .env file
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',

  // Your EmailJS Service ID
  // Set via VITE_EMAILJS_SERVICE_ID in .env file
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',

  // Your EmailJS Template ID
  // Set via VITE_EMAILJS_TEMPLATE_ID in .env file
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
}

// Setup Instructions:
// 1. Copy .env.example to .env
// 2. Follow the setup guide in EMAILJS_SETUP.md
// 3. Add your EmailJS credentials to the .env file
// 4. Never commit the .env file to version control
