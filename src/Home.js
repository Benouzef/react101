import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello World with SkillValue!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Let me show you my Movies library!</p>
        <Link className="App-link" to="./Movies">
            SkillValue Movies DataBase
        </Link>
      </header>
    </div>
  );
}

export default Home;
