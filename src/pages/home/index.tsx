import { FC } from "react";

import { Isotype } from "../../components/Isotype";
import { Guests } from "../../components/Guests";
import { Photo } from "../../components/Photo";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { CardInfo } from "../../components/CardInfo";

import { church, cups, date, dress, mail } from "../../assets/imgs";

import "./styles.css";
import "../pages-styles.css";
import { Cta } from "../../components/Cta/index";
import { Waiting } from "../../components/Waiting";

export const HomePage: FC = () => {
  return (
    <section className="home">
      <div className="header-page">
        <Guests showText greetingText={false} light />
      </div>
      <div className="logo">
        <Isotype size="small" />
      </div>
      <Photo />
      <div className="schedule">
        <Text title={"Agéndate este día"} />
        <Image src={date} alt="Fecha del matrimonio" />
      </div>
      <div className="cards">
        <CardInfo
          title="Ceremonia"
          description="Parroquia San Joaquín de las Ferias"
          link="https://goo.gl/maps/8Z9X7Z8Z9Z9Z9Z9Z9"
          src={church}
          hour={"5:00 PM"}
          location="Cra. 69K # 75 - 91"
          division
        />
        <CardInfo
          title="Recepción"
          description="Centro de eventos El Salón Rojo"
          link="https://goo.gl/maps/8Z9X7Z8Z9Z9Z9Z9Z9"
          src={cups}
          hour={"7:00 PM"}
          location="Cll 34 # 43 - 45"
          division
        />
        <CardInfo title="Traje Formal" src={dress} division>
          <p>Mujeres: Vestido Largo</p>
          <p>Hombre: Vestido Gala</p>
          <br />
          <p>Recomendaciones:</p>
          <p>• Evita el uso del color verde.</p>
          <p>• Calzado: puedes usar tenis blancos para tu comodidad.</p>
        </CardInfo>
        <CardInfo title="Lluvia de Sobres" src={mail} />
      </div>
      <Waiting text="Te esperamos" />
      <div className="confirm">
        <Cta route="/gracias" text="Confirmar asistencia" />
      </div>
    </section>
  );
};
