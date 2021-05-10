import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import male from "../../images/male.png";
import female from "../../images/female.png";
import facebook from "../../images/socialMedia/Facebook.png";
import website from "../../images/socialMedia/football (1) 1.png";
import youtube from "../../images/socialMedia/YouTube.png";
import titleBanner from "../../images/SOCCER.png";
import "./ClubDetails.css";

const ClubDetails = () => {
  const { clubId } = useParams();
  const [details, setDetails] = useState({});
  const {
    strLeague,
    intFormedYear,
    strCountry,
    strGender,
    strFacebook,
    strWebsite,
    strYoutube,
  } = details;
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(data.teams[0]))
      .catch((error) => console.log(error));
  }, [clubId]);
  //   const gender = { strGender } ===  male;
  let gender = { strGender };
  if ((gender = male)) {
    gender = <img className="malefemaleImg" src={male} alt="" />;
  } else {
    gender = <img src={female} alt="" />;
  }
  return (
    <div className="detailsContainer">
      <div>
        <img className="titleBanner" src={titleBanner} alt="" />
      </div>
      <div className="clubDetails">
        <div>
          <h2>{strLeague}</h2>
          <h4>
            <small>Founded on:</small> {intFormedYear}
          </h4>
          <h4>
            <small>Country:</small> {strCountry}
          </h4>
          <h4>
            <small>Sports type:</small> Football
          </h4>
          <h4>
            <small>Gender:</small> {strGender}
          </h4>
        </div>
        <div>{gender}</div>
      </div>
      <p className="clubHistory">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
        dolorum? Magnam inventore ipsam sapiente ipsum. Quos, dolorem? Ut beatae
        quisquam eum voluptatum tempore. Voluptas ipsam nesciunt facilis enim
        corporis dolor, amet molestias labore sapiente, eveniet ullam facere
        corrupti animi! Architecto modi dicta expedita ab id, provident est illo
        nesciunt animi a tempora, quaerat ex necessitatibus molestiae officia
        dolorum, atque mollitia quisquam? Nihil ipsa voluptate voluptatum, velit
        rem eos nulla sunt deleniti autem error aperiam, libero dolor quidem
        magni numquam! Dicta maxime quibusdam animi nobis natus tempore minus.
        Facilis, assumenda? Doloremque eligendi repellendus porro modi animi
        dicta, at aliquam sunt, expedita accusantium neque impedit eius itaque
        nam rerum. Quasi eos iure, dolores cumque earum tenetur minus libero
        laudantium eaque, dignissimos corporis obcaecati! Quam expedita
        molestiae temporibus pariatur perferendis, aspernatur sit. Pariatur rem
        deleniti harum architecto nemo est laboriosam nam neque a deserunt velit
        voluptas debitis ad, corporis sed perferendis, soluta provident! Earum
        quod consequatur dicta, dolorem culpa esse repellendus maxime inventore
        impedit, ducimus voluptates quisquam quae at ipsum illum cum sed
        accusantium non velit. Sequi perspiciatis ipsum, asperiores odit magnam
        soluta nihil alias dolores aliquam ducimus necessitatibus explicabo
        accusantium magni facilis facere iusto, ullam, fuga labore beatae fugit.
        Provident, necessitatibus soluta. Tempore alias blanditiis iusto porro
        aperiam non! Voluptates autem illum itaque quidem aliquam, praesentium
        distinctio omnis ad id culpa cumque. Debitis, maxime tempora.
        Voluptatibus, natus! Eos ullam quaerat dignissimos harum excepturi
        fugiat. Ipsa modi omnis optio reiciendis impedit odio, consectetur
        facere iusto nobis, inventore nesciunt, repellendus debitis ipsum. Modi
        odit impedit debitis aliquam tenetur fugiat reprehenderit aliquid
        dignissimos qui laboriosam, iure saepe dolorem tempora quis neque
        doloribus labore, sunt laudantium beatae soluta quam. Suscipit
        praesentium, nemo dolorum corporis quae eos cumque debitis reiciendis
        natus ipsa laborum repellat explicabo adipisci vero, facilis fugit rem
        fugiat hic? Placeat iste provident voluptatibus, labore porro nemo
        veniam fuga minima nesciunt eveniet debitis nam molestias dolorum quasi
        laboriosam necessitatibus. Non excepturi dolorum necessitatibus dolorem
        atque vel deserunt beatae nam perspiciatis, magni doloremque ut
        praesentium tenetur aspernatur, tempore pariatur consectetur eius quas
        odio eveniet reiciendis enim reprehenderit. Sint quas iste fugit
        inventore, laboriosam maiores, odit quasi animi corporis perspiciatis,
        unde quidem expedita voluptatem non numquam iure sunt doloribus quis
        culpa facere minus. Modi ipsam esse repellendus dolor eos illum, aliquam
        sed explicabo reprehenderit a aspernatur nostrum praesentium fugit
        minima culpa tempora voluptatem pariatur voluptatibus eius id nemo
        porro! Tenetur, a! Est sint culpa debitis pariatur fuga.
      </p>
      <footer className="footerpart">
        <a href={`https://${strFacebook}`} rel="noreferrer" target="_blank">
          <img className="socialMedia" src={facebook} alt="" />
        </a>
        <a href={`https://${strWebsite}`} rel="noreferrer" target="_blank">
          <img className="socialMedia" src={website} alt="" />
        </a>
        <a href={`https://${strYoutube}`} rel="noreferrer" target="_blank">
          <img className="socialMedia" src={youtube} alt="" />
        </a>
      </footer>
    </div>
  );
};

export default ClubDetails;
