import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { slides } from "./slides";
import InfiniteSlider from "./InfiniteSlider";

import "./Author.css";

export default function Author() {
  // const [titleVisible, setTitleVisible] = useState(false);
  // const [photoVisible, setPhotoVisible] = useState(false);
  // const [infoVisible, setInfoVisible] = useState(false);
  // const [sliderVisible, setSliderVisible] = useState(false);

  // const titleRef = useRef<HTMLHeadingElement>(null);
  // const photoRef = useRef<HTMLImageElement>(null);
  // const infoRef = useRef<HTMLDivElement>(null);
  // const sliderRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   // const isDesktop = window.innerWidth >= 1440;

  //   // if (!isDesktop) {
  //   //   setTitleVisible(true);
  //   //   setPhotoVisible(true);
  //   //   setInfoVisible(true);
  //   //   setSliderVisible(true);

  //   //   return;
  //   // }

  //   if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
  //     setTitleVisible(true);
  //     setPhotoVisible(true);
  //     setInfoVisible(true);
  //     setSliderVisible(true);

  //     return;
  //   }

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (!entry.isIntersecting) return;

  //         if (entry.target === titleRef.current) setTitleVisible(true);
  //         if (entry.target === photoRef.current) setPhotoVisible(true);
  //         if (entry.target === infoRef.current) setInfoVisible(true);
  //         if (entry.target === sliderRef.current) setSliderVisible(true);

  //         observer.unobserve(entry.target);
  //       });
  //     }, {
  //       threshold: 0.2,
  //       rootMargin: "0px 0px -25px 0px",
  //     }
  //   );

  //   if (titleRef.current) observer.observe(titleRef.current);
  //   if (photoRef.current) observer.observe(photoRef.current);
  //   if (infoRef.current) observer.observe(infoRef.current);
  //   if (sliderRef.current) observer.observe(sliderRef.current);

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
    <section className="author">
      <div className="container">
        <h2
          // ref={titleRef}
          className="title"
          // style={{
          //   ...fromBottom(titleVisible)
          // }}
        >
          {"Автор проекта"}
        </h2>

        <div className="author__info">
          <Image
            // ref={photoRef}
            src="/images/author.png"
            alt="author image"
            width={420}
            height={525}
            className="author__info-img"
            // style={{
            //   ...fromLeft(photoVisible)
            // }}
          />

          <div
            // ref={infoRef}
            className="author__info-right"
            // style={{
            //   ...fromRight(infoVisible)
            // }}
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
          // ref={sliderRef}
          // style={{
          //   ...fromBottom(sliderVisible)
          // }}
        >
          <InfiniteSlider slides={slides} />
        </div>
      </div>
    </section>
  )
}
