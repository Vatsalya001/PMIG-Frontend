import React from "react";
import { useState } from "react";
import { Button } from "../components";
import styles from "../css/auth.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signup_API } from "../api";
const Register = (props) => {
  const { username, setScreen } = props;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [about, setAbout] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (name != "" && password != "" && confirmPassword != "") {
      let res = await signup_API(
        username,
        name,
        about,
        password,
        confirmPassword
      );
      if (res.success) {
        toast(`Account created successfully,\n Please Login ...`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setScreen("login");
      } else {
        toast(`${res.message}`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div className={styles.authPage}>
      <form className={styles.form}>
        {`Register ${username}`}
        <input
          placeholder="Name"
          className={styles.inputField}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Password"
          className={styles.inputField}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          className={styles.inputField}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          placeholder="About yourself"
          className={styles.inputField}
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <Button
          text="Login"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
    </div>
  );
};

export default Register;
