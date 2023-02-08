import { FC } from "react";

import { Cta } from "../../components/Cta";
import { Image } from "../../components/Image";
import { Guests } from "../../components/Guests";
import { Text } from "../../components/Text";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

import "./styles.css";
import "../styles-pages.css";

export const IntroPage: FC = () => {
  return (
    <section className="container intro">
      <div className="top">
        <Text />
        <Guests />
      </div>
      <VideoIntro />
      <div className="bottom">
        <Image size="small" />
        <Cta route="/invitacion" text="Continuar" />
      </div>
    </section>
  );
};
