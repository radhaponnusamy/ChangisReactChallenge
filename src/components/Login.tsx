import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext'; 
import { useNavigate } from 'react-router-dom'; 
import { Role } from '../types/Role'; 
import '../css/Login.css'; 

const Login: React.FC = () => {
  const [role, setRole] = useState<Role>('admin');
  const { login } = useAuth(); 
  const navigate = useNavigate(); 

  const handleLogin = () => {
    login(role); 
    navigate('/image-gallery');
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <div className="login-form">
        <select
          className="login-select"
          value={role}
          onChange={(e) => setRole(e.target.value as Role)}
        >
          <option value="admin">Admin</option>
          <option value="guest">Guest</option>
        </select>
        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
