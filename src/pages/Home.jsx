import React from "react";
import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import newBeer from "../assets/new-beer.png";
import randomBeer from "../assets/random-beer.png";

function Home() {
  return (
    <div>
      <div>
        <img src={beers} alt="beer" />
        <br />
        <Link to="/beers">All Beers</Link>
      </div>
      <br />
      <div>
        <img src={randomBeer} alt="random-beer" />
        <br />
        <Link to="/random-beer">Random Beer</Link>
      </div>
      <br />

      <div>
        <img src={newBeer} alt="new-beer" />
        <br />
        <Link to="/new-beer">Add Beer</Link>
      </div>
    </div>
  );
}

export default Home;