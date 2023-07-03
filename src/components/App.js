import "../css/App.css";
import { Navbar } from "/";
import {
  HomePage,
  ProfilePage,
  SendEmailPage,
  VerifyOTPPage,
  LoginPage,
} from "../pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
          <Route exact path="/send-otp" element={<SendEmailPage />}></Route>
          <Route exact path="/verify-otp" element={<VerifyOTPPage />}></Route>
          <Route exact path="/register" element={<HomePage />}></Route>
          <Route exact path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
