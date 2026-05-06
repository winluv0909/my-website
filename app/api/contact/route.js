import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/contact";

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    await connectDB();

    // SAVE TO DATABASE
    await Contact.create({ name, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // SEND TO YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}

${message}
      `,
    });

    // AUTO REPLY TO USER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your message",
      text: `Hi ${name},

Thank you for contacting Osaki Sogyo.

We have received your message and will respond shortly.

Best regards,
Osaki Sogyo Team`,
    });

    return Response.json({ success: true });
  } catch (err) {
    return Response.json({ success: false });
  }
}