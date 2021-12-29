import React from "react";
import "./TeamPreview.css";
import { useSelector } from "react-redux";
import TeamItem from "../TeamItem/TeamItem";

const TeamPreview = ({ setTeamState }) => {
  //REDUX
  const { team } = useSelector((state) => state);

  const handleCloseTeamPreview = () => {
    setTeamState((teamState) => !teamState);
  };

  return (
    <div className="team-preview-main-container">
      <div className="team-main-container">
        <h1 className="team-title">Your <span>team</span></h1>
        <div className="team-pokemons-container">
          {team.team.length > 0 
            ?
            team.team.map((item) => (
              <TeamItem
                icon={item.icon}
                name={item.name}
                quantity={item.quantity}
                id={item.id}
              />
            ))
            :
            <p className="nothing-message">Whoops! there's nothing around here yet :c </p>
        }
        </div>
        <button onClick={handleCloseTeamPreview} className="team__close-button">
          Back to search
        </button>
      </div>
    </div>
  );
};

export default TeamPreview;
