import React from "react";
import Search from "./Search";
import PlayerCard from "./Card";

const Main = () => (
  <div>
    <nav className="level navbar is-info">
      <h1 className="level-item has-text-centered is-size-1">NBA Interview</h1>
    </nav>
    <div className="container">
      <div className="level">  
        <Search />
      </div>
      <PlayerCard />
    </div>
  </div>
)

export default Main;

