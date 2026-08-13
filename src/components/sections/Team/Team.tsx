import { useEffect, useRef, useState } from "react";
import InfiniteSlider from "./InfiniteSlider";
import { slidesDesktop, slidesTablet, slidesMobile } from "./slides";
import "./Team.css";

export default function Team() {
  const [titleVisible, setTitleVisible] = useState(false);
  const [teamCardsVisible, setTeamCardsVisible] = useState(false);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const teamCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const isDesktop = window.innerWidth >= 1440;

    // if (!isDesktop) {
    //   setTitleVisible(true);
    //   setTeamCardsVisible(true);

    //   return;
    // }

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setTitleVisible(true);
      setTeamCardsVisible(true);

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          if (entry.target === titleRef.current) setTitleVisible(true);
          if (entry.target === teamCardsRef.current) setTeamCardsVisible(true);

          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.2,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (teamCardsRef.current) observer.observe(teamCardsRef.current);

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
    <section className="team" id="team">
      <div className="container">
        <h2
          ref={titleRef}
          className="title"
          style={{
            ...fromBottom(titleVisible)
          }}
        >
          {"Благодарность"}
        </h2>

        <div
          ref={teamCardsRef}
          className="team__slider-desktop"
          style={{
            ...fromBottom(teamCardsVisible)
          }}
        >
          <InfiniteSlider slides={slidesDesktop} />
        </div>

        <div className="team__slider-tablet">
          <InfiniteSlider slides={slidesTablet} />
        </div>

        <div className="team__slider-mobile">
          <InfiniteSlider slides={slidesMobile} />
        </div>
      </div>
    </section>
  );
}
