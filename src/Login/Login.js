import React from "react";
import { useState } from "react";
import styles from "./Login.module.css";

const Login=(props)=>{
    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const userNameChangeHandler=(event)=>{
        setEnteredUserName(event.target.value)
    }

    const passwordChangeHandler=(event)=>{
        setEnteredPassword(event.target.value);
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        props.getUserName(enteredUserName);
        setEnteredUserName("");
        setEnteredPassword("");
    }

    return(
        <div className={styles.login}>
            <h2>Login</h2>
            <hr />
            <form action="" method="" onSubmit={formSubmitHandler} >
                <input type="text" name="LNUsername" id="LNUsername" placeholder={"Leetcode Username"} value={enteredUserName} onChange={userNameChangeHandler} />
                <input type="password" name="LNPassword" id="LNPassword" placeholder={"Leetcode Password"} value={enteredPassword} onChange={passwordChangeHandler} />
                <button type="submit">Login</button>
            </form>
            <a href="">Forgot password</a>
        </div>
    );
}

export default Login;