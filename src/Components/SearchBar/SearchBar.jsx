import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./SearchBar.css";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import { useSelector, useDispatch } from "react-redux";
import { setPoketype } from "../../redux/actions/poketypeActions";

const SearchBar = () => {
  //STATES
  const [searchValue, setSearchValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  //REDUX
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value.toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchValue}`
      );

      if (!res.ok) {
        let err = new Error("Fetch request error");
        err.status = res.status || "00";
        err.statusText = res.statusText || "An error occurred";
        throw err;
      }
      const parsed = await res.json();
      setData(parsed);
    } catch (err) {
      console.error(err);
      window.alert("Whooops! the pokemon name doesn't appear to exist");
      setError(true);
    } finally {
      setLoading(false);
      // if(data){
      //     let actualPayload = data.types[0].type.name;
      //     dispatch(setPoketype(actualPayload))
      // }
    }
  };

  console.log(data);
  if (data) {
    let actualPayload = data.types[0].type.name;
    dispatch(setPoketype(actualPayload));
  }

  return (
    <div className="searchbar-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-box"
          placeholder="Charmander"
          type="text"
          onChange={handleChange}
        />
        <input className="search-button" type="submit" value="GO!" />
      </form>
      {loading && <Loader />}
      {error && <Error />}
      {data && error === false && (
        <PokemonCard
          name={data.name}
          types={data.types}
          icon={data.sprites.other.home.front_default}
          id={data.id}
        />
      )}
    </div>
  );
};

export default SearchBar;
