// CONTACT PAGE
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        <div className="glassmorphism p-8 rounded-2xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 rounded-lg bg-gray-800"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-gray-800"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800"
            ></textarea>
            <button className="bg-cyan-500 px-6 py-3 rounded-lg glow w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
