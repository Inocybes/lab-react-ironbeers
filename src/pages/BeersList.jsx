import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function BeersList() {
  const [beers, setBeers] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    getBeers();
  }, []);

  const getBeers = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers");
      setBeers(response.data);
      setFetching(false);
    } catch (err) {
      return "Try again";
    }
  };

  if (fetching) {
    return (
      <div>Loading!!!</div>
    );
  }

  return (
    <div>
      <Header />
      <h2>Beers List</h2>
      {beers.map((eachBeer) => {
        return (
          <div>
            <div>
              <img src={eachBeer.image_url} alt="beer" width="50px" />
            </div>
            <div>
              <Link to={`/beers/${eachBeer._id}`}>
                <p>{eachBeer.name}</p>
              </Link>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BeersList;