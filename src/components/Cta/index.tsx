import { FC } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

export interface CtaProps {
  route: string;
  text: string;
  action?: () => void;
}

export const Cta: FC<CtaProps> = ({ route, text, action }) => {
  return (
    <div className="cta">
      <Link className="link" to={route} onClick={action}>
        {text}
      </Link>
    </div>
  );
};
