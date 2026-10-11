import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import Logo from "../assets/Logo.png";

const trustItems = [
  "Community-Driven",
  "Non-Profit Purpose",
  "Palawan Operations",
  "Sustainable Impact",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden
        bg-forest-950
      "
    >
      {/* ================= HERO VIDEO ================= */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/eco-biomass-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ================= DARK OVERLAYS ================= */}

      <div
        className="
          absolute
          inset-0
          z-10
          bg-forest-950/50
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-r
          from-forest-950/90
          via-forest-950/60
          to-transparent
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-t
          from-forest-950/80
          via-transparent
          to-transparent
        "
        aria-hidden="true"
      />

      {/* ================= AMBIENT GLOW ================= */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/4
          z-10
          h-96
          w-96
          rounded-full
          bg-moss-500/20
          blur-3xl
        "
      />

      {/* ================= HERO CONTENT ================= */}

      <motion.div
        className="
          relative
          z-20
          mx-auto
          w-full
          max-w-7xl
          px-6
          pb-32
          pt-20
          md:px-10
          md:pt-24
          lg:px-12
        "
      >
        <div className="max-w-3xl">
          {/* ================= BRAND ================= */}

          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              mb-8
              inline-flex
              items-center
              gap-5
            "
          >
            {/* Large Logo */}
            <div
              className="
                relative
                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-white/20
                bg-white/10
                shadow-[0_15px_40px_rgba(0,0,0,0.30)]
                backdrop-blur-md
                transition-all
                duration-500
                group-hover:scale-[1.03]
                group-hover:border-gold-300/35
                md:h-28
                md:w-28
              "
            >
              {/* subtle highlight */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-white/15
                  via-transparent
                  to-transparent
                "
              />

              <img
                src={Logo}
                alt="Earthkeepers' Biomass Solutions Inc."
                className="
                  relative
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>

            {/* Company Name */}
            <div>
              <div
                className="
                  font-display
                  text-xl
                  font-semibold
                  leading-none
                  tracking-[0.01em]
                  text-white
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]
                  md:text-2xl
                "
              >
                Earthkeepers'
              </div>

              <div
                className="
                  mt-2
                  font-body
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-white/60
                  md:text-[10px]
                "
              >
                Biomass Solutions Inc.
              </div>
            </div>
          </motion.a>

          {/* ================= BADGE ================= */}

          <div className="block">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.7,
                delay: 0.08,
              }}
              className="
                mb-7
                inline-flex
                items-center
                gap-2.5
                rounded-full
                border
                border-gold-400/30
                bg-gold-400/10
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                text-gold-300
                backdrop-blur-md
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-gold-300
                    opacity-60
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-gold-300
                  "
                />
              </span>

              Renewable Energy · Palawan, Philippines
            </motion.div>
          </div>

          {/* ================= HEADING ================= */}

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.16,
              ease: "easeOut",
            }}
            className="
              mb-7
              font-display
              text-5xl
              font-semibold
              leading-[1.04]
              tracking-[-0.035em]
              text-white
              md:text-6xl
              lg:text-[4.5rem]
            "
          >
            Powering a{" "}
            <em
              className="
                font-display
                not-italic
                text-gold-300
              "
            >
              Sustainable
            </em>{" "}
            Future
            <br className="hidden md:block" /> Through Biomass.
          </motion.h1>

          {/* ================= DESCRIPTION ================= */}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.28,
            }}
            className="
              mb-10
              max-w-2xl
              font-body
              text-base
              font-light
              leading-relaxed
              text-white/70
              md:text-lg
            "
          >
            Earthkeepers' Biomass Solutions develops community-driven renewable
            energy systems, transforming Philippine biomass into clean power and
            sustainable materials.
          </motion.p>

          {/* ================= CTA BUTTONS ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="
              flex
              flex-wrap
              gap-3
            "
          >
            {/* Primary CTA */}
            <a
              href="#solutions"
              className="
                group
                btn
                btn-lg
                rounded-box
                border-0
                bg-gold-500
                px-7
                text-sm
                font-semibold
                text-white
                shadow-xl
                shadow-gold-500/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-gold-400
                hover:shadow-gold-500/30
              "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("solutions");
              }}
            >
              Explore Solutions

              <ArrowRight
                size={17}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>

            {/* Secondary CTA */}
            <a
              href="#about-us"
              className="
                btn
                btn-lg
                rounded-box
                border
                border-white/25
                bg-white/5
                px-7
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-white/40
                hover:bg-white/10
              "
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-us");
              }}
            >
              About Us
            </a>
          </motion.div>

          {/* ================= TRUST INDICATORS ================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.52,
            }}
            className="
              mt-14
              flex
              flex-wrap
              gap-x-7
              gap-y-3
              border-t
              border-white/10
              pt-7
            "
          >
            {trustItems.map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  text-xs
                  font-medium
                  text-white/50
                "
              >
                <Check
                  size={13}
                  strokeWidth={2.5}
                  className="text-moss-300"
                />

                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about-us"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("about-us");
        }}
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
        className="
          group
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          text-white/55
          transition-colors
          duration-300
          hover:text-gold-300
          md:flex
        "
      >
        <span
          className="
            font-body
            text-[9px]
            font-semibold
            uppercase
            tracking-[0.25em]
          "
        >
          Scroll to Explore
        </span>

        {/* Mouse Style Indicator */}
        <motion.div
          animate={{
            y: [0, 4, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            h-9
            w-6
            items-start
            justify-center
            rounded-full
            border
            border-white/30
            pt-2
            transition-colors
            duration-300
            group-hover:border-gold-300/60
          "
        >
          <motion.span
            animate={{
              y: [0, 7, 0],
              opacity: [1, 0.25, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-1
              w-1
              rounded-full
              bg-current
            "
          />
        </motion.div>
      </motion.a>

      {/* ================= BOTTOM FADE ================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-20
          bg-gradient-to-t
          from-forest-950/30
          to-transparent
        "
      />
    </section>
  );
}