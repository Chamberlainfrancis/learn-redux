import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Learn Redux Toolkit</h1>

      <div className="nav">
        <NavLink to="/counter">Goto Counter Demo</NavLink>
        <NavLink to="/todo">Goto Todo Demo</NavLink>
      </div>
    </div>
  );
}

export default Home;
