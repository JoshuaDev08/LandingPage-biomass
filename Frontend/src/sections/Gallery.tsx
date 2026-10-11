import { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import GalleryOne from "../assets/gallery/gallery-1.jpg";
import GalleryTwo from "../assets/gallery/gallery-2.jpg";
import GalleryThree from "../assets/gallery/gallery-3.jpg";
import GalleryFour from "../assets/gallery/gallery-4.jpg";
import GalleryFive from "../assets/gallery/gallery-5.JPG";
import GallerySix from "../assets/gallery/gallery-6.jpg";
import GallerySeven from "../assets/gallery/gallery-7.JPG";
import GalleryEight from "../assets/gallery/gallery-8.jpg";

const galleryItems = [
  {
    image: GalleryOne,
    number: "01",
    title: "Sustainable Biomass",
    description:
      "Transforming natural resources into responsible renewable energy solutions.",
  },
  {
    image: GalleryTwo,
    number: "02",
    title: "Community Partnerships",
    description:
      "Working alongside local communities to create long-term sustainable value.",
  },
  {
    image: GalleryThree,
    number: "03",
    title: "Palawan Operations",
    description:
      "Building renewable-energy opportunities while respecting the natural environment.",
  },
  {
    image: GalleryFour,
    number: "04",
    title: "A Cleaner Future",
    description:
      "Creating practical biomass solutions for a more sustainable Philippines.",
  },
  {
    image: GalleryFive,
    number: "05",
    title: "Sustainable Biomass",
    description:
      "Transforming natural resources into responsible renewable energy solutions.",
  },
  {
    image: GallerySix,
    number: "06",
    title: "Community Partnerships",
    description:
      "Working alongside local communities to create long-term sustainable value.",
  },
  {
    image: GallerySeven,
    number: "07",
    title: "Palawan Operations",
    description:
      "Building renewable-energy opportunities while respecting the natural environment.",
  },
  {
    image: GalleryEight,
    number: "08",
    title: "A Cleaner Future",
    description:
      "Creating practical biomass solutions for a more sustainable Philippines.",
  },
];

type GalleryCardProps = {
  item: (typeof galleryItems)[number];
  index: number;
  total: number;
  scrollProgress: MotionValue<number>;
};

function GalleryCard({ item, index, total, scrollProgress }: GalleryCardProps) {
  /*
      Example with 4 images:
  
      Image 1 = 0.00 → 0.25
      Image 2 = 0.25 → 0.50
      Image 3 = 0.50 → 0.75
      Image 4 = 0.75 → 1.00
  
      Each image:
      RIGHT → CENTER → STAYS
    */

  const sectionSize = 1 / total;

  const start = index * sectionSize;

  /*
      The image reaches center before the next
      image begins its animation.
  
      Increase 0.5 if you want slower entry.
      Decrease it if you want faster entry.
    */
  const arrive = start + sectionSize * 0.5;

  /*
      Every image comes from the RIGHT.
  
      After reaching 0%, Framer Motion keeps
      the final value at 0%, so the image stays
      centered forever.
    */
  const x = useTransform(scrollProgress, [start, arrive], ["115%", "0%"]);

  /*
      Subtle scale makes the card feel less flat.
    */
  const scale = useTransform(scrollProgress, [start, arrive], [0.96, 1]);

  /*
      Subtle image zoom while entering.
    */
  const imageScale = useTransform(scrollProgress, [start, arrive], [1.08, 1]);

  return (
    <motion.article
      style={{
        x,
        scale,
        zIndex: index + 10,
      }}
      className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        px-6
        md:px-10
        lg:px-12
      "
    >
      <div
        className="
          relative
          mx-auto
          w-full
          max-w-6xl
        "
      >
        {/* ================= IMAGE CARD ================= */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            bg-forest-900
            shadow-[0_35px_100px_rgba(0,0,0,0.45)]
          "
        >
          <motion.img
            src={item.image}
            alt={item.title}
            style={{
              scale: imageScale,
            }}
            className="
              h-[500px]
              w-full
              object-cover
              sm:h-[540px]
              md:h-[600px]
              lg:h-[660px]
            "
          />

          {/* ================= DARK OVERLAY ================= */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-forest-950/90
              via-forest-950/15
              to-transparent
            "
          />

          {/* ================= IMAGE NUMBER ================= */}

          <div
            className="
              absolute
              left-6
              top-6
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-black/10
              font-display
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              md:left-8
              md:top-8
            "
          >
            {item.number}
          </div>

          {/* ================= CONTENT ================= */}

          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              p-7
              md:p-10
              lg:p-12
            "
          >
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
                tracking-[0.24em]
                text-gold-300
              "
            >
              <span className="h-px w-8 bg-gold-300" />
              Gallery
            </div>

            <h3
              className="
                max-w-2xl
                font-display
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.03em]
                text-white
                md:text-5xl
                lg:text-6xl
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-4
                max-w-xl
                font-body
                text-sm
                leading-relaxed
                text-white/65
                md:text-base
              "
            >
              {item.description}
            </p>

            {/* Counter */}
            <div
              className="
                mt-6
                flex
                items-center
                gap-3
              "
            >
              <span
                className="
                  font-body
                  text-xs
                  font-semibold
                  text-white
                "
              >
                {item.number}
              </span>

              <span
                className="
                  h-px
                  w-8
                  bg-white/25
                "
              />

              <span
                className="
                  font-body
                  text-xs
                  text-white/40
                "
              >
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Gallery() {
  const galleryRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={galleryRef}
      id="gallery"
      className="
            relative
            h-[550vh]
            bg-forest-950
        "
    >
      {/* ======================================================
            STICKY VIEWPORT
        ====================================================== */}

      <div
        className="
                sticky
                top-0
                h-screen
                overflow-hidden
                "
      >
        {/* ================= BACKGROUND ================= */}

        <div
          className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-forest-950
                    via-forest-900
                    to-forest-950
                "
        />

        {/* ================= AMBIENT GLOW ================= */}

        <div
          className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-1/2
                    h-[500px]
                    w-[500px]
                    -translate-y-1/2
                    rounded-full
                    bg-moss-500/10
                    blur-3xl
                "
        />

        <div
          className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-gold-500/5
                    blur-3xl
                "
        />

        <div
          className="
                    pointer-events-none
                    absolute
                    left-0
                    right-0
                    top-7
                    z-[100]
                    mx-auto
                    flex
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                    md:px-10
                    lg:px-12
                "
        >
          <div>
            <div
              className="
                            flex
                            items-center
                            gap-3
                            font-body
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.25em]
                            text-gold-400
                        "
            >
              <span className="h-px w-7 bg-gold-400" />
              Our Gallery
            </div>

            <h2
              className="
                            mt-2
                            font-display
                            text-xl
                            font-medium
                            text-white
                            md:text-2xl
                        "
            >
              Through Our Lens
            </h2>
          </div>

          <div
            className="
                        hidden
                        items-center
                        gap-3
                        font-body
                        text-[9px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-white/40
                        md:flex
                        "
          >
            Keep scrolling
            <span className="h-px w-10 bg-white/20" />
          </div>
        </div>

        <div
          className="
                    relative
                    h-full
                    w-full
                "
        >
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.number}
              item={item}
              index={index}
              total={galleryItems.length}
              scrollProgress={scrollYProgress}
            />
          ))}
        </div>

        <motion.div
          style={{
            scaleX: scrollYProgress,
          }}
          className="
                    absolute
                    bottom-0
                    left-0
                    z-[200]
                    h-[2px]
                    w-full
                    origin-left
                    bg-gold-400
                "
        />
      </div>
    </section>
  );
}
