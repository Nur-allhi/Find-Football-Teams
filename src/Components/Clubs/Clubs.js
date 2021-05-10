import { Button } from "react-bootstrap";
import React from "react";
import "./Clubs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Clubs = (props) => {
  const { strTeamBadge, strAlternate, strLeague, idTeam } = props.clubData;
  return (
    <div className="clubs">
      <img className="teamBadge" src={strTeamBadge} alt="" />
      <h5>{strAlternate}</h5>
      <p>{strLeague}</p>
      <Link to={`/details/${idTeam}`}>
        <Button variant="danger">
          Explore <FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </Link>
    </div>
  );
};

export default Clubs;
