import React from "react";
import { useState } from "react";
import { Button } from "../components";
import styles from "../css/auth.module.css";
import { useAuth } from "../hooks";
const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    auth.login(username, password);
  };
  return (
    <div className={styles.authPage}>
      <form className={styles.form}>
        Login
        <input
          placeholder="Username"
          className={styles.inputField}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          className={styles.inputField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="Login"
          onClick={(e) => {
            handleLogin(e);
          }}
        />
      </form>
    </div>
  );
};

export default LoginPage;
