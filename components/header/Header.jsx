import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/header/logo.png";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.hero}>
      <nav className={`${styles.nav} ${styles.container}`} id="nav">
        <div classNameName={styles.logoContainer}>
          <Image src={logo} alt="logo" />
        </div>

        <ul className={styles.nav__links}>
          <li className={styles.nav__item}>
            <a href="#hero" className={styles.nav__link}>
              Inicio
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#department" className={styles.nav__link}>
              Departamentos
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#instalations" className={styles.nav__link}>
             Instalaciones
            </a>
          </li>
          <li className={styles.nav__item}>
            <a href="#gallery" className={styles.nav__link}>
              Galeria
            </a>
          </li>
        </ul>

        <a href="#nav" className={styles.nav__hamburguer}>
          <GiHamburgerMenu />
        </a>

        <a href="#" className={styles.nav__close}>
          <AiOutlineCloseSquare />
        </a>
      </nav>
    </header>
  );
};

export default Header;
