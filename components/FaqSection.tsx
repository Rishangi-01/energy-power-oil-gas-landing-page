
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Plus,
  Minus,
} from "lucide-react";
import Image from "next/image";
import { faqContentData } from "@/data";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faqs"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* Background Decorative Glow */}
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-orange-100/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-50/40 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center sm:mb-14 lg:mb-16"
        >
          {/* Label */}
          <div className="mb-5 flex items-center justify-center gap-5">
            <span className="h-[2px] w-14 bg-[#f58200]" />

            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#101d3c]">
              {faqContentData.badge}
            </span>

            <span className="h-[2px] w-14 bg-[#f58200]" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#101d3c] sm:text-4xl md:text-5xl lg:text-[50px]">
            {faqContentData.heading}{" "}
            <span className="text-[#f58200]">{faqContentData.highlight}</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            {faqContentData.description}
          </p>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[315px_1fr] lg:gap-7 xl:grid-cols-[320px_1fr] xl:gap-8">

          {/* LEFT QUESTION CARD */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -5 }}
            className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[28px] bg-[#f8f7f2] p-8 sm:p-10 lg:min-h-full lg:p-9 xl:p-11"
          >
            <Image
              src={faqContentData.image.src}
              alt={faqContentData.image.alt}
              width={faqContentData.image.width}
              height={faqContentData.image.height}
            />

            {/* Orange Divider */}
            <div className="relative mb-5 h-[5px] w-14 rounded-full bg-[#f58200]" />

            {/* Title */}
            <h3 className="relative max-w-[230px] text-3xl font-extrabold leading-[1.15] tracking-tight text-[#101d3c] sm:text-4xl lg:text-[34px]">
              {faqContentData.contactCard.heading}
            </h3>

            {/* Description */}
            <p className="relative mt-5 max-w-[260px] text-base leading-7 text-gray-600 sm:text-lg">
              {faqContentData.contactCard.description}
            </p>
          </motion.div>

          {/* RIGHT FAQ ACCORDION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.13,
                },
              },
            }}
            className="flex flex-col gap-3.5"
          >
            {faqContentData.items.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-gray-200 bg-white shadow-[0_8px_25px_rgba(15,23,42,0.07)]"
                      : "border-gray-300 bg-white hover:border-[#f58200]/60 hover:shadow-md"
                  }`}
                >
                  {/* QUESTION BUTTON */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className={`flex min-h-[62px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-300 sm:min-h-[64px] sm:px-7 ${
                      isOpen
                        ? "bg-[#202a32] text-white"
                        : "bg-white text-[#101d3c]"
                    }`}
                  >
                    <span className="text-[15px] font-bold leading-6 sm:text-lg lg:text-[18px]">
                      {faq.question}
                    </span>

                    {/* Plus / Minus */}
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center transition-colors duration-300 ${
                        isOpen ? "text-[#f58200]" : "text-[#f58200]"
                      }`}
                    >
                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isOpen ? (
                          <Minus size={23} strokeWidth={2.8} />
                        ) : (
                          <Plus size={23} strokeWidth={2.8} />
                        )}
                      </motion.span>
                    </span>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: {
                              duration: 0.4,
                              ease: "easeInOut",
                            },
                            opacity: {
                              duration: 0.3,
                              delay: 0.08,
                            },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: {
                              duration: 0.35,
                              ease: "easeInOut",
                            },
                            opacity: { duration: 0.2 },
                          },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-gray-100 bg-[#fafafa] px-5 py-5 sm:px-8 sm:py-6">
                          <p className="text-sm leading-7 text-gray-600 sm:text-base sm:leading-[1.75]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
