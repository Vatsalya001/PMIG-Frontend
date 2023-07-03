import { useState } from "react";
import LoginPage from "./LoginPage";
import SendEmailPage from "./SendEmailPage";
import VerifyOTPPage from "./VerifyOTPPage";
import Register from "./Register";
const Auth = () => {
  const [screen, setScreen] = useState("login");
  const [username, setUsername] = useState("");
  if (screen == "sendOTP") {
    return (
      <SendEmailPage
        username={username}
        setUsername={setUsername}
        setScreen={setScreen}
      />
    );
  } else if (screen == "verifyOTP") {
    return <VerifyOTPPage username={username} setScreen={setScreen} />;
  } else if (screen == "register") {
    return <Register username={username} setScreen={setScreen} />;
  } else {
    return <LoginPage setScreen={setScreen} />;
  }
};

export default Auth;
