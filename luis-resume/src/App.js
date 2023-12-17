import React from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Home from './pages/Home';
import Software from './pages/Software';
import Embedded from './pages/Embedded';
import AI from './pages/AI';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/software" element={<Software />} />
                    <Route path="/embedded" element={<Embedded />} />
                    <Route path="/ai" element={<AI />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
