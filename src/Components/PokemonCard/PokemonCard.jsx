import React from "react";
import "./PokemonCard.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToTeam } from "../../redux/actions/poketypeActions";

const PokemonCard = ({ name, types, icon, id }) => {
  //REDUX
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToTeam = () => {
    let payload = { name, icon, id };
    dispatch(addToTeam(payload));
    window.alert("This pokemon is now in your team!");
  };

  let bgColor = 'transparent';

  return (
    <article
      style={{ backgroundColor: bgColor }}
      className="pokemoncard-main-container"
    >
      <figure className="icon-container">
        <img src={icon} alt="pokemon-icon" />
      </figure>
      <figcaption className="pokemon-name">{name}</figcaption>
      <h5 className="types-title">Types: </h5>
      {types &&
        types.map((item) => (
          <p key={id * Math.random() * 1000} className="types">
            {item.type.name}
          </p>
        ))}
      <button onClick={handleAddToTeam} className="add-button">
        Add to my team
      </button>
    </article>
  );
};

export default PokemonCard;
