// function to set item in local storage
export const setItemInLocalStorage = (key, value) => {
  if (!key || !value) {
    return console.error("Cannot store in local storage");
  }
  const valueToStore =
    typeof value === "string" ? value : JSON.stringify(value);
  localStorage.setItem(key, valueToStore);
};
// function to get item form local storage
export const getItemInLocalStorage = (key) => {
  if (!key) {
    return console.error("Cannot get from local storage");
  }

  return localStorage.getItem(key);
};
// function to remove item from local storage
export const removeItemInLocalStorage = (key) => {
  if (!key) {
    return console.error("Cannot get from local storage");
  }

  return localStorage.removeItem(key);
};
