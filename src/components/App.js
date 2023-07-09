import "../css/App.css";
import { Navbar } from "./index";
import { HomePage, ProfilePage, Auth, PublishPaper } from "../pages";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../hooks";
import { Loader } from "/";
function App() {
  const auth = useAuth();

  return auth.loading ? (
    <Loader />
  ) : (
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
          <Route
            exact
            path="/auth"
            element={auth.user ? <Navigate replace to="/" /> : <Auth />}
          ></Route>
          <Route
            exact
            path="/profile"
            element={!auth.user ? <Navigate replace to="/" /> : <ProfilePage />}
          ></Route>
          <Route
            exact
            path="/publish"
            element={
              !auth.user ? <Navigate replace to="/" /> : <PublishPaper />
            }
          ></Route>
          <Route
            exact
            path="*"
            element={<h1>Error 404: Page Not Found</h1>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
