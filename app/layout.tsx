import type { Metadata, Viewport } from "next";
import { Inter, PlayfairDisplay } from "@/src/components/common/fonts";
// import { Inter, Playfair_Display } from "next/font/google";

import "@/styles/globals.css";

// const inter = Inter({
//   subsets: ["latin", "cyrillic"],
//   variable: "--font-inter",
//   display: "swap",
// });

// const playfair = Playfair_Display({
//   subsets: ["latin", "cyrillic"],
//   style: ["normal", "italic"],
//   variable: "--font-playfair",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "21 день новых привычек",
  description: "Онлайн-практикум по развитию полезных привычек с помощью техник НЛП.",
  icons: {
    icon: "/images/favicon.ico",
  },
};

// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="ru">
      <body className={`${Inter.variable} ${PlayfairDisplay.variable}`}>
        {children}
      </body>
    </html>
  )
}
