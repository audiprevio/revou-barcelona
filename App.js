  import logo from './logo.svg';
  import './App.css';
  import NavBar from './components/NavBar';
  import Intro from './components/Intro';
  import DividedSections from './components/DividedSections';

  function App() {
    return (
      <div className="App">
        <NavBar />
        <Intro />
        <DividedSections />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Now
          </a>
        </header>
      </div>
    );
  }

  export default App;
