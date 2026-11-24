
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import { footerContentData } from "@/data";

const quickLinks = [
  ...footerContentData.quickLinks,
  ...footerContentData.teamLinks,
].filter((link) => link.name && link.href);

const contactIcons: Record<string, LucideIcon> = {
  phone: Phone,
  email: Mail,
  location: MapPin,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-[#080b0e] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-orange-500/[0.06] blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-500/[0.04] blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* MAIN FOOTER */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-10 py-14 sm:py-16 lg:grid-cols-[0.95fr_1.2fr_1fr] lg:gap-10 xl:gap-14"
        >

          {/* COLUMN 1 - LOGO & DESCRIPTION */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col"
          >
            {/* Logo */}
            <Link
              href={footerContentData.brandLinkHref}
              className="mb-5 inline-flex w-fit items-center"
            >
              <Image
                src={footerContentData.excellenceImage.src}
                alt={footerContentData.excellenceImage.alt}
                width={footerContentData.excellenceImage.width}
                height={footerContentData.excellenceImage.height}
                priority
                className="h-auto w-[280px] max-w-full object-contain object-left sm:w-[320px]"
              />
            </Link>

            {/* Description */}
            <p className="max-w-[350px] text-[15px] leading-[1.8] text-gray-300 sm:text-base">
              {footerContentData.description}
            </p>
          </motion.div>

          {/* COLUMN 2 - QUICK LINKS */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {footerContentData.quickLinksHeading}
            </h3>

            {/* Orange Underline */}
            <div className="mt-3 h-[6px] w-[68px] rounded-full bg-[#f58200]" />

            {/* Links - Two Columns */}
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-2 text-[14px] text-gray-300 transition-all duration-300 hover:translate-x-1.5 hover:text-[#f58200] sm:text-base"
                >
                  <ChevronRight
                    size={19}
                    strokeWidth={3}
                    className="shrink-0 text-[#f58200] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* COLUMN 3 - CONTACT INFO */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/20 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
          >
            <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
              {footerContentData.contactHeading}
            </h3>

            {/* Orange Underline */}
            <div className="mt-3 h-[6px] w-[68px] rounded-full bg-[#f58200]" />

            {/* Contact Details */}
            <div className="mt-5 flex flex-col gap-4">
              {footerContentData.contactDetails
                .filter((item) => item.text && item.href)
                .map((item) => {
                const Icon = contactIcons[item.icon];

                if (!Icon) {
                  throw new Error(`Unknown footer contact icon: ${item.icon}`);
                }

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    target={item.href.startsWith("https://") ? "_blank" : undefined}
                    rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 5 }}
                    className="group flex items-center gap-4"
                  >
                    {/* Icon Box */}
                    <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-lg border-2 border-[#f58200] bg-[#f58200]/10 text-[#f58200] transition-all duration-300 group-hover:bg-[#f58200] group-hover:text-[#080b0e] group-hover:shadow-[0_0_18px_rgba(245,130,0,0.35)]">
                      <Icon size={21} strokeWidth={2.3} />
                    </div>

                    {/* Contact Text */}
                    <span className="break-words text-[14px] leading-6 text-gray-300 transition-colors duration-300 group-hover:text-[#f58200] sm:text-base">
                      {item.text}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM COPYRIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center justify-between gap-4 border-t border-white/40 py-5 sm:flex-row sm:gap-3"
        >
          <p className="text-center text-sm text-gray-200 sm:text-left sm:text-base">
            {footerContentData.copyright}
          </p>

          {/* Back To Top */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-[#f58200]"
          >
            {footerContentData.backToTopLabel}

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#f58200] group-hover:text-[#f58200]">
              {footerContentData.backToTopIcon}
            </span>
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
