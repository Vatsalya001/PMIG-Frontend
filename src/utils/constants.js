const API_ROOT = "http://localhost:8000/api/v1";
const API_URLS = {
  sendOTP: () => `${API_ROOT}/users/send-otp`,
  verifyOTP: () => `${API_ROOT}/users/verify-otp`,
  signup: () => `${API_ROOT}/users/signup`,
  login: () => `${API_ROOT}/users/login`,
  fetchUserInfo: (userId) => `${API_ROOT}/users/${userId}`,
  editUser: () => `${API_ROOT}/users/edit`,
  fetchAllPublications: () => `${API_ROOT}/publications/`,
  publish: () => `${API_ROOT}/publications/publish`,
  fetchPublication: (publicationId) =>
    `${API_ROOT}/publications/${publicationId}`,
  editPublication: (publicationId) =>
    `${API_ROOT}/publications/edit/${publicationId}`,
};
const LOCALSTORAGE_TOKEN_KEY = "__PMIG_token__";

export { LOCALSTORAGE_TOKEN_KEY, API_URLS };
