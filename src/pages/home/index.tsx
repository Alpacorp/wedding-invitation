import { FC } from "react";

import { Image } from "../../components/Image";
import { Guests } from "../../components/Guests";

import "./styles.css";
import "../pages-styles.css";

export const HomePage: FC = () => {
  return (
    <section className="container home">
      <Guests showText greetingText={false} light />
      <Image size="small" />
    </section>
  );
};
