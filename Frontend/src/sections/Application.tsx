import { motion } from "framer-motion";
import { BrickWall, Droplets, Flame, Zap } from "lucide-react";

const applications = [
  {
    number: "01",
    icon: BrickWall,
    title: "Construction",
    description:
      "Processed wood biomass can be used as an alternative material component for construction applications, including biomass-based hollow blocks and other sustainable building materials.",
    image:
      "https://images.unsplash.com/photo-1565626424178-c699f6601afd?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Biofuel & Energy",
    description:
      "Biomass resources can support the development of alternative fuels and energy systems, reducing dependence on conventional fossil-based sources.",
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "03",
    icon: Flame,
    title: "Renewable Fuel",
    description:
      "Processed biomass such as wood chips and pellets can serve as renewable solid fuel for industrial heat and electricity generation.",
    image:
      "https://images.unsplash.com/photo-1635513236283-dedcca2ebd4a?w=800&h=600&fit=crop&auto=format",
  },
  {
    number: "04",
    icon: Zap,
    title: "Modular Powerplants",
    description:
      "Scalable biomass power systems can provide reliable renewable electricity for communities, businesses, and areas with limited access to energy.",
    image:
      "https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?w=800&h=600&fit=crop&auto=format",
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

export default function Applications() {
  return (
    <section
      id="applications"
      className="
        relative
        overflow-hidden
        bg-beige-100
        py-24
        lg:py-32
      "
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-moss-500/5
          blur-3xl
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-gold-400/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
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
              text-gold-500
            "
          >
            <span className="h-px w-8 bg-gold-500/60" />
            Applications
            <span className="h-px w-8 bg-gold-500/60" />
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
              text-forest-800
              md:text-5xl
            "
          >
            Biomass at{" "}
            <span className="font-normal italic text-moss-600">Work.</span>
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
              text-earth-500
              md:text-lg
            "
          >
            One renewable resource. Multiple possibilities. Biomass can support
            sustainable materials, renewable fuels, and reliable energy systems
            for communities across the Philippines.
          </motion.p>
        </div>

        {/* =====================================================
            APPLICATION CARDS
        ====================================================== */}

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {applications.map((application, index) => {
            const Icon = application.icon;

            return (
              <motion.article
                key={application.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -7 }}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-2xl
                  border
                  border-beige-300
                  bg-beige-50
                  shadow-sm
                  transition-shadow
                  duration-300
                  hover:shadow-xl
                  hover:shadow-forest-900/10
                "
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <motion.img
                    src={application.image}
                    alt={application.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.6 }}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* Image overlay */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-forest-950/70
                      via-forest-950/10
                      to-transparent
                    "
                  />

                  {/* Number */}
                  <span
                    className="
                      absolute
                      left-5
                      top-5
                      font-display
                      text-sm
                      font-semibold
                      text-beige-50/80
                    "
                  >
                    {application.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/20
                      bg-forest-950/40
                      text-gold-300
                      backdrop-blur-md
                    "
                  >
                    <Icon size={19} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    className="
                      mb-3
                      font-display
                      text-xl
                      font-semibold
                      text-forest-800
                    "
                  >
                    {application.title}
                  </h3>

                  <p
                    className="
                      font-body
                      text-sm
                      font-light
                      leading-[1.75]
                      text-earth-500
                    "
                  >
                    {application.description}
                  </p>

                  
                </div>

                {/* Bottom hover line */}
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
              </motion.article>
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
            delay: 0.4,
          }}
          className="
            mx-auto
            mt-14
            max-w-3xl
            text-center
          "
        >
          <p
            className="
              font-display
              text-xl
              font-medium
              text-forest-800
              md:text-2xl
            "
          >
            Turning biomass into{" "}
            <span className="italic text-moss-600">opportunity.</span>
          </p>

          <p
            className="
              mt-2
              font-body
              text-sm
              text-earth-500
            "
          >
            Creating value for people, communities, and the environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
