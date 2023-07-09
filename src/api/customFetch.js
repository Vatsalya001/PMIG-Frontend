import { getFormBody, LOCALSTORAGE_TOKEN_KEY } from "../utils";
const customFetch = async (url, { body, ...customConfig }) => {
  const token = window.localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  const headers = {
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
  if (body && !customConfig.isMulti) {
    config.body = getFormBody(body);
  } else {
    config.body = body;
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
    console.log(data);
    throw new Error(data.message);
  } catch (error) {
    console.log("Error in Fetching Data: ", error);
    return {
      message: error.message,
      success: false,
    };
  }
};

export default customFetch;
