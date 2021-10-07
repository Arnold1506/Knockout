import React from "react";
import styles from "./Header.module.css";
import logoutSvg from "../SVG/logout.svg";

const Header = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>LC Kayo</h1>
      {props.isLoggedIn && (
        <div>
          <h3>Welcome {props.userName}</h3>
          <button onClick={props.logoutHandler}>
            <img src={logoutSvg} alt="logout" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
