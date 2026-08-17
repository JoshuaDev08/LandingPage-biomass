import { motion } from "framer-motion";
import { Leaf, ArrowDown } from "lucide-react";

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

export default function Mission() {
  return (
    <section
      id="mission"
      className="
        relative
        isolate
        overflow-hidden
        bg-forest-900
        py-28
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="absolute inset-0 -z-20"
      >
        <img
          src="https://images.unsplash.com/photo-1709390085138-5c72c2e63313?w=1920&h=1000&fit=crop&auto=format"
          alt=""
          className="
            h-full
            w-full
            object-cover
          "
        />
      </motion.div>

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-forest-950/80
        "
      />

      {/* Gradient overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-forest-950/95
          via-forest-900/80
          to-forest-800/60
        "
      />

      {/* Bottom atmospheric fade */}
      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-40
          bg-gradient-to-t
          from-forest-950/60
          to-transparent
        "
      />

      {/* =====================================================
          DECORATIVE ELEMENTS
      ====================================================== */}

      {/* Top line */}
      <div
        className="
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold-500/50
          to-transparent
        "
      />

      {/* Bottom line */}
      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-gold-500/30
          to-transparent
        "
      />

      {/* Decorative glow */}
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
          left-1/2
          top-1/2
          -z-10
          h-[500px]
          w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-moss-500/20
          blur-[120px]
        "
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
            duration: 0.7,
          }}
          className="
            mb-7
            flex
            items-center
            justify-center
            gap-3
            font-body
            text-[10px]
            font-bold
            uppercase
            tracking-[0.24em]
            text-gold-400
          "
        >
          <span className="h-px w-8 bg-gold-500/60" />
          Our Mission
          <span className="h-px w-8 bg-gold-500/60" />
        </motion.div>

        {/* Small icon */}
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
            mb-8
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-gold-400/25
            bg-gold-400/10
            text-gold-300
            backdrop-blur-sm
          "
        >
          <Leaf size={20} strokeWidth={1.5} />
        </motion.div>

        {/* =================================================
            MAIN QUOTE
        ================================================== */}

        <motion.blockquote
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.15,
          }}
          className="
            mx-auto
            max-w-4xl
            font-display
            text-3xl
            font-light
            italic
            leading-[1.3]
            tracking-[-0.025em]
            text-beige-50
            sm:text-4xl
            md:text-5xl
            lg:text-[3.4rem]
          "
        >
          Energy sustainability is not just about power.
          <span className="not-italic text-gold-400"> It is about people,</span>
          <span className="not-italic text-moss-300"> communities,</span>
          <span className="not-italic text-gold-300"> and the future.</span>
        </motion.blockquote>

        {/* =================================================
            DIVIDER / COMPANY
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
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mt-12
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-gold-500/30 sm:w-20" />

          <span
            className="
              font-body
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-moss-300
              sm:text-xs
            "
          >
            Earthkeepers' Biomass Solutions Inc.
          </span>

          <span className="h-px w-12 bg-gold-500/30 sm:w-20" />
        </motion.div>

        {/* =================================================
            SUPPORTING MESSAGE
        ================================================== */}

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            font-body
            text-sm
            font-light
            leading-[1.8]
            text-moss-300/80
            md:text-base
          "
        >
          Our mission is to help build a more sustainable energy future in the
          Philippines by connecting renewable technology, responsible biomass
          use, and meaningful community development.
        </motion.p>
      </div>

      {/* =====================================================
          BOTTOM SCROLL / DECORATIVE MARK
      ====================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          md:block
        "
      >
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-moss-400/50"
        >
          <ArrowDown size={16} strokeWidth={1.2} />
        </motion.div>
      </motion.div>
    </section>
  );
}
