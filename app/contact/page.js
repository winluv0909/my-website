"use client";

import { useState } from "react";

export default function Contact() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
    </main>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form..."); // DEBUG

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);
    } catch (error) {
      console.error("ERROR:", error);
      alert("Something went wrong");
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="flex flex-col max-w-md gap-4">
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
