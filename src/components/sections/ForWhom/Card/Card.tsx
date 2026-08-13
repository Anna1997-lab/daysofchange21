import Image from "next/image";

import "./Card.css";

type CardProps = {
  image: string;
  title: string;
  description: string;
};

export default function Card({
  image, title, description,
}: CardProps) {
  return (
    <div className="card">
      <div className="card__img-bg">
        <Image src={image} alt="" width={20} height={20} />
      </div>
      <h4 className="card__title">
        {title}
      </h4>
      <p className="card__description">
        {description}
      </p>
    </div>
  );
}
