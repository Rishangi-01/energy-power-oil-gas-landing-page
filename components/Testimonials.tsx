
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { testimonialsContentData } from "@/data";

const testimonials = testimonialsContentData.items.filter(
  (item) => item.name && item.image && item.review
);

const Testimonials = () => {
  const [swiperInstance, setSwiperInstance] =
    useState<SwiperType | null>(null);

  const reduceMotion = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="relative isolate w-full overflow-hidden bg-white py-8 sm:py-12 lg:py-16"
    >

      {/* ================= BACKGROUND DECORATIONS ================= */}

    

      {/* Top Right Solar Panel Image */}
      <motion.div
        initial={{
          opacity: 0,
          x: reduceMotion ? 0 : 60,
        }}
        whileInView={{
          opacity: 0.38,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-16 -top-12 z-0 h-[190px] w-[290px] sm:h-[250px] sm:w-[380px] lg:-right-16 lg:-top-16 lg:h-[320px] lg:w-[460px]"
      >
        <Image
          src={testimonialsContentData.decorativeImages.top.src}
          alt={testimonialsContentData.decorativeImages.top.alt}
          fill
          sizes="460px"
          className="scale-x-[-1] object-contain object-right-top rotate-180"
        />
      </motion.div>

      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 -z-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-orange-100/30 blur-[110px]" />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-9 text-center sm:mb-12"
        >

          {/* Label */}
          <div className="mb-4 flex items-center justify-center gap-3 sm:gap-5">

            <span className="h-[2px] w-10 bg-[#f58200] sm:w-16" />

            <span className="text-[13px] font-extrabold tracking-[3px] text-[#102344] sm:text-[16px] sm:tracking-[4px]">
                {testimonialsContentData.eyebrow}
            </span>

            <span className="h-[2px] w-10 bg-[#f58200] sm:w-16" />

          </div>

          {/* Heading */}
          <h2 className="text-[28px] font-extrabold leading-tight tracking-[-1px] text-[#102344] sm:text-[44px] md:text-[50px] lg:text-[56px]">

            {testimonialsContentData.heading}{" "}
            <span className="bg-gradient-to-r from-[#ff9a00] to-[#ed7200] bg-clip-text text-transparent">
              {testimonialsContentData.highlight}
            </span>{" "}
            {testimonialsContentData.headingSuffix}

          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[750px] text-[15px] font-medium leading-relaxed text-[#687080] sm:text-[18px] md:text-[20px]">
            {testimonialsContentData.description}
          </p>

        </motion.div>

        {/* ================= SLIDER OUTER BOX ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9 }}
          className="relative rounded-[25px] border border-[#e8e8e8] bg-white/70 px-4 py-7 shadow-[0_5px_25px_rgba(16,35,68,0.025)] sm:px-9 sm:py-9 lg:px-9 lg:py-10"
        >

          {/* ================= SWIPER ================= */}

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={setSwiperInstance}
            loop={true}
            speed={850}
            slidesPerView={1}
            spaceBetween={20}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 24,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="testimonial-swiper overflow-visible"
          >

            {testimonials.map((item, index) => (

              <SwiperSlide key={`${item.name}-${index}`} className="!h-auto">

                {/* ================= TESTIMONIAL CARD ================= */}

                <motion.div
                  whileHover={
                    reduceMotion ? {} : { y: -5 }
                  }
                  transition={{ duration: 0.35 }}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[25px] border border-[#fff5e8] bg-gradient-to-br from-[#fffdf9] via-[#fffcf7] to-[#fff8ec] px-6 py-7 shadow-[0_5px_18px_rgba(20,35,55,0.035)] transition-all duration-500 hover:border-[#ffdfb0] hover:shadow-[0_15px_35px_rgba(245,130,0,0.09)] sm:min-h-[325px] sm:px-8 sm:py-8 lg:min-h-[300px] lg:px-8"
                >

                  {/* ================= CLIENT DETAILS ================= */}

                  <div className="relative z-10 flex items-center gap-4 sm:gap-5">

                    {/* Profile Image */}
                    <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-[2.5px] border-[#f69200] bg-white p-[2px] sm:h-[98px] sm:w-[98px]">

                      <div className="relative h-full w-full overflow-hidden rounded-full">

                        <Image
                          src={item.image}
                            alt={item.name}
                          fill
                          sizes="100px"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                      </div>

                    </div>

                    {/* Name and Role */}
                    <div className="min-w-0 flex-1">

                      <h3 className="text-[19px] font-extrabold leading-tight tracking-[-0.5px] text-[#102344] sm:text-[24px]">
                        {item.name}
                      </h3>

                      <p className="mt-1 text-[14px] font-medium text-[#697080] sm:text-[18px]">
                        {item.role}
                      </p>

                    </div>

                    {/* Quote Mark */}
                    <div className="shrink-0 self-start pt-2 text-[62px] font-black leading-[0.8] text-[#f49a00] sm:text-[76px]">
                      {testimonialsContentData.reviewQuotePrefix}
                    </div>

                  </div>

                  {/* ================= REVIEW TEXT ================= */}

                  <p className="relative z-10 mt-5 text-[15px] font-medium leading-[1.55] text-[#3e4653] sm:mt-4 sm:text-[18px] sm:leading-[1.58]">
                    {item.review}
                  </p>

                  {/* ================= STAR RATING ================= */}

                  <div className="relative z-10 mt-auto flex items-center gap-[3px] pt-3">

                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar
                        key={i}
                        className="text-[22px] text-[#f39800] sm:text-[25px]"
                      />
                    ))}

                  </div>

                  {/* ================= BOTTOM SOLAR PANEL IMAGE ================= */}

                  <div className="pointer-events-none absolute -bottom-5 -right-5 z-0 h-[100px] w-[190px] opacity-[1.16] transition-all duration-700 group-hover:scale-110 group-hover:opacity-[0.25] sm:h-[115px] sm:w-[220px]">

                    <Image
                      src={testimonialsContentData.decorativeImages.card.src}
                      alt={testimonialsContentData.decorativeImages.card.alt}
                      fill
                      sizes="220px"
                      className="object-contain object-right-bottom lg:!-top-[15px] lg:!-left-[20px]"
                    />

                  </div>

                </motion.div>

              </SwiperSlide>

            ))}

          </Swiper>

          {/* ================= LEFT ARROW ================= */}

          <button
            type="button"
            aria-label={testimonialsContentData.previousLabel}
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f59a18] bg-white text-[#102344] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-110 hover:bg-[#f59100] hover:text-white sm:-left-5 sm:h-12 sm:w-12 lg:-left-6"
          >
            <FaArrowLeft className="text-[14px] sm:text-base" />
          </button>

          {/* ================= RIGHT ARROW ================= */}

          <button
            type="button"
            aria-label={testimonialsContentData.nextLabel}
            onClick={() => swiperInstance?.slideNext()}
            className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#f59a18] bg-white text-[#102344] shadow-[0_5px_15px_rgba(0,0,0,0.08)] transition-all duration-300 hover:scale-110 hover:bg-[#f59100] hover:text-white sm:-right-5 sm:h-12 sm:w-12 lg:-right-6"
          >
            <FaArrowRight className="text-[14px] sm:text-base" />
          </button>

        </motion.div>

        {/* ================= PAGINATION DOTS ================= */}

        {/* <div className="testimonial-pagination mt-7 flex items-center justify-center gap-3 sm:mt-8" /> */}

      </div>

    </section>
  );
};

export default Testimonials;
