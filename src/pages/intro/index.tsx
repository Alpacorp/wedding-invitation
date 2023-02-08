import { FC } from "react";

import { Cta } from "../../components/Cta";
import { Image } from "../../components/Image";
import { Guests } from "../../components/Guests";
import { Text } from "../../components/Text";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

import "./styles.css";
import "../pages-styles.css";

export const IntroPage: FC = () => {
  return (
    <section className="container intro">
      <Text />
      <Guests />
      <VideoIntro />
      <Image size="small" />
      <Cta route="/invitacion" text="Continuar" />
    </section>
  );
};
