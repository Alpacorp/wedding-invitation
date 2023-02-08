import { FC } from "react";

import "./styles.css";

interface DivisionProps {
  src: string;
  alt: string;
}

export const Division: FC<DivisionProps> = ({ src, alt }) => {
  return (
    <img className="division" width={280} height={16} src={src} alt={alt} />
  );
};
