import { FC } from "react";

import { Image } from "../../components/Image";
import { Names } from "../../components/Names";

export const Home: FC = () => {
  return (
    <div>
      <Names showText={true} />
      <Image size="medium" />
    </div>
  );
};
