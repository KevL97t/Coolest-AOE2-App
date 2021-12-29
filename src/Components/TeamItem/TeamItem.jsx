import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromTeam } from "../../redux/actions/poketypeActions";
import "./TeamItem.css";

const TeamItem = ({ name, icon, quantity, id }) => {
  //REDUX
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleRemoveFromTeam = () => {
    let payload = id;
    dispatch(removeFromTeam(payload));
  };

  return (
    <div className="team-item-main-container">
      <div className="quantity-container">{quantity}</div>
      <img className="team-pokemon-icon" src={icon} alt="pokemon-icon" />
      <p className="team-pokemon-name">{name}</p>
      <button onClick={handleRemoveFromTeam} className="team-remove-button">
        Remove
      </button>
    </div>
  );
};

export default TeamItem;
