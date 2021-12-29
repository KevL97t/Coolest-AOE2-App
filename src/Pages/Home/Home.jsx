import React from "react";
import "./Home.css";
import { useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MainMenu from "../../Components/MainMenu/MainMenu";
import PokedexButton from "../../Components/PokedexButton/PokedexButton";
import PoweredBy from "../../Components/PoweredBy/PoweredBy";


const Home = () => {
  return (
    <div className="home-main-container">
      <div>
        <MainMenu />
      </div>
      <div>
        <PokedexButton />
      </div>
        <header className="header-container">
            <h1>Your personal</h1>
            <img className="pokedex-logo" src="https://ianars.github.io/Pok-dex/images/pokedeex.png" alt="pokedex-logo" />
        </header>
        <div>
            <SearchBar />
        </div>
        <PoweredBy />
    </div>
  );
};

export default Home;
