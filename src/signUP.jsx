import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import clsx from "clsx";
import styles from "./signUP.module.css";
import { auth } from "../firebase.js";

const SignUP = () => {
  const navi = useNavigate();
  const handleSignUp = async () => {
    if (check !== password) {
      alert("passoword does not match");
      return;
    }
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        username,
        password,
      );
      console.log("usercreated:", userCred.user);
      navi("/");
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        username,
        password,
      );
      console.log("Logged in:", userCred.user.email);
      navi("/");
    } catch (error) {
      console.error(error);
    }
  };

  const [newUser, setNewUser] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState("");

  return (
    <div className={clsx(styles.view)}>
      <input
        type="text"
        id="usr"
        className={clsx(styles.input)}
        placeholder="username"
        onChange={(input) => setUsername(input.target.value)}
      />
      <input
        type="password"
        id="pass"
        placeholder="password"
        onChange={(input) => setPassword(input.target.value)}
        className={clsx(styles.input)}
      />
      {newUser && (
        <input
          type="password"
          placeholder="Confirm password"
          onChange={(input) => setCheck(input.target.value)}
          className={clsx(styles.input)}
        />
      )}
      <button
        onClick={newUser ? handleSignUp : handleLogin}
        className={clsx(styles.button)}
      >
        {newUser ? "SignUP" : "Login"}
      </button>
      <button
        onClick={() => setNewUser(!newUser)}
        className={clsx(styles.link)}
      >
        {newUser ? "already have a account?" : "Create account"}
      </button>
    </div>
  );
};

export default SignUP;
