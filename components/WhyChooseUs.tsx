
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whyChooseUsContentData } from "@/data";

const WhyChooseUs = () => {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative isolate w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
      style={{
        background:
          "linear-gradient(110deg, #ffffff 0%, #fffefd 55%, #ffffff 100%)",
      }}
    >

      {/* ================= BACKGROUND DECORATIONS ================= */}

      {/* Dotted Pattern */}
      <div
        className="pointer-events-none absolute left-[49%] top-[12%] z-0 hidden h-[125px] w-[80px] opacity-60 md:block lg:left-[49.5%]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c5c8ce 3px, transparent 3.5px)",
          backgroundSize: "21px 21px",
        }}
      />

      {/* Bottom Left Solar Panel Image */}
      <motion.div
        initial={{
          opacity: 0,
          x: reduceMotion ? 0 : -70,
        }}
        whileInView={{
          opacity: 1.20,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.3,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute -bottom-12 -left-12 z-0 h-[140px] w-[300px] sm:-bottom-16 sm:h-[190px] sm:w-[400px] lg:h-[230px] lg:w-[480px]"
      >
        <Image
          src={whyChooseUsContentData.decorationImage.src}
          alt={whyChooseUsContentData.decorationImage.alt}
          fill
          sizes="480px"
          className="object-contain object-left-bottom -top-[3rem]"
        />
      </motion.div>

      {/* Soft Orange Background Glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/3 z-0 h-[350px] w-[350px] rounded-full opacity-30 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, #fff0d9 0%, transparent 70%)",
        }}
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-14 px-5 sm:px-8 lg:px-12">

        {/* ================= LEFT CONTENT ================= */}

        <div className="relative z-10 order-2 flex flex-col lg:order-1">

          {/* SECTION LABEL */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="h-[4px] w-10 rounded-full bg-[#f47b00] sm:w-12" />

            <span className="text-[13px] font-extrabold tracking-[3px] text-[#ed7900] sm:text-[15px] sm:tracking-[4px]">
              {whyChooseUsContentData.badge}
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[29px] font-extrabold leading-[1.13] tracking-[-1.3px] text-[#102344] sm:text-[44px] md:text-[49px] lg:text-[43px] xl:text-[52px]"
          >
            {whyChooseUsContentData.heading}
            <br />
            {whyChooseUsContentData.headingMiddle}{" "}
            <span className="bg-gradient-to-r from-[#ff8a00] to-[#ed6900] bg-clip-text text-transparent">
              {whyChooseUsContentData.highlight}
            </span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-[590px] text-[15px] font-medium leading-[1.55] text-[#626b7c] sm:text-[17px] md:text-[18px] lg:text-[16px] xl:text-[18px]"
          >
            {whyChooseUsContentData.description}
          </motion.p>

          

          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-7 lg:mt-10 lg:gap-x-6 xl:gap-x-7">

            {whyChooseUsContentData.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: reduceMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={
                  reduceMotion ? {} : { y: -5 }
                }
                className="group flex items-start gap-4"
              >

                {/* ICON IMAGE BOX */}
                <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-[21px] border border-[#ffedcf] bg-[#fff5e4] shadow-[0_7px_18px_rgba(20,35,55,0.07)] transition-all duration-500 group-hover:border-[#ffc36f] group-hover:bg-[#ffefd7] group-hover:shadow-[0_10px_24px_rgba(240,133,0,0.13)] sm:h-[80px] sm:w-[80px] lg:h-[76px] lg:w-[76px] xl:h-[82px] xl:w-[82px]">

                  <motion.div
                    animate={
                      reduceMotion
                        ? {}
                        : { y: [0, -3, 0] }
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="relative h-[52px] w-[52px] sm:h-[57px] sm:w-[57px]"
                  >
                    <Image
                      src={feature.icon}
                      alt={feature.alt}
                      fill
                      sizes="60px"
                      className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>

                </div>

                {/* FEATURE TEXT */}
                <div className="flex min-w-0 flex-col pt-1">

                  <h3 className="text-[17px] font-extrabold leading-tight tracking-[-0.5px] text-[#102344] transition-colors duration-300 group-hover:text-[#e77a00] sm:text-[18px] lg:text-[16px] xl:text-[19px]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 max-w-[230px] text-[14px] font-medium leading-[1.5] text-[#697182] sm:text-[15px] lg:text-[14px] xl:text-[16px]">
                    {feature.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 65,
            scale: reduceMotion ? 1 : 0.96,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="relative order-1 mx-auto w-full max-w-[590px] lg:order-2 lg:max-w-none"
        >

          {/* MAIN SOLAR IMAGE CARD */}
          <motion.div
            whileHover={
              reduceMotion ? {} : { y: -5 }
            }
            transition={{ duration: 0.4 }}
            className="group relative h-[340px] w-full overflow-hidden rounded-[28px] border border-[#edf0f4] bg-[#e8f3fa] shadow-[0_15px_35px_rgba(16,35,68,0.12)] sm:h-[440px] md:h-[490px] lg:h-[460px] xl:h-[560px]"
          >

            <Image
              src={whyChooseUsContentData.image.src}
              alt={whyChooseUsContentData.image.alt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Subtle Image Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071d39]/15 via-transparent to-transparent" />

            {/* Image Corner Glow */}
            <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-white/20" />

          </motion.div>

          {/* FLOATING DOT DECORATION */}
          <motion.div
            animate={
              reduceMotion
                ? {}
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-7 top-[12%] z-[-1] hidden h-[90px] w-[65px] rounded-full bg-[#fff0d8]/70 blur-xl lg:block"
          />

        </motion.div>

      </div>

    </section>
  );
};

export default WhyChooseUs;
