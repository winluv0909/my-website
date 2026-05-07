import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// ✅ global storage (IMPORTANT)
global.otpStore = global.otpStore || {};

export async function POST(req) {
  const { email } = await req.json();

  if (data.success) {
  localStorage.setItem("emailOtp", data.otp);
  toast.success("OTP sent!");
}

  // 🔢 Generate OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // ⏳ Store with expiration (5 minutes)
  global.otpStore[email] = {
    code: otp,
    expires: Date.now() + 5 * 60 * 1000,
  };

  // 🧠 DEBUG LOGS
  console.log("========== SEND OTP ==========");
  console.log("EMAIL:", email);
  console.log("GENERATED OTP:", otp);
  console.log("STORED:", global.otpStore[email]);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Oosaki Sogyo" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Verification Code",
      text: `Your OTP code is: ${otp}`,
    });

    return NextResponse.json({
  success: true,
  otp,
});
  } catch (err) {
    console.error("EMAIL ERROR:", err.message);

    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}