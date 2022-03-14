import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function DetailsBeer() {
  const [beersDetails, setBeerDetails] = useState(null);
  const [fetching, setFetching] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getBeerDetails();
  }, []);

  const getBeerDetails = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    setBeerDetails(response.data);
    setFetching(false);
  };

  if (fetching) {
    return (
      <div>...Loading</div>
    );
  }

  return (
    <div>
      <Header />
      <h3>DetailsBeer</h3>
      <img src={beersDetails.image_url} width={"100px"}/>
      <h4>{beersDetails.name}</h4>
      <p>Tagline:{beersDetails.tagline}</p>
      <p>First Brewed:{beersDetails.first_brewed}</p>
      <p>Attenuation:{beersDetails.attenuation_level}</p>
      <p>Description: {beersDetails.description}</p>
      <p>Details: {beersDetails.contributed_by}</p>
    </div>
  );
}
export default DetailsBeer