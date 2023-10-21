function validation(values) {
    let errors = {};
  
    if (!values.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!values.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = 'Invalid email format';
    }
  
    if (!values.password.trim()) {
      errors.password = 'Password is required';
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/.test(values.password)) {
      errors.password = 'Password must be at least 8 characters long and include uppercase, lowercase, and a digit';
    }
  
    return errors;
  }
  
  export default validation;