"use client";

import { useCallback, useRef, useState } from "react";

interface UseInfiniteSliderOptions {
  slidesCount: number;
}

export function useInfiniteSlider({ slidesCount }: UseInfiniteSliderOptions) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const isAnimatingRef = useRef(false);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goTo = useCallback((realIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setWithTransition(true);
    setCurrentIndex(realIndex + 1);
  }, []);

  const handleTransitionEnd = useCallback(() => {
    isAnimatingRef.current = false;

    if (currentIndex === slidesCount + 1) {
      setWithTransition(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setWithTransition(false);
      setCurrentIndex(slidesCount);
    }
  }, [currentIndex, slidesCount]);

  return {
    currentIndex,
    withTransition,
    goNext,
    goPrev,
    goTo,
    handleTransitionEnd,
  };
}
