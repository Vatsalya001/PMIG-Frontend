import React, { useState } from "react";
import styles from "../css/auth.module.css";
import { verifyOTP_API } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../components";
const VerifyOTPPage = (props) => {
  const [otp, setOTP] = useState("");
  const { username, setScreen } = props;
  const handleClick = async (e) => {
    e.preventDefault();
    if (otp != "") {
      let res = await verifyOTP_API(username, otp);
      if (res.success) {
        toast(`OTP Verified Successfully`, {
          position: "top-left",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setScreen("register");
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
        {`Verify OTP sent to ${username}.iitk.ac.in`}
        <input
          placeholder="OTP"
          className={styles.inputField}
          type="number"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
        />
        <Button
          text="Verify OTP"
          onClick={(e) => {
            handleClick(e);
          }}
        />
      </form>
    </div>
  );
};

export default VerifyOTPPage;
