import { FC } from "react";

import { Text } from "../../components/Text";

import { Guests } from "../../components/Guests";

import "./styles.css";
import "../pages-styles.css";
import { Italics } from "../../components/Italics";
import { Isotype } from "../../components/Isotype";

export const ThanksPage: FC = () => {
  return (
    <section className="container thanks">
      <Guests />
      <Text
        title={
          "Gracias por confirmar tu asistencia en este día para tan importante para nosotros"
        }
        green
      />
      <Italics text="Estamos muy felices" green />
      <Isotype size="small" />
    </section>
  );
};
