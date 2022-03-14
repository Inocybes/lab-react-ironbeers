import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirstBrewed] = useState("");
  const [brewers_tips, setBrewersTips] = useState("");
  const [attenuation_level, setAattenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
    navigate("/beers");
    } catch (error) {
      navigate("error")
    }
    

    
  };

  return (
    <div>
      <Header />
      <h2>NEW BEER</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" value={name}        
        onChange={(e) => setName(e.target.value)}
        ></input>
        
        <br />

        <label htmlFor="tagline">Tagline: </label>
        <input type="text" name="tagline" value={tagline}        
        onChange={(e) => setTagline(e.target.value)}></input>
        <br />

        <label htmlFor="description">Description: </label>
        <input type="text" name="description" value={description}
        onChange={(e) => setDescription(e.target.value)}></input>
        <br />

        <label htmlFor="first_brewed">First Brewed: </label>
        <input type="text" name="first_brewed" value={first_brewed}
          onChange={(e) => setFirstBrewed(e.target.value)}></input>
        <br />

        <label htmlFor="brewers_tips">Brewers Tips: </label>
        <input type="text" name="brewers_tips" value={brewers_tips}
          onChange={(e) => setBrewersTips(e.target.value)}></input>
        <br />

        <label htmlFor="attenuation_level">Attenuation Level: </label>
        <input
          type="number"
          name="attenuation_level"
          value={attenuation_level}
          onChange={(e) => setAattenuationLevel(e.target.value)}
        ></input>
        <br />

        <label htmlFor="contributed_by">Contributed By: </label>
        <input type="text" name="contributed_by" value={contributed_by}
          onChange={(e) => setContributedBy(e.target.value)}></input>
        <br />

        <button>Add Beer</button>
      </form>
    </div>
  );
}

export default NewBeer;