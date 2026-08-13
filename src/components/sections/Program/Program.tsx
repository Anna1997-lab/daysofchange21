import { useEffect, useRef, useState } from "react";
import { dailyItems } from "./data";

import "./Program.css";

export default function Program() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [capsulesVisible, setCapsulesVisible] = useState(false);

  const titleRef = useRef<HTMLDivElement>(null);
  const capsulesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const isDesktop = window.innerWidth >= 1440;

    // if (!isDesktop) {
    //   setTitleVisible(true);
    //   setCapsulesVisible(true);

    //   return;
    // }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      setCapsulesVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) setTitleVisible(true);
          if (entry.target === capsulesRef.current) setCapsulesVisible(true);

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (capsulesRef.current) observer.observe(capsulesRef.current);

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
    <section className="program" id="program">
      <div className="container">
        <div
          ref={titleRef}
          className="program__title"
          style={{
            ...fromBottom(titleVisible)
          }}
        >
          <h2 className="title">
            {"Что будет в течение 21 дня?"}
          </h2>
          <h3 className="subtitle">
            {"Каждый день участник получает:"}
          </h3>
        </div>

        <div
          ref={capsulesRef}
          className="program__capsules"
          style={{
            ...fromBottom(capsulesVisible)
          }}
        >
          <div className="program__capsules-row">
            {
              dailyItems.slice(0, 2).map((item) => (
                <div key={item} className="program__capsule">
                  {item}
                </div>
              ))
            }
          </div>

          <div className="program__capsules-row">
            {
              dailyItems.slice(2).map((item) => (
                <div key={item} className="program__capsule">
                  {item}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
