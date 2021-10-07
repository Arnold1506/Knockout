import React from "react";
import styles from "./CreateRoomForm.module.css";

const CreateRoomForm = (props) => {
  return (
    <div className={styles["cr-form-container"]}>
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
  );
};

export default CreateRoomForm;