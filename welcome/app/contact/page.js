'use client'; // If using in a Next.js app directory

import React, { useState } from 'react';

function Page() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await res.json();
      if (result.success) {
        console.log("success");
        setForm({ name: '', email: '', message: '' });
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full h-screen flex">
      {/* Left Box: Contact Info */}
      <div className="w-1/2 bg-blue-50 p-8 flex flex-col justify-center items-start">
        <div className="text-5xl font-bold text-blue-700">Welcome Packaging Solution</div>
        <h2 className="text-3xl font-semibold mb-2">Akshay Sonekar</h2>
        <p className="text-lg">
          Mob: <a href="tel:9970346555" className="text-blue-600 underline">9970346555</a>
        </p>
      </div>

      {/* Right Box: Contact Form */}
      <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name='name'
            onChange={handleChange}
            required
            placeholder="Enter your name"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name='email'
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            rows="5"
            name='message'
            onChange={handleChange}
            required
            placeholder="Enter your message"
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
