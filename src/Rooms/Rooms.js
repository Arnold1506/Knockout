import React from "react";
import styles from "./Rooms.module.css";

const Rooms = (props) => {
  return (
    <React.Fragment>
      <div className={styles["toolbar-container"]}>
        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h3>
        <button onClick={props.leaveHandler}>Logout</button>
      </div>
      <div className={styles["main-container"]}>
        <div className={styles["display-box"]}>
          <h1>Name</h1>
        </div>
        <div className={styles["display-box"]}>
          <h1>Name</h1>
        </div>
        <div className={styles["display-box"]}>
          <h1>Name</h1>
        </div>
        <div className={styles["display-box"]}>
          <h1>Name</h1>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Rooms;
