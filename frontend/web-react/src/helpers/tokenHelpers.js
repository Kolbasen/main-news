const getToken = () => {
  return localStorage.getItem('token');
};

const setToken = token => {
  localStorage.setItem('token', token);
  return true;
};

export {
  setToken,
  getToken
};