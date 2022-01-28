import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import cenocchanLogo from "../Assets/cenoshine.png";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, userLogout } = useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Cenocchan - Home">
          <img
            src={cenocchanLogo}
            className={styles.navimg}
            alt="Cenocchan Logo"
          />
        </Link>
        {data ? (
          <Link to="/conta" className={styles.login}>
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link to="/login" className={styles.login}>
            Entrar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
