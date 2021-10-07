import React from "react";
import styles from "./RoomSelect.module.css";
import CreateRoom from "../SVG/CreateRoom.svg";
import JoinRoom from "../SVG/JoinRoom.svg";

const RoomSelect = (props) => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles["btn-container"]}>
        <button className={styles.btn1}>
          Create Room <img src={CreateRoom} alt="" />
        </button>
        <button className={styles.btn2}>
          Join Room <img src={JoinRoom} alt="" />
        </button>
      </div>
      <div className={styles["form-container"]}>
        <h1>Create Room</h1>
        <form action="" onSubmit={props.submitHandler}>
          <select
            name="roomSize"
            id="roomSize"
            className={styles["room-size"]}
            onChange={props.roomSizeHandler}
          >
            <option selected disabled>
              Room Size
            </option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <select
            name="selectTopic"
            id="selectTopic"
            onChange={props.topicHandler}
          >
            <option value="">Random</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <button type="submit">Create Room</button>
        </form>
      </div>
    </div>
  );
};

export default RoomSelect;
