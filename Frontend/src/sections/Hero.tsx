import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { heroImages } from "../context/heroData";

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
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length);
    }, 6500);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % heroImages.length);
  };

  const previousImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-forest-950"
    >
      {/* ================= BACKGROUND CAROUSEL ================= */}

      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <motion.img
            key={image.src}
            src={image.src}
            alt={index === activeImage ? image.alt : ""}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{
              opacity: index === activeImage ? 1 : 0,
              scale: index === activeImage ? 1 : 1.08,
            }}
            transition={{
              opacity: {
                duration: 1.2,
                ease: "easeInOut",
              },
              scale: {
                duration: 7,
                ease: "easeOut",
              },
            }}
            className="absolute inset-0 h-full w-full object-cover"
            aria-hidden={index !== activeImage}
          />
        ))}
      </div>

      {/* ================= DARK OVERLAY ================= */}

      <div
        className="absolute inset-0 z-10 bg-forest-950/50"
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
          pb-28
          pt-32
          md:px-10
          lg:px-12
        "
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
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
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-300 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-gold-300" />
            </span>
            Renewable Energy · Palawan, Philippines
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.12,
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
            <em className="font-display not-italic text-gold-300">
              Sustainable
            </em>{" "}
            Future
            <br className="hidden md:block" /> Through Biomass.
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.24,
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

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.36,
            }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#solutions"
              className="
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
                hover:bg-gold-400
              "
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("solutions")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Explore Solutions
              <ArrowRight size={17} />
            </a>

            <a
              href="#about-us"
              className="
                btn
                rounded-box
                border
                btn-lg
                border-white/25
                bg-white/5
                px-7
                text-sm
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/10
              "
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about-us")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Our Mission
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.48,
            }}
            className="
              mt-16
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
                <Check size={13} strokeWidth={2.5} className="text-moss-300" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ================= CAROUSEL CONTROLS ================= */}

      <div className="absolute bottom-8 right-6 z-30 flex items-center gap-4 md:right-12">
        {/* Previous / Next */}
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous hero image"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-white/20
              bg-white/5 text-white/70
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/15 hover:text-white
            "
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Next hero image"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full border border-white/20
              bg-white/5 text-white/70
              backdrop-blur-md
              transition-all duration-300
              hover:bg-white/15 hover:text-white
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Go to hero image ${index + 1}`}
              className={`
                h-1.5 rounded-full transition-all duration-500
                ${
                  activeImage === index
                    ? "w-8 bg-gold-300"
                    : "w-1.5 bg-white/35 hover:bg-white/60"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.a
        href="#about-us"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about-us")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="
          absolute
          bottom-7
          left-1/2
          z-30
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          text-white/35
          md:flex
        "
      >
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em]">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={17} strokeWidth={1.5} />
        </motion.div>
      </motion.a>
    </section>
  );
}
