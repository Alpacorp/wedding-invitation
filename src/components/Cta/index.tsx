import { FC } from "react";
import { Link } from "react-router-dom";

export interface CtaProps {
  route: string;
  text: string;
}

export const Cta: FC<CtaProps> = ({ route, text }) => {
  return (
    <div className="cta">
      <Link to={route}>{text}</Link>
    </div>
  );
};
