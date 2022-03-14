import React from "react";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RandomBeer() {
  const [beersRandom, setBeerRandom] = useState(null);
  const [fetching, setFetching] = useState(true);

  const navigate = useNavigate()

  useEffect(() => {
    getBeerRandom();
  }, []);

  const getBeerRandom = async () => {
    try {
      const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers/random"
      );
      setBeerRandom(response.data);
      setFetching(false);
      
    } catch (error) {
      navigate("error")
    }
  };

  if (fetching) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <Header />
      <h2>RandomBeer</h2>
      <img src={beersRandom.image_url} alt="image" width="100px" />
      <h4>{beersRandom.name}</h4>
      <p>{beersRandom.tagline}</p>
      <p>{beersRandom.first_brewed}</p>
      <p>{beersRandom.attenuation_level}</p>
      <p>Description: {beersRandom.description}</p>
      <p>Random: {beersRandom.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
