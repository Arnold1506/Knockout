import React, { useState } from "react";
import styles from "./Homepage.module.css";
import RoomSelect from "../RoomSelect/RoomSelect";
import Rooms from "../Rooms/Rooms";

const Homepage = (props) => {
  const [roomSize, setRoomSize] = useState(0);
  const [topic, setTopic] = useState("");
  const [isInRoom, setIsInRoom] = useState(false);

  const roomSizeHandler = (events) => {
    setRoomSize(parseInt(events.target.value));
  };

  const topicHandler = (events) => {
    setTopic(events.target.value);
  };

  const submitHandler = (events) => {
    events.preventDefault();
    setIsInRoom(true);
  };

  const leaveHandler=(events)=>{
      setIsInRoom(false);
  }
  return (
    <React.Fragment>
        {!isInRoom && <RoomSelect roomSizeHandler={roomSizeHandler} topicHandler={topicHandler} submitHandler={submitHandler} /> }
        {isInRoom && <Rooms leaveHandler={leaveHandler} roomSize={roomSize} /> }
    </React.Fragment>
  );
};

export default Homepage;
