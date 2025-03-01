import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body = await req.json();
    const { firstName, surname, email, message, subject } = body;

    if (!firstName || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Configure nodemailer with your email service
    // For production, you'd typically use environment variables for these credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Or another service like SendGrid, Mailgun, etc.
      auth: {
        user: process.env.EMAIL_USER, // Store in .env file
        pass: process.env.EMAIL_PASSWORD, // Store in .env file
      },
    });

    // Construct email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'contact@lastgoodbye.com', // Your business email
      replyTo: email,
      subject: subject || `New contact from ${firstName} ${surname}`,
      text: `
        Name: ${firstName} ${surname || ''}
        Email: ${email}
        
        Message:
        ${message || 'No message provided'}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${surname || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          
          <h3>Message:</h3>
          <p>${message || 'No message provided'}</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending failed:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}