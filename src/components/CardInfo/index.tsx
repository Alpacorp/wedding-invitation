import { FC } from "react";

import { Division } from "../Division";

import { arandelaVerde } from "../../assets/imgs";

import "./styles.css";

interface CardInfoProps {
  title?: string;
  description?: string;
  link?: string;
  hour?: string;
  src?: string;
  location?: string;
  division?: boolean;
  children?: React.ReactNode;
}

export const CardInfo: FC<CardInfoProps> = ({
  title,
  description,
  link,
  hour,
  src,
  location,
  children,
  division,
}) => {
  return (
    <section className="card-info">
      <div className="header">
        <img className="icon" src={src} alt="icono" />
        <h3 className="title">{title}</h3>
      </div>
      <div>
        <p className="description">{description}</p>
      </div>
      <div className="loc">
        {hour && location && (
          <>
            <p className="hour">{hour}</p>
            {"•"}
            <a className="location" href={link} target="_blank">
              {location}
            </a>
          </>
        )}
      </div>
      {children}
      {division && <Division src={arandelaVerde} alt="división" />}
    </section>
  );
};
