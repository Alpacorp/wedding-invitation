import { FC, useEffect, useContext } from "react";
import { Location, useLocation } from "react-router-dom";

import DataContext from "../../context/dataContext";

import { arandela } from "../../assets/imgs";

import "./styles.css";

export interface NamesProps {
  showText?: boolean;
  greetingText?: boolean;
  textPeople?: string;
  count?: number;
  light?: boolean;
}

export const Guests: FC<NamesProps> = ({ showText, greetingText, light }) => {
  const { data, setData } = useContext(DataContext);

  const location: Location = useLocation();
  const guests: string | null = new URLSearchParams(location.search).get(
    "guests"
  );
  const quantity: string | null = new URLSearchParams(location.search).get(
    "quantity"
  );

  const validateUrlData = () => {
    if (guests && quantity) {
      setData({
        guests,
        quantity,
      });
    }
  };

  const validateDataContext = () => {
    if (Object.keys(data).length === 0) {
      setData({
        guests: "Te invitamos a nuestra boda",
        quantity: 1,
      });
    }
  };

  useEffect(() => {
    validateDataContext();
  }, []);

  useEffect(() => {
    validateUrlData();
  }, [guests, quantity]);

  return (
    <section className={`guests ${light ? "light" : ""}`}>
      {greetingText && <p className="greeting">Hola:</p>}
      <h2 className="names"> {data?.guests}</h2>
      {showText && (
        <p className="aditional-text">
          Invitación válida para {data?.quantity}
          {data?.quantity === 1 ? " persona" : " personas"}
        </p>
      )}
      <img
        className="division"
        width={800}
        height={16}
        src={arandela}
        alt="división"
      />
    </section>
  );
};
