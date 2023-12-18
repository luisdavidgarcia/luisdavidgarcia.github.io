import React from 'react';
import '../../assets/styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>
                &copy; {new Date().getFullYear()} Luis David Garcia. All rights
                reserved.
            </p>
            {/* Add additional footer content here */}
        </footer>
    );
}

export default Footer;
