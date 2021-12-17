export const getAuth = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "Guest",
        email: "guest@iding.ir",
      });
    }, 3000);
  });
};
