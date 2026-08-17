import { motion } from "framer-motion";
import { Handshake, Trees, Cog, Zap, Sprout, ArrowRight } from "lucide-react";

const processSteps = [
  {
    number: "01",
    icon: Handshake,
    title: "Community Partnership",
    description:
      "Build trust and co-design plans with local and indigenous communities.",
  },
  {
    number: "02",
    icon: Trees,
    title: "Responsible Harvesting",
    description:
      "Collect biomass responsibly under strict environmental and community protocols.",
  },
  {
    number: "03",
    icon: Cog,
    title: "Biomass Processing",
    description:
      "Process, chip, and prepare biomass into usable renewable feedstock.",
  },
  {
    number: "04",
    icon: Zap,
    title: "Energy Conversion",
    description:
      "Transform processed biomass into electricity, fuel, or sustainable materials.",
  },
  {
    number: "05",
    icon: Sprout,
    title: "Sustainable Impact",
    description:
      "Create lasting value for communities, forests, and the Philippines' energy future.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="
        relative
        overflow-hidden
        bg-forest-700
        py-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >
        <svg
          viewBox="0 0 1440 700"
          preserveAspectRatio="none"
          className="
            h-full
            w-full
            opacity-[0.035]
          "
        >
          <ellipse
            cx="720"
            cy="350"
            rx="900"
            ry="420"
            fill="none"
            stroke="#d4af5a"
            strokeWidth="80"
          />
        </svg>
      </div>

      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-1/3
          h-96
          w-96
          rounded-full
          bg-moss-400/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-3
              font-body
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-gold-300
            "
          >
            <span className="h-px w-8 bg-gold-400/60" />
            Our Process
            <span className="h-px w-8 bg-gold-400/60" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              mb-5
              font-display
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-[-0.03em]
              text-beige-50
              md:text-5xl
            "
          >
            From Community to{" "}
            <span className="font-normal italic text-gold-300">
              Clean Energy.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              mx-auto
              max-w-2xl
              font-body
              text-base
              font-light
              leading-relaxed
              text-moss-200
              md:text-lg
            "
          >
            A transparent process that puts communities, responsible resource
            management, and sustainable energy at the center of every decision.
          </motion.p>
        </div>

        {/* =====================================================
            PROCESS TIMELINE
        ====================================================== */}

        <div className="relative">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="
              absolute
              left-[10%]
              right-[10%]
              top-7
              hidden
              h-px
              bg-gradient-to-r
              from-transparent
              via-gold-400/30
              to-transparent
              lg:block
            "
          />

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="group relative"
                >
                  {/* Number / Icon */}
                  <div className="relative z-10 mb-7 flex justify-center">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gold-400/30
                        bg-forest-800
                        text-gold-300
                        shadow-lg
                        shadow-forest-950/20
                        transition-all
                        duration-300
                        group-hover:border-gold-300/60
                        group-hover:bg-forest-900
                      "
                    >
                      <Icon size={21} strokeWidth={1.6} />
                    </motion.div>

                    {/* Step number */}
                    <span
                      className="
                        absolute
                        -right-1
                        -top-2
                        font-body
                        text-[9px]
                        font-semibold
                        tracking-wider
                        text-gold-400/70
                      "
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className="
                        mb-3
                        font-display
                        text-lg
                        font-semibold
                        leading-tight
                        text-beige-50
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        font-body
                        text-sm
                        font-light
                        leading-[1.7]
                        text-moss-300
                      "
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between steps */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        absolute
                        -right-3
                        top-5
                        hidden
                        text-gold-400/30
                        lg:block
                      "
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="
            mx-auto
            mt-20
            max-w-2xl
            border-t
            border-moss-500/30
            pt-8
            text-center
          "
        >
          <p
            className="
              font-display
              text-xl
              font-medium
              text-beige-50
              md:text-2xl
            "
          >
            Every step creates{" "}
            <span className="italic text-gold-300">lasting impact.</span>
          </p>

          <p
            className="
              mt-2
              font-body
              text-sm
              font-light
              text-moss-300
            "
          >
            From responsible sourcing to sustainable energy for communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
