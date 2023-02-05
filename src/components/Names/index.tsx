import { FC, useEffect, useState, useContext } from "react";
import { Location, useLocation } from "react-router-dom";
import DataContext from "../../context/dataContext";

export interface NamesProps {
  showText?: boolean;
  textPeople?: string;
  count?: number;
}

export const Names: FC<NamesProps> = ({ showText }) => {
  const { data, setData } = useContext(DataContext);

  const location: Location = useLocation();
  const userName: any = new URLSearchParams(location.search).get("user_name");

  const [guests, setGuests] = useState<String>("Estás invitado");
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (userName) {
      setGuests(userName);
      setCount(count + 1);
    }

    setData([...data, userName]);
  }, [userName]);

  return (
    <section>
      <h2>{guests}</h2>
      {showText && <p>Invitación válida para {count} personas</p>}
    </section>
  );
};
