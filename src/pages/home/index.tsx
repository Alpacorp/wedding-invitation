import { FC, useContext } from "react";
import { Image } from "../../components/Image";
import { Names } from "../../components/Names";
import DataContext from "../../context/dataContext";

export const Home: FC = () => {
  const { data, setData } = useContext(DataContext);

  console.log("data context home", data);

  return (
    <div>
      <Names showText={true} />
      <Image size="medium" />
    </div>
  );
};
