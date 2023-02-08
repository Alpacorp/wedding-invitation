import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export interface CtaProps {
  route: string;
  text: string;
}

export const Cta: FC<CtaProps> = ({ route, text }) => {
  return (
    <div className="cta">
      <Link className="link" to={route}>
        {text}
      </Link>
    </div>
  );
};
