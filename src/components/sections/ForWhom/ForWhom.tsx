import { cards } from "./Card/data";
import Card from "./Card/Card";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

import "./ForWhom.css";

export default function ForWhom() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: cardRef,
    visible: cardVisible,
  } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="for-whom" id="forwhom">
      <div className="container">
        <div
          className="for-whom__title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
        >
          <h2 className="title">
            {"Для кого этот проект?"}
          </h2>
          <h3 className="subtitle">
            {"Подходит тем, кто хочет:"}
          </h3>
        </div>

        <div
          className="for-whom__cards"
              ref={cardRef}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="section-animka"
              data-reveal="bottom"
              data-visible={cardVisible}
              style={{
                transitionDelay: cardVisible ? `${index * 0.05}s` : "0s",
              }}
            >
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
