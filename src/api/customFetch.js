import { getFormBody, LOCALSTORAGE_TOKEN_KEY } from "../utils";
export default customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = {
    "content-type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  const config = {
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = getFormBody(body);
  }
  try {
    const response = await fetch(url, config);
    const data = await response.json();
    if (data.success) {
      return {
        data: data.data,
        success: true,
      };
    }
    // console.log(response);
    throw new Error(data.message);
  } catch (error) {
    console.log("Error in Fetching Data: ", error);
    return {
      message: error.message,
      success: false,
    };
  }
};
