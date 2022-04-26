const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify([value]));
};

const getLocalStorage = (key) => {
  const local = JSON.parse(localStorage.getItem(key));
  return local;
};

export { setLocalStorage, getLocalStorage };
