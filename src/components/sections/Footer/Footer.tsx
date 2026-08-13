import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <h2 className="logo">{"21 день\nновых привычек"}</h2>
          <div className="footer__links">
            <button className="footer__button">
              <a
                href="https://t.me/DaysOfChange21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Наш Telegram"
              >
                <Image
                  src="/images/telegram.svg"
                  alt="telegram icon"
                  width={30}
                  height={30}
                />
              </a>
            </button>
            <button className="footer__button">
              <a
                href="https://www.instagram.com/dawai_pomogu?igsh=M2dqNWY5cmNzMnZo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Моя страгичка в Instagram"
              >
                <Image
                  src="/images/instagram.svg"
                  alt="instagram icon"
                  width={30}
                  height={30}
                />
              </a>
            </button>
            <button className="footer__button">
              <a
                href="mailto:annasevcenko381@gmail.com"
                aria-label="Написть на почту"
              >
                <Image
                  src="/images/gmail.svg"
                  alt="gmail icon"
                  width={30}
                  height={30}
                />
              </a>
            </button>
          </div>
        </div>

        <span className="footer__copyright">
          {"© 2026 Анна Иванова. Все права защищены."}
        </span>
      </div>
    </footer>
  );
}
