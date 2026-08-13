import { StaticImageData } from "next/image";

import stihanov from "@/public/images/stihanov.png"
import lebed from "@/public/images/lebed.png"
import kubasov from "@/public/images/kubasov.png"
import georgiev from "@/public/images/georgiev.png"
import lysenko from "@/public/images/lysenko.png"
import nesterenko from "@/public/images/nesterenko.png"

export interface Slide {
  id: number;
  image: StaticImageData;
  name: string;
  role: string;
}

export const slidesDesktop: Slide[][] = [
  [{
    id: 1,
    image: stihanov,
    name: "Владимир Стиханов",
    role: "Директор Школы НЛП",
  },
  {
    id: 2,
    image: lebed,
    name: "Оксана Лебедь",
    role: "Наставник Школы НЛП",
  },
  {
    id: 3,
    image: kubasov,
    name: "Никита Кубасов",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 4,
    image: georgiev,
    name: "Сергей Георгиев",
    role: "Наставник Школы НЛП",
  },
  {
    id: 5,
    image: lysenko,
    name: "Валерия Лысенко",
    role: "Наставник Школы НЛП",
  },
  {
    id: 6,
    image: nesterenko,
    name: "Александр Нестеренко",
    role: "Наставник Школы НЛП",
  }],
];

export const slidesTablet: Slide[][] = [
  [{
    id: 1,
    image: stihanov,
    name: "Владимир Стиханов",
    role: "Директор Школы НЛП",
  },
  {
    id: 2,
    image: lebed,
    name: "Оксана Лебедь",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 3,
    image: kubasov,
    name: "Никита Кубасов",
    role: "Наставник Школы НЛП",
  },
  {
    id: 4,
    image: georgiev,
    name: "Сергей Георгиев",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 5,
    image: lysenko,
    name: "Валерия Лысенко",
    role: "Наставник Школы НЛП",
  },
  {
    id: 6,
    image: nesterenko,
    name: "Александр Нестеренко",
    role: "Наставник Школы НЛП",
  }],
];

export const slidesMobile: Slide[][] = [
  [{
    id: 1,
    image: stihanov,
    name: "Владимир Стиханов",
    role: "Директор Школы НЛП",
  }],
  [{
    id: 2,
    image: lebed,
    name: "Оксана Лебедь",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 3,
    image: kubasov,
    name: "Никита Кубасов",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 4,
    image: georgiev,
    name: "Сергей Георгиев",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 5,
    image: lysenko,
    name: "Валерия Лысенко",
    role: "Наставник Школы НЛП",
  }],
  [{
    id: 6,
    image: nesterenko,
    name: "Александр Нестеренко",
    role: "Наставник Школы НЛП",
  }],
];
