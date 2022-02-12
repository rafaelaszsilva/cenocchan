import React, { useState, useEffect } from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router";

const UserHeader = () => {
  const [title, setTitle] = useState("");
  const location = useLocation();

  useEffect(() => {
    const { pathname } = location;

    switch (pathname) {
      case "/account":
        setTitle("Minha conta");
        break;

      case "/account/stats":
        setTitle("Estatísticas");
        break;

      case "/account/post":
        setTitle("Postar foto");
        break;

      default:
        setTitle("Minha conta");
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
