import { FC } from "react";

import { Image } from "../../components/Image";
import { Names } from "../../components/Names";

export const HomePage: FC = () => {
  return (
    <div>
      <Names showText={true} greetingText={false} />
      <Image size="medium" />
    </div>
  );
};
