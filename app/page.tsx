import { Suspense } from "react";
import AboutSolar from "@/components/AboutSolar";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import SolarServices from "@/components/SolarServices";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSolar />
      <Suspense fallback={null}>
        <SolarServices />
      </Suspense>
      <WhyChooseUs />
      <Suspense fallback={null}>
        <Testimonials />
      </Suspense>
      <ContactSection />
      <FaqSection />
    </div>
  );
}
