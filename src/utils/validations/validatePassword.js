const validatePassword = (password) => {
  const minLength = 8;
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return password.length >= minLength && regex.test(password);
};

export default validatePassword;
