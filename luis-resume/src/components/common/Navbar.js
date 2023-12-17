import React from 'react';
import { NavLink } from 'react-router-dom';
import myLG from '../../assets/images/myLG.png';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={myLG} alt="My Logo" className="navbar-logo" />
            <ul className="nav-links">
                <li>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/software" activeClassName="active">
                        Software
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/embedded" activeClassName="active">
                        Embedded
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/ai" activeClassName="active">
                        AI
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
