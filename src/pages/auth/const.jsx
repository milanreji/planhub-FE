export const validation = {
  userName: { required: "Username is required" },
  firstName: { required: "Firstname is required" },
  lastName: { required: "Lastname is required" },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: "Invalid email address",
    },
  },
  password: {
    required: "Password is required",
  },
};
