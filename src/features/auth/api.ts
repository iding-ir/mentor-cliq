export const getSignIn = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);

      resolve({
        username: "Guest",
        email: "guest@iding.ir",
      });
    }, 3000);
  });
};

export const getSignOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({});
    }, 3000);
  });
};

export const getSignUp = async (data: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(data);

      resolve({
        username: "Guest",
        email: "guest@iding.ir",
      });
    }, 3000);
  });
};
