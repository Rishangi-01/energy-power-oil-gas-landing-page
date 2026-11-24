
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { aboutContentData } from "@/data";

const AboutSolar = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 1,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.9,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >
      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Dotted Background */}
      <div
        className="pointer-events-none absolute left-[38%] top-[7%] z-0 hidden h-[210px] w-[150px] opacity-40 md:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a5a5a5 2px, transparent 2.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Bottom Left Solar Panel Image Decoration */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -bottom-10 -right-16 z-0 h-[180px] w-[280px] sm:h-[230px] sm:w-[350px]"
      >
        <Image
          src={aboutContentData.images.decoration.src}
          alt={aboutContentData.images.decoration.alt}
          fill
          sizes="350px"
          className="object-contain object-left-bottom -top-[1.5rem]"
        />
      </motion.div>

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16 px-5 sm:px-8 lg:px-12">

        {/* ================= LEFT IMAGE AREA ================= */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto w-full max-w-[590px] pb-12 pr-5 sm:pb-14 sm:pr-8 lg:mx-0 lg:pb-8 lg:pr-8"
        >

          {/* MAIN SOLAR IMAGE */}

          <motion.div
            whileHover={
              reduceMotion ? {} : { y: -5 }
            }
            transition={{ duration: 0.4 }}
            className="relative h-[350px] w-full overflow-hidden rounded-[25px] border border-[#e8edf0] shadow-[0_15px_35px_rgba(15,35,55,0.13)] sm:h-[430px] md:h-[470px] lg:h-[490px]"
          >
            <Image
              src={aboutContentData.images.main.src}
              alt={aboutContentData.images.main.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#071c35]/10 via-transparent to-transparent" />
          </motion.div>

          {/* SMALL OVERLAPPING HOUSE IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: "easeOut",
            }}
            whileHover={
              reduceMotion ? {} : { y: -8, rotate: -1 }
            }
            className="absolute -bottom-2 right-0 z-20 h-[180px] w-[65%] overflow-hidden rounded-[25px] border-[5px] border-white bg-white shadow-[0_15px_35px_rgba(15,35,55,0.18)] sm:h-[230px] sm:w-[62%] md:h-[260px] lg:-bottom-5 lg:right-0 lg:h-[275px] lg:w-[62%]"
          >
            <Image
              src={aboutContentData.images.experience.src}
              alt={aboutContentData.images.experience.alt}
              fill
              sizes="(max-width: 1024px) 65vw, 300px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

        </motion.div>

        {/* ================= RIGHT CONTENT AREA ================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 flex w-full flex-col"
        >

          {/* SECTION LABEL */}

          <motion.div
            variants={fadeUp}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-[2px] w-10 bg-[#ed8000]" />

            <span className="text-[13px] font-bold tracking-[4px] text-[#df7900] sm:text-[15px]">
              {aboutContentData.badge}
            </span>
          </motion.div>

          {/* HEADING */}

          <motion.h2
            variants={fadeUp}
            className="mb-6 text-[34px] font-extrabold leading-[1.13] tracking-[-1.2px] text-[#17212d] sm:text-[43px] md:text-[48px] lg:text-[43px] xl:text-[50px]"
          >
            {aboutContentData.heading}
            <br />

            <span className="bg-gradient-to-r from-[#f08a00] to-[#cf7300] bg-clip-text text-transparent">
              {aboutContentData.highlight}
            </span>{" "}
            {aboutContentData.highlightSuffix}
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            variants={fadeUp}
            className="space-y-5 text-[15px] leading-[1.7] text-[#303947] sm:text-[17px] lg:text-[16px] xl:text-[18px]"
          >
            <p>
              {aboutContentData.description}
            </p>

            <p>
              {aboutContentData.additionalDescription}
            </p>
          </motion.div>

          {/* ================= SERVICES LIST ================= */}

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5"
          >
            {aboutContentData.services.map((service, index) => (
              <motion.div
                key={service}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={
                  reduceMotion ? {} : { x: 5 }
                }
                className="group flex items-center gap-3"
              >
                {/* CHECK ICON */}

                <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f49a14] to-[#d87500] text-white shadow-[0_3px_8px_rgba(224,126,0,0.22)] transition-transform duration-300 group-hover:scale-110 sm:h-[35px] sm:w-[35px]">
                  <Check
                    size={19}
                    strokeWidth={3}
                  />
                </span>

                <span className="text-[14px] font-bold text-[#171d25] transition-colors duration-300 group-hover:text-[#d97900] sm:text-[16px] lg:text-[15px] xl:text-[17px]">
                  {service}
                </span>

              </motion.div>
            ))}
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutSolar;
