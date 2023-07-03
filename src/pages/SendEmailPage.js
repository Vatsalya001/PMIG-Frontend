import React from "react";
import styles from "../css/auth.module.css";
import { useState } from "react";
import { sendOTP_API } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components";
const SendEmailPage = (props) => {
  const { username, setUsername, setScreen } = props;
  const handleClick = async (e) => {
    e.preventDefault();
    if (username != "") {
      let res = await sendOTP_API(username);
      if (res.success) {
        toast(`OTP sent to ${username}.iitk.ac.in`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setScreen("verifyOTP");
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
        Send OTP
        <input
          placeholder="Username"
          className={styles.inputField}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button
          text="Send OTP"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
    </div>
  );
};

export default SendEmailPage;
