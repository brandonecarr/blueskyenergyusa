import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, electricBill } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email || !electricBill) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASSWORD;

    if (!smtpConfigured) {
      // In development without SMTP, log the submission
      console.log("=== NEW CONTACT FORM SUBMISSION ===");
      console.log(`Name: ${firstName} ${lastName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Electric Bill: ${electricBill}`);
      console.log("===================================");
      console.log("Note: SMTP not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local to enable email sending.");

      return NextResponse.json(
        { message: "Form submitted successfully (logged to console - SMTP not configured)" },
        { status: 200 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "devwithbrandon@gmail.com",
      subject: `New Solar Quote Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Quote Request
          </h2>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>

          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Quote Details</h3>
            <p><strong>Average Monthly Electric Bill:</strong> ${electricBill}</p>
          </div>

          <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
            This message was sent from the BlueSky Energy USA website contact form.
          </p>
        </div>
      `,
      text: `
        New Quote Request

        Contact Information:
        Name: ${firstName} ${lastName}
        Phone: ${phone}
        Email: ${email}

        Quote Details:
        Average Monthly Electric Bill: ${electricBill}

        This message was sent from the BlueSky Energy USA website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
