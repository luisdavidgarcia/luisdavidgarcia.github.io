import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import myLG from '../../assets/images/myLG.png';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);


    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.classList.remove('no-scroll');
    };

    return (
        <nav className="navbar">
            <img src={myLG} alt="My Logo" className="navbar-logo" />
            <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li onClick={closeMenu}>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/software" activeClassName="active">
                        Software
                    </NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/embedded" activeClassName="active">
                        Embedded
                    </NavLink>
                </li>
                <li onClick={closeMenu}>
                    <NavLink to="/ai" activeClassName="active">
                        AI
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
