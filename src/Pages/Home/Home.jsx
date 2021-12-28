import React from "react";
import "./Home.css";
import { useEffect } from "react";
import SearchBar from "../../Components/SearchBar/SearchBar";


const Home = () => {
  return (
    <div className="home-main-container">
        <header>
            <h1>Welcome to your personal POKEDEX</h1>
        </header>
        <div>
            <SearchBar />
        </div>
    </div>
  );
};

export default Home;
