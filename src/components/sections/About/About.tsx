import { useScrollReveal } from "../../common/hooks/useScrollReveal";

import "./About.css";

export default function About() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: textRef,
    visible: textVisible,
  } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="about" id="about">
      <div className="container">
        <h2
          className="title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
        >
          {"Что такое проект"} <br />
          {"«21 день новых привычек»?"}
        </h2>

        <div
          className="section-animka"
          ref={textRef}
          data-reveal="bottom"
          data-visible={textVisible}
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
