import './App.css';
import myHeadShot from './assets/HeadShot.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={myHeadShot} alt="Head shot of Luis David Garcia."/>
        <p>
          Luis David Garcia's Resume.
        </p>
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
  );
}

export default App;
