import { FC } from "react";

import { aya } from "../../assets/imgs";

import "./styles.css";

export interface ImageProps {
  size: "small" | "medium" | "large";
}

export const Image: FC<ImageProps> = ({ size }) => {
  return (
    <figure className={`logo ${size}`}>
      <img src={aya} alt="Alix & Alex, logo del matrimonio" />
    </figure>
  );
};
