export const getLogin = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "Guest",
        email: "guest@iding.ir",
      });
    }, 3000);
  });
};

export const getLogout = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 3000);
  });
};
