import { FC } from "react";

import { Cta } from "../../components/Cta";
import { Image } from "../../components/Image";
import { Names } from "../../components/Names";
import { Text } from "../../components/Text";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

import "./styles.css";
import "../styles-pages.css";

export const IntroPage: FC = () => {
  return (
    <section className="container intro">
      <Text />
      <Names />
      <VideoIntro />
      <Image size="small" />
      <Cta route="/invitacion" text="Continuar" />
    </section>
  );
};
