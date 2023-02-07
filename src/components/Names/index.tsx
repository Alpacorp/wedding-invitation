import { FC, useEffect, useContext } from "react";
import { Location, useLocation } from "react-router-dom";

import DataContext from "../../context/dataContext";

export interface NamesProps {
  showText?: boolean;
  greetingText?: boolean;
  textPeople?: string;
  count?: number;
}

export const Names: FC<NamesProps> = ({ showText, greetingText }) => {
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
    <section>
      {greetingText && <p>Hola:</p>}
      <h2> {data?.guests}</h2>
      {showText && (
        <p>
          Invitación válida para {data?.quantity}
          {data?.quantity === 1 ? " persona" : " personas"}
        </p>
      )}
    </section>
  );
};
