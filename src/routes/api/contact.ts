import { json } from "@solidjs/router";
import type { APIEvent } from "@solidjs/start/server";
import { Resend } from "resend";

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

    // Get Resend API key from environment variables
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const EMAIL_FROM = process.env.EMAIL_FROM;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!RESEND_API_KEY || !EMAIL_FROM || !EMAIL_TO) {
      console.error('Email configuration not set up');
      return json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Initialize Resend
    const resend = new Resend(RESEND_API_KEY);

    // Send email
    const result = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      throw new Error(result.error.message);
    }

    console.log('Email sent successfully via Resend:', result.data?.id);
    return json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    return json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
