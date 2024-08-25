// src/components/ContactUs.tsx
import React from 'react';
import '../css/ContactUs.css'; 

const ContactUs: React.FC = () => {
    return (
        <div className="rc-container rc-padding-32" id="contact">
            <h3 className="rc-border-bottom rc-border-light-grey rc-padding-16">Contact Us</h3>
            <p>For inquiries, please reach out to us...</p>
        </div>
    );
};

export default ContactUs;
