import { FC, useContext, useEffect, useState } from "react";

import { apiConfirm } from "../../apis/confirm";

import DataContext from "../../context/dataContext";

import { Isotype } from "../../components/Isotype";
import { Guests } from "../../components/Guests";
import { Photo } from "../../components/Photo";
import { Text } from "../../components/Text";
import { Image } from "../../components/Image";
import { CardInfo } from "../../components/CardInfo";
import { Cta } from "../../components/Cta/index";
import { Italics } from "../../components/Italics";

import { church, cups, date, dress, mail } from "../../assets/imgs";

import "./styles.css";
import "../pages-styles.css";

export const HomePage: FC = () => {
  const { data } = useContext(DataContext);
  const [showInvitation, setShowInvitation] = useState(true);

  const checkConfirm = () => {
    const inv = localStorage.getItem("inv");
    if (inv === "true") {
      setShowInvitation(false);
    } else {
      setShowInvitation(true);
    }
  };

  useEffect(() => {
    checkConfirm();
  }, []);

  const handleConfirm = () => {
    if (data.inv === "default") {
      return;
    }

    if (
      data.inv !== "default" ||
      data.inv !== "" ||
      data.inv !== undefined ||
      data.inv !== null
    ) {
      apiConfirm
        .post(
          "/confirm",
          {
            inv: data.inv,
            guests: data.guests,
            quantity: data.quantity,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.ok) {
            localStorage.setItem("inv", "true");
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      console.log("Valor por default");
    }
  };

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
          link="https://maps.app.goo.gl/EH7cfh8jVgpwHYJZ9"
          src={church}
          hour={"5:00 PM"}
          location="Carrera 69K # 75 - 91"
          division
        />
        <CardInfo
          title="Recepción"
          description="Recepciones Leidy"
          link="https://maps.app.goo.gl/eG8Dx3bAPxWvhEom7"
          src={cups}
          hour={"6:30 PM"}
          location="Calle 72A # 72 - 23"
          division
        />
        <CardInfo title="Traje Formal" src={dress} division>
          <div className="people">
            <p>Mujeres: Vestido Largo</p>
            <p>Hombre: Vestido Gala</p>
          </div>
          <div className="requirements">
            <p>Recomendaciones:</p>
            <p>• Evita el uso del color verde.</p>
            <p>• Calzado: puedes usar tenis blancos para tu comodidad.</p>
          </div>
        </CardInfo>
        <CardInfo title="Lluvia de Sobres" src={mail} />
      </div>
      {showInvitation ? (
        <div className="confirm">
          <Cta
            route="/gracias"
            text="Confirmar asistencia"
            action={handleConfirm}
          />
        </div>
      ) : (
        <Italics text="Te esperamos" />
      )}
      <div className="confirm">
        <Cta route="/" text="Volver" />
      </div>
    </section>
  );
};
