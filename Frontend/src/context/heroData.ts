import Hero1 from "../assets/HeroOne.jpg";
import Hero2 from "../assets/Hero2.jpg";
import Hero3 from "../assets/Hero3.jpg";
import Hero4 from "../assets/Hero4.jpg";

export type HeroImage = {
  src: string;
  alt: string;
};

export const heroImages : HeroImage[] = [
  {
    src: Hero1,
    alt: "Sustainable forest landscape",
  },
  {
    src: Hero2,
    alt: "Lush green forest",
  },
  {
    src: Hero3,
    alt: "Forest canopy",
  },
  {
    src: Hero4,
    alt: "Forest canopy",
  },
];
