import localFont from "next/font/local";

export const Inter = localFont({
  src: [
    {
      path: "./../../../public/fonts/Inter-Regular.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/Inter-Italic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

export const PlayfairDisplay = localFont({
  src: [
    {
      path: "./../../../public/fonts/PlayfairDisplay-Regular.ttf",
      weight: "400 900",
      style: "normal",
    },
    {
      path: "./../../../public/fonts/PlayfairDisplay-Italic.ttf",
      weight: "400 900",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});
