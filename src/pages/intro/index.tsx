import { FC } from "react";

import { Cta } from "../../components/Cta";
import { Image } from "../../components/Image";
import { Names } from "../../components/Names";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

export const IntroPage: FC = () => {
  return (
    <section>
      <section>
        <div>
          <h1>Nos casaremos</h1>
          <p>Queremos que nos acompañes en este gran día</p>
        </div>
        <p>Hola:</p>
        <Names />
        <VideoIntro />
        <Image size="medium" />
        <Cta route="/invitacion" text="Continuar" />
      </section>
    </section>
  );
};
