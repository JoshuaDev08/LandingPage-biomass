import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWhiteText, setIsWhiteText] = useState(true);

  // NEW:
  // Controls whether the navbar is visible.
  const [showNavbar, setShowNavbar] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about-us",
    },
    {
      name: "Solutions",
      href: "#solutions",
    },
    {
      name: "Process",
      href: "#process",
    },
    {
      name: "Sustainability",
      href: "#sustainability",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  /* ============================================================
     NAVBAR VISIBILITY
     Hide inside Hero
     Show once About Us reaches the top area
  ============================================================ */

  useEffect(() => {
    const handleNavbarVisibility = () => {
      const aboutSection = document.getElementById("about-us");

      if (!aboutSection) {
        return;
      }

      const aboutTop = aboutSection.offsetTop;

      // Navbar starts appearing slightly before
      // About reaches the very top.
      const triggerPoint = aboutTop - 80;

      setShowNavbar(window.scrollY >= triggerPoint);
    };

    handleNavbarVisibility();

    window.addEventListener("scroll", handleNavbarVisibility, {
      passive: true,
    });

    window.addEventListener("resize", handleNavbarVisibility);

    return () => {
      window.removeEventListener("scroll", handleNavbarVisibility);
      window.removeEventListener("resize", handleNavbarVisibility);
    };
  }, []);

  /* ============================================================
     CHECK CURRENT SECTION
     Used to determine navbar text color
  ============================================================ */

  useEffect(() => {
    const checkNavbarBackground = () => {
      const navbar = document.querySelector(".navbar") as HTMLElement;

      if (!navbar) {
        return;
      }

      const rect = navbar.getBoundingClientRect();

      const y = window.scrollY + rect.top + rect.height / 2;

      const currentSection = Array.from(
        document.querySelectorAll<HTMLElement>("section[id]")
      ).find((section) => {
        return (
          y >= section.offsetTop && y < section.offsetTop + section.offsetHeight
        );
      });

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

  /* ============================================================
     SCROLLED STATE
     Controls glass navbar styling
  ============================================================ */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ============================================================
     NAVIGATION
  ============================================================ */

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      const top = targetElement.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ========================================================
          MAIN NAVBAR
      ======================================================== */}

      <motion.nav
        initial={false}
        animate={{
          y: showNavbar ? 0 : -110,
          opacity: showNavbar ? 1 : 0,
          pointerEvents: showNavbar ? "auto" : "none",
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-300

          ${isScrolled ? "px-2 pt-2 sm:px-4" : "px-0 pt-0"}
        `}
      >
        <div
          className={`
            navbar
            relative
            overflow-hidden
            transition-all
            duration-500
            ease-out

            ${
              isScrolled
                ? `
                    rounded-2xl
                    border
                    border-white/25
                    bg-white/12
                    shadow-[0_8px_32px_rgba(0,0,0,0.15)]
                    backdrop-blur-sm
                  `
                : `
                    border
                    border-transparent
                    bg-transparent
                    shadow-none
                  `
            }
          `}
        >
          {/* ================= GLASS HIGHLIGHT ================= */}

          {isScrolled && (
            <>
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  rounded-2xl
                  bg-gradient-to-b
                  from-white/25
                  via-white/5
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -top-10
                  left-1/2
                  h-20
                  w-[70%]
                  -translate-x-1/2
                  rounded-full
                  bg-white/20
                  blur-3xl
                "
              />
            </>
          )}

          {/* ================= LOGO ================= */}

          <div className="navbar-start min-w-0">
            <a
              href="#home"
              onClick={(e) => handleNavLinkClick(e, "#home")}
              className="
                flex
                min-w-0
                cursor-pointer
                items-center
                gap-2
                lg:ml-1
              "
            >
              <img
                src={Logo}
                alt="Earthkeepers' Biomass Solutions Inc."
                className="
                  h-12
                  w-12
                  rounded-full
                  object-cover
                "
              />

              <div
                className={`
                  relative
                  min-w-0
                  whitespace-nowrap
                  transition-all
                  duration-500

                  ${
                    isWhiteText
                      ? `
                          text-white
                          drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                        `
                      : "text-moss-500"
                  }
                `}
              >
                <div
                  className="
                    whitespace-nowrap
                    font-display
                    text-[15px]
                    font-semibold
                    leading-none
                    tracking-[0.01em]
                  "
                >
                  Earthkeepers'
                </div>

                <div
                  className="
                    mt-[3px]
                    whitespace-nowrap
                    text-[9px]
                    font-medium
                    uppercase
                    leading-none
                    tracking-[0.18em]
                    opacity-80
                  "
                >
                  Biomass Solutions Inc.
                </div>
              </div>
            </a>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}

          <div
            className="
              navbar-center
              hidden
              gap-8
              lg:flex
            "
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: showNavbar ? 1 : 0,
                  y: showNavbar ? 0 : 10,
                }}
                transition={{
                  delay: showNavbar ? index * 0.04 : 0,
                }}
                whileHover={{
                  y: -2,
                }}
                className={`
                  group
                  relative
                  transition-all
                  duration-500

                  ${
                    isWhiteText
                      ? `
                          text-white
                          drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]
                        `
                      : "text-moss-500"
                  }

                  hover:text-gold-300
                `}
              >
                {link.name}

                <span
                  className="
                    absolute
                    -bottom-1
                    left-0
                    h-0.5
                    w-0
                    bg-gold-300
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="navbar-end gap-2">
            {/* Desktop CTA */}

            <div className="hidden lg:block">
              <button
                className="
                  btn
                  mr-1
                  rounded-box
                  border-gold-500/20
                  bg-gold-500
                  text-white
                  transition-all
                  duration-300
                  hover:bg-gold-400
                "
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Partner With Us
              </button>
            </div>

            {/* Mobile Menu Button */}

            <button
              className={`
                flex
                h-10
                w-12
                items-center
                justify-center
                rounded-xl
                border
                backdrop-blur-md
                transition-all
                duration-300
                lg:hidden

                ${
                  isWhiteText
                    ? `
                        border-beige-100/20
                        bg-forest-900/30
                        text-beige-100
                        hover:border-gold-400/40
                        hover:bg-forest-800/50
                      `
                    : `
                        border-forest-800/15
                        bg-beige-100/70
                        text-forest-800
                        hover:border-gold-500/40
                        hover:bg-beige-200
                      `
                }
              `}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X
                  className="
                    h-5
                    w-5
                    transition-colors
                    duration-300
                  "
                />
              ) : (
                <Menu
                  className="
                    h-5
                    w-8
                    transition-colors
                    duration-300
                  "
                />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ========================================================
          MOBILE MENU
      ======================================================== */}

      <AnimatePresence>
        {isMobileMenuOpen && showNavbar && (
          <>
            {/* ================= BACKDROP ================= */}

            <motion.div
              className="
                fixed
                inset-0
                z-40
                bg-black/40
                backdrop-blur-sm
                lg:hidden
              "
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* ================= DRAWER ================= */}

            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                fixed
                bottom-2
                right-2
                top-2
                z-50
                w-[calc(100%-1rem)]
                overflow-hidden
                rounded-2xl
                border
                border-[#2B2118]/10
                bg-[#FAF7F2]
                shadow-[0_8px_40px_rgba(0,0,0,0.18)]
                sm:w-80
                lg:hidden
              "
            >
              {/* Glass highlight */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/70
                  via-transparent
                  to-[#7A3B1E]/5
                "
              />

              <div
                className="
                  relative
                  flex
                  h-full
                  flex-col
                  p-6
                  sm:p-8
                "
              >
                {/* ================= DRAWER HEADER ================= */}

                <div
                  className="
                    mb-10
                    flex
                    items-center
                    justify-between
                  "
                >
                  <a
                    href="#home"
                    onClick={(e) => handleNavLinkClick(e, "#home")}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <img
                      src={Logo}
                      alt="Earthkeepers' Biomass Solutions Inc."
                      className="
                        h-11
                        w-11
                        rounded-full
                        object-cover
                      "
                    />

                    <div className="text-[#2B2118]">
                      <div
                        className="
                          font-display
                          text-sm
                          font-semibold
                          leading-none
                        "
                      >
                        Earthkeepers'
                      </div>

                      <div
                        className="
                          mt-1
                          text-[8px]
                          font-medium
                          uppercase
                          tracking-[0.16em]
                          opacity-70
                        "
                      >
                        Biomass Solutions Inc.
                      </div>
                    </div>
                  </a>

                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-[#7A3B1E]/15
                      bg-[#7A3B1E]/10
                      text-[#2B2118]
                      transition-all
                      duration-300
                      hover:bg-[#7A3B1E]/15
                    "
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* ================= MOBILE LINKS ================= */}

                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavLinkClick(e, link.href)}
                      initial={{
                        opacity: 0,
                        x: 25,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.06,
                        duration: 0.3,
                      }}
                      className="
                        group
                        relative
                        flex
                        items-center
                        rounded-xl
                        px-4
                        py-3
                        font-medium
                        text-[#2B2118]
                        transition-all
                        duration-300
                        hover:bg-[#7A3B1E]/8
                        hover:text-[#7A3B1E]
                      "
                    >
                      <span
                        className="
                          absolute
                          left-0
                          h-0
                          w-1
                          rounded-full
                          bg-[#C49A3A]
                          transition-all
                          duration-300
                          group-hover:h-6
                        "
                      />

                      {link.name}
                    </motion.a>
                  ))}
                </nav>

                {/* ================= MOBILE CTA ================= */}

                <div className="mt-auto pt-8">
                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });

                      setIsMobileMenuOpen(false);
                    }}
                    className="
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#C49A3A]
                      bg-[#C49A3A]
                      font-semibold
                      text-[#2B2118]
                      shadow-[0_6px_20px_rgba(196,154,58,0.25)]
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#B58B32]
                    "
                  >
                    Partner With Us
                  </button>

                  <p
                    className="
                      mt-4
                      text-center
                      text-xs
                      text-[#2B2118]/50
                    "
                  >
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
