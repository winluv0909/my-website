"use client";

import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="border p-2 rounded"
        />

       <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="border p-2 rounded"
        ></textarea>

        <button type="submit" className="bg-slate-900 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </main>
  );
}
