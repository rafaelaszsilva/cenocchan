import React from "react";
import styles from "./Footer.module.css";
import { ReactComponent as GitHubIcon } from "../Assets/github.svg";
import { ReactComponent as LinkedInIcon } from "../Assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Cenocchan. Direitos do grupo Sandro Cenoura reservados.</p>
      <p>Feito com ♥ por Rafaela Souza.</p>
      <div className={styles.media}>
        <a href="https://github.com/rafaelaszsilva">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rafaela-souza-6a00b417a/">
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
