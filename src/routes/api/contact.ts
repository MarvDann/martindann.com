import { json } from "@solidjs/router";
import type { APIEvent } from "@solidjs/start/server";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string;
  timestamp: number;
}

export async function POST({ request }: APIEvent) {
  try {
    const data: ContactFormData = await request.json();

    // Server-side bot protection checks
    if (data.honeypot !== '') {
      console.log('Bot detected (honeypot)');
      return json({ success: false, error: 'Invalid request' }, { status: 400 });
    }

    const timeTaken = Date.now() - data.timestamp;
    if (timeTaken < 3000) {
      console.log('Bot detected (too fast)');
      return json({ success: false, error: 'Invalid request' }, { status: 400 });
    }

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.message) {
      return json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Get EmailJS credentials from environment variables
    const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = process.env.EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID;

    if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      console.error('EmailJS credentials not configured');
      return json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Prepare email template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_name: 'Martin Dann'
    };

    // Send email via EmailJS REST API (server-side)
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: SERVICE_ID,
        template_id: TEMPLATE_ID,
        user_id: PUBLIC_KEY,
        template_params: templateParams
      })
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error('EmailJS API error:', errorText);
      throw new Error('EmailJS API request failed');
    }

    console.log('Email sent successfully via EmailJS');
    return json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    return json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
