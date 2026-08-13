import { useEffect, useState } from "react";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

import "./Schedule.css";

export default function Schedule() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: weekOneRef,
    visible: weekOneVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: weekTwoRef,
    visible: weekTwoVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: weekThreeRef,
    visible: weekThreeVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: listOneRef,
    visible: listOneVisible,
  } = useScrollReveal<HTMLUListElement>();

  const {
    ref: listTwoRef,
    visible: listTwoVisible,
  } = useScrollReveal<HTMLUListElement>();

  const {
    ref: listThreeRef,
    visible: listThreeVisible,
  } = useScrollReveal<HTMLUListElement>();

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1440px)").matches);
  }, []);

  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <h2
          className="title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
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
            className="schedule__week week-1 section-animka"
            ref={weekOneRef}
            data-reveal={isDesktop ? "left" : "right"}
            data-visible={weekOneVisible}
          >
            {"Неделя 1"}
          </h3>
          <h3
            className="schedule__week week-2 section-animka"
            ref={weekTwoRef}
            data-reveal="right"
            data-visible={weekTwoVisible}
          >
            {"Неделя 2"}
          </h3>
          <h3
            className="schedule__week week-3 section-animka"
            ref={weekThreeRef}
            data-reveal={isDesktop ? "left" : "right"}
            data-visible={weekThreeVisible}
          >
            {"Неделя 3"}
          </h3>

          <ul
            className="schedule__list list-1 section-animka"
            ref={listOneRef}
            data-reveal={isDesktop ? "left" : "right"}
            data-visible={listOneVisible}
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
            className="schedule__list list-2 section-animka"
            ref={listTwoRef}
            data-reveal="right"
            data-visible={listTwoVisible}
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
            className="schedule__list list-3 section-animka"
            ref={listThreeRef}
            data-reveal={isDesktop ? "left" : "right"}
            data-visible={listThreeVisible}
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
