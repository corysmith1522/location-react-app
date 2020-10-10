import React from "react";
import { Link, Route } from "react-router-dom";
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
        <Link to="/">Home</Link>
        <Link to="/airports">Airports</Link>
        <Link to="/create">Add My Airport</Link>
      </nav>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
