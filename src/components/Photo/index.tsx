import { bordes, photo } from "../../assets/imgs";

import "./styles.css";

export const Photo = () => {
  return (
    <section className="photo">
      <img className="border" src={bordes} alt="border dorados" />
      <img src={photo} alt="somos una gran y feliz pareja" />
    </section>
  );
};
