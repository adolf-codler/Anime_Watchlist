import { useState } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import styles from "./signUP.module.css";
import { useAuth } from "../context/useAuth";

const SignUP = () => {
  const navi = useNavigate();
  const { signUp, login } = useAuth();

  const [email, setEmail] = useState("");
  const [newUser, setNewUser] = useState(true);
  const [check, setCheck] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (check !== password) {
      alert("password does not match");
      return;
    }
    try {
      await signUp(email, password);
      navi("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleLogin = async () => {
    try {
      await login(email, password);
      navi("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={clsx(styles.view)}>
      <input
        type="text"
        id="usr"
        className={clsx(styles.input)}
        placeholder="email"
        onChange={(input) => setEmail(input.target.value)}
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
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default SignUP;
