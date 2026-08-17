import { useCallback } from "react";

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Mission", href: "#mission" },
  { label: "Community", href: "#sustainability" },
  { label: "Sustainability", href: "#sustainability" },
];

const solutionLinks = [
  { label: "Biomass Processing", href: "#solutions" },
  { label: "Construction Materials", href: "#applications" },
  { label: "Biodiesel & Fuels", href: "#applications" },
  { label: "Modular Powerplants", href: "#applications" },
];

const connectLinks = [
  {
    label: "info@earthkeepers.ph",
    href: "mailto:info@earthkeepers.ph",
  },
  {
    label: "Partner With Us",
    href: "#contact",
  },
  {
    label: "Our Process",
    href: "#process",
  },
  {
    label: "Community Impact",
    href: "#sustainability",
  },
];

export default function Footer() {
  /**
   * Smooth scroll handler
   */
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      // Allow external links such as mailto:
      if (!href.startsWith("#")) {
        return;
      }

      e.preventDefault();

      const id = href.substring(1);
      const element = document.getElementById(id);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without jumping
      window.history.pushState(null, "", href);
    },
    []
  );

  return (
    <footer className="bg-forest-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16">
          {/* =================================================
              BRAND
          ================================================== */}

          <div className="max-w-sm">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="group mb-6 inline-flex items-center gap-3"
            >
              {/* Logo */}
              <div
                className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full
                  border border-gold-500/50
                  bg-forest-900
                  text-gold-400
                  transition-all duration-300
                  group-hover:border-gold-400
                  group-hover:bg-forest-800
                "
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17.5 3 17.5 3s2 5-1.5 9.5A7 7 0 0 1 11 20Z" />
                  <path d="M11 20c0-3.5 1.5-6 4-8" />
                </svg>
              </div>

              <div>
                <div className="font-display text-base font-semibold leading-none text-beige-200">
                  Earthkeepers'
                </div>

                <div
                  className="
                    mt-1
                    font-body
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.16em]
                    text-moss-500
                  "
                >
                  Biomass Solutions Inc.
                </div>
              </div>
            </a>

            {/* Description */}
            <p
              className="
                mb-6
                max-w-sm
                font-body
                text-sm
                font-light
                leading-[1.8]
                text-moss-500
              "
            >
              Developing renewable biomass energy solutions in the Philippines,
              rooted in community partnership and environmental stewardship.
            </p>

            {/* Location */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                font-body
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-moss-600
              "
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Palawan, Philippines
            </div>
          </div>

          {/* =================================================
              COMPANY
          ================================================== */}

          <div>
            <div
              className="
                mb-5
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-beige-400
              "
            >
              Company
            </div>

            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    w-fit
                    font-body
                    text-sm
                    font-light
                    text-moss-500
                    transition-colors
                    duration-200
                    hover:text-gold-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              SOLUTIONS
          ================================================== */}

          <div>
            <div
              className="
                mb-5
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-beige-400
              "
            >
              Solutions
            </div>

            <div className="flex flex-col gap-3">
              {solutionLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    w-fit
                    font-body
                    text-sm
                    font-light
                    text-moss-500
                    transition-colors
                    duration-200
                    hover:text-gold-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              CONNECT
          ================================================== */}

          <div>
            <div
              className="
                mb-5
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-beige-400
              "
            >
              Connect
            </div>

            <div className="flex flex-col gap-3">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="
                    w-fit
                    font-body
                    text-sm
                    font-light
                    text-moss-500
                    transition-colors
                    duration-200
                    hover:text-gold-400
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-forest-800/80
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="font-body text-xs font-light text-moss-600">
            © {new Date().getFullYear()} Earthkeepers' Biomass Solutions Inc.
            All rights reserved.
          </p>

          <p className="font-body text-xs text-moss-700">
            Palawan, Philippines · Renewable Energy · Community-Driven
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </footer>
  );
}
