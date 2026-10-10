import { useState } from "react";
import { motion } from "framer-motion";
import {
  BrickWall,
  Droplets,
  Flame,
  Zap,
  Atom,
  Download,
  ArrowLeft,
} from "lucide-react";

import Energy from "/images/Energy.jpeg";
import Powerplant from "/images/power-plant.jpg";
import Graphene from "/images/graphene.png";
import Construction from "/images/construction_application.png";

type Application = {
  number: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
  download?: string | null;
};

const applications: Application[] = [
  {
    number: "01",
    icon: BrickWall,
    title: "Construction",
    description:
      "Processed wood biomass can be used as an alternative material component for construction applications, including biomass-based hollow blocks and other sustainable building materials.",
    image: Construction,
    download: "/downloads/2316LanceIanLopez.pdf",
  },
  {
    number: "02",
    icon: Droplets,
    title: "Biofuel & Energy",
    description:
      "Biomass resources can support the development of alternative fuels and energy systems, reducing dependence on conventional fossil-based sources.",
    image: Energy,
    download: null,
  },
  {
    number: "03",
    icon: Flame,
    title: "Renewable Fuel",
    description:
      "Processed biomass such as wood chips and pellets can serve as renewable solid fuel for industrial heat and electricity generation.",
    image:
      "https://images.unsplash.com/photo-1635513236283-dedcca2ebd4a?w=800&h=600&fit=crop&auto=format",
    download: null,
  },
  {
    number: "04",
    icon: Zap,
    title: "Modular Powerplants",
    description:
      "Scalable biomass power systems can provide reliable renewable electricity for communities, businesses, and areas with limited access to energy.",
    image: Powerplant,
    download: null,
  },
  {
    number: "05",
    icon: Atom,
    title: "Biomass Graphene",
    description:
      "Research into converting biomass-derived carbon into graphene-based materials for advanced applications, including high-performance materials, energy technologies, and defense-related research.",
    image: Graphene,
    download: null,
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

type ApplicationCardProps = {
  application: Application;
  index: number;
};

function ApplicationCard({
  application,
  index,
}: ApplicationCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const Icon = application.icon;
  const hasDownload = Boolean(application.download);

  return (
    <motion.div
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
      whileHover={
        hasDownload
          ? undefined
          : {
            y: -7,
          }
      }
      className={`
        group
        relative
        h-[430px]
        lg:col-span-2

        ${hasDownload ? "[perspective:1200px]" : ""}

        ${index === 3 ? "lg:col-start-2" : ""}
        ${index === 4 ? "lg:col-start-4" : ""}
      `}
    >
      {/* ================= FLIP WRAPPER ================= */}

      <div
        className={`
          relative
          h-full
          w-full
          transition-transform
          duration-700

          ${hasDownload
            ? `
                  [transform-style:preserve-3d]
                  lg:group-hover:[transform:rotateY(180deg)]
                `
            : ""
          }

          ${isFlipped
            ? "[transform:rotateY(180deg)]"
            : ""
          }
        `}
      >
        {/* ================= FRONT ================= */}

        <article
          className={`
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-beige-300
            bg-beige-50
            shadow-sm
            transition-all
            duration-300
            hover:shadow-xl
            hover:shadow-forest-900/10

            ${hasDownload
              ? `
                    [backface-visibility:hidden]
                    [-webkit-backface-visibility:hidden]
                  `
              : ""
            }
          `}
        >
          {/* ================= IMAGE ================= */}

          <div className="relative h-52 overflow-hidden">
            <motion.img
              src={application.image}
              alt={application.title}
              whileHover={{
                scale: 1.06,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                h-full
                w-full
                object-cover
              "
            />

            {/* Image Overlay */}
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
              <Icon
                size={19}
                strokeWidth={1.7}
              />
            </div>

            {/* Download Badge */}
            {hasDownload && (
              <div
                className="
                  absolute
                  right-5
                  top-5
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-forest-950/40
                  px-3
                  py-1.5
                  font-body
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  backdrop-blur-md
                "
              >
                <Download size={11} />

                File Available
              </div>
            )}
          </div>

          {/* ================= CONTENT ================= */}

          <div
            className="
              flex
              flex-1
              flex-col
              p-6
            "
          >
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

            {hasDownload && (
              <>
                {/* DESKTOP */}
                <div
                  className="
                    mt-auto
                    hidden
                    items-center
                    gap-2
                    pt-5
                    font-body
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-gold-500
                    lg:flex
                  "
                >
                  Hover to view file

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </div>

                {/* MOBILE / TABLET */}
                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  className="
                    mt-auto
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-gold-500/30
                    bg-gold-500/10
                    px-4
                    py-3
                    font-body
                    text-sm
                    font-semibold
                    text-gold-600
                    transition-all
                    duration-300
                    active:scale-[0.98]
                    lg:hidden
                  "
                >
                  View File

                  <Download size={16} />
                </button>
              </>
            )}
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
        </article>

        {/* ================= BACK ================= */}

        {hasDownload && (
          <article
            className="
              absolute
              inset-0
              flex
              h-full
              w-full
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-forest-700/30
              bg-forest-900
              p-7
              text-white
              shadow-2xl
              [backface-visibility:hidden]
              [-webkit-backface-visibility:hidden]
              [transform:rotateY(180deg)]
            "
          >
            {/* ================= BACKGROUND DECORATION ================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-moss-500/20
                blur-3xl
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-56
                w-56
                rounded-full
                bg-gold-400/10
                blur-3xl
              "
            />

            {/* ================= BACK CONTENT ================= */}

            <div className="relative">
              <div
                className="
                  mb-7
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    text-gold-300
                  "
                >
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                  />
                </div>

                <span
                  className="
                    font-display
                    text-sm
                    font-semibold
                    text-white/35
                  "
                >
                  {application.number}
                </span>
              </div>

              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-3
                  font-body
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-gold-300
                "
              >
                <span className="h-px w-7 bg-gold-300" />

                Downloadable Resource
              </div>

              <h3
                className="
                  font-display
                  text-3xl
                  font-semibold
                  leading-tight
                  text-white
                "
              >
                {application.title}
              </h3>

              <p
                className="
                  mt-5
                  font-body
                  text-sm
                  font-light
                  leading-[1.8]
                  text-white/65
                "
              >
                {application.description}
              </p>
            </div>

            {/* ================= ACTIONS ================= */}

            <div
              className="
                relative
                mt-auto
                space-y-3
              "
            >
              {/* Download */}
              <a
                href={application.download!}
                download
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="
                  group/download
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  px-5
                  py-4
                  font-body
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-gold-300/40
                  hover:bg-gold-400
                  hover:text-forest-950
                  active:scale-[0.98]
                "
              >
                <span>Download PDF</span>

                <Download
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover/download:translate-y-0.5
                  "
                />
              </a>

              {/* Open in new tab */}
              <a
                href={application.download!}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="
                  block
                  text-center
                  font-body
                  text-[10px]
                  font-medium
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-gold-300
                "
              >
                Open PDF in new tab
              </a>

              {/* MOBILE BACK */}
              <button
                type="button"
                onClick={() => setIsFlipped(false)}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-transparent
                  px-4
                  py-3
                  font-body
                  text-sm
                  font-medium
                  text-white/55
                  transition-all
                  duration-300
                  active:scale-[0.98]
                  lg:hidden
                "
              >
                <ArrowLeft size={15} />

                Back
              </button>
            </div>
          </article>
        )}
      </div>
    </motion.div>
  );
}

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
      {/* ================= BACKGROUND DECORATION ================= */}

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
            viewport={{
              once: true,
              amount: 0.3,
            }}
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
            <span className="font-normal italic text-moss-600">
              Work.
            </span>
          </motion.h2>

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {applications.map((application, index) => (
            <ApplicationCard
              key={application.number}
              application={application}
              index={index}
            />
          ))}
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

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
            <span className="italic text-moss-600">
              opportunity.
            </span>
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