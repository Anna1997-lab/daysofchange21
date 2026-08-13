import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.25, rootMargin: "0px 0px -40px 0px" }
) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (
      prefersReducedMotion ||
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}
