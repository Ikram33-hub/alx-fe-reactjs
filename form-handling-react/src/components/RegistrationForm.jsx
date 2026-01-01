import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // Function for validating single field while typing
  const validateField = (name, value) => {
    switch(name) {
      case 'username':
        if (!value) return 'Username مطلوب';
        return '';
      case 'email':
        if (!value) return 'Email مطلوب';
        // simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Email غير صالح';
        return '';
      case 'password':
        if (!value) return 'Password مطلوب';
        if (value.length < 6) return 'Password قصير بزاف';
        return '';
      default:
        return '';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate all fields on submit
    const newErrors = {
      username: validateField('username', username),
      email: validateField('email', email),
      password: validateField('password', password),
    };

    setErrors(newErrors);

    // check if no errors
    if (Object.values(newErrors).every(err => err === '')) {
      console.log({ username, email, password });
      alert('تم تسجيل المستخدم بنجاح!');
      setUsername('');
      setEmail('');
      setPassword('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setErrors(prev => ({ ...prev, username: validateField('username', e.target.value) }));
          }}
          placeholder="Username"
        />
        {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
      </div>

      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors(prev => ({ ...prev, email: validateField('email', e.target.value) }));
          }}
          placeholder="Email"
        />
        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors(prev => ({ ...prev, password: validateField('password', e.target.value) }));
          }}
          placeholder="Password"
        />
        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
