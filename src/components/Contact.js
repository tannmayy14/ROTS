import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <div className="wrapper">  {/* Add the wrapper class here */}
            <div className="contact-container">
                <h1>Contact Us</h1>
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                    <div className="info-item">
                        <h3>Phone:</h3>
                        <p>8429365142</p>
                    </div>
                    <div className="info-item">
                        <h3>Email:</h3>
                        <p>info@ridersonthestorm.com</p>
                    </div>
                    <div className="info-item">
                        <h3>Address:</h3>
                        <p>103,Borivali West,Mumbai-400067</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;