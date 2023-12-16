import myHeadShot from '../assets/images/HeadShot.png';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <img src={myHeadShot} alt="Head shot of Luis David Garcia." />
            <p>Luis David Garcia's Resume.</p>
        </div>
    );
}

export default Home;
