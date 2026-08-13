import { useEffect, useRef, useState } from "react";

import "./Schedule.css";

export default function Schedule() {
  // const [titleVisible, setTitleVisible] = useState(false);

  // const [weekOneVisible, setWeekOneVisible] = useState(false);
  // const [weekTwoVisible, setWeekTwoVisible] = useState(false);
  // const [weekThreeVisible, setWeekThreeVisible] = useState(false);

  // const [listOneVisible, setListOneVisible] = useState(false);
  // const [listTwoVisible, setListTwoVisible] = useState(false);
  // const [listThreeVisible, setListThreeVisible] = useState(false);

  // const titleRef = useRef<HTMLHeadingElement>(null);

  // const weekOneRef = useRef<HTMLHeadingElement>(null);
  // const weekTwoRef = useRef<HTMLHeadingElement>(null);
  // const weekThreeRef = useRef<HTMLHeadingElement>(null);

  // const listOneRef = useRef<HTMLUListElement>(null);
  // const listTwoRef = useRef<HTMLUListElement>(null);
  // const listThreeRef = useRef<HTMLUListElement>(null);

  // const [windowInner, setWindowInner] = useState("isDesktop");

  // useEffect(() => {
  //   // const isDesktop = window.innerWidth >= 1440;
  //   // const isTablet = window.innerWidth >= 768;

  //   if (window.innerWidth >= 1440) {
  //     setWindowInner("isDesktop");
  //   } else {
  //     setWindowInner("isTablet");
  //   }

  //   // if (!isDesktop) {
  //   //   setTitleVisible(true);

  //   //   setWeekOneVisible(true);
  //   //   setWeekTwoVisible(true);
  //   //   setWeekThreeVisible(true);

  //   //   setListOneVisible(true);
  //   //   setListTwoVisible(true);
  //   //   setListThreeVisible(true);

  //   //   return;
  //   // }

  //   if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
  //     setTitleVisible(true);

  //     setWeekOneVisible(true);
  //     setWeekTwoVisible(true);
  //     setWeekThreeVisible(true);

  //     setListOneVisible(true);
  //     setListTwoVisible(true);
  //     setListThreeVisible(true);

  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         if (entry.target === titleRef.current) setTitleVisible(true);

  //         if (entry.target === weekOneRef.current) setWeekOneVisible(true);
  //         if (entry.target === weekTwoRef.current) setWeekTwoVisible(true);
  //         if (entry.target === weekThreeRef.current) setWeekThreeVisible(true);

  //         if (entry.target === listOneRef.current) setListOneVisible(true);
  //         if (entry.target === listTwoRef.current) setListTwoVisible(true);
  //         if (entry.target === listThreeRef.current) setListThreeVisible(true);

  //         observer.unobserve(entry.target);
  //       });
  //     }, {
  //       threshold: 0.2,
  //       rootMargin: "0px 0px -25px 0px",
  //     }
  //   );

  //   if (titleRef.current) observer.observe(titleRef.current);

  //   if (weekOneRef.current) observer.observe(weekOneRef.current);
  //   if (weekTwoRef.current) observer.observe(weekTwoRef.current);
  //   if (weekThreeRef.current) observer.observe(weekThreeRef.current);

  //   if (listOneRef.current) observer.observe(listOneRef.current);
  //   if (listTwoRef.current) observer.observe(listTwoRef.current);
  //   if (listThreeRef.current) observer.observe(listThreeRef.current);

  //   return () => observer.disconnect();
  // }, []);

  // const baseStyle = {
  //   transition: "opacity 1s ease, transform 1s ease",
  // };

  // const fromBottom = (visible: boolean) => ({
  //   ...baseStyle,
  //   opacity: visible ? 1 : 0,
  //   transform: visible ? "translateY(0)" : "translateY(100px)",
  // });

  // const fromLeft = (visible: boolean) => ({
  //   ...baseStyle,
  //   opacity: visible ? 1 : 0,
  //   transform: visible ? 'translateX(0)' : 'translateX(-100px)',
  // });

  // const fromRight = (visible: boolean) => ({
  //   ...baseStyle,
  //   opacity: visible ? 1 : 0,
  //   transform: visible ? 'translateX(0)' : 'translateX(100px)',
  // });

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h2
          // ref={titleRef}
          className="title"
          // style={{
          //   ...fromBottom(titleVisible)
          // }}
        >
          {"Расписание проекта"}
        </h2>

        <div className="schedule__container">
          <div className="schedule__green-line green-line-1" />
          <div className="schedule__green-line green-line-2" />
          <div className="schedule__green-line green-line-3" />

          <div className="schedule__line line-1">
            <div className="solid" />
            <div className="dashed" />
          </div>

          <div className="schedule__line line-2">
            <div className="solid" />
            <div className="dashed" />
          </div>

          <div className="schedule__line line-3 last">
            <div className="solid" />
            <div className="dashed" />
          </div>

          <div className="schedule__dashed-line dashed-line-1" />
          <div className="schedule__dashed-line dashed-line-2" />

          <div className="schedule__circle circle-1">{"I"}</div>
          <div className="schedule__circle circle-2">{"II"}</div>
          <div className="schedule__circle circle-3">{"III"}</div>

          <h3
            // ref={weekOneRef}
            className="schedule__week week-1"
            // style={{
            //   ...(windowInner === "isTablet" ? fromRight(weekOneVisible) : fromLeft(weekOneVisible))
            // }}
          >
            {"Неделя 1"}
          </h3>
          <h3
            // ref={weekTwoRef}
            className="schedule__week week-2"
            // style={{
            //   ...fromRight(weekTwoVisible)
            // }}
          >
            {"Неделя 2"}
          </h3>
          <h3
            // ref={weekThreeRef}
            className="schedule__week week-3"
            // style={{
            //   ...(windowInner === "isTablet" ? fromRight(weekThreeVisible) : fromLeft(weekThreeVisible))
            // }}
          >
            {"Неделя 3"}
          </h3>

          <ul
            // ref={listOneRef}
            className="schedule__list list-1"
            // style={{
            //   ...(windowInner === "isTablet" ? fromRight(listOneVisible) : fromLeft(listOneVisible))
            // }}
          >
            <li className="schedule__list-item">
              {"Цели"}
            </li>
            <li className="schedule__list-item">
              {"Ценности"}
            </li>
            <li className="schedule__list-item">
              {"Мотивация"}
            </li>
            <li className="schedule__list-item">
              {"Ограничивающие убеждения"}
            </li>
          </ul>

          <ul
            // ref={listTwoRef}
            className="schedule__list list-2"
            // style={{
            //   ...fromRight(listTwoVisible)
            // }}
          >
            <li className="schedule__list-item">
              {"Ресурсные состояния"}
            </li>
            <li className="schedule__list-item">
              {"Якорение"}
            </li>
            <li className="schedule__list-item">
              {"Внутренний диалог"}
            </li>
            <li className="schedule__list-item">
              {"Субмодальности"}
            </li>
          </ul>

          <ul
            // ref={listThreeRef}
            className="schedule__list list-3"
            // style={{
            //   ...(windowInner === "isTablet" ? fromRight(listThreeVisible) : fromLeft(listThreeVisible))
            // }}
          >
            <li className="schedule__list-item">
              {"План на будущее"}
            </li>
            <li className="schedule__list-item">
              {"Закрепление привычки"}
            </li>
            <li className="schedule__list-item">
              {"Подведение итогов"}
            </li>
            <li className="schedule__list-item">
              {"Формирование новой стратегии"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
