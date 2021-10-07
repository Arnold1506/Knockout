import React, { useState } from "react";
import styles from "./RoomSelect.module.css";
import CreateRoom from "../SVG/CreateRoom.svg";
import JoinRoom from "../SVG/JoinRoom.svg";
import CreateRoomForm from "../CreateRoomForm/CreateRoomForm";
import JoinRoomForm from "../JoinRoomForm/JoinRoomForm";

const RoomSelect = (props) => {
  const [cRoom,setCRoom]=useState(true);

  const createRoomClickHandler=(events)=>{
    setCRoom(true)
  }

  const joinRoomClickHandler=(events)=>{
    setCRoom(false);
  }
  return (
    <div className={styles["main-container"]}>
      <div className={styles["btn-container"]}>
        <button className={`${styles.btn1} ${cRoom && styles["btn-selected"]}`} onClick={createRoomClickHandler}>
          Create Room <img src={CreateRoom} alt="" />
        </button>
        <button className={`${styles.btn2} ${!cRoom && styles["btn-selected"]}`} onClick={joinRoomClickHandler}>
          Join Room <img src={JoinRoom} alt="" />
        </button>
      </div>
      {cRoom && <CreateRoomForm />}
      {!cRoom && <JoinRoomForm />}
    </div>
  );
};

export default RoomSelect;
