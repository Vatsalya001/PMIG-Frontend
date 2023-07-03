import React, { useState } from "react";
const VerifyOTPPage = () => {
  const [otp, setOTP] = useState("");

  const handleOTPChange = (e) => {
    setOTP(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verification logic here
  };

  return (
    <div>
      <form>
        <input type="text" value={otp} onChange={handleOTPChange} />
        <button onClick={handleSubmit}>Verify</button>
      </form>
    </div>
  );
};

export default VerifyOTPPage;
