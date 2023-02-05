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
  const userName: string | null = new URLSearchParams(location.search).get(
    "user_name"
  );
  const [count, setCount] = useState<number>(1);

  const validateCountText = () => {
    const text = data?.guests?.split(" ");
    if (text?.includes("y")) {
      setCount(text.length - 1);
    }
  };

  const validateUrlData = () => {
    if (userName) {
      setData({
        guests: userName,
        count: count,
      });
    }
  };

  const validateDataContext = () => {
    if (Object.keys(data).length === 0) {
      setData({
        guests: "Te invitamos a nuestra boda",
        count: 1,
      });
    }
  };

  useEffect(() => {
    validateDataContext();
    validateCountText();
  }, []);

  useEffect(() => {
    validateUrlData();
  }, [userName]);

  return (
    <section>
      <h2> {data?.guests}</h2>
      {showText && <p>Invitación válida para {count} personas</p>}
    </section>
  );
};
