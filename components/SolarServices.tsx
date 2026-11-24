
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  HardHat,
  House,
  Factory,
  BatteryCharging,
  Wrench,
  Sun,
  type LucideIcon,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  financialServicesContentData,
  solarServicesSectionData,
} from "@/data";

import "swiper/css";
import "swiper/css/pagination";

const serviceIcons: Partial<Record<string, LucideIcon>> = {
  HardHat,
  House,
  Factory,
  BatteryCharging,
  Wrench,
  Sun,
};

const SolarServices = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
      style={{
        background:
          "radial-gradient(ellipse at 50% 45%, #fffaf4 0%, #ffffff 65%)",
      }}
    >
      {/* Background Decorative Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,35,0.13), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center sm:mb-12"
        >

          {/* Section Label */}
          <div className="mb-4 flex items-center justify-center gap-4">

            <span className="h-[2px] w-10 bg-[#ff7900] sm:w-[60px]" />

            <span className="text-[12px] font-extrabold tracking-[3px] text-[#172746] sm:text-[14px] sm:tracking-[4px]">
              {solarServicesSectionData.eyebrow}
            </span>

            <span className="h-[2px] w-10 bg-[#ff7900] sm:w-[60px]" />

          </div>

          {/* Main Heading */}
          <h2 className="text-[30px] font-extrabold leading-tight tracking-[-1.2px] text-[#0b1d3a] sm:text-[40px] md:text-[46px] lg:text-[48px]">
            {solarServicesSectionData.title}{" "}
            <span className="bg-gradient-to-r from-[#ff7900] to-[#f05c00] bg-clip-text text-transparent">
              {solarServicesSectionData.highlight}
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[900px] text-[14px] leading-relaxed text-[#596273] sm:text-[16px] md:text-[17px]">
            {solarServicesSectionData.text}
          </p>

        </motion.div>

        {/* ================= SERVICES SLIDER ================= */}

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="solar-services-slider relative"
        >

          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            speed={900}
            autoplay={
              reduceMotion
                ? false
                : {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
            pagination={{
              clickable: true,
              el: ".solar-services-pagination",
            }}
            breakpoints={{
              540: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 22,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="overflow-visible !pb-5"
          >

            {financialServicesContentData.items.map((service, index) => {
              const Icon = serviceIcons[service.icon];

              if (!Icon) {
                throw new Error(`Unknown solar service icon: ${service.icon}`);
              }

              return (
                <SwiperSlide key={service.title} className="!h-auto">

                  {/* SERVICE CARD */}
                  <motion.div
                    whileHover={
                      reduceMotion
                        ? {}
                        : {
                            y: -8,
                          }
                    }
                    transition={{ duration: 0.35 }}
                    className="group relative h-[390px] w-full overflow-hidden rounded-[27px] border border-[#e8edf2] bg-white shadow-[0_12px_30px_rgba(18,39,68,0.10)] sm:h-[410px] lg:h-[395px] xl:h-[410px]"
                  >

                    {/* CARD IMAGE */}
                    <div className="absolute inset-0 overflow-hidden">

                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        priority={index < 3}
                        sizes="(max-width: 540px) 90vw, (max-width: 1024px) 45vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />

                      {/* Image Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, rgba(7,25,48,0.02) 35%, rgba(7,25,48,0.28) 100%)",
                        }}
                      />

                    </div>

                    {/* ORANGE ICON BOX */}
                    <div className="absolute right-5 top-5 z-20 flex h-[68px] w-[68px] items-center justify-center rounded-[18px] border border-white/60 bg-gradient-to-br from-[#ffa51f] to-[#eb7600] text-white shadow-[0_8px_20px_rgba(229,119,0,0.30)] transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 sm:right-5 sm:top-5 sm:h-[76px] sm:w-[76px]">

                      <Icon
                        size={37}
                        strokeWidth={1.7}
                      />

                    </div>

                    {/* WHITE CONTENT PANEL */}
                    <div
                      className="absolute bottom-4 left-3 right-3 z-20 rounded-[22px] border border-[#f1f1f1] bg-white px-5 pb-5 pt-5 shadow-[0_8px_25px_rgba(0,0,0,0.10)] transition-all duration-500 group-hover:-translate-y-1 sm:bottom-4 sm:left-4 sm:right-4 sm:px-6"
                    >

                      {/* ORANGE TOP LINE */}
                      <div className="absolute -top-[5px] left-7 h-[7px] w-[95px] rounded-full bg-gradient-to-r from-[#ff7900] to-[#ffa21b]" />

                      {/* Service Title */}
                      <h3 className="mb-2 text-[18px] font-extrabold leading-tight tracking-[-0.5px] text-[#0b1c3a] sm:text-[19px] xl:text-[20px]">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="min-h-[45px] text-[13px] font-medium leading-[1.55] text-[#50545d] sm:text-[14px]">
                        {service.description}
                      </p>

                    </div>

                  </motion.div>

                </SwiperSlide>
              );
            })}

          </Swiper>

          {/* ================= CUSTOM PAGINATION ================= */}

          <div className="solar-services-pagination mt-5 flex items-center justify-center gap-2.5" />

        </motion.div>

      </div>

      {/* ================= INLINE SLIDER STYLES ================= */}

      <style jsx global>{`
        .solar-services-pagination .swiper-pagination-bullet {
          width: 13px;
          height: 13px;
          border-radius: 50px;
          background: #d6d8dc;
          opacity: 1;
          margin: 0 !important;
          transition: all 0.35s ease;
          cursor: pointer;
        }

        .solar-services-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #ff8500;
        }

        .solar-services-slider .swiper-wrapper {
          align-items: stretch;
        }

        .solar-services-slider .swiper-slide {
          height: auto;
        }
      `}</style>

    </section>
  );
};

export default SolarServices;
