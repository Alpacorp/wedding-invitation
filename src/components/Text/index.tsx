import { FC } from "react";

import "./styles.css";

interface TextProps {
  title?: string;
  description?: string;
  green?: boolean;
}

export const Text: FC<TextProps> = ({ title, description, green }) => {
  return (
    <section className={`text ${green ? "green" : ""}`}>
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
    </section>
  );
};
