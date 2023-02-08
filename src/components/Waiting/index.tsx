import { FC } from "react";

import "./styles.css";

interface WaitingProps {
  text?: string;
}

export const Waiting: FC<WaitingProps> = ({ text }) => {
  return (
    <section className="waiting">
      <h2 className="text">{text}</h2>
    </section>
  );
};
