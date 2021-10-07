import React from "react";
import styles from "./JoinRoomForm.module.css";

const JoinRoomForm=(props)=>{
    return(
        <div className={styles["jr-form-container"]}>
            <h1>Join Room</h1>
            <form action="">
                <h2>Enter Room Code</h2>
                <input type="text" />
                <button type="submit">Join Room</button>
            </form>
        </div>
    );
}

export default JoinRoomForm;