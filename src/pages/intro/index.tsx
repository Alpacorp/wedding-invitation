import { FC } from "react";

import { Cta } from "../../components/Cta";
import { Isotype } from "../../components/Isotype";
import { Guests } from "../../components/Guests";
import { Text } from "../../components/Text";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

import "./styles.css";
import "../pages-styles.css";

export const IntroPage: FC = () => {
  return (
    <section className="container intro">
      <Text
        title={"¡Nos casamos!"}
        description={"Queremos que nos acompañes en este gran día"}
      />
      <Guests />
      <VideoIntro />
      <Isotype size="small" />
      <Cta route="/invitacion" text="Continuar" />
    </section>
  );
};
