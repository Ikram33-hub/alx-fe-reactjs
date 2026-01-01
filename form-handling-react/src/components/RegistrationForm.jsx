import React, { useState } from 'react';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // state for error messages

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!username) newErrors.username = "Username مطلوب";
    if (!email) newErrors.email = "Email مطلوب";
    if (!password) newErrors.password = "Password مطلوب";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log({ username, email, password });
      alert('تم تسجيل المستخدم بنجاح!');
      // Optionally, reset form
      setUsername('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
        />
        {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}
      </div>

      <div>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Email" 
        />
        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
      </div>

      <div>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
        />
        {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
