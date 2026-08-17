import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhiteText, setIsWhiteText] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about-us" },
    { name: "Solutions", href: "#solutions" },
    { name: "Process", href: "#process" },
    { name: "Sustainability", href: "#sustainability" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const checkNavbarBackground = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;

      if (!navbar) return;

      const rect = navbar.getBoundingClientRect();
      const y = window.scrollY + rect.top + rect.height / 2;

      const currentSection = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      ).find(
        (section) =>
          y >= section.offsetTop && y < section.offsetTop + section.offsetHeight
      );

      const shouldBeWhite =
        !currentSection ||
        currentSection.id === "home" ||
        currentSection.id === "solutions" ||
        currentSection.id === "process" ||
        currentSection.id === "mission" ||
        currentSection.id === "contact";
      setIsWhiteText(shouldBeWhite);
    };

    checkNavbarBackground();

    window.addEventListener("scroll", checkNavbarBackground, {
      passive: true,
    });

    window.addEventListener("resize", checkNavbarBackground);

    return () => {
      window.removeEventListener("scroll", checkNavbarBackground);
      window.removeEventListener("resize", checkNavbarBackground);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "pt-2 px-2 sm:px-4" : "pt-0 px-0"
        }`}
      >
        <div
          className={`navbar relative overflow-hidden transition-all duration-500 ease-out ${
            isScrolled
              ? "rounded-2xl bg-white/12 backdrop-blur-sm border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.15)]"
              : "bg-transparent border border-transparent shadow-none"
          }`}
        >
          {/* Glass Highlight */}
          {isScrolled && (
            <>
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/25 via-white/5 to-transparent" />

              <div className="pointer-events-none absolute -top-10 left-1/2 h-20 w-[70%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
            </>
          )}

          {/* Logo */}
          <div className="navbar-start min-w-0">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="flex items-center gap-2 cursor-pointer lg:ml-1 min-w-0"
            >
              <img
                src={Logo}
                alt="Eco-Biomass Solution"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div
                className={`relative group min-w-0 whitespace-nowrap transition-all duration-500 ${
                  isWhiteText
                    ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                    : "text-moss-500"
                }`}
              >
                <div className="font-display font-semibold text-[15px] leading-none tracking-[0.01em] whitespace-nowrap">
                  Earthkeepers'
                </div>

                <div className="text-[9px] font-medium tracking-[0.18em] opacity-80 uppercase leading-none mt-[3px] whitespace-nowrap">
                  Biomass Solutions Inc.
                </div>
              </div>
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="navbar-center hidden lg:flex gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className={`relative group transition-all duration-500 ${
                  isWhiteText
                    ? "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]"
                    : "text-moss-500"
                } hover:text-gold-300`}
              >
                {link.name}

                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gold-300 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>
          {/* Right Side */}
          <div className="navbar-end gap-2">
            <div className="hidden lg:block">
              <button
                className="btn rounded-box bg-gold-500 border-gold-500/20 mr-1"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Partner With Us
              </button>
            </div>

            <button
              className={`lg:hidden w-12 h-10 rounded-lg border backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? "bg-[#7A3B1E]/10 border-[#7A3B1E]/20"
                  : "bg-white/10 border-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? (
                <X
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-[#2B2118]" : "text-white"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-5 h-5 transition-colors duration-300 ${
                    isScrolled ? "text-[#2B2118]" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed top-2 right-2 bottom-2
                z-50
                w-[calc(100%-1rem)]
                sm:w-80
                rounded-2xl
                overflow-hidden
                bg-[#FAF7F2]
                border border-[#2B2118]/10
                shadow-[0_8px_40px_rgba(0,0,0,0.18)]
                lg:hidden
              "
            >
              {/* Subtle glass highlight */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-[#7A3B1E]/5" />

              <div className="relative flex flex-col h-full p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <a
                    href="#home"
                    onClick={(e) => handleNavLinkClick(e, "#home")}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={Logo}
                      alt="Earthkeepers' Biomass Solutions Inc."
                      className="w-11 h-11 rounded-full object-cover"
                    />

                    <div className="text-[#2B2118]">
                      <div className="font-display font-semibold text-sm leading-none">
                        Earthkeepers'
                      </div>

                      <div className="text-[8px] font-medium tracking-[0.16em] uppercase opacity-70 mt-1">
                        Biomass Solutions Inc.
                      </div>
                    </div>
                  </a>

                  {/* Close */}
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      w-10 h-10
                      rounded-xl
                      flex items-center justify-center
                      bg-[#7A3B1E]/10
                      border border-[#7A3B1E]/15
                      text-[#2B2118]
                      hover:bg-[#7A3B1E]/15
                      transition-all duration-300
                    "
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.3,
                      }}
                      className="
                  group
                  relative
                  flex items-center
                  px-4 py-3
                  rounded-xl
                  text-[#2B2118]
                  font-medium
                  transition-all duration-300
                  hover:bg-[#7A3B1E]/8
                  hover:text-[#7A3B1E]
                "
                    >
                      {/* Active/hover indicator */}
                      <span
                        className="
                    absolute left-0
                    w-1 h-0
                    rounded-full
                    bg-[#C49A3A]
                    transition-all duration-300
                    group-hover:h-6
                  "
                      />

                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Bottom CTA */}
                <div className="mt-auto pt-8">
                  <button
                    onClick={() => {
                      document
                        .getElementById("pricing")
                        ?.scrollIntoView({ behavior: "smooth" });

                      setIsMobileMenuOpen(false);
                    }}
                    className="
                w-full
                h-12
                rounded-xl
                bg-[#C49A3A]
                border border-[#C49A3A]
                text-[#2B2118]
                font-semibold
                shadow-[0_6px_20px_rgba(196,154,58,0.25)]
                hover:bg-[#B58B32]
                hover:-translate-y-0.5
                transition-all duration-300
              "
                  >
                    Partner With Us
                  </button>

                  <p className="text-center text-xs text-[#2B2118]/50 mt-4">
                    Building a sustainable energy future
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
