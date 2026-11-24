
"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  CalendarClock,
  User,
  Building2,
  MessageCircle,
  Send,
  type LucideIcon,
} from "lucide-react";
import { contactContentData } from "@/data";

const contactIcons: Record<string, LucideIcon> = {
  location: MapPin,
  email: Mail,
  CalendarClock,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* Background Decorative Elements */}
      <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-orange-100/30 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 xl:gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full"
          >
            {/* Section Label */}
            <motion.div
              variants={itemVariants}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[3px] w-12 bg-orange-500" />
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#f58200]">
                {contactContentData.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-[28px] font-extrabold leading-[1.15] tracking-tight text-[#101d3c] sm:text-5xl xl:text-[50px]"
            >
              {contactContentData.heading}
              <br />
              {contactContentData.headingPrefix}{" "}
              <span className="text-[#f58200]">
                {contactContentData.highlight}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-[550px] text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
            >
              {contactContentData.description}
            </motion.p>

            {/* Contact Details */}
            <div className="mt-6 space-y-1">
              {contactContentData.contactInfo.map((item) => {
                const Icon = contactIcons[item.icon];

                if (!Icon) {
                  throw new Error(`Unknown contact icon: ${item.icon}`);
                }

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 7 }}
                    className="group flex items-center gap-5 border-b border-gray-100 py-3 last:border-0 sm:gap-7"
                  >
                    {/* Icon Box */}
                    <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-orange-50 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#f58200] group-hover:shadow-lg group-hover:shadow-orange-200">
                      <Icon
                        size={32}
                        strokeWidth={1.8}
                        className="text-[#f58200] transition-colors duration-500 group-hover:text-white"
                      />
                    </div>

                    {/* Text */}
                    <div>
                      <h3 className="text-lg font-bold text-[#101d3c] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-700 sm:text-base">
                        {item.lines.join(" ")}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="w-full"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_15px_55px_rgba(0,0,0,0.09)] transition-shadow duration-500 hover:shadow-[0_20px_65px_rgba(0,0,0,0.12)] sm:p-8 md:p-10 lg:p-9 xl:p-10">

              {/* Decorative top glow */}
              <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full bg-orange-100/40 blur-3xl" />

              <div className="relative z-10">
                {/* Form Heading */}
                <h3 className="text-2xl font-extrabold tracking-tight text-[#101d3c] sm:text-3xl">
                  {contactContentData.formHeading}
                </h3>

                <div className="mt-5 h-[5px] w-[75px] rounded-full bg-[#f58200]" />

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Connect your API / backend here.
                  }}
                  className="mt-9 space-y-5"
                >
                  {/* First Row */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* Name */}
                    <div className="group relative">
                      <User
                        size={22}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-[#f58200]"
                      />
                      <input
                        type="text"
                        name="name"
                        placeholder={contactContentData.fields.firstName.placeholder}
                        required
                        className="h-[55px] w-full rounded-xl border border-gray-300 bg-white pl-14 pr-4 text-[15px] text-[#101d3c] outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-orange-300 focus:border-[#f58200] focus:ring-4 focus:ring-orange-100/60"
                      />
                    </div>

                    {/* Email */}
                    <div className="group relative">
                      <Mail
                        size={22}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-[#f58200]"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder={contactContentData.fields.email.placeholder}
                        required
                        className="h-[55px] w-full rounded-xl border border-gray-300 bg-white pl-14 pr-4 text-[15px] text-[#101d3c] outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-orange-300 focus:border-[#f58200] focus:ring-4 focus:ring-orange-100/60"
                      />
                    </div>

                    {/* Phone */}
                    <div className="group relative">
                      <Phone
                        size={22}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-[#f58200]"
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder={contactContentData.fields.phone.placeholder}
                        required
                        className="h-[55px] w-full rounded-xl border border-gray-300 bg-white pl-14 pr-4 text-[15px] text-[#101d3c] outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-orange-300 focus:border-[#f58200] focus:ring-4 focus:ring-orange-100/60"
                      />
                    </div>

                    {/* Service */}
                    <div className="group relative">
                      <Building2
                        size={22}
                        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-gray-600 transition-colors group-focus-within:text-[#f58200]"
                      />
                      <select
                        name="service"
                        required
                        defaultValue=""
                        className="h-[55px] w-full cursor-pointer appearance-none rounded-xl border border-gray-300 bg-white pl-14 pr-10 text-[15px] text-gray-600 outline-none transition-all duration-300 hover:border-orange-300 focus:border-[#f58200] focus:ring-4 focus:ring-orange-100/60"
                      >
                        <option value="" disabled>
                          {contactContentData.fields.subject.placeholder}
                        </option>
                        {contactContentData.subjects.map((subject) => (
                          <option key={subject} value={subject}>
                            {subject}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-600">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M3 6L8 11L13 6"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group relative">
                    <MessageCircle
                      size={22}
                      className="absolute left-5 top-6 text-gray-600 transition-colors group-focus-within:text-[#f58200]"
                    />
                    <textarea
                      name="message"
                      rows={5}
                      placeholder={contactContentData.fields.message.placeholder}
                      required
                      className="min-h-[155px] w-full resize-y rounded-xl border border-gray-300 bg-white py-5 pl-14 pr-5 text-[15px] text-[#101d3c] outline-none transition-all duration-300 placeholder:text-gray-600 hover:border-orange-300 focus:border-[#f58200] focus:ring-4 focus:ring-orange-100/60"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex min-h-[55px] items-center gap-5 overflow-hidden rounded-full bg-[#f58200] py-2 pl-4 pr-2 text-white shadow-md shadow-green-900/10 transition-all duration-300 hover:bg-[#f58200] hover:shadow-lg hover:shadow-green-900/20"
                  >
                    <span className="relative z-10 text-[13px] font-bold tracking-wide sm:text-base">
                      {contactContentData.submitLabel}
                    </span>

                    <span className="relative z-10 flex h-9 w-9 lg:h-11 lg:w-11 items-center justify-center rounded-full bg-white text-[#f58200] transition-transform duration-500 group-hover:rotate-[-45deg]">
                      <Send className="text-[12px] lg:text-[20px]" strokeWidth={2.5} />
                    </span>

                    <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#005b3d] transition-all duration-500 group-hover:w-full" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
