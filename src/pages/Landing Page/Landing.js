import { Link } from "react-router-dom";
import React from "react";
import "./Landing.css";

// import assets
import logo from "../../assets/logo.png";
import Group from "../../assets/Group.png";
import Frame from "../../assets/Frame.png";

function Landing() {
  return (
    <section className="landing-section">
      <img src={logo} alt="logo" className="logo-img" />
      <img src={Group} alt="groupIMG" className="group-img" />
      <img src={Frame} alt="frameIMG" className="frame-img" />
      <div className="landing-btn-container">
        <Link to="/createInfo">
          <button className="add-btn">ჩანაწერების დამატება</button>
        </Link>
        <Link to="/list">
          <button className="list-btn">ჩანაწერების სია</button>
        </Link>
      </div>
    </section>
  );
}

export default Landing;
