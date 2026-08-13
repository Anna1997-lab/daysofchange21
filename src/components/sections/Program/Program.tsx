import { dailyItems } from "./data";
import { useScrollReveal } from "../../common/hooks/useScrollReveal";

import "./Program.css";

export default function Program() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: capsuleRef,
    visible: capsuleVisible,
  } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="program" id="program">
      <div className="container">
        <div
          className="program__title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
        >
          <h2 className="title">
            {"Что будет в течение 21 дня?"}
          </h2>
          <h3 className="subtitle">
            {"Каждый день участник получает:"}
          </h3>
        </div>

        <div
          className="program__capsules section-animka"
          ref={capsuleRef}
          data-reveal="bottom"
          data-visible={capsuleVisible}
        >
          <div className="program__capsules-row">
            {
              dailyItems.slice(0, 2).map((item) => (
                <div key={item} className="program__capsule">
                  {item}
                </div>
              ))
            }
          </div>

          <div className="program__capsules-row">
            {
              dailyItems.slice(2).map((item) => (
                <div key={item} className="program__capsule">
                  {item}
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
