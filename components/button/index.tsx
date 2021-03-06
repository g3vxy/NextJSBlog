import { motion } from "framer-motion";
import useSound from "use-sound";
import { PlayFunction } from "use-sound/dist/types";

import styles from "./button.module.scss";

type ButtonPropTypes = {
  type: "menu" | "text";
  text?: string;
  setIsMenuShown: Function;
  className?: string;
};

const animationConfig = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
};

const onClick = (play: PlayFunction, setIsMenuShown: Function) => {
  setIsMenuShown((_prev: boolean) => !_prev);
  play();
};

const Button = ({ type, text, setIsMenuShown, className }: ButtonPropTypes) => {
  const [play] = useSound("/click.mp3");
  switch (type) {
    case "menu":
      return (
        <motion.button
          {...animationConfig}
          onClick={() => onClick(play, setIsMenuShown)}
          className={className}
        >
          <MenuButtonIcon></MenuButtonIcon>
        </motion.button>
      );
    case "text":
      return (
        <motion.button {...animationConfig} className={className}>
          {text}
        </motion.button>
      );
  }
};

const MenuButtonIcon = () => {
  return (
    <div className="space-y-1.5">
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
      <div className="w-6 h-0.5 bg-white"></div>
    </div>
  );
};

export default Button;
