import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {

    // ✅ Parse body
    const body = await req.json();

    console.log("BODY RECEIVED:");
    console.log(body);

    // ✅ Must EXACTLY match frontend names
    const {
      name,
      email,
      phone,
      message,
    } = body;

    // ✅ Validation
    if (!name || !email || !phone || !message) {

      console.log("MISSING REQUIRED FIELDS");

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

    console.log("TRANSPORTER CREATED");

    // ✅ Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,

      // ✅ Send TO yourself
      to: process.env.EMAIL_USER,

      subject: `New Inquiry from ${name}`,

      html: `
        <div style="font-family:sans-serif">

          <h2>New Contact Form Submission</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>

          <div style="padding:12px;border:1px solid #ccc;border-radius:8px;">
            ${message}
          </div>

        </div>
      `,
    });

    console.log("EMAIL SENT SUCCESSFULLY");
    console.log(info);

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.log("CONTACT API ERROR:");
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}