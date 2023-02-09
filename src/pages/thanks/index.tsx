import { FC } from "react";

import { Text } from "../../components/Text";

import { Guests } from "../../components/Guests";
import { Italics } from "../../components/Italics";
import { Isotype } from "../../components/Isotype";
import { Image } from "../../components/Image";

import "./styles.css";
import "../pages-styles.css";
import { heart, leftLike, rightLike } from "../../assets/imgs";
import { Cta } from "../../components/Cta";

export const ThanksPage: FC = () => {
  return (
    <section className="container thanks">
      <Guests />
      <div className="images">
        <div className="heart">
          <Image src={heart} alt="corazón" />
        </div>
        <div className="likes">
          <Image src={leftLike} alt="like left" />
          <Image src={rightLike} alt="like right" />
        </div>
      </div>
      <div className="message">
        <Text
          title={
            "Gracias por confirmar tu asistencia en este día para tan importante para nosotros"
          }
          green
        />
      </div>
      <Italics text="Estamos muy felices" green />
      <Isotype size="small" />
      <Cta route="/invitacion" text="Volver" />
    </section>
  );
};
