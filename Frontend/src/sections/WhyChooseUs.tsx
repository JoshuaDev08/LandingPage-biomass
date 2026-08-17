import { motion } from "framer-motion";
import {
  Users,
  HandCoins,
  Sprout,
  Zap,
  Building2,
  ShieldCheck,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Users,
    title: "Indigenous Partnership",
    description:
      "Operations built with and for indigenous peoples, respecting rights, traditions, and ancestral territorial stewardship.",
  },
  {
    icon: HandCoins,
    title: "Local Economic Empowerment",
    description:
      "Biomass operations create employment and supply-chain opportunities within communities near our facilities.",
  },
  {
    icon: Sprout,
    title: "Sustainable Resource Management",
    description:
      "Responsible resource management helps protect ecosystems while supporting the long-term availability of biomass resources.",
  },
  {
    icon: Zap,
    title: "Philippine Renewable Innovation",
    description:
      "Locally adapted biomass technologies designed around Philippine conditions, climate, and resource availability.",
  },
  {
    icon: Building2,
    title: "Long-term Sustainability",
    description:
      "Our solutions are designed for lasting impact — building energy infrastructure that can serve communities for generations.",
  },
  {
    icon: ShieldCheck,
    title: "Non-Profit Purpose",
    description:
      "Our mission is centered on energy sustainability and community impact rather than maximizing profit.",
  },
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

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-beige-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-[340px_1fr] xl:gap-24">
          {/* ==========================================
              LEFT CONTENT
          =========================================== */}

          <div className="lg:sticky lg:top-28">
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
                gap-3
                font-body
                text-[10px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-gold-500
              "
            >
              <span className="h-px w-8 bg-gold-500" />
              Why Choose Us
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
                text-forest-800
                lg:text-5xl
              "
            >
              Energy That
              <br />
              <span className="font-normal italic text-moss-600">
                Serves Everyone.
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
                max-w-sm
                font-body
                text-[15px]
                font-light
                leading-[1.8]
                text-earth-500
              "
            >
              Our approach connects environmental stewardship with community
              empowerment — ensuring the transition to renewable energy
              genuinely benefits the people closest to the land.
            </motion.p>

            {/* Small accent */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 h-[2px] bg-gold-500"
            />
          </div>


          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  whileHover={{ y: -5 }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-beige-300
                    bg-white/60
                    p-7
                    transition-all
                    duration-300
                    hover:border-moss-400/50
                    hover:bg-white
                    hover:shadow-xl
                    hover:shadow-forest-900/5
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      mb-6
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-moss-500/20
                      bg-moss-500/10
                      text-moss-600
                      transition-all
                      duration-300
                      group-hover:border-gold-500/30
                      group-hover:bg-gold-500/10
                      group-hover:text-gold-600
                    "
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-6
                      top-5
                      font-display
                      text-4xl
                      font-semibold
                      leading-none
                      text-forest-800/[0.04]
                      transition-colors
                      duration-300
                      group-hover:text-gold-500/[0.10]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <h3
                    className="
                      mb-3
                      font-display
                      text-xl
                      font-semibold
                      leading-tight
                      text-forest-800
                    "
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      font-body
                      text-sm
                      font-light
                      leading-[1.75]
                      text-earth-500
                    "
                  >
                    {item.description}
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
        </div>
      </div>
    </section>
  );
}
