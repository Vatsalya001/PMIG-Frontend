import { API_URLS } from "../utils";
import { customFetch } from "/";
//function to send OTP
export const sendOTP_API = (username) => {
  return customFetch(API_URLS.sendOTP(), {
    method: "POST",
    body: { username },
  });
};

//function to verify OTP
export const verifyOTP_API = (username, otp) => {
  return customFetch(API_URLS.verifyOTP(), {
    method: "POST",
    body: { username, otp },
  });
};

//function to signup
export const signup_API = (
  username,
  name,
  about,
  password,
  confirmPassword
) => {
  return customFetch(API_URLS.signup(), {
    method: "POST",
    body: { username, name, about, password, confirmPassword },
  });
};

// function to login
export const login_API = (username, password) => {
  return customFetch(API_URLS.login(), {
    method: "POST",
    body: { username, password },
  });
};

//function to fetch user details
export const fetchUserInfo_API = (userId) => {
  return customFetch(API_URLS.fetchUserInfo(userId), {
    method: "GET",
  });
};

//function to edit user
export const editUser_API = (name, about) => {
  return customFetch(API_URLS.editUser(), {
    method: "PUT",
    body: { name, about },
  });
};

// function to get all the publications
export const getAllPublications_API = () => {
  return customFetch(API_URLS.fetchAllPublications(), { method: "GET" });
};

// function to publish a paper
export const publish_API = async (paper, title, description) => {
  const formData = new FormData();
  formData.append("paper", paper);
  formData.append("title", title);
  formData.append("description", description);
  return customFetch(API_URLS.publish(), {
    method: "POST",
    body: formData,
    isMulti: true,
  });
};

//function to fetch a publication
export const fetchPublication_API = (publicationId) => {
  return customFetch(API_URLS.fetchPublication(publicationId), {
    method: "GET",
  });
};

//function to edit a publication
export const editPublication_API = (publicationId, title, description) => {
  return customFetch(API_URLS.editPublication(publicationId), {
    method: "PUT",
    body: {
      title,
      description,
    },
  });
};
