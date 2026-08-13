import { useEffect, useRef, useState } from "react";
import { cards } from "./Card/data";
import Card from "./Card/Card";

import "./ForWhom.css";

export default function ForWhom() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const isDesktop = window.innerWidth >= 1440;

    // if (!isDesktop) {
    //   setTitleVisible(true);
    //   setCardsVisible(true);

    //   return;
    // }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      setCardsVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) setTitleVisible(true);
          if (entry.target === cardsRef.current) setCardsVisible(true);

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

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
    <section className="for-whom" id="forwhom">
      <div className="container">
        <div
          ref={titleRef}
          className="for-whom__title"
          style={{
            ...fromBottom(titleVisible)
          }}
        >
          <h2 className="title">
            {"Для кого этот проект?"}
          </h2>
          <h3 className="subtitle">
            {"Подходит тем, кто хочет:"}
          </h3>
        </div>

        <div
          ref={cardsRef}
          className="for-whom__cards"
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(25px)",
                transition: "opacity 0.75s ease, transform 0.75s ease",
                transitionDelay: cardsVisible ? `${index * 0.15}s` : "0s",
              }}
            >
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
