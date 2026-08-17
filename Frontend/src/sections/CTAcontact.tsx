import { motion } from "framer-motion";
import { ArrowRight, Leaf, Mail } from "lucide-react";

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

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="
        relative
        isolate
        overflow-hidden
        bg-moss-600
        py-24
        lg:py-32
      "
    >
      {/* =====================================================
          ATMOSPHERIC BACKGROUND
      ====================================================== */}

      {/* Top-right glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.3, 0.2],
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
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-forest-800/40
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Bottom-left gold glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-gold-500
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* Subtle center glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[400px]
          w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-moss-300/5
          blur-3xl
        "
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE LINES
      ====================================================== */}

      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold-300/40
          to-transparent
        "
        aria-hidden="true"
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold-300/20
          to-transparent
        "
        aria-hidden="true"
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-5xl
          px-6
          text-center
          md:px-10
        "
      >
        {/* Eyebrow */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            mb-6
            flex
            items-center
            justify-center
            gap-3
            font-body
            text-[10px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-gold-300
          "
        >
          <span className="h-px w-8 bg-gold-300/50" />
          Join the Mission
          <span className="h-px w-8 bg-gold-300/50" />
        </motion.div>

        {/* Leaf icon */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.1,
          }}
          className="
            mx-auto
            mb-7
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-gold-300/25
            bg-gold-300/10
            text-gold-300
            backdrop-blur-sm
          "
        >
          <Leaf size={20} strokeWidth={1.5} />
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
          }}
          className="
            mx-auto
            mb-6
            max-w-4xl
            font-display
            text-4xl
            font-semibold
            leading-[1.08]
            tracking-[-0.035em]
            text-white
            md:text-5xl
            lg:text-[3.5rem]
          "
        >
          Let's Build a More Sustainable{" "}
          <span
            className="
              font-normal
              italic
              text-gold-300
            "
          >
            Energy Future.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.24,
          }}
          className="
            mx-auto
            mb-10
            max-w-2xl
            font-body
            text-base
            font-light
            leading-[1.8]
            text-white/70
            md:text-lg
          "
        >
          Partner with Earthkeepers' Biomass Solutions to develop renewable
          energy systems that empower Philippine communities, create local
          opportunities, and help protect our natural resources for generations
          to come.
        </motion.p>

        {/* =================================================
            CTA BUTTONS
        ================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            delay: 0.36,
          }}
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
          "
        >
          {/* Primary CTA */}
          <a
            href="mailto:info@earthkeepers.ph"
            className="
              group
              inline-flex
              h-14
              items-center
              gap-2.5
              rounded-box
              bg-gold-500
              px-8
              font-body
              text-sm
              font-semibold
              tracking-wide
              text-white
              shadow-xl
              shadow-gold-500/20
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-gold-400
              hover:shadow-gold-400/30
            "
          >
            <Mail size={17} strokeWidth={1.8} />
            Get In Touch
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
            href="#about"
            className="
              inline-flex
              h-14
              items-center
              gap-2
              rounded-box
              border
              border-white/25
              bg-white/5
              px-8
              font-body
              text-sm
              font-medium
              tracking-wide
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-white/40
              hover:bg-white/10
            "
          >
            Learn More
          </a>
        </motion.div>

        {/* =================================================
            TRUST MESSAGE
        ================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-12
            flex
            max-w-lg
            items-center
            justify-center
            gap-3
            border-t
            border-white/10
            pt-7
          "
        >
          <Leaf
            size={14}
            className="shrink-0 text-gold-300/70"
            strokeWidth={1.5}
          />

          <span
            className="
              font-body
              text-xs
              font-light
              tracking-wide
              text-white/40
            "
          >
            Building sustainable energy solutions for the Philippines
          </span>
        </motion.div>
      </div>
    </section>
  );
}
