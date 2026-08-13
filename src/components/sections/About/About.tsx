import { useEffect, useRef, useState } from "react";

import "./About.css";

export default function About() {
  // const [titleVisible, setTitleVisible] = useState(false);
  // const [textVisible, setTextVisible] = useState(false);

  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const textRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // const isDesktop = window.innerWidth >= 1440;

  //   // if (!isDesktop) {
  //   //   setTitleVisible(true);
  //   //   setTextVisible(true);

  //   //   return;
  //   // }

  //   if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
  //     setTitleVisible(true);
  //     setTextVisible(true);

  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         if (entry.target === titleRef.current) setTitleVisible(true);
  //         if (entry.target === textRef.current) setTextVisible(true);

  //         observer.unobserve(entry.target);
  //       });
  //     }, {
  //       threshold: 0.5,
  //       rootMargin: "0px 0px -25px 0px",
  //     }
  //   );

  //   if (titleRef.current) observer.observe(titleRef.current);
  //   if (textRef.current) observer.observe(textRef.current);

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
    <section className="about" id="about">
      <div className="container">
        <h2
          // ref={titleRef}
          className="title"
          // style={{
          //   ...fromBottom(titleVisible),
          // }}
        >
          {"Что такое проект"} <br />
          {"«21 день новых привычек»?"}
        </h2>

        <div
          // ref={textRef}
          // style={{
          //   ...fromBottom(textVisible),
          // }}
        >
          <p className="text first">
            {"Это бесплатный практический онлайн-проект, "}
            {"созданный в рамках обучения в "}
            <strong>{"Школе НЛП Владимира Стиханова"}</strong>
            {"."}
          </p>
          <p className="text">
            {"На протяжении 21 дня участники будут выполнять "}
            {"небольшие ежедневные задания (10–15 минут), "}
            {"основанные на современных техниках НЛП, направленных "}
            {"на формирование новых полезных привычек, повышение "}
            {"осознанности и развитие личной эффективности."}
          </p>
        </div>
      </div>
    </section>
  );
}
