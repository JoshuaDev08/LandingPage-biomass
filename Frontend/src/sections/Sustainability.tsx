import { motion } from "framer-motion";
import { Users, Sprout, HandHeart, Leaf } from "lucide-react";

const impactItems = [
  {
    icon: Users,
    value: "Local First",
    label: "Community Employment",
  },
  {
    icon: Sprout,
    value: "Sustainable",
    label: "Resource Management",
  },
  {
    icon: HandHeart,
    value: "Community-Led",
    label: "Local Partnerships",
  },
  {
    icon: Leaf,
    value: "Long-Term",
    label: "Environmental Impact",
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

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-beige-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[0.85fr_1.15fr]
            xl:gap-20
          "
        >
          {/* =====================================================
              IMAGE COLUMN
          ====================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.25,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.8,
            }}
            className="
              relative
              order-2
              w-full
              lg:order-1
            "
          >
            {/* Main image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                bg-forest-800
                shadow-2xl
                shadow-forest-900/10
              "
            >
              <img
                src="https://images.unsplash.com/photo-1764323064842-379a89ada809?w=900&h=700&fit=crop&auto=format"
                alt="Community members working together in a rural environment"
                className="
                  h-[460px]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                  lg:h-[560px]
                "
              />

              {/* Dark image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-forest-950/55
                  via-transparent
                  to-transparent
                "
              />

              {/* Image caption */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/15
                  bg-forest-950/45
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <div
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gold-500
                    text-white
                  "
                >
                  <Leaf size={18} strokeWidth={1.7} />
                </div>

                <div>
                  <p
                    className="
                      font-body
                      text-xs
                      font-medium
                      text-white/60
                    "
                  >
                    Our commitment
                  </p>

                  <p
                    className="
                      font-display
                      text-sm
                      font-medium
                      text-white
                    "
                  >
                    People and planet, together.
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                FLOATING IMAGE
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="
                absolute
                -right-5
                -top-5
                hidden
                h-36
                w-36
                overflow-hidden
                rounded-2xl
                border-4
                border-beige-50
                bg-forest-800
                shadow-xl
                sm:block
              "
            >
              <img
                src="https://images.unsplash.com/photo-1707235164150-50ae8add80c4?w=300&h=300&fit=crop&auto=format"
                alt="Lush green landscape"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            {/* Decorative circle */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-8
                -left-8
                -z-10
                h-32
                w-32
                rounded-full
                border
                border-gold-500/20
              "
            />
          </motion.div>

          {/* =====================================================
              TEXT COLUMN
          ====================================================== */}

          <div
            className="
              order-1
              w-full
              lg:order-2
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
              Community & Sustainability
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
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                mb-6
                w-full
                font-display
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                text-forest-800
                lg:text-5xl
                xl:text-[3.4rem]
              "
            >
              People First,{" "}
              <span
                className="
                  font-normal
                  italic
                  text-moss-600
                "
              >
                Planet Always.
              </span>
            </motion.h2>

            {/* Description */}
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
                delay: 0.2,
              }}
              className="
                w-full
                max-w-2xl
                space-y-4
                font-body
                text-[15px]
                font-light
                leading-[1.8]
                text-earth-500
                lg:text-base
              "
            >
              <p>
                Renewable energy creates its greatest impact when the
                communities closest to the resource are part of the journey. At
                Earthkeepers', we aim to connect clean energy development with
                meaningful local opportunity.
              </p>

              <p>
                Through responsible biomass operations and partnerships with
                local and indigenous communities, we work toward an energy
                future that supports both people and the environment.
              </p>
            </motion.div>

            {/* =================================================
                IMPACT CARDS
            ================================================== */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-10
                grid
                grid-cols-2
                gap-3
              "
            >
              {impactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      group
                      rounded-2xl
                      border
                      border-beige-200
                      bg-beige-100/70
                      p-5
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-moss-400/40
                      hover:bg-white
                      hover:shadow-lg
                      hover:shadow-forest-900/5
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        mb-4
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-xl
                        bg-moss-500/10
                        text-moss-600
                        transition-colors
                        duration-300
                        group-hover:bg-gold-500/10
                        group-hover:text-gold-600
                      "
                    >
                      <Icon size={17} strokeWidth={1.7} />
                    </div>

                    {/* Value */}
                    <div
                      className="
                        font-display
                        text-base
                        font-semibold
                        text-forest-800
                      "
                    >
                      {item.value}
                    </div>

                    {/* Label */}
                    <div
                      className="
                        mt-1
                        font-body
                        text-xs
                        font-medium
                        leading-tight
                        text-earth-400
                      "
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* =================================================
                BOTTOM STATEMENT
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
                delay: 0.4,
              }}
              className="
                mt-8
                border-l-2
                border-gold-500
                pl-5
              "
            >
              <p
                className="
                  font-display
                  text-lg
                  font-medium
                  leading-relaxed
                  text-forest-800
                  md:text-xl
                "
              >
                Building a more sustainable energy future,
                <span className="italic text-moss-600"> together.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
