"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import Link from "next/link";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-8 relative"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#447794] to-[#2D5B75] rounded-full blur-3xl opacity-10 z-0"></div>
      
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
          I&apos;m currently looking for new opportunities and collaborations. 
          Whether you have a project in mind, want to discuss technology, or just 
          want to say hello - I'd love to hear from you!
        </p>
        
        <div className="mb-8">
          <h6 className="text-xl font-semibold text-white mb-4">Find me on</h6>
          <div className="socials flex flex-row gap-4">
            <Link href="https://github.com" className="group">
              <div className="bg-[#123249] p-3 rounded-lg border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 group-hover:scale-110">
                <FaGithub className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://linkedin.com" className="group">
              <div className="bg-[#123249] p-3 rounded-lg border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 group-hover:scale-110">
                <FaLinkedin className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://twitter.com" className="group">
              <div className="bg-[#123249] p-3 rounded-lg border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 group-hover:scale-110">
                <FaTwitter className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://instagram.com" className="group">
              <div className="bg-[#123249] p-3 rounded-lg border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 group-hover:scale-110">
                <FaInstagram className="w-6 h-6 text-white" />
              </div>
            </Link>
            <Link href="https://discord.com" className="group">
              <div className="bg-[#123249] p-3 rounded-lg border border-[#2D5B75] hover:border-[#447794] hover:bg-[#2D5B75] transition-all duration-300 group-hover:scale-110">
                <FaDiscord className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-[#061222] p-6 rounded-xl border border-[#123249]">
          <h6 className="text-lg font-semibold text-white mb-2">Direct Contact</h6>
          <p className="text-gray-300">Email: ronaldbob365@google.com</p>
          <p className="text-gray-300">Phone: +234-704-588-9973</p>
        </div>
      </div>

      <div className="z-10">
        {emailSubmitted ? (
          <div className="bg-green-900/20 border border-green-500 text-green-400 p-6 rounded-xl text-center">
            <p className="text-lg font-semibold mb-2">Message Sent Successfully!</p>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        ) : (
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#061222] border border-[#2D5B75] placeholder-gray-400 text-white text-sm rounded-lg block w-full p-3 focus:border-[#447794] focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#061222] border border-[#2D5B75] placeholder-gray-400 text-white text-sm rounded-lg block w-full p-3 focus:border-[#447794] focus:outline-none transition-colors"
                placeholder="Project Collaboration"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                className="bg-[#061222] border border-[#2D5B75] placeholder-gray-400 text-white text-sm rounded-lg block w-full p-3 focus:border-[#447794] focus:outline-none transition-colors"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#447794] to-[#2D5B75] hover:from-[#2D5B75] hover:to-[#447794] text-white font-medium py-3 px-6 rounded-lg w-full transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;