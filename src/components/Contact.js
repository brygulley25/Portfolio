import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js'


const Contact = () => {
    return (
        <div id="contact" className="text-center">
            <h2 className="text-2xl font-medium">Follow me on social media</h2>
            <div className="flex justify-center">
                <a href="https://www.facebook.com/divine_designllc" className="text-indigo-600 hover:text-indigo-800 mr-8">
                    <i className="fab fa-facebook-square fa-3x"></i>
                </a>
                <a href="https://www.instagram.com/divine_designllc" className="text-indigo-600 hover:text-indigo-800 mr-8">
                    <i className="fab fa-instagram fa-3x"></i>
                </a>
                <a href="https://github.com/brygulley25" className="text-indigo-600 hover:text-indigo-800">
                    <i className="fab fa-github-square fa-3x"></i>
                </a>
            </div>
            <p className="mt-4">Feel free to inquire about my work or ask any questions.</p>
        </div>
    );
};

export default Contact;
