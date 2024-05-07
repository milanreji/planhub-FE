export const validation = {
    name: { required: 'Name is required' },
    username: { required: 'Name is required' },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: 'Invalid email address'
      }
    },
    password: {
      required: 'Password is required'
    }
  };
