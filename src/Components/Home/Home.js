import React, { useEffect, useState } from "react";
import Clubs from "../Clubs/Clubs";
import "./Home.css";
import titleBanner from "../../images/SOCCER.png";

const Home = () => {
  const [clubs, setClubs] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setClubs(data.teams))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="home-main-div">
      <img className="titleBanner" src={titleBanner} alt="" />
      <div className="wraper">
        {clubs.map((data) => (
          <Clubs clubData={data}></Clubs>
        ))}
      </div>
      <footer className="homeFooter">
        <p>Copyright&#169; 2021-2022 || All Rights Reserverd to Nur E Allhi</p>
      </footer>
    </div>
  );
};

export default Home;
