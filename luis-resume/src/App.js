import React from 'react';
import './App.css';
import myHeadShot from './assets/images/HeadShot.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Software from './pages/Software';
import Embedded from './pages/Embedded';
import AI from './pages/AI';
import Navbar from './components/common/Navbar'; // Assuming you have a Navbar component

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/software" component={Software} />
                    <Route path="/embedded" component={Embedded} />
                    <Route path="/ai" component={AI} />
                </Switch>
                <header className="App-header">
                    <img src={myHeadShot} alt="Head shot of Luis David Garcia." />
                    <p>Luis David Garcia's Resume.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </Router>
    );
}

export default App;
