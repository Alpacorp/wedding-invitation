import { FC } from "react";

import "./styles.css";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <figure className="image">
      <img src={src} alt={alt} />;
    </figure>
  );
};
