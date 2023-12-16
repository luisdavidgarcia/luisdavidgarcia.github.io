import React from 'react';
import '../assets/styles/Footer.css'; // Make sure to create a corresponding CSS file

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Luis David Garcia. All rights reserved.</p>
            {/* Add additional footer content here */}
        </footer>
    );
}

export default Footer;
