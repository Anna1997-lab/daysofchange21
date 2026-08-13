import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "./Thanks.css";

export default function Thanks() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const isDesktop = window.innerWidth >= 1440;

    // if (!isDesktop) {
    //   setTitleVisible(true);
    //   setTextVisible(true);

    //   return;
    // }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      setTextVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) setTitleVisible(true);
          if (entry.target === textRef.current) setTextVisible(true);

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (textRef.current) observer.observe(textRef.current);

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

  return (
    <section className="thanks" id="thanks">
      <Image
        src="/images/logo-bg.png"
        alt="logo-bg image"
        width={585}
        height={585}
        className="thanks__bg"
      />
      <div className="container">
        <div
          ref={titleRef}
          className="thanks__title-container"
          style={{
            ...fromBottom(titleVisible)
          }}
        >
          <Image
            src="/images/heart.svg"
            alt="heart icon"
            width={22}
            height={22}
            className="thanks__img-heart"
          />

          <h2 className="thanks__title">
            {"Проект создан с благодарностью"} <br />
            {"Школе НЛП Владимира Стиханова"}
          </h2>
        </div>

        <div
          ref={textRef}
          className="thanks__text-container"
          style={{
            ...fromBottom(textVisible)
          }}
        >
          <div className="thanks__texts">
            <p className="thanks__text">
              {"От всей души благодарю Школу НЛП Владимира Стиханова за знания, "}
              {"поддержку, профессионализм и возможность развиваться в профессии."}
            </p>

            <p className="thanks__text">
              {"Особую благодарность хочу выразить людям, которые вдохновляют, "}
              {"поддерживают и передают свой опыт."}
            </p>
          </div>

          <Image
            src="/images/dots.svg"
            alt="dots icon"
            width={34}
            height={6}
            className="thanks__img-dots"
          />
        </div>
      </div>
    </section>
  );
}
