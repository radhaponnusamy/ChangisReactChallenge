import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import Logout from './Logout'; 
import '../css/NavBar.css'; 
import { Role } from '../types/Role'; 

const NavBar: React.FC = () => {
    const { isAuthenticated, userRole } = useAuth(); // Destructure isAuthenticated and userRole from useAuth

    // Define roles that should see specific links
    const showLinksForRoles: Role[] = ['admin']; // Only admins see all links
    const showLimitedLinksForRoles: Role[] = ['guest']; // Guests see only the Images link

    return (
        <div className="rc-top">
            <div className="rc-bar rc-white rc-wide rc-padding rc-card">
                <Link to="/" className="rc-bar-item rc-button">Changeis &gt;&gt;</Link>
                <div className="rc-right rc-hide-small">
                    {isAuthenticated && (
                        <>
                            {/* Show all links for admins */}
                            {showLinksForRoles.includes(userRole) && (
                                <>
                                    <Link to="/image-gallery" className="rc-bar-item rc-button">Images</Link>
                                    <Link to="/about" className="rc-bar-item rc-button">About</Link>
                                    <Link to="/contact" className="rc-bar-item rc-button">Contact</Link>
                                </>
                            )}
                            {/* Show limited links for guests */}
                            {showLimitedLinksForRoles.includes(userRole) && (
                                <Link to="/image-gallery" className="rc-bar-item rc-button">Images</Link>
                            )}
                            <Logout /> {/* Display the Logout button if authenticated */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
