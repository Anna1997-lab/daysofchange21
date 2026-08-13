import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "./Registration.css";

export default function Registration() {
  // const [titleVisible, setTitleVisible] = useState(false);
  // const [textVisible, setTextVisible] = useState(false);
  // const [buttonVisible, setButtonVisible] = useState(false);

  // const titleRef = useRef<HTMLDivElement>(null);
  // const textRef = useRef<HTMLDivElement>(null);
  // const buttonRef = useRef<HTMLAnchorElement>(null);

  // useEffect(() => {
  //   // const isDesktop = window.innerWidth >= 1440;

  //   // if (!isDesktop) {
  //   //   setTitleVisible(true);
  //   //   setTextVisible(true);
  //   //   setButtonVisible(true);

  //   //   return;
  //   // }

  //   if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
  //     setTitleVisible(true);
  //     setTextVisible(true);
  //     setButtonVisible(true);

  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         if (entry.target === titleRef.current) setTitleVisible(true);
  //         if (entry.target === textRef.current) setTextVisible(true);
  //         if (entry.target === buttonRef.current) setButtonVisible(true);

  //         observer.unobserve(entry.target);
  //       });
  //     }, {
  //       threshold: 0.2,
  //       rootMargin: "0px 0px -25px 0px",
  //     }
  //   );

  //   if (titleRef.current) observer.observe(titleRef.current);
  //   if (textRef.current) observer.observe(textRef.current);
  //   if (buttonRef.current) observer.observe(buttonRef.current);

  //   return () => observer.disconnect();
  // }, []);

  // const baseStyle = {
  //   transition: "opacity 0.75s ease, transform 0.75s ease",
  // };

  // const fromBottom = (visible: boolean) => ({
  //   ...baseStyle,
  //   opacity: visible ? 1 : 0,
  //   transform: visible ? "translateY(0)" : "translateY(100px)",
  // });

  return (
    <section className="registration" id="registration">
      <div className="container">
        <div
          // ref={titleRef}
          className="registration__title-container"
          // style={{
          //   ...fromBottom(titleVisible)
          // }}
        >
          <div className="registration__icon">
            <Image
              src="/images/gift.svg"
              alt="gift icon"
              width={32}
              height={32}
            />
          </div>

          <h2 className="title">
            {"Участие полностью "}
            <span>{"бесплатное"}</span>
          </h2>
        </div>

        <div
          // ref={textRef}
          className="registration__texts"
          // style={{
          //   ...fromBottom(textVisible)
          // }}
        >
          <p className="text">
            {"Проект проводится исключительно в образовательных "}
            {"целях в рамках моей практики по НЛП."}
          </p>

          <p className="text">
            {"Главная цель — получить практический опыт "}
            {"проведения онлайн-проекта и помочь участникам "}
            {"освоить техники НЛП для формирования полезных привычек."}
          </p>
        </div>

        <a
          href="https://t.me/DaysOfChange21"
          target="_blank"
          rel="noopener noreferrer"
          // ref={buttonRef}
          className="button"
          aria-label="Наш Telegram"
          // style={{
          //   ...fromBottom(buttonVisible)
          // }}
        >
          {"Принять участие"}
        </a>
      </div>
    </section>
  );
}
