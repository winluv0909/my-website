import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const { email, code } = body;

    // ✅ Check if fields exist
    if (!email || !code) {
      return NextResponse.json(
        {
          success: false,
          error: "Email and code are required",
        },
        { status: 400 }
      );
    }

    // ✅ Get saved OTP from memory/global
    const savedOtp = global.emailOtps?.[email];

    // ✅ No OTP found
    if (!savedOtp) {
      return NextResponse.json(
        {
          success: false,
          error: "OTP expired or not found",
        },
        { status: 400 }
      );
    }

    // ✅ Compare OTP
    if (savedOtp !== code) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid code",
        },
        { status: 400 }
      );
    }

    // ✅ Remove OTP after successful verification
    delete global.emailOtps[email];

    return NextResponse.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.log("VERIFY OTP ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Server error",
      },
      { status: 500 }
    );
  }
}