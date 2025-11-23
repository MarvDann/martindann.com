import { json } from "@solidjs/router";
import type { APIEvent } from "@solidjs/start/server";
import nodemailer from "nodemailer";

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

    // Get SMTP credentials from environment variables
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const EMAIL_TO = process.env.EMAIL_TO;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !EMAIL_TO) {
      console.error('SMTP credentials not configured');
      return json({ success: false, error: 'Server configuration error' }, { status: 500 });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${data.name}" <${SMTP_USER}>`,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `Portfolio Contact: ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
      `,
      html: `
<h2>New Contact Form Submission</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
<p><strong>Phone:</strong> ${data.phone}</p>
<h3>Message:</h3>
<p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully via Nodemailer');
    return json({ success: true });

  } catch (error) {
    console.error('Error sending email:', error);
    return json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
