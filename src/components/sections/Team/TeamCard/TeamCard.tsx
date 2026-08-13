import Image, { StaticImageData } from "next/image";

import "./TeamCard.css";

interface TeamCardProps {
  image: StaticImageData;
  name: string;
  role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
  return (
    <div className="team-card">
      <Image
        src={image}
        alt="photo"
        width={300}
        height={400}
      />

      <div className="team-card__label">
        <span className="team-card__label-name">{name}</span>
        <span className="team-card__label-role">{role}</span>
      </div>
    </div>
  );
}
