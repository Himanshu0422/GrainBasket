"use client";

import type React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";

const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY!
      )
      .then(() => {
        setIsSent(true);
        form.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
      });
  };

  return (
    <section className="py-24 px-6 bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-gray-600 text-lg">
            Get in touch with us for fresh, quality flour products
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Form */}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
              autoComplete="off"
            >
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="Your full name"
                  className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  required
                  pattern="[0-9]{10}"
                  placeholder="Your phone number"
                  className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="Your email address"
                  className="w-full border border-gray-300 rounded-lg p-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your flour requirements"
                  className="w-full border border-gray-300 rounded-lg p-4 h-32 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 resize-none"
                ></textarea>
              </div>

              {isSent && (
                <p className="text-green-600 text-sm">
                  Message sent successfully!
                </p>
              )}
              <button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="mt-12 space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Gazipur, Tehsil Naraingarh, Haryana</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+916280341384" className="hover:underline">
                  +91 62803 41384
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a
                  href="mailto:rpindustries1978@gmail.com"
                  className="hover:underline"
                >
                  rpindustries1978@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/image1.jpeg"
                alt="Flour preparation with traditional methods"
                className="w-full h-64 object-cover"
                width={500}
                height={256}
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/image2.jpeg"
                alt="Fresh flour with eggs for baking"
                className="w-full h-64 object-cover"
                width={500}
                height={256}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
