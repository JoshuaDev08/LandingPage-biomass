import { motion } from "framer-motion";
import { ArrowUpRight, Factory, Leaf, Zap } from "lucide-react";

const solutions = [
  {
    number: "01",
    icon: Leaf,
    title: "Responsible Sourcing",
    description:
      "Biomass is responsibly sourced from managed forests and community lands in partnership with local and indigenous communities.",
  },
  {
    number: "02",
    icon: Factory,
    title: "Clean Processing",
    description:
      "Wood biomass is processed into high-quality feedstock through efficient chipping, drying, and refinement systems.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Sustainable Energy",
    description:
      "Processed biomass can support clean electricity, alternative fuels, and sustainable materials for a lower-carbon future.",
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

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="
        relative
        isolate
        overflow-hidden
        bg-forest-800
        py-24
        lg:py-32
      "
    >
      <div
        className="
          absolute
          inset-0
          -z-20
          bg-cover
          bg-center
        "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1617460055001-2167c227cb7b?w=1920&h=1000&fit=crop&auto=format)",
        }}
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-forest-950/90
        "
        aria-hidden="true"
      />

      {/* Green atmospheric gradient */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-gradient-to-br
          from-forest-900/70
          via-forest-950/30
          to-forest-950/90
        "
        aria-hidden="true"
      />

      {/* =====================================================
          DECORATIVE GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.08, 0.15, 0.08],
          scale: [1, 1.1, 1],
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
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-moss-500/20
          blur-[120px]
        "
      />

      {/* Organic decorative line */}
      <svg
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[500px]
          w-full
          opacity-[0.035]
        "
        viewBox="0 0 1440 500"
        preserveAspectRatio="none"
      >
        <path
          d="
            M-100 400
            C200 100 400 650 700 300
            C950 0 1100 550 1550 150
          "
          fill="none"
          stroke="#d4af5a"
          strokeWidth="120"
        />
      </svg>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-3
              font-body
              text-[10px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-gold-400
            "
          >
            <span className="h-px w-8 bg-gold-400/60" />
            Biomass Solutions
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
              mb-6
              font-display
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-[-0.03em]
              text-beige-50
              md:text-5xl
            "
          >
            From Biomass to{" "}
            <span className="font-normal italic text-gold-400">
              Sustainable Solutions.
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
              font-body
              text-base
              font-light
              leading-relaxed
              text-moss-300
              md:text-lg
            "
          >
            We transform responsibly sourced wood biomass into renewable energy
            and useful materials — creating value for communities, industries,
            and the environment.
          </motion.p>
        </div>

        {/* =====================================================
            PROCESS CARDS
        ====================================================== */}

        <div className="grid gap-5 md:grid-cols-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.div
                key={solution.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-moss-600/30
                  bg-forest-900/65
                  p-7
                  backdrop-blur-md
                  transition-colors
                  duration-300
                  hover:border-gold-500/40
                  hover:bg-forest-900/80
                "
              >
                {/* Number */}
                <div
                  className="
                    absolute
                    right-6
                    top-5
                    font-display
                    text-6xl
                    font-semibold
                    leading-none
                    text-gold-400/[0.08]
                    transition-colors
                    duration-300
                    group-hover:text-gold-400/[0.16]
                  "
                >
                  {solution.number}
                </div>

                {/* Icon */}
                <div
                  className="
                    mb-8
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-gold-400/20
                    bg-gold-400/10
                    text-gold-400
                    transition-all
                    duration-300
                    group-hover:border-gold-400/40
                    group-hover:bg-gold-400/15
                  "
                >
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-3
                    font-display
                    text-xl
                    font-semibold
                    text-beige-50
                  "
                >
                  {solution.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-body
                    text-sm
                    font-light
                    leading-[1.75]
                    text-moss-300
                  "
                >
                  {solution.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-gold-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
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
            mt-12
            flex
            flex-col
            items-center
            justify-between
            gap-5
            border-t
            border-moss-600/20
            pt-8
            md:flex-row
          "
        >
          <div>
            <p className="font-display text-lg text-beige-100">
              One resource. Multiple possibilities.
            </p>

            <p className="mt-1 font-body text-xs text-moss-400">
              Building a more sustainable energy ecosystem in the Philippines.
            </p>
          </div>

          <a
            onClick={() =>
              document
                .getElementById("process")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
              cursor-pointer
              group
              inline-flex
              items-center
              gap-2
              font-body
              text-xs
              font-semibold
              uppercase
              tracking-[0.12em]
              text-gold-400
              transition-colors
              hover:text-gold-300
            "
          >
            See Our Process
            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
