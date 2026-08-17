import { motion } from "framer-motion";

const stats = [
  {
    value: "Palawan",
    label: "First Operations",
  },
  {
    value: "5+",
    label: "Community Partners",
  },
  {
    value: "100%",
    label: "Non-Profit Purpose",
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

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function About() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-beige-100 py-24 lg:py-32"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-96
          w-96
          rounded-full
          bg-moss-500/5
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="grid items-center gap-16 lg:grid-cols-2 xl:gap-24">
          {/* ================= TEXT ================= */}

          <div>
            {/* Section Label */}
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
              About Us
            </motion.div>

            {/* Heading */}
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
                mb-7
                max-w-xl
                font-display
                text-4xl
                font-semibold
                leading-[1.08]
                tracking-[-0.03em]
                text-forest-800
                lg:text-5xl
              "
            >
              Rooted in Nature,
              <br />
              <span className="font-normal italic text-moss-600">
                Built for the Future.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="
                max-w-xl
                space-y-5
                font-body
                text-[15px]
                leading-[1.8]
                text-earth-500
              "
            >
              <p>
                Earthkeepers' Biomass Solutions Inc. is a Philippine
                renewable-energy company focused on developing sustainable
                biomass solutions that create real value — for communities, for
                the environment, and for the nation's energy future.
              </p>

              <p>
                With our first operations rooted in{" "}
                <strong className="font-semibold text-forest-700">
                  Palawan
                </strong>
                , the Philippines' last ecological frontier, we combine
                responsible resource management with biomass technology to build
                a cleaner and more equitable energy future.
              </p>

              <p>
                We operate with a non-profit purpose. Every kilowatt generated
                and every community partnership built contributes to our larger
                mission of long-term energy sustainability for the Philippines.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="
                mt-10
                grid
                grid-cols-3
                border-t
                border-beige-300
                pt-8
              "
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`
                    ${index !== 0 ? "border-l border-beige-300" : ""}
                    px-4
                    first:pl-0
                    last:pr-0
                  `}
                >
                  <div
                    className="
                      font-display
                      text-xl
                      font-semibold
                      leading-none
                      text-gold-500
                      md:text-2xl
                    "
                  >
                    {stat.value}
                  </div>

                  <div
                    className="
                      mt-2
                      max-w-[100px]
                      font-body
                      text-[10px]
                      font-medium
                      uppercase
                      leading-[1.4]
                      tracking-[0.08em]
                      text-earth-500
                    "
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= IMAGE ================= */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Image */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[2rem]
                bg-forest-800
                shadow-2xl
                shadow-forest-900/20
              "
            >
              <motion.img
                whileHover={{ scale: 1.035 }}
                transition={{ duration: 0.6 }}
                src="https://images.unsplash.com/photo-1746616581870-464a02406494?w=900&h=700&fit=crop&auto=format"
                alt="Dense Philippine forest covering a verdant mountainside"
                className="
                  h-[460px]
                  w-full
                  object-cover
                  lg:h-[540px]
                "
              />

              {/* Image overlay */}
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
              <div className="absolute bottom-6 left-6">
                <div
                  className="
                    mb-1
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-beige-100/70
                  "
                >
                  Our Beginning
                </div>

                <div
                  className="
                    font-display
                    text-2xl
                    font-medium
                    text-beige-50
                  "
                >
                  Palawan
                </div>
              </div>
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="
                absolute
                -bottom-6
                -left-4
                rounded-2xl
                border
                border-beige-200
                bg-beige-50
                px-5
                py-4
                shadow-xl
              "
            >
              <div
                className="
                  font-display
                  text-xl
                  font-semibold
                  text-gold-500
                "
              >
                Ecological Frontier
              </div>

              <div
                className="
                  mt-1
                  font-body
                  text-[10px]
                  font-medium
                  uppercase
                  leading-tight
                  tracking-[0.08em]
                  text-earth-500
                "
              >
                People · Nature · Energy
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
