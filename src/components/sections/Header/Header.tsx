import { useEffect, useRef, useState } from "react";

import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Тут можна змінити 60 на будь-яке значення (50, 80, 100...)
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Перевіряємо одразу при завантаженні (на випадок, якщо сторінка відкрилася не з самого верху)
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Прибираємо слухач при розмонтуванні
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const headerRef = useRef<HTMLElement>(null);

  // useEffect(() => {
  //   const header = headerRef.current;
  //   if (!header) return;

  //   const hero = document.querySelector("#hero") as HTMLElement | null;
  //   const thanks = document.querySelector("#thanks") as HTMLElement | null;

  //   if (!hero && !thanks) return;

  //   const headerHeight = 83;

  //   const checkPosition = () => {
  //   const headerHeight = 83;
  //   const buffer = 12;

  //   // --- Hero ---
  //   if (hero) {
  //     const heroRect = hero.getBoundingClientRect();
  //     const onHero =
  //       heroRect.top < headerHeight - buffer &&
  //       heroRect.bottom > headerHeight + buffer;

  //     header.classList.toggle("header--on-hero", onHero);
  //   }

  //   if (thanks) {
  //     const thanksRect = thanks.getBoundingClientRect();

  //     const onDark =
  //       thanksRect.top < headerHeight - buffer &&
  //       thanksRect.bottom > headerHeight + buffer;

  //     header.classList.toggle("header--on-dark", onDark);
  //   }
  // };

  //   checkPosition();

  //   window.addEventListener("scroll", checkPosition, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", checkPosition);
  //   };
  // }, []);

  return (
    // <header ref={headerRef} className="header">
    <header
      className="header"
      style={{
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: isScrolled ? '#ffffff' : 'transparent',
        boxShadow: isScrolled ? '0 2px 16px rgba(15, 31, 61, 0.1)' : 'none',
      }}
    >
      <div className="container">
        <h2 className="logo">
          <a href="#">{"21 день\nновых привычек"}</a>
        </h2>
        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <a href="#about">{"О проекте"}</a>
            </li>
            <li className="header__menu-item">
              <a href="#forwhom">{"Для кого"}</a>
            </li>
            <li className="header__menu-item">
              <a href="#program">{"Програма"}</a>
            </li>
            <li className="header__menu-item">
              <a href="#author">{"Автор"}</a>
            </li>
          </ul>
        </nav>
        <button className="header__button">
          <a
            href="https://t.me/DaysOfChange21"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Наш Telegram"
          >
            {"Принять участие"}
          </a>
        </button>
      </div>
    </header>
  );
}
