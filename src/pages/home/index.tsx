import { FC } from "react";

import { Image } from "../../components/Image";
import { Guests } from "../../components/Guests";

export const HomePage: FC = () => {
  return (
    <div>
      <Guests showText={true} greetingText={false} />
      <Image size="medium" />
    </div>
  );
};
