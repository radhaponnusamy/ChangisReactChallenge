
import React from 'react';
import '../css/Header.css'; // Import the CSS for the header

const Header: React.FC = () => {
    return (
        <header className="rc-display-container rc-content rc-wide" style={{ maxWidth: '1500px' }} id="home">
            <img className="rc-image" src="https://www.w3schools.com/w3images/architect.jpg"  alt="Architecture" width="1500" style={{ maxHeight: '400px' }} />
            <div className="rc-display-middle rc-margin-top rc-center">
                <h1 className="rc-xxlarge rc-text-white">
                    <span className="rc-padding rc-black rc-opacity-min"><b>Changeis &gt;&gt;</b></span>
                    <span className="rc-hide-small rc-text-light-grey">React Challenge</span>
                </h1>
            </div>
        </header>
    );
};

export default Header;

