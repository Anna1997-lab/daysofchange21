import { useRef } from "react";
import Image from "next/image";
import { Slide } from "./slides";
import { useInfiniteSlider } from "./useInfiniteSlider";

import "./InfiniteSlider.css";

interface InfiniteSliderProps {
  slides: Slide[];
}

const SWIPE_THRESHOLD = 50;

export default function InfiniteSlider({ slides }: InfiniteSliderProps) {
  const {
    currentIndex,
    withTransition,
    goNext,
    goPrev,
    goTo,
    handleTransitionEnd
  } = useInfiniteSlider({ slidesCount: slides.length });

  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];
  const activeIndex = ((currentIndex - 1) % slides.length + slides.length) % slides.length;
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;

    if (touchDeltaX.current > SWIPE_THRESHOLD) {
      goPrev();
    } else if (touchDeltaX.current < -SWIPE_THRESHOLD) {
      goNext();
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  return (
    <div className="slider">
      <div className="slider__container">
        <button className="slider__arrow slider__arrow--left" onClick={goPrev}>
          <Image
            src="/images/arrow-left.svg"
            alt="arrow left icon"
            width={40}
            height={40}
          />
        </button>

        <div
          className="slider__viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <ul
            className="slider__track"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: withTransition ? "transform 600ms ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <li className="slider__item" key={`${slide.id}-${index}`}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                />
              </li>
            ))}
          </ul>
        </div>

        <button className="slider__arrow slider__arrow--right" onClick={goNext}>
          <Image
            src="/images/arrow-right.svg"
            alt="arrow right icon"
            width={40}
            height={40}
          />
        </button>
      </div>

      <ul className="slider__pagination">
        {slides.map((slide, index) => (
          <li key={slide.id}>
            <button
              className={
                "slider__dot" + (index === activeIndex ? " slider__dot--active" : "")
              }
              aria-label={`Перейти до слайду ${index + 1}`}
              onClick={() => goTo(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
