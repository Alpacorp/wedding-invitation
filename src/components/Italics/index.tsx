import { FC } from "react";

import "./styles.css";

interface ItalicsProps {
  text?: string;
  green?: boolean;
}

export const Italics: FC<ItalicsProps> = ({ text, green }) => {
  return (
    <section className={`waiting`}>
      <h2 className={`text ${green ? "green" : ""}`}>{text}</h2>
    </section>
  );
};
