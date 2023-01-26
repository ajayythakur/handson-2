<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Learn React
        </a>
      </header>
=======
import "./App.css";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";

function App() {
  return (
    <div className="container">
      <h1>Higher Order Function</h1>
      <ClickCounter />
      <HoverCounter />

    <article>In this App, the main logic(for increasing counter) is kept separated in a Component. <br/></article>
>>>>>>> ef8c346cdb7b1e496f1cc091068433a9413ea7ce
    </div>
  );
}

export default App;
