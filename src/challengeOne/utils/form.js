export const login = ({ email, password }) => {
  const delay = (0.7 + Math.random() * 2) * 100;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === "password123" && !!email) {
        resolve();
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, delay);
  });
};
