import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

const Logout: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuth(); 

  
    const handleLogout = () => {
        logout();
        navigate('/login'); 
      };
    
      return (
        <div  className="rc-border-bottom rc-border-light-grey rc-padding-16"  id="Logout">
        <button onClick={handleLogout}>
          Logout
        </button>
         </div>
      );
};

export default Logout;
