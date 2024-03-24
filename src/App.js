import React from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './pages/Home';
import Software from './pages/Software';
import Embedded from './pages/Embedded';
import AI from './pages/AI';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
    const [theme, setTheme] = useState('light'); // default theme

    useEffect(() => {
        // Attempt to fetch stored theme from localStorage
        const savedTheme = localStorage.getItem('theme');
        // Check for system preference if no stored theme
        const systemPreference = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        // Set theme based on the above logic
        const initialTheme = savedTheme || systemPreference;
        setTheme(initialTheme);
        document.body.dataset.theme = initialTheme;
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme); // Save new theme preference
        document.body.dataset.theme = newTheme;
    };

    return (
        <Router>
            <div className="App">
                <Navbar toggleTheme={toggleTheme} />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/software" element={<Software />} />
                        <Route path="/embedded" element={<Embedded />} />
                        <Route path="/ai" element={<AI />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
