import { FC, useEffect, useContext } from "react";

import DataContext from "../../context/dataContext";
import { apiConfirm } from "../../apis/confirm";

import { Cta } from "../../components/Cta";
import { Isotype } from "../../components/Isotype";
import { Guests } from "../../components/Guests";
import { Text } from "../../components/Text";
import { VideoIntro } from "../../components/VideoIntro/VideoIntro";

import "./styles.css";
import "../pages-styles.css";

export const IntroPage: FC = () => {
  const { data, allData, setAllData } = useContext(DataContext);

  const getAllData = () => {
    apiConfirm.get("/confirm").then((res) => {
      setAllData(res.data);
    });
  };

  const verifyInv = () => {
    const inv = allData?.confirms?.find(
      (item: any) => item?.inv === Number(data?.inv)
    );

    if (inv) {
      localStorage.setItem("inv", "true");
    } else {
      localStorage.setItem("inv", "false");
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  useEffect(() => {
    verifyInv();
  }, [allData]);

  return (
    <section className="container intro">
      <Text
        title={"¡Nos casamos!"}
        description={"Queremos que nos acompañes en este gran día"}
      />
      <Guests />
      <VideoIntro />
      <Isotype size="small" />
      <Cta route="/invitacion" text="Quiero ir" />
    </section>
  );
};
