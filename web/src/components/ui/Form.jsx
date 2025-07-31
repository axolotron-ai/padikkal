"use client";

import React, { useState } from "react";
import Image from "next/image";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Email sent successfully!");
        setFormData({ name: "", email: "", address: "" });
      } else {
        setMessage(data.error || "Failed to send email.");
      }
    } catch (error) {
        console.log(error);
      setMessage("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl p-5 lg:p-10 grid gap-7 border-gray-300"
      >
        <div className="grid gap-2">
          <label className="lg:text-xl">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jacob"
            className="bg-white border border-gray-300 py-2 px-5 rounded-md w-full"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="lg:text-xl">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jacob@gmail.com"
            className="bg-white border border-gray-300 py-2 px-5 rounded-md w-full"
            required
          />
        </div>
        <div className="grid gap-2">
          <label className="lg:text-xl">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Type your Address here...."
            className="bg-white border min-h-[150px] border-gray-300 py-2 px-5 rounded-md w-full"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="text-white px-4 py-2 bg-yc shadow-inner shadow-primary rounded-full flex gap-5 items-center"
          >
            {loading ? "Sending..." : "Send"}
            <Image
              src="/send.svg"
              alt="Send Icon"
              width={30}
              height={30}
              className="max-w-[30px] lg:max-w-[40px]"
            />
          </button>
          {message && <p className="text-green-600 text-sm">{message}</p>}
        </div>
      </form>
    </div>
  );
};

export default Form;
