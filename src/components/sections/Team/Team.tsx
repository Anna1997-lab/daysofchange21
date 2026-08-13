import { useScrollReveal } from "../../common/hooks/useScrollReveal";
import InfiniteSlider from "./InfiniteSlider";
import { slidesDesktop, slidesTablet, slidesMobile } from "./slides";

import "./Team.css";

export default function Team() {
  const {
    ref: titleRef,
    visible: titleVisible,
  } = useScrollReveal<HTMLHeadingElement>();

  const {
    ref: teamCardsRef,
    visible: teamCardsVisible,
  } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="team" id="team">
      <div className="container">
        <h2
          className="title section-animka"
          ref={titleRef}
          data-reveal="bottom"
          data-visible={titleVisible}
        >
          {"Благодарность"}
        </h2>

        <div
          className="team__slider-desktop section-animka"
          ref={teamCardsRef}
          data-reveal="bottom"
          data-visible={teamCardsVisible}
        >
          <InfiniteSlider slides={slidesDesktop} />
        </div>

        <div className="team__slider-tablet">
          <InfiniteSlider slides={slidesTablet} />
        </div>

        <div className="team__slider-mobile">
          <InfiniteSlider slides={slidesMobile} />
        </div>
      </div>
    </section>
  );
}
