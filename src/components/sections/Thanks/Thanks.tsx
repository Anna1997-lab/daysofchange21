import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import "./Thanks.css";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

export default function Thanks() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: textRef,
    visible: textVisible,
  } = useScrollReveal<HTMLDivElement>();

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
          className="thanks__title-container section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
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
          className="thanks__text-container section-animka"
          ref={textRef}
          data-reveal="bottom"
          data-visible={textVisible}
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
