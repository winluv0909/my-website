import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
    } = body;

    // ✅ Validate fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "All fields are required",
        },
        { status: 400 }
      );
    }

    // ✅ Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ SEND EMAIL
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      // ✅ RECEIVER
      to: process.env.EMAIL_USER,

      subject: `New Contact Form Message from ${name}`,

      html: `
        <div style="font-family:sans-serif">
          <h2>New Website Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>

          <div style="padding:12px;border:1px solid #ccc;border-radius:8px">
            ${message}
          </div>
        </div>
      `,
    });

    // ✅ SHOW RESULT IN TERMINAL
    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    // ✅ SHOW ERROR IN TERMINAL
    console.log("CONTACT API ERROR:");
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
      },
      { status: 500 }
    );
  }
}