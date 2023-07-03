import { AuthContext } from "../providers";
import { useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { login_API, editUser_API } from "../api";
import jwtDecode from "jwt-decode";
import { LOCALSTORAGE_TOKEN_KEY } from "../utils";
export const useAuth = () => {
  return useContext(AuthContext);
};

export const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const userToken = getItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY);
      if (userToken) {
        const user = jwtDecode(userToken);
        setUser(user);
      }
      setLoading(false);
    };
    getUser();
  }, []);

  const login = async (username, password) => {
    const response = await login_API(username, password);
    if (response.success) {
      setItemInLocalStorage(
        LOCALSTORAGE_TOKEN_KEY,
        response.data.token ? response.data.token : null
      );
      setUser(response.data.user);
      console.log(response.data);
      toast("Logged in successfully", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  const logout = async () => {
    setUser(null);
    removeItemInLocalStorage(LOCALSTORAGE_TOKEN_KEY);
    toast("Logged out successfully", {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const editUser = async (name, about) => {
    const response = await editUser_API(name, about);
    console.log(response);
    if (response.success) {
      setUser(response.data.user);
      return {
        success: true,
      };
    } else {
      return {
        success: false,
        message: response.message,
      };
    }
  };

  return {
    user,
    login,
    logout,
    editUser,
    loading,
  };
};
