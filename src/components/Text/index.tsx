import { FC } from "react";

import "./styles.css";

interface TextProps {
  title?: string;
  description?: string;
}

export const Text: FC<TextProps> = ({ title, description }) => {
  return (
    <section className="text">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </section>
  );
};
