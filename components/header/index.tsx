import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "./header.module.scss";
import Button from "../button";

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>g3vxy</h1>
      <Button
        type="menu"
        setIsMenuShown={setIsMenuShown}
        className={styles.header_mobile_menu_button}
      ></Button>
      <Navigation></Navigation>
      <MobileNavigation isMenuShown={isMenuShown}></MobileNavigation>
    </header>
  );
};

const Navigation = () => {
  return (
    <div className={styles.header_menu}>
      <p>There will be a cute little navigation menu.</p>
    </div>
  );
};

const MobileNavigation = ({ isMenuShown }: { isMenuShown: boolean }) => {
  return (
    <AnimatePresence>
      {isMenuShown && (
        <motion.div
          className={`${styles.header_mobile_menu} ${
            isMenuShown ? styles.visible : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <p>There will be a cute little mobile navigation menu.</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
