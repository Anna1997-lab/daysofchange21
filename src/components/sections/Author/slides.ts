import { StaticImageData } from "next/image";

import diploma1 from "@/public/images/diploma1.png"
import diploma2 from "@/public/images/diploma2.png"
import diploma3 from "@/public/images/diploma3.png"
import diploma4 from "@/public/images/diploma4.png"

export interface Slide {
  id: number;
  image: StaticImageData;
  alt: string;
  width: number;
  height: number;
}

export const slides: Slide[] = [
  {
    id: 1,
    image: diploma1,
    alt: "Диплом 1",
    width: 700,
    height: 477,
  },
  {
    id: 2,
    image: diploma2,
    alt: "Диплом 2",
    width: 700,
    height: 494,
  },
  {
    id: 3,
    image: diploma3,
    alt: "Диплом 3",
    width: 700,
    height: 478,
  },
  {
    id: 4,
    image: diploma4,
    alt: "Диплом 4",
    width: 700,
    height: 487,
  },
];
