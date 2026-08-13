import Image from "next/image";
import { slides } from "./slides";
import InfiniteSlider from "./InfiniteSlider";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

import "./Author.css";

export default function Author() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: photoRef,
    visible: photoVisible,
  } = useScrollReveal<HTMLImageElement>();

  const {
    ref: infoRef,
    visible: infoVisible,
  } = useScrollReveal<HTMLDivElement>();

  const {
    ref: sliderRef,
    visible: sliderVisible,
  } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="author" id="author">
      <div className="container">
        <h2
          className="title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
        >
          {"Автор проекта"}
        </h2>

        <div className="author__info">
          <Image
            src="/images/author.png"
            alt="author image"
            width={420}
            height={525}
            className="author__info-img section-animka"
            ref={photoRef}
            data-reveal="left"
            data-visible={photoVisible}
          />

          <div
            className="author__info-right section-animka"
            ref={infoRef}
            data-reveal="right"
            data-visible={infoVisible}
          >
            <h3 className="author__info-right-title">
              {"Анна Иванова"}
            </h3>

            <p className="author__info-right-text">
              {"Я являюсь студенткой "}
              <span>{"Школы НЛП Владимира Стиханова"}</span>
              {"."}
            </p>
            <p className="author__info-right-text">
              {"Этот проект создан как часть моей практической "}
              {"подготовки и отражает мое стремление применять "}
              {"полученные знания на практике, помогая людям "}
              {"развивать полезные привычки и достигать своих целей."}
            </p>

            <div className="author__separator" />

            <ul className="author__social-list">
              <li className="author__social-item">
                <a
                  href="https://www.instagram.com/dawai_pomogu?igsh=M2dqNWY5cmNzMnZo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Моя страгичка в Instagram"
                >
                  <Image
                    src="/images/instagram.svg"
                    alt="instagram icon"
                    width={50}
                    height={50}
                  />
                  <span>{"dawai_pomogu"}</span>
                </a>
              </li>
              <li className="author__social-item">
                <a
                  href="https://www.tiktok.com/@annaiva749?_r=1&_t=ZS-98qQ6kzeJ62"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Мой аккаунт в Tik-Tok"
                >
                  <Image
                    src="/images/tiktok.svg"
                    alt="tiktok icon"
                    width={50}
                    height={50}
                  />
                  <span>{"annaiva749"}</span>
                </a>
              </li>
              <li className="author__social-item">
                <a
                  href="https://www.facebook.com/anna.ivanova.405816"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Моя страгичка в Facebook"
                >
                  <Image
                    src="/images/facebook.svg"
                    alt="facebook icon"
                    width={50}
                    height={50}
                  />
                  <span>{"Анна Иванова"}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={sliderRef}
          data-reveal="bottom"
          data-visible={sliderVisible}
          className="section-animka"
        >
          <InfiniteSlider slides={slides} />
        </div>
      </div>
    </section>
  )
}
