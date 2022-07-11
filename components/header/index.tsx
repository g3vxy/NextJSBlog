import styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>g3vxy</h1>
      <Button type="menu"></Button>
    </header>
  );
};

export default Header;
