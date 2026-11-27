
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { finSecureBrandData, navbarContentData } from "@/data";

const navLinks = navbarContentData.navLinks.filter(
  (link) => link.name && link.href
);

export default function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const sectionIds = [
      ...new Set([
        ...navLinks.map((link) => link.href.replace(/^#/, "")),
        navbarContentData.contactHref.replace(/^#/, ""),
      ]),
    ];

    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null)
        .sort((a, b) => {
          if (a === b) return 0;
          return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : 1;
        });

    let frameId: number | null = null;
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (frameId !== null) return;
      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        const sections = getSections();

        if (sections.length > 0) {
          const headerHeight =
            headerRef.current?.getBoundingClientRect().height ?? 0;
          let currentSection = sections[0];

          for (const section of sections) {
            if (section.getBoundingClientRect().top > headerHeight + 1) break;
            currentSection = section;
          }

          setActiveSection(currentSection.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    const sectionObserver = new MutationObserver(handleScroll);
    sectionObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      sectionObserver.disconnect();
      if (frameId !== null) window.cancelAnimationFrame(frameId);
    };
  }, []);

  // Close menu on navigation
  const handleNavigation = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const homeSectionId = navLinks[0].href.replace(/^#/, "");
  const contactSectionId = navbarContentData.contactHref.replace(/^#/, "");

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-500 border-b border-[#ddd] lg:py-2 ${
        scrolled
          ? "shadow-[0_5px_25px_rgba(0,0,0,0.07)]"
          : "shadow-none"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-[82px] lg:h-[80px] flex items-center justify-between">

       
          <a
            href={navbarContentData.homeHref}
            aria-label={navbarContentData.homeAriaLabel}
            className="shrink-0"
          >
            <Image
              src={finSecureBrandData.logo}
              alt={finSecureBrandData.logoAlt}
              width={210}
              height={75}
              priority
              className="w-[155px] sm:w-[180px] lg:w-[195px] h-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const sectionId = link.href.replace(/^#/, "");

              return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link relative py-3 text-[17px] xl:text-[19px] font-semibold transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "text-[#ff7900]"
                    : "text-[#10213d] hover:text-[#ff7900]"
                }`}
              >
                {link.name}

                {/* Animated underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] bg-[#ff7900] rounded-full transition-all duration-500 ease-out ${
                    activeSection === sectionId
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </a>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center border-l border-gray-300 pl-5 xl:pl-6">
            <button
              onClick={() => handleNavigation(contactSectionId)}
              className="group relative overflow-hidden bg-[#ff7900] text-white px-8 xl:px-9 py-3 rounded-full text-[17px] xl:text-[19px] font-semibold transition-all duration-300 hover:bg-[#e96e00] hover:shadow-[0_8px_25px_rgba(255,121,0,0.3)] hover:-translate-y-0.5"
            >
              <span className="relative z-10">
                {navbarContentData.contactLabel}
              </span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? navbarContentData.closeMenuLabel
                : navbarContentData.openMenuLabel
            }
            aria-expanded={menuOpen}
            className="lg:hidden w-11 h-11 flex flex-col items-center justify-center gap-[6px] rounded-xl hover:bg-orange-50 transition-colors"
          >
            <span
              className={`w-7 h-[2.5px] bg-[#10213d] rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-[8.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`w-7 h-[2.5px] bg-[#10213d] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`w-7 h-[2.5px] bg-[#10213d] rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-[8.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen
            ? "max-h-[550px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <nav className="px-6 py-5 flex flex-col">
          {navLinks.map((link, index) => {
            const sectionId = link.href.replace(/^#/, "");

            return (
            <button
              key={link.href}
              onClick={() => handleNavigation(sectionId)}
              style={{ transitionDelay: menuOpen ? `${index * 50}ms` : "0ms" }}
              className={`flex items-center justify-between py-3.5 border-b border-gray-100 text-left font-semibold text-[16px] transition-all duration-300 ${
                activeSection === sectionId
                  ? "text-[#ff7900] pl-2"
                  : "text-[#10213d] hover:text-[#ff7900]"
              } ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
            >
              {link.name}

              <span
                className={`h-[3px] rounded-full bg-[#ff7900] transition-all duration-300 ${
                  activeSection === sectionId ? "w-8" : "w-0"
                }`}
              />
            </button>
            );
          })}

          {/* Mobile Contact Button */}
          <button
            onClick={() => handleNavigation(contactSectionId)}
            className="mt-5 w-full py-3.5 rounded-full bg-[#ff7900] text-white font-semibold text-[16px] shadow-lg shadow-orange-100 hover:bg-[#e96e00] transition-all duration-300"
          >
            {navbarContentData.contactLabel}
          </button>
        </nav>
      </div>
    </header>
  );
}
