import styles from "./button.module.scss";

type ButtonPropTypes = {
  type: "menu" | "text";
  text?: string;
};

const Button = ({ type, text }: ButtonPropTypes) => {
  switch (type) {
    case "menu":
      return (
        <button>
          <MenuButtonIcon></MenuButtonIcon>
        </button>
      );
    case "text":
      return <button>{text}</button>;
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
