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
          Airports
        </Link>
        <Link to="/create" className="link">
          Add My Airport
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
    </div>
  );
}

export default App;
