import { NextResponse } from "next/server";

// ✅ use same global storage
global.otpStore = global.otpStore || {};

export async function POST(req) {
  const { email, code } = await req.json();

  const record = global.otpStore[email];

  // 🧠 DEBUG LOGS
  console.log("========== VERIFY OTP ==========");
  console.log("INPUT EMAIL:", email);
  console.log("INPUT CODE:", code);
  console.log("STORED RECORD:", record);

  if (!record) {
    return NextResponse.json({
      success: false,
      error: "No OTP found",
    });
  }

  // ⏳ Check expiration
  if (Date.now() > record.expires) {
    delete global.otpStore[email];

    return NextResponse.json({
      success: false,
      error: "OTP expired",
    });
  }

  // ✅ Compare safely
  if (record.code.toString() === code.toString().trim()) {
    delete global.otpStore[email];

    return NextResponse.json({
      success: true,
    });
  }

  return NextResponse.json({
    success: false,
    error: "Invalid code",
  });
}