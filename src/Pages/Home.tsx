import { FC } from "react";
import { Image } from "../components/Image";
import { Names } from "../components/Names";

export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <Names />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/D8M4ksJim3w"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Image />
    </div>
  );
};
