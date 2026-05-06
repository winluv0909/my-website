"use client";
import toast from "react-hot-toast";
import {
  isValidPhoneNumber,
  parsePhoneNumberFromString,
  formatIncompletePhoneNumber,
} from "libphonenumber-js";
import { useState, useEffect } from "react";

// ✅ REPLACED LIBRARY
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [defaultCountry, setDefaultCountry] = useState("jp");

  // ✅ ADD HERE
const [otpSent, setOtpSent] = useState(false);
const [otp, setOtp] = useState("");
const [verified, setVerified] = useState(false);

  // ✅ AUTO-DETECT COUNTRY
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        if (data?.country_code) {
          setDefaultCountry(data.country_code.toLowerCase());
        }
      } catch (err) {
        console.log("Country detection failed");
      }
    };

    detectCountry();
  }, []);

  // ✅ EMAIL VALIDATOR
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ✅ UPDATED VALIDATE (STEP 4)
  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!isValidEmail(form.email)) {
      newErrors.email = "Invalid email format";
    }

    // ✅ NEW PHONE VALIDATION
    if (!form.phone || !isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Invalid mobile number";
    }

    if (!form.message) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ UPDATED SUBMIT (STEP 5)
  const handleSubmit = async (e) => {
    e.preventDefault();

 if (!verified) {
  toast.error("Please verify your email first");
  return;
}
    setLoading(true);

    const payload = {
      ...form,
      phone: form.phone, // already E.164
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      toast.success("Message sent successfully!");
      setSent(true);
    } else {
      toast.error("Failed to send message.");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h1>

          <p className="text-gray-600 mb-8 leading-relaxed">
            ご質問やご相談、または当社とのお取引をご希望の方は、お気軽にお問い合わせください。弊社チームが丁寧に対応いたします。
          </p>

          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-gray-200 space-y-5">

            <div className="flex items-center gap-3">
              <span>📧</span>
              <div>
                <p className="text-sm text-gray-500">メールアドレス</p>
                <p className="font-medium text-gray-900">info@osaki-sogyo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span>📱</span>
              <div>
                <p className="text-sm text-gray-500">携帯電話番号</p>
                <p className="font-medium text-gray-900">+81 0270-76-4381 (営業部)</p>
                <p className="font-medium text-gray-900">+81 0270-76-4377 (総務部)</p>
                <p className="font-medium text-gray-900">+81 0120-397987 (フリーダイヤル)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span>📍</span>
              <div>
                <p className="text-sm text-gray-500">住所</p>
                <p className="font-medium text-gray-900">
                  1-9 Sakaimihara, Isesaki City, Gunma Prefecture 370-0115
                </p>
              </div>
            </div>

          </div>

          {/* MAP */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Japan, 〒370-0115 Gunma, Isesaki, Sakaimihara, １−9&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition duration-300">

          {sent ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                ✅ 送信されました！ - Message Sent!
              </h2>
              <p className="text-gray-600">
                お問い合わせいただきありがとうございます。後ほど担当者よりご連絡いたします。
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  お名前 - Full Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm({ ...form, name: value });

                    setErrors((prev) => ({
                      ...prev,
                      name: value ? "" : "Name is required",
                    }));
                  }}
                  className={`w-full border rounded-lg px-4 py-3 ${
                    errors.name
                      ? "border-red-500"
                      : form.name
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  メールアドレス - Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm({ ...form, email: value });

                    setErrors((prev) => ({
                      ...prev,
                      email: isValidEmail(value)
                        ? ""
                        : "Invalid email format",
                    }));
                  }}
                  className={`w-full border rounded-lg px-4 py-3 ${
                    errors.email
                      ? "border-red-500"
                      : form.email && isValidEmail(form.email)
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* PHONE (UPDATED) */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  携帯電話番号 - Mobile Number
                </label>

                <PhoneInput
                  international
                  defaultCountry={defaultCountry.toUpperCase()}
                  value={form.phone}
                  onChange={(value) => {
                    setForm({ ...form, phone: value || "" });

                    if (!value || !isValidPhoneNumber(value)) {
                      setErrors((prev) => ({
                        ...prev,
                        phone: "Invalid mobile number",
                      }));
                    } else {
                      setErrors((prev) => ({
                        ...prev,
                        phone: "",
                      }));
                    }
                  }}
                  className={`w-full border rounded-lg px-4 py-3 ${
                    errors.phone
                      ? "border-red-500"
                      : form.phone && isValidPhoneNumber(form.phone)
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                />

                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>

              <button
  type="button"
 onClick={async () => {
  const res = await fetch("/api/send-email-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
    }),
  });

  const data = await res.json();

  if (data.success) {
    toast.success("OTP sent to your email!");
    setOtpSent(true);
  } else {
    toast.error(data.error || "Failed to send OTP");
  }
}}
  className="mt-2 text-sm text-blue-600 hover:underline"
>
 Send Verification Code
</button>

    {/* ✅ INSERT OTP INPUT HERE */}
  {otpSent && !verified && (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full border rounded-lg px-4 py-2"
      />
<button
  type="button"
onClick={async () => {
  const res = await fetch("/api/verify-email-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.email,
      code: otp,
    }),
  });

  const data = await res.json();

  if (data.success) {
    toast.success("Email verified!");
    setVerified(true);
  } else {
    toast.error(data.error || "Invalid code");
  }
}}
  className="mt-2 w-full bg-green-600 text-white py-2 rounded-lg"
>
  Verify Code
</button>
    </div>
    )}
              {/* MESSAGE */}
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  ご用件 - Message
                </label>
                <textarea
                  rows="5"
                  value={form.message}
                  onChange={(e) => {
                    const value = e.target.value;
                    setForm({ ...form, message: value });

                    setErrors((prev) => ({
                      ...prev,
                      message: value ? "" : "Message is required",
                    }));
                  }}
                  className={`w-full border rounded-lg px-4 py-3 ${
                    errors.message
                      ? "border-red-500"
                      : form.message
                      ? "border-green-500"
                      : "border-gray-300"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    送信中...
                  </>
                ) : (
                  "送信する - Send Message"
                )}
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}