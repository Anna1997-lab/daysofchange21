import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "./Hero.css"

export default function Hero() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // const isDesktop = window.innerWidth >= 1440;

    // if (!isDesktop) {
    //   setTitleVisible(true);
    //   setTextVisible(true);
    //   setButtonVisible(true);

    //   return;
    // }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      setTextVisible(true);
      setButtonVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) setTitleVisible(true);
          if (entry.target === textRef.current) setTextVisible(true);
          if (entry.target === buttonRef.current) setButtonVisible(true);

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);

    return () => observer.disconnect();
  }, []);

  const baseStyle = {
    transition: "opacity 0.75s ease, transform 0.75s ease",
  };

  const fromBottom = (visible: boolean) => ({
    ...baseStyle,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(100px)",
  });

  const fromLeft = (visible: boolean) => ({
    ...baseStyle,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(-100px)',
  });

  const fromRight = (visible: boolean) => ({
    ...baseStyle,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : 'translateX(100px)',
  });

  return (
    <section className="hero" id="hero">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        sizes="(max-width: 767px) 500vw, (max-width: 1439px) 250vw, 100vw"
        className="hero__bg"
      />
      <div className="container">
        <h1
          ref={titleRef}
          className="hero__title"
          style={{
            ...fromBottom(titleVisible)
          }}
        >
          {"21 день"} <br />
          {"новых привычек"}
        </h1>
        <h2
          ref={textRef}
          className="hero__subtitle"
          style={{
            ...fromBottom(textVisible)
          }}
        >
          {"Бесплатный онлайн-проект по развитию "} <br className="hero__subtitle-break" />
          {"полезных привычек с использованием техник НЛП"}
        </h2>
        <button
          ref={buttonRef}
          className="button"
          style={{
            ...fromRight(buttonVisible)
          }}
        >
          <a
            href="https://t.me/DaysOfChange21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Наш Telegram"
          >
            {"Принять участие"}
          </a>
        </button>
      </div>
    </section>
  );
}
