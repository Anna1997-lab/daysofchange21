import Image from "next/image";

import "./Registration.css";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

export default function Registration() {
    const {
      ref: titleRef,
      visible: titleVisible,
    } = useScrollReveal<HTMLDivElement>();

    const {
      ref: textRef,
      visible: textVisible,
    } = useScrollReveal<HTMLDivElement>();

    const {
      ref: buttonRef,
      visible: buttonVisible,
    } = useScrollReveal<HTMLAnchorElement>();

  return (
    <section className="registration" id="registration">
      <div className="container">
        <div
          className="registration__title-container section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
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
          className="registration__texts section-animka"
          ref={textRef}
          data-reveal="bottom"
          data-visible={textVisible}
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
          href="https://t.me/days21change2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Наш Telegram"
          className="button section-animka"
          ref={buttonRef}
          data-reveal="bottom"
          data-visible={buttonVisible}
        >
          {"Принять участие"}
        </a>
      </div>
    </section>
  );
}
