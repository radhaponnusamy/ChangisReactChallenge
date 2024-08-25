// src/components/About.tsx
import React from 'react';
import '../css/About.css'; // Add styling specific to the About component

const About: React.FC = () => {
    return (
        <div className="rc-container rc-padding-32" id="about">
            <h3 className="rc-border-bottom rc-border-light-grey rc-padding-16">About Us</h3>
            <p>We are an innovative team providing excellent services...</p>
        </div>
    );
};

export default About;
