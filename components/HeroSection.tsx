"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PiUsersThreeFill } from "react-icons/pi";
import { Fragment } from "react";
import { aboutContentData, heroContentData } from "@/data";


const HeroSection = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const transition = {
    duration: reduceMotion ? 0 : 0.8,
    ease: "easeOut" as const,
  };

  return (
    <section id="home" className="relative isolate w-full overflow-hidden bg-[#ffffff]">
      <div className="relative isolate w-full overflow-hidden bg-[#ffffff] bg-cover bg-center bg-no-repeat lg:bg-size-[100%]"
        style={{
          backgroundImage: `url('${heroContentData.backgroundImage}')`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-[1600px] pb-12 pt-[118px] sm:pt-[130px] lg:pt-[136px] px-5 sm:px-8 lg:px-12">
          {/* ================= HEADING AREA ================= */}

          <div className="relative z-10 mx-auto max-w-[1050px] text-center">
            {/* TOP TAGLINE */}
            <motion.div
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={transition}
              className="mb-4 flex items-center justify-center gap-3 sm:gap-4"
            >
              <span className="h-[2px] w-10 bg-[#ff7900] sm:w-16" />

              <div className="flex flex-wrap items-center justify-center gap-2.5 text-[10px] font-extrabold tracking-[1.5px] text-[#101f4b] sm:gap-4 sm:text-[13px] sm:tracking-[2px]">
                {heroContentData.badge.map((badge, index) => (
                  <Fragment key={badge}>
                    {index > 0 && (
                      <span className="h-2 w-2 rounded-full bg-[#ff7900]" />
                    )}
                    <span>{badge}</span>
                  </Fragment>
                ))}
              </div>

              <span className="h-[2px] w-10 bg-[#ff7900] sm:w-16" />
            </motion.div>

            {/* MAIN HEADING */}
            <motion.h1
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: 0.15,
              }}
              className="text-[25px] font-extrabold leading-[1.12] tracking-[-1.5px] text-[#0c204e] sm:text-[48px] sm:tracking-[-2px] md:text-[58px] lg:text-[60px] xl:text-[58px]"
            >
              {heroContentData.heading}{" "}
              <span className="bg-gradient-to-r from-[#ff7900] to-[#ff5700] bg-clip-text text-transparent">
                {heroContentData.accent}
              </span>
              <br />
              <span className="inline-flex items-center justify-center gap-2 sm:gap-4">
                {heroContentData.highlight}
                {/* LEAF IMAGE */}
                <motion.span
                  animate={
                    reduceMotion
                      ? {}
                      : {
                          rotate: [0, 8, 0, -8, 0],
                          y: [0, -5, 0],
                        }
                  }
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative inline-block h-[29px] w-[40px] sm:h-[42px] sm:w-[56px] md:h-[50px] md:w-[65px]"
                >
                  <Image
                    src={heroContentData.images.leaf.src}
                    alt={heroContentData.images.leaf.alt}
                    fill
                    sizes="65px"
                    className="object-contain"
                  />
                </motion.span>
              </span>
            </motion.h1>

            {/* ORANGE UNDERLINE */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 185 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="relative mx-auto mt-3 h-[5px] max-w-[185px] rounded-full bg-[#ff7900]"
            />

            {/* DESCRIPTION */}
            <motion.p
              variants={reveal}
              initial="hidden"
              animate="visible"
              transition={{
                ...transition,
                delay: 0.3,
              }}
              className="mx-auto mt-5 max-w-[650px] text-[13px] font-medium leading-[1.7] text-[#41444c] sm:text-[15px] md:text-[16px]"
            >
              {heroContentData.descriptionLines.join(" ")}
            </motion.p>
          </div>

          {/* ================= IMAGE SHOWCASE ================= */}

          <div className="relative mx-auto mt-9 min-h-[300px] max-w-[1050px] sm:mt-12 sm:min-h-[380px] md:mt-14 md:min-h-[420px] lg:min-h-[420px]">
            {/* IMAGE 1 - LEFT ENGINEER */}
            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : -60,
                y: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.45,
                ease: "easeOut",
              }}
              whileHover={reduceMotion ? {} : { y: -8 }}
              className="absolute left-[2%] top-[5%] z-10 h-[255px] w-[38%] overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_10px_30px_rgba(15,35,70,0.17)] sm:h-[340px] md:h-[370px] lg:left-[2%] lg:h-[370px]"
            >
              <Image
                src={heroContentData.images.shield.src}
                alt={heroContentData.images.shield.alt}
                fill
                priority
                sizes="(max-width: 768px) 38vw, 400px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* IMAGE 2 - SUNSET SOLAR PANELS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.75,
              }}
              whileHover={reduceMotion ? {} : { y: -8 }}
              className="absolute bottom-[-2%] left-[26%] z-20 h-[150px] w-[24%] overflow-hidden rounded-[18px] border-[3px] border-white shadow-[0_10px_30px_rgba(15,35,70,0.17)] sm:h-[190px] md:h-[210px]"
            >
              <Image
                src={heroContentData.images.coins.src}
                alt={heroContentData.images.coins.alt}
                fill
                sizes="(max-width: 768px) 24vw, 250px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* IMAGE 3 - SOLAR WORKER */}
            <motion.div
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.9,
              }}
              whileHover={reduceMotion ? {} : { y: -8 }}
              className="absolute right-[25%] top-[18%] z-20 h-[235px] w-[34%] overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_10px_30px_rgba(15,35,70,0.18)] sm:h-[285px] md:h-[320px] lg:right-[25%] lg:h-[320px]"
            >
              <Image
                src={heroContentData.images.growth.src}
                alt={heroContentData.images.growth.alt}
                fill
                priority
                sizes="(max-width: 768px) 34vw, 360px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: reduceMotion ? 0 : 60,
                y: 30,
              }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.6,
              }}
              whileHover={reduceMotion ? {} : { y: -8 }}
              className="absolute right-[2%] top-[8%] z-10 h-[250px] w-[27%] overflow-hidden rounded-[20px] border-[3px] border-white shadow-[0_10px_30px_rgba(15,35,70,0.17)] sm:h-[320px] md:h-[350px]"
            >
              <Image
                src={heroContentData.images.commercial.src}
                alt={heroContentData.images.commercial.alt}
                fill
                priority
                sizes="(max-width: 768px) 27vw, 300px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            {/* ================= FLOATING CLIENT CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              className="absolute left-[26%] top-[16%] z-30 flex min-h-[95px] w-[200px] items-center gap-3 rounded-[17px] border border-[#edf0f3] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(20,35,65,0.16)] sm:left-[25%] sm:top-[15%] sm:min-h-[105px] sm:w-[220px] sm:gap-4 md:w-[240px]"
            >
              {/* ORANGE PEOPLE ICON */}
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex shrink-0 items-center justify-center text-[39px] text-[#ff7900] sm:text-[44px]"
              >
                <PiUsersThreeFill />
              </motion.div>

              <div className="min-w-0">
                <h3 className="text-[22px] font-extrabold leading-none text-[#10234e] sm:text-[26px]">
                  {aboutContentData.experience.value}
                </h3>

                <div className="my-2 h-px w-full bg-[#e8e8e8]" />

                <p className="text-[12px] font-medium leading-[1.35] text-[#41444c] sm:text-[14px]">
                  {aboutContentData.experience.lines.map((line, index) => (
                    <Fragment key={line}>
                      {index > 0 && <br />}
                      {line}
                    </Fragment>
                  ))}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
