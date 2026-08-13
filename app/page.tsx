"use client";

import {
  Team,
  Hero,
  About,
  Author,
  Footer,
  Header,
  Thanks,
  Program,
  ForWhom,
  Schedule,
  Registration,
} from "@/src/components";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ForWhom />
        <Program />
        <Schedule />
        <Author />
        <Thanks />
        <Team />
        <Registration />
      </main>
      <Footer />
    </>
  )
}
