import React, { useContext, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as PhotosIcon } from "../../Assets/feed.svg";
import { ReactComponent as StatsIcon } from "../../Assets/stats.svg";
import { ReactComponent as AddPhotoIcon } from "../../Assets/add.svg";
import { ReactComponent as LeaveIcon } from "../../Assets/leave.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = useContext(UserContext);

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account" end>
          <PhotosIcon />
          {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/account/stats">
          <StatsIcon />
          {mobile && "Estatísticas"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhotoIcon />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={userLogout}>
          <LeaveIcon />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
