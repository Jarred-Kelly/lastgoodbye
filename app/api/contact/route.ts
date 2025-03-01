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

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email credentials are missing. Make sure EMAIL_USER and EMAIL_PASSWORD are set in .env');
      return NextResponse.json(
        { error: 'Email configuration error' },
        { status: 500 }
      );
    }

    // Configure nodemailer with your email service
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      // For non-Gmail providers, you might need to use:
      // host: 'smtp.example.com',
      // port: 587,
      // secure: false, // true for 465, false for other ports
    });

    // Test the connection
    await transporter.verify().catch(error => {
      console.error('SMTP verification failed:', error);
      throw new Error('Email service connection failed');
    });

    // Construct email content
    const mailOptions = {
      from: `"Last Goodbye Contact" <${process.env.EMAIL_USER}>`,
      to: 'contact@lastgoodbye.com', // Your business email
      replyTo: email,
      subject: subject || `New contact from ${firstName} ${surname || ''}`,
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
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}