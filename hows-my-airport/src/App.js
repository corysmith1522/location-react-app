import React from "react";
import { Link, Route } from "react-router-dom";
import Airports from "./components/Airports";
import Create from "./components/Create";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <nav>
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/airports" className="link">
          Airports{" "}
          <span
            role="img"
            aria-label="jsx-a11y/accessible-emoji"
            className="emoji"
          >
            ✈️
          </span>
        </Link>
        <Link to="/create" className="link">
          Add My Airport{" "}
          <span
            role="img"
            aria-label="jsx-a11y/accessible-emoji"
            className="emoji"
          >
            🛩
          </span>
        </Link>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/airports">
        <Airports />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <footer>
        <h4>
          Information courtesy of{" "}
          <a href="https://www.bts.gov/" className="footer-link">
            Bureau of Transportation Statistics
          </a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
