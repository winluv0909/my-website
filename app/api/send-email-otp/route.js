import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification Code",
      html: `
        <div style="font-family: Arial;">
          <h2>Email Verification</h2>
          <p>Your OTP code is:</p>
          <h1>${otp}</h1>
          <p>This code will expire soon.</p>
        </div>
      `,
    });

    console.log("OTP SENT TO:", email);
    console.log("OTP CODE:", otp);

    return NextResponse.json({
      success: true,
      otp,
    });

  } catch (error) {
    console.error("SEND OTP ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}